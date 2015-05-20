'use strict';

angular.module('pooIhmExemplesApp')
    .controller('ProjectsCtrl', ['$scope', 'Project', function($scope, Project){
        Project.all(function(project){
            $scope.projects = project;
        });

        $scope.delete = function(project){
            if(project.id !== ''){
                Project.delete(project.id);
            }
        };

        $scope.post = function(data){
            Project.post(data);
        };

        $scope.put = function(project){
            Project.put(project.id, project);
        };
        $scope.get = function(project){
            Project.get(project.id);
        };
        $scope.reset = function(){  
            $scope.project = {
                name:'',
                date:'',
                from:'',
                Tel:'',
                address:'',
                target_money:'',
                description:''};  
        };
        
}]);
