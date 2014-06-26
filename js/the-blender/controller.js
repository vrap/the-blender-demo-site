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
    	console.log(success);
    });

    $scope.register = function(isValid, reload){

            $scope.noValid = false;

            if(isValid){
                
                


            }else{
                $scope.noValid = true;
                $scope.errorMessage = 'The form is incomplete';
            }
            
        }

}])