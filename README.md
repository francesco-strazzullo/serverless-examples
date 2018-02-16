# serverless-examples

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/francesco-strazzullo/serverless-examples.svg?branch=master)](https://travis-ci.org/francesco-strazzullo/serverless-examples)

An example configuration of a node REST Api deployed on AWS with Serverless and a Frontend Application published on gh-pages.

[Live Demo](https://francesco-strazzullo.github.io/serverless-examples/)

## Setup

Add this data on travis-ci configuration

    AWS_SECRET_ACCESS_KEY
    AWS_ACCESS_KEY_ID
    GITHUB_TOKEN

## Start

To start the frontend application

    npm start

To start the node server

    npm run server

To deploy to gh pages and aws

    npm run deploy

To Run tests 

    npm test