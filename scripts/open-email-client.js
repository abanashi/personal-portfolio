// script to open email client on device
function openEmailClient() {
  // Get form inputs
  var subjectInput = document.getElementById("subject").value;
  var messageInput = document.getElementById("message").value;

  // Construct the mailto link
  var mailtoLink =
    "mailto:website-alias@example.com" +
    "?subject=" +
    encodeURIComponent(subjectInput) +
    "&body=" +
    encodeURIComponent(messageInput);

  // Open the default email client
  window.location.href = mailtoLink;
}
