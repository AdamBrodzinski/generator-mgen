var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function constr() {
    generators.Base.apply(this, arguments);
  },

  createConfig: function createConfig() {
    if (this.option('init')) {
      this.config.defaults({
        view: 'react',
        components: 'app',
        componentExtension: '.js',
      });
      this.config.save();
      this.log('.yo-rc file created');
    }
  },
});
