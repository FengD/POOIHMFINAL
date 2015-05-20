'use strict';

angular.module('pooIhmExemplesApp')
    .controller('ProjectCtrl', ['$scope', '$routeParams', 'Project', 'Commit', 'Donor', function($scope, $routeParams, Project, Commit, Donor){
        $scope.id = $routeParams.id;
        Project.get(function(project){
            $scope.projectSearch = project;
            $scope.needMoney = project.target_money - project.current_money;
        },
        function(error){
            console.log(error);
        },
        $scope.id);

        function updateProject(project){
            Project.put(project.id, project);
        }

        var allCommits = [];
        function getAllCommits() {
            Commit.all(function(commits){
                angular.forEach(commits, function(commit){
                    if(angular.equals(commit.MyprojectId, parseInt($scope.id))){
                        allCommits.push(commit);
                    }
                        
                });
                $scope.commits = allCommits;
            },
            function(error){
                console.log(error);
            });
        }
        getAllCommits();
        

        $scope.deleteCommit = function(commit){
            if(commit.id !== ''){
                Commit.delete(commit.id);
            }
            getAllCommits();
            window.location.reload();
            
        };

        $scope.postCommit = function(data){
            data.MyprojectId = $scope.id;
            Commit.post(data);
            getAllCommits();
            window.location.reload();
        };

        $scope.resetCommit = function(){  
            $scope.commit = {
                contain:'',
                from:''};  
        };

        var allDonors = [];

        function getAllDonors() {
            Donor.all(function(donors){
                angular.forEach(donors, function(donor){
                    if(angular.equals(donor.MyprojectId, parseInt($scope.id))){
                        allDonors.push(donor);
                    }
                        
                });
                $scope.donors = allDonors;
            },
            function(error){
                console.log(error);
            });
        }
        getAllDonors();
        

        $scope.deleteDonor = function(donor){
            if(donor.id !== ''){
                Donor.delete(donor.id);
            }
            window.location.reload();
            // getAllDonors();
        };

        $scope.postDonor = function(data){
            data.MyprojectId = $scope.id;
            if($scope.projectSearch.current_money === null){
                $scope.projectSearch.current_money = parseInt(data.donate_money);
            } else {
                $scope.projectSearch.current_money = parseInt(data.donate_money) + $scope.projectSearch.current_money;
            }
            updateProject($scope.projectSearch);
            Donor.post(data);
            getAllDonors();
        };

        $scope.resetDonor = function(){  
            $scope.donor = {
                name:'',
                surname:'',
                email:'',
                donate_money:''
            };  
        };     

}]);
