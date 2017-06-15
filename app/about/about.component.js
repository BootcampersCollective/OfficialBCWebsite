const about = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {};

	},
	template: `<div>About</div>`
};

angular.module('bc-site.about')
	.component('about', about);

about.$inject = [];