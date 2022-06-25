#!/bin/bash

set -eo pipefail

ENVIRONMENT=$1
ENV_FILE=./environments/${ENVIRONMENT}.env

if [ -f "${ENV_FILE}" ]; then
    ./node_modules/.bin/env-cmd -f ${ENV_FILE} npm run build
else
    echo "${ENVIRONMENT} is invalid, no configuration exists in environments directory."
    echo "${ENV_FILE} does not exist."
    exit 1
fi