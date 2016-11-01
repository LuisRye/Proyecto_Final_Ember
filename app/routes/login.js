import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),	
	session: Ember.inject.service('session'),

	actions:{
		doLogin: function(username, password){

			this.get('session').authenticate('authenticator:oauth2', username, password).catch(()=>{
				debugger
			}).then(()=>{
				this.transitionTo('home');
			})
		}

	}	

});
