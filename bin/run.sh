#!/bin/bash

set -e

rm -rf out

tsc

node out/index.js
