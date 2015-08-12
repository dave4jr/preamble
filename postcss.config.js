module.exports = {
  "use": ["cssnext", "postcss-url"],
  "input": "css/main.css",
  "output": "assets/main.css",
  "cssnext": {
    url: false
  },
  "postcss-url": {
    url: function(URL) { return "{{ \'" + URL + "\' | asset_url }}" }
  }
}
