function sendMail(contact) {
  emailjs
    .send("gmail", "Click Match!", {
      from_email: contact.emailaddress.value,
    })
    .then(
      function (response) {
        $("#thankYouModal").modal();
      },
      function (error) {
        $("#oopsModal").modal();
      }
    );

  setTimeout(function () {
    document.getElementById("email-modal").value = "";
    document.getElementById("email-footer").value = "";
  }, 2000);

  return false;
}
