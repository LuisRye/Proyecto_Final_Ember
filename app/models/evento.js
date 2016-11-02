import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  ubicacion: DS.attr('string'),
  fecha: DS.attr('date'),
  usuario: DS.belongsTo('usuario')
});
