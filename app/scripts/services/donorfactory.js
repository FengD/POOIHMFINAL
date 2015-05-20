'use strict';

angular.module('pooIhmExemplesApp')
	.factory('Donor', ['$http', function($http){
		var obj = {
			get: function(successCB, fallCB, donorId){
				$http.get('http://localhost:3000/api/Donors/'+donorId)
					.success(function(Result){
						if(Result.status === 'success') {
         						var donor = Result.data;

							successCB(donor);
        					}
					})
					.error(function(error){
						fallCB(error);
					});
				},

			delete: function(donorId){
				$http.delete('http://localhost:3000/api/Donors/' + donorId)
					.success(function(){
						// alert('delete success');
					})
					.error(function(){
						// alert('delete error');
					}); 
				},

			put: function(donorId, data){
				$http.put('http://localhost:3000/api/Donors/' + donorId, data)
					.success(function(data){
						// alert('put success');
						console.log(data.data);
					})
					.error(function(){
						// alert('put error');
					}); 
				},

			post: function(data){
				data.current_money = 0;
				$http.post('http://localhost:3000/api/Donors', data)
					.success(function(){
						 alert('post success');
					})
					.error(function(){
						 alert('post error');
					}); 
				},

			all: function(successCB, fallCB){
				$http.get('http://localhost:3000/api/Donors/')
					.success(function(Result){
						if(Result.status === 'success') {
         						var donors = Result.data;

							successCB(donors);
        					}
					})
					.error(function(error){
						fallCB(error);
					});
				}			
		};
		return obj;
}]);