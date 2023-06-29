
# 0x00-ES6_basics

Modern JavaScript Basics 


## Setup

Install NodeJS 12.11.x
(in your home directory):

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```linux
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
### Install Jest, Babel, and ESLint
Configuration files
Add the files below to your project directory

package.json
Add these to your project 

```bash
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

```

babel.config.js
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

```
.eslintrc.js

```bash

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

## Finally…
Don’t forget to run ``` npm install ``` from the terminal of your project folder to install all necessary project dependencies.
## Authors

[@selemandaffy](https://www.github.com/daffix)

![GitHub followers](https://img.shields.io/github/followers/DaffiX)

![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UC0TUPSakz3GnB4nmbN0RXKw)
## License
Disclaimer:

Please note that the content provided in this repository may be subject to change, and it is the responsibility of the ALX SE Program students to ensure they are using the most up-to-date materials provided by ALX Africa.

For more information about the ALX Africa programs, please visit their official website at [ALX Africa](https://www.alxafrica.com/)

