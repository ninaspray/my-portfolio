function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    if (name.length < 5) {
        text = "Please Enter Valid Name"
        error_message.textContent = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email"
        error_message.textContent = text;
        return false;
    }

    if (message.length <= 140) {
        text = "Please Enter More than 140 Characters"
        error_message.textContent = text;
        return false;
    }
    alert("Form Submitted Successfully!")
    return true;

}
