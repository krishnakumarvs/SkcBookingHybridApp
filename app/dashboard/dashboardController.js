app.controller("dashboardController", function($scope, $location) {
	$scope.gotoBookingsPage = gotoBookingsPage;

	function gotoBookingsPage() {
		$location.path("/addNewOrder");
	}

});