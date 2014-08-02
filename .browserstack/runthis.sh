#!/bin/bash
echo "{\"username\":\"`echo $BS_USER`\", \"password\":\"`echo $BS_PASSWORD`\", \"privateKey\": \"`echo $BS_KEY`\", \"apiKey\":\"`echo $BS_KEY`\"}" >> ~/.browserstack/browserstack.json
