# WIP... Use at your own risk
# Shopify Starter
An opinionated boilerplate theme for complex Shopify themes.

## Installation
1. Clone the repo  
`$ git clone https://github.com/sdn90/shopify-starter`

2. Install the dependencies  
`npm install`

3. Watch your CSS/JS files for changes  
`npm run watch`

## Usage

### CSS
Write your CSS in `/css/main.css` and it will be outputted to `/assets/main.min.css`

##### Basscss
[Basscss](https://github.com/basscss/basscss) is included by default. Basscss takes a utility class approach which in end keeps the amount of CSS you have to write very minimal.

##### Don't want to use Basscss?
Remove `@import 'basscss'` from `/css/main.css`.

### Javascript
Write your Javascript in `/js/main.js` and it will be outputted to `/assets/bundle.main.js`.

For a separate vendor Javascript file, edit `webpack.config.js` and add each module name to the `vendor` array.

**Example**

```javascript
...
entry: {
	app: './js/app.js',
	vendor: ['jquery', 'lodash', 'react']
},
...

```

Javascript is transpiled using Babel so ES2015 is supported out the box. Create `.babelrc` or edit `webpack.config.js` to customize Babel.

