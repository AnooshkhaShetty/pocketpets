#!/usr/bin bash

find . -print | xargs -L 1 file | grep binary