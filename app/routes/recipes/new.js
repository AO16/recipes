import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		return {
			recipe: Ember.Object.create(),
			ingredients: Ember.ArrayProxy.create({
				content: []
			})
		};
	},


	setupController: function(controller, model) {
		controller.setProperties(model);
	}

});
