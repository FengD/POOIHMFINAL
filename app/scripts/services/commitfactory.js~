'use strict';

angular.module('pooIhmExemplesApp')
	.factory('Commit', ['$http', function($http){
		var obj = {
			get: function(successCB, fallCB, commitId){
				$http.get('http://localhost:3000/api/Commits/'+commitId)
					.success(function(Result){
						if(Result.status === 'success') {
         						var commit = Result.data;

							successCB(commit);
        					}
					})
					.error(function(error){
						fallCB(error);
					});
				},

			delete: function(commitId){
				$http.delete('http://localhost:3000/api/Commits/' + commitId)
					.success(function(){
						// alert('delete success');
					})
					.error(function(){
						// alert('delete error');
					}); 
				},

			put: function(commitId, data){
				$http.put('http://localhost:3000/api/Commits/' + commitId, data)
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
				$http.post('http://localhost:3000/api/Commits', data)
					.success(function(){
						// alert('post success');
					})
					.error(function(){
						// alert('post error');
					}); 
				},

			all: function(successCB, fallCB){
				$http.get('http://localhost:3000/api/Commits/')
					.success(function(Result){
						if(Result.status === 'success') {
         						var commits = Result.data;
							successCB(commits);
        				}
					})
					.error(function(error){
						fallCB(error);
					});
				}			
		};
		return obj;
}]);
