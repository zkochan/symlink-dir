#!/usr/bin/env node
import linkDir = require('.')

const args = process.argv.slice(2)

linkDir(args[0], args[1])
