import React, { useState } from "react";
import "./mailer.css";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";

const Mailer = () => {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (regex.test(email)) {
      // console.log(name,email,message)
      emailjs
        .sendForm(
          "service_66b7b6h",
          "template_o54zshb",
          e.target,
          "hRNKszpJ1EIVRd2ai"
        )
        .then((res) => {
          console.log(res);
          setSuccess(!success);
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => console.log(err));
      // emailjs.sendForm("serviceID","templateID","e.target","publicKey")
    } else {
      alert("Please enter a valid email address");
    }
  };
  return (
    <div className=" container-custom mt-3 text-center ">
      {success
        ? (alert("Email is Ssuccessfully send"), setSuccess(false))
        : null}

      <form onSubmit={sendEmail} className=" pe-5 ps-5 pt-4 pb-3 form-custom ">
        <h1 className="text-center text-bg-warning rounded heading-custom">
          Contact Form
        </h1>
        <div className="form-group mt-2">
          <label>Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter your name "
            value={name}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your Email"
            value={email}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label>Send a message to my email</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id=""
            cols="30"
            rows="10"
            className="form-control"
            placeholder="Enter your message here"
            value={message}
            required
          >
            {" "}
          </textarea>
        </div>
        <div className="form-group mt-2">
          <input
            type="submit"
            className="form-control btn btn-primary"
            value="Send Email"
          />
        </div>
      </form>
    </div>
  );
};

export default Mailer;
