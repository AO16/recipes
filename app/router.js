import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('recipes', { path: '/' }, function() {
    this.route('index', { path: '/' });
    this.route('new');
    this.route('show', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
  });
});
