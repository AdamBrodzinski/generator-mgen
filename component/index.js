var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function constr() {
    generators.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
    this.ext = this.config.get('componentExtension') || '.jsx';
    //this.log(this.config.getAll());
    //this.log(this.arguments);
    this.log('Creating component files...\n');
  },

  getPaths: function getPaths() {
    this.nameLower = this.name.toLowerCase();
    this.rootPath = 'components/';
    this.destPath = this.rootPath + this.nameLower + '/' + this.name + this.ext;
  },

  getComponent: function getComponent() {
    if (this.config.get('env') === 'meteor') {
      this.compPath = 'comp_mt.js';
    } else if (this.config.get('env') === 'react-native') {
      this.compPath = 'comp_rn.js';
    } else {
      this.compPath = 'comp.js';
    }
  },

  writeFile: function writeFile() {
    this.fs.copyTpl(
      this.templatePath(this.compPath),
      this.destinationPath(this.destPath),
      { name: this.name }
    );
  },
});
