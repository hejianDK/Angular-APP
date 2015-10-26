/**
 * Created by DK on 10/19/2015.
 */
var home = angular.module('home', ['ui.bootstrap','factory', 'ngAnimate']);
home.controller('homeCtrl', function($scope, $uibModal, factoryTest) {

factoryTest.getData.query().$promise.then(function(data){
	$scope.buddies = data;
	console.log(data);
},function(error){
	console.log(error);
});

    $scope.removeRow = function(name) {


        var index = -1;
        var Arr = eval($scope.buddies);
        for (var i = 0; i < Arr.length; i++) {
            if (Arr[i].usrname === name) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            alert("Something gone wrong");
        }

        if (confirm("Are you sure?")) {
            $scope.buddies.splice(index, 1);
        }
    };


    $scope.animationsEnabled = true;

    $scope.open = function(size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'partials/add.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                buddies: function() {
                    return $scope.buddies;
                }
            }
        });


        $scope.toggleAnimation = function() {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
}
    // })
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
home.controller('ModalInstanceCtrl', function($scope, $modalInstance, buddies) {
    $scope.buddies = buddies;

    $scope.submit = function() {
        $scope.buddies.push($scope.newBuddy);
        $scope.newBuddy = '';

        $modalInstance.close();

    }

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
})
