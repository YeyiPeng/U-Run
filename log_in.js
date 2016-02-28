function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if (username == "admin1" && password == "123456") {
			
	} else if (username == "admin2" && password == "123456") {

	} else if (username == "admin3" && password == "123456") {
		window.location.href = "contacts-sponsor.html";
	} else {
		alert("Wrong username or password!");
	}
	
}