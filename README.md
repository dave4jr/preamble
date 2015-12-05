![Preamble](http://i.imgur.com/txdVpFn.png)

[![Dependency Status](https://david-dm.org/sdn90/preamble.svg)](https://david-dm.org/sdn90/preamble)
[![devDependency Status](https://david-dm.org/sdn90/preamble/dev-status.svg)](https://david-dm.org/sdn90/preamble#info=devDependencies)

# Preamble

* Bring your own CSS preprocessor
* Bring your own Javascript and CSS frameworks
* npm run scripts. No task runner included.

## What's included?

* Babel
* PostCSS
* Webpack

### Preamble Libraries

##### preamble-utils
A modular utility library for manipulating JSON data from Liquid e.g. `{{ product | json }}`

##### preamble-ajax
A Promise based Shopify AJAX API client library

**Note:** These libraries are installed by default as a convenience. There is no code that relies on these libraries. If you prefer to use a different library such as Shopify's jQuery wrapper, you can safely remove the `import` statements from `js/main.js` and `package.json` with no side effects.

## Installation
1. Clone the repo  
`$ git clone https://github.com/sdn90/preamble`

2. Install the dependencies  
`$ cd preamble && npm install`

3. Watch your CSS/JS files for changes   
`$ npm run watch`

## How to use
In depth guides coming soon...

## Liquid in Javascript and CSS
Liquid in Javascript and CSS is **currently NOT supported**. If Liquid is a hard requirement for your project, you should create a separate file in the `/assets` directory and include it in your theme so it doesn't get processed by the build tools.

You should **avoid using Liquid in Javascript** as a whole as it generally makes it harder to test. You should store Liquid objects as a global/window variable in your Liquid files then reference that variable in your Javascript.

```liquid
{% comment %}
/templates/product.liquid

Place before your Javascript is loaded.
{% endcomment %}

<script>
var __PRODUCT__ = {{ product | json }};

// You can now reference __PRODUCT__ in your Javascript files 
</script>
```

## License
The MIT License (MIT)

Copyright (c) 2015 Steven Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.