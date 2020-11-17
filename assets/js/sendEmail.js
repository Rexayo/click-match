function sendMail(contact) {
  emailjs
    .send("gmail", "Colour Match", {
      from_email: contact.emailaddress.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );

  document.getElementById("email-modal").value = "Thank you!";
  document.getElementById("email-footer").value = "Thank you!";

  setTimeout(function () {
    document.getElementById("email-modal").value = "";
    document.getElementById("email-footer").value = "";
  }, 2000);

  return false;
}
