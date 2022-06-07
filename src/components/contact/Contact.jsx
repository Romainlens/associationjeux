import "./contact.css";
import emailjs from "emailjs-com";
import React from "react";

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

  emailjs.sendForm('gmail', 'template_d7c6xgj', e.target, 'cUCZrh2rchoBTThHJ')
    .then( response => {
      console.log("SUCCES", response);
    }, error => {
      console.log("FAILED", error);
    });
    e.target.reset()
  }
  
  return (
    <>
      <div className="formulaire">
        <h1>Formulaire de contact</h1>
        <form onSubmit={sendEmail}>
          <label>Nom</label>
          <input type="text" id="fname" name="name" placeholder="Name"></input>

          <label >Sujet</label>
          <input type="text" id="sujet" name="subject" placeholder="Subject"></input>

          <label >Email</label>
          <input id="emailAddress" type="email" name="email" placeholder="email"></input>

          <label >Message</label>
          <textarea placeholder="Your message" name="message" ></textarea>

          <input type="submit" value="Envoyer"></input>
        </form>
      </div>
    </>
  );
}
