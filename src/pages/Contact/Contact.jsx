import "./Contact.css";
import contactImg from "./contact.jpg";
import { useState } from "react";
import ContactSubmission from "./ContactSubmission";
export default function Contact() {
  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };
  const [contactForm, setContactForm] = useState(initState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  function firstNameChangeHandle(event) {
    setContactForm({ ...contactForm, firstName: event.target.value });
  }

  function lastNamechangeHandle(event) {
    setContactForm({ ...contactForm, lastName: event.target.value });
  }
  function emailChangeHandle(event) {
    setContactForm({ ...contactForm, email: event.target.value });
  }
  function subjectChangeHandle(event) {
    setContactForm({ ...contactForm, subject: event.target.value });
  }
  function messageChangeHandle(event) {
    setContactForm({ ...contactForm, message: event.target.value });
  }
  function submit(e) {
    e.preventDefault();
    setContactForm(initState);
    setIsSubmitted(!isSubmitted);
  }
  function handleIsSubmitted() {
    setIsSubmitted(!isSubmitted);
  }
  return (
    <div className="contact-us">
      {isSubmitted && <ContactSubmission onClick={handleIsSubmitted} />}
      <h1>Contact us</h1>
      <h5>
       Your message will be review in 48 hours maxiumum , Feel free to contact me
      </h5>
      <div className="img-form">
        <img className="img-contact" src={contactImg} alt="" />
        <form class="form-contact" action="" onSubmit={submit}>
          <input
            value={contactForm.firstName}
            type="text"
            placeholder="First Name"
            onChange={firstNameChangeHandle}
          />
          <input
            value={contactForm.lastName}
            type="text"
            placeholder="Last Name"
            onChange={lastNamechangeHandle}
          />
          <input
            value={contactForm.email}
            type="email"
            placeholder="Email"
            onChange={emailChangeHandle}
          />
          <input
            value={contactForm.subject}
            type="text"
            placeholder="Subject"
            onChange={subjectChangeHandle}
          />
          <textarea
            value={contactForm.message}
            name=""
            id=""
            placeholder="Message..."
            onChange={messageChangeHandle}
          ></textarea>
          <div>
            {/* <Button width={"large"} name="Submit"></Button> */}
            <button className="button" type="submit" style={{width : "300px"}}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
