function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if either the username or password is empty
    if (username === "" || password === "") {
        alert("Both username and password must be filled out.");
        return false; // Prevent form submission
    }

    // If validation passes, redirect to the success page
    window.location.href = "success.html";
    return false; // Prevent default form submission
}
