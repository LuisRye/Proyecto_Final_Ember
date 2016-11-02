import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  nombre: DS.attr('string'),
  password: DS.attr('password'),
  eventos: DS.hasMany('evento')
});
