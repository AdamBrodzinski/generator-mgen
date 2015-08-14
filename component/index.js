var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function constr() {
    generators.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
    //this.log(this.config.getAll());
    //this.log(this.arguments);
    this.log('Creating component files...\n');
  },

  getPaths: function getPaths() {
    this.nameLower = this.name.toLowerCase();
    this.rootPath = 'components/';
    this.destPath = this.rootPath + this.nameLower + '/';
  },

  getComponent: function getComponent() {
    if (this.config.get('env') === 'meteor') {
      this.comp = 'comp_mt.js';
    } else if (this.config.get('env') === 'react-native') {
      this.comp = 'comp_rn.js';
    } else {
      this.comp = 'comp.js';
    }
  },

  writeComponent: function writeComponent() {
    var ext = this.config.get('componentExtension') || '.jsx';
    var compPath = this.destPath + this.name + ext;

    this.fs.copyTpl(
      this.templatePath(this.comp),
      this.destinationPath(compPath),
      { name: this.name }
    );
  },

  writeStyle: function writeStyle() {
    var ext = '.css';
    var stylePath = this.destPath + this.name + ext;

    this.fs.copyTpl(
      this.templatePath('comp.scss'),
      this.destinationPath(stylePath),
      { name: this.name }
    );
  },
});
