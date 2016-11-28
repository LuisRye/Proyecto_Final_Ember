import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	session: Ember.inject.service(),

	actions: {
		unir: function (){
			this.get('ajax').post('unir', {data:{ id_evento: this.get('currentModel.id') }}).then((response)=>{
				this.store.pushPayload('evento', response);	
			});
		}

	},
	model(params){
      		return this.store.find('evento', params.evento_id);
		}
});