# Meteor Yo Generator

Generate app files for the meteor-webpack-react setup

- [ ] init new project
- [X] component with style & test
- [ ] page component (w acceptance test)
- [ ] collection
- [ ] publication
- [ ] meteor method
- [ ] new route
- [ ] unit tests
- [ ] integration tests
- [ ] acceptance tests


### Config file  `.yo-rc.json`

```javascript
{
  "generator-mgen": {
    "view": "react",          // default
    "env": "react-native",    // react-native, meteor, react 
    "appPath": "app",         // path where app root is (src, app, .)
    "styleExtension": ".css",   // .scss, .css, .less, etc...
    "componentExtension": ".js"  // .jsx or .js
  }
}
```
