from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Importing deps for image prediction
import numpy as np
import cv2
import tensorflow as tf

from tensorflow import keras

from keras.layers import Dense, Dropout, BatchNormalization
from keras.optimizers import Adamax
from keras import regularizers
from keras.models import Model


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5000"}})


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
model.load_weights('./model/cats-83.27.h5')


@app.route("/")
def home():
    return {"message": "Hello from backend"}


@app.route("/upload", methods=['POST'])
def upload():
    print("yooooo")
    file = request.files['file']
    file.save('./uploads/' + file.name)

    # Load the image to predict
    img_path = f"./uploads/{file.name}"
    img = cv2.imread(img_path)
    # iz the image to (200, 200)
    img = cv2.resize(img, (200, 200))

    # Add the third dimension for the color channels
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    # img_path = 'pocketpets\PocketPets\backend\cats-83.27.h5'
    img = np.expand_dims(img, axis=0)
    prediction = model.predict(img)

    # Make the prediction
    if os.path.exists(f"./uploads/{file.filename}"):
        os.remove(f"uploads/{file.filename}")

    return jsonify({"message": prediction})


if __name__ == '__main__':
    app.run(debug=True)
