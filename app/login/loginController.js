app.controller("loginController", function($scope, $location) {

	$scope.userDetails = {};
	$scope.userDetails.name = "admin";
	$scope.userDetails.password = "admin";

	$scope.authenticateUser = authenticateUser;

	function authenticateUser() {
		if ($scope.userDetails.name == "") {
			alert("Enter name");
		} else if ($scope.userDetails.password == "") {
			alert("Enter Password");
		} else if ($scope.userDetails.name == "admin" && $scope.userDetails.password == "admin") {
			$location.path("/dashboard");
		} else {
			alert("User name or password incorrect");
			$scope.userDetails.name = "";
			$scope.userDetails.password = "";
		}
	}
});