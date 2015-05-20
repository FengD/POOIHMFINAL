'use strict';

angular.module('pooIhmExemplesApp')
    .controller('CreateProjectCtrl', ['$scope', 'Project', function($scope, Project){
        function getAllProjects() {
            Project.all(function(project){
                $scope.projects = project;
            },
            function(error){
                console.log(error);
            });
        }

        getAllProjects();
        

        $scope.delete = function(project){
            if(project.id !== ''){
                Project.delete(project.id);
            }
        };

        $scope.post = function(data){
            Project.post(data);
            getAllProjects();
        };

        $scope.put = function(project){
            Project.put(project.id, project);
        };
        $scope.get = function(id){
            Project.get(function(project){
                $scope.projectSearch = project;
            },
            function(error){
                console.log(error);
            },
            id);
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
