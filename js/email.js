//send mail
const contactForm = document.forms[0];
function sendMail() {
  let name = document.getElementById("client_name").value,
    phone = document.getElementById("client_number").value,
    message = document.getElementById("client_msg").value;
  if (name === "" || phone === "" || message === "") {
    return;
  }
  const params = {
    from_name: name,
    client_phone: phone,
    client_message: message,
  };

  //loading
  let paragraph = document.createElement("p"),
    submitBtn = contactForm.querySelector("button[type=submit]");
  submitBtn.style.display = "none";
  paragraph.textContent = "برجاء الانتظار...";
  contactForm.appendChild(paragraph);

  emailjs
    .send("service_8kwjvz9", "template_gijdm8e", params)
    .then(function (res) {
      submitBtn.style.display = "block";
      document.forms[0].reset();
      paragraph.textContent = "تم الارسال";
      paragraph.style.cssText = `
      color :#7a6b6b;
      background-color :  hsl(131deg 66% 59%);
      `;

      setTimeout(() => {
        paragraph.remove();
      }, 2000);
    });
}

// SENT MESSAGE FUNCTIONS

contactForm.onsubmit = (e) => {
  e.preventDefault();
  const name = document.querySelector('input[type="text"]'),
    phone = document.querySelector('input[type="number"]'),
    message = document.querySelector("textarea");

  if (name.value === "" || phone.value === "" || message.value === "") {
    ering("لا تترك حقول فارغه");
  } else {
    sendMail();
  }
};
