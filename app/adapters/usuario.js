import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://4cf36b67.ngrok.io/',
  namespace 'usuario/create'
  // Application specific overrides go here
});