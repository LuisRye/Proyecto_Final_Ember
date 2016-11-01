import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

	ajax: Ember.inject.service(),
	session: Ember.inject.service('session'),

	// beforeModel(){
	// 	if(this.get('session.isAuthenticated')){
	// 		console.log('ìsAuthenticated: true')
	// 	}else{
	// 		this.transitionTo('login');
	// 		console.log('ìsAuthenticated: false')		
	// 	}
	// },
});
