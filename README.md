# Dash Tooltip

[![Build Status](https://travis-ci.org/samaritanministries/dash-tooltip.js.svg?branch=master)](https://travis-ci.org/samaritanministries/dash-tooltip.js)
[![Dash-Modal Version](https://img.shields.io/badge/Version-0.0.1-yellowgreen.svg)]()

This is the tooltip for the Dash platform. It provides some predefined defaults for tooltipster jquery plugin to match the Dash platform's styling and usecases. Play around the sample app for examples.

## Installation

Dash Toolltip is delivered as a [bower](bower.io) component.

1. Install bower
  ```bash
  npm install -g bower
  ```

  >Note: Bower requires node, npm and git.

2. Create a `bower.json` file
  ```bash
  bower init
  ```

3. Install the dash-tooltip.js bower component and save it to your `bower.json` file
  ```bash
  bower install dash-tooltip.js --save
  ```

## Usage

For more documentation, visit our [documentation site](http://developers.samaritanministries.org/developers/dash-tooltip.js/)


## Project Setup

### Dependencies

* install node/npm
* npm install
* bower install

### Running the Tests

For a single run of the tests:
`npm test`

To run the tests with a watcher:
`npm run karma`

### Running the Demo

1. `npm run webpack`
2. Open `app/index.html`

## Releasing a New Version

1. Update [the changelog](CHANGELOG.md)
2. Commit your changes
3. Run `./bower_deploy.sh`

## License

[MIT License](LICENSE.md)
