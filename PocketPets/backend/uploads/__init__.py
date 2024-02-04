
from tensorflow import keras
from tensorflow.keras.layers import Dense, Dropout, BatchNormalization
from tensorflow.keras.models import Model
from tensorflow.keras import regularizers
from tensorflow.keras.optimizers import Adamax
import tensorflow as tf
import cv2
import os

from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Importing deps for image prediction
import numpy as np


def make_model(img_size, lr, mod_num=3):
    img_shape = (img_size[0], img_size[1], 3)
    base_model = tf.keras.applications.efficientnet.EfficientNetB3(
        include_top=False, weights="imagenet", input_shape=img_shape, pooling='max')

    base_model.trainable = True
    x = base_model.output
    x = BatchNormalization(axis=-1, momentum=0.99, epsilon=0.001)(x)
    x = Dense(256, kernel_regularizer=regularizers.l2(l=0.016), activity_regularizer=regularizers.l1(0.006),
              bias_regularizer=regularizers.l1(0.006), activation='relu')(x)
    x = Dropout(rate=.4, seed=123)(x)
    output = Dense(class_count, activation='softmax')(x)
    return Model(inputs=base_model.input, outputs=output)


img_size = (200, 200)
lr = 0.001
class_count = 15
model = make_model(img_size, lr)
model.compile(Adamax(learning_rate=lr),
              loss='categorical_crossentropy', metrics=['accuracy'])
model.load_weights('./cats-83.27.h5')


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5000"}})


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route("/")
    def home():
        return {"message": "Hello from backend"}

    @app.route("/upload", methods=['POST'])
    def upload():
        file = request.files['file']
        file.save('./uploads/' + file.filename)

        # Load the image to predict
        img_path = f"./uploads/{file.filename}"
        # img_path = 'pocketpets\PocketPets\backend\cats-83.27.h5'
        img = cv2.imread(img_path)
        # iz the image to (200, 200)
        img = cv2.resize(img, (200, 200))

        # Add the third dimension for the color channels
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = np.expand_dims(img, axis=0)
        prediction = model.predict(img)

        # Make the prediction

        classes = ['Abyssinian', 'American Bobtail', 'American Shorthair', 'Bengal', 'Birman', 'Bombay', 'British Shorthair',
                   'Egyptian Mau', 'Maine Coon', 'Persian', 'Ragdoll', 'Russian Blue', 'Siamese', 'Sphynx', 'Tuxedo']
        pred = np.argmax(prediction)

        if os.path.exists(f"./uploads/{file.filename}"):
            os.remove(f"uploads/{file.filename}")

        return jsonify({"message": classes[pred]})

    return app


print("Ahhhhhhh")

if __name__ == '__main__':
    app.run(debug=True)
