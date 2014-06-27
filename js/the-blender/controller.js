angular.module('blenderController', [])

.controller('homeController', ['$scope', function($scope){
	$scope.pageClass = 'page-home';
}])

.controller('docController', ['$scope', '$routeParams', function($scope, $routeParams){

	$scope.pageClass = 'page-doc';
	var language = $routeParams.language;
	$scope.template = $routeParams.template;
	$scope.doc = 'documentation/user/' + $scope.template + '_' + language.toUpperCase() + '.md';


}])

.controller('aboutController', ['$scope', function($scope){

	$scope.pageClass = 'page-about';

}])

.controller('communityController', ['$scope', 'ApiService', function($scope, ApiService){

	$scope.pageClass = 'page-community';
	 // Set Resource for recipes.
    ApiService.infos.get().then(function(success){
        $scope.nbRecipes = 861;//success.data.stats.recipes;
        $scope.nbUsers = 316;//success.data.stats.users;
        $scope.nbIngredients = 58;
    });

    $scope.register = function(isValid){
            $scope.noValid = false;
            $scope.valid = false;

            if(isValid){
                if($scope.user.password != $scope.user.confPassword) {
                    $scope.noValid = true;
                    $scope.errorMessage = 'Password and confirmation do not match.';
                    return;
                }

                ApiService.users.register({
                    username: $scope.user.username,
                    email: $scope.user.email,
                    password: $scope.user.password
                })
                .then(function(result) {
                    if(200 !== result.status) {
                        $scope.noValid = true;
                        $scope.errorMessage = 'An error occurred during registration.';
                        return;
                    }

                    $scope.valid = true;
                    $scope.successMessage = 'Welcome to the community!';
                }, function () {
                    $scope.noValid = true;
                    $scope.errorMessage = 'An error occurred during registration.';
                })

            }else{
                $scope.noValid = true;
                $scope.errorMessage = 'The form is incorrect.';
            }
        }
}]);
