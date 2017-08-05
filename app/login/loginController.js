
app.controller("loginController", function ($scope , $location) {
    console.log("Login page is opened.... ")
    $scope.name = "admin";
	$scope.password = "admin";
    $scope.validation = validation;
	function validation() {
		var name = $scope.name;
    	var password = $scope.password;

    if (name == "admin"&& password == "admin") 
	{
		console.log("ok");
		$location.path("/dashboard");
    }else 
	if(name=="")
	{
    alert("Enter name");
    return false;  
	}else
	if(password =="")
	{
    alert("Enter Password");
    return false;
  	}
	}

});
