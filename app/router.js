import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path: '/login'});
  this.route('home');
  this.route('registrar');
  this.route('registrar-evento');
  this.route('listaEventos');
  this.route('verEvento', {path: '/verEvento/:evento_id'});
});

export default Router;
