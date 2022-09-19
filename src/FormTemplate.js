import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMsg = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_9mzepsd",
        "template_gfp4du1",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMsg.innerHTML = "<p class='success'> Message envoyé ! </p>";
        },
        (error) => {
          console.log(error.text);
          formMsg.innerHTML =
            "<p class='error'> Erreur, veuillez réessayer</p>";
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required autoComplete="off" />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Message</label>
        <textarea name="message" required autoComplete="off" />
        <input type="submit" value="Send" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default FormTemplate;
