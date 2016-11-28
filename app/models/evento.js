import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  ubicacion: DS.attr('string'),
  fecha: DS.attr('string'),
  usuario: DS.belongsTo('usuario'), 
  maxInvitados: DS.attr('number'),
  counter: DS.attr('number'),

  disp: Ember.computed('maxInvitados', 'counter', function(){
  	return this.get('maxInvitados') - this.get('counter');
  })
});
