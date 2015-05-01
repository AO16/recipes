import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		return this.store.createRecord('recipe');
	},


	actions: {

		willTransition: function(transition) {
			this.controller.get('model').rollback();
		}

	}

});
