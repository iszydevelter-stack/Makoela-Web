const form = document.getElementById("interestForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Bedankt! Dit formulier is momenteel nog een eerste visuele versie.");
    form.reset();
  });
}
