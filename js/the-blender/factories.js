angular.module('blenderFactory', [])

.factory('ConfigService', [function(){

	return {
		uri : {
			community : 'http://community.the-blender.io'
		}
		
	}

}])

.factory('ApiService', ['$http', '$q', 'ConfigService', function($http, $q, ConfigService){

	 return {
	 	recipe : {},
	 	infos : {
	 		get : function(){

	 			var defered = $q.defer();

		 		return $http.get(
		 			ConfigService.uri.community + '/infos',
		 			{
		 				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		 			}
		 		)
		 		.success(function(response){
                    defered.resolve(response);
                })
                .error(function(response){
                    defered.fail(response);
                });

                return defered.promise;

		 	}
	 	}
	 }
	 	

}])