var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    alert("From-" + document.getElementById("from").value + ", Email = " + document.getElementById("email").value +
        ", Subject = " + document.getElementById("subject").value + ", Message = " + document.getElementById("message").value);
});

