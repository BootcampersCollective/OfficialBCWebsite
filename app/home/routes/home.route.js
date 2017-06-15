function homeRoute ($stateProvider) {
	$stateProvider
		.state({
			name: 'home',
			url: '',
			component: 'home'
		});
}

angular.module('bc-site.home')
.config(homeRoute);

homeRoute.$inject = ['$stateProvider'];