#!/bin/bash

set -e

echo 'ello govner'

rm -rf out

tsc

node out/index.js
