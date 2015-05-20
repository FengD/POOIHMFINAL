'use strict';

angular.module('pooIhmExemplesApp')
	.factory('Project', ['$http', function($http){
		var obj = {
			get: function(successCB, fallCB, projectId){
				$http.get('http://localhost:3000/api/Myprojects/'+projectId)
					.success(function(Result){
						if(Result.status === 'success') {
         						var project = Result.data;

							successCB(project);
        					}
					})
					.error(function(error){
						fallCB(error);
					});
				},

			delete: function(projectId){
				$http.delete('http://localhost:3000/api/Myprojects/' + projectId)
					.success(function(){
						// alert('delete success');
					})
					.error(function(){
						// alert('delete error');
					}); 
				},

			put: function(projectId, data){
				$http.put('http://localhost:3000/api/Myprojects/' + projectId, data)
					.success(function(data){
						// alert('put success');
						// console.log(data.data);
					})
					.error(function(){
						// alert('put error');
					}); 
				},

			post: function(data){
				data.current_money = 0;
				$http.post('http://localhost:3000/api/Myprojects', data)
					.success(function(){
						 alert('post success');
					})
					.error(function(){
						 alert('post error');
					}); 
				},

			all: function(successCB, fallCB){
				$http.get('http://localhost:3000/api/Myprojects/')
					.success(function(Result){
						if(Result.status === 'success') {
         						var projects = Result.data;

							successCB(projects);
        					}
					})
					.error(function(error){
						fallCB(error);
					});
				}			
		};
		return obj;
}]);