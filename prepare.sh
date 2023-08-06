#!/bin/bash

if [[ "$OSTYPE" == *"darwin"* ]]; then
    # TODO: To add validation that we have brew
    brew install flex
else
    echo "Currently only OSX"
fi
