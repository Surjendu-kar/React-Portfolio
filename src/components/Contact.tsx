import imageOverlay from "../img/earth.jpg";
import { useEffect, useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    // Check if all fields are filled when formState changes
    const allFieldsFilled = Object.values(formState).every(
      (field) => field.trim() !== ""
    );
    setFormValid(allFieldsFilled);
  }, [formState]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValid) {
      alert("Please fill in all fields.");
      return;
    }

    // Prepare form data for submission
    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });

    fetch("https://formspree.io/f/rahulkar9988@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          // Reset form or any other action on successful submission
        } else {
          response.json().then((data) => {
            if (data.errors) {
              // Handle errors
            }
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(" + imageOverlay + ")" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    <div>
                      <form onSubmit={handleSubmit} className="contactForm">
                        <div id="sendmessage">
                          Your message has been sent. Thank you!
                        </div>
                        <div id="errormessage"></div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                onChange={handleInputChange}
                                value={formState.email}
                                data-rule="email"
                                data-msg="Please enter a valid email"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>

                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                onChange={handleInputChange}
                                value={formState.subject}
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows={5}
                                placeholder="Message"
                                onChange={handleInputChange}
                                value={formState.message}
                                data-rule="required"
                                data-msg="Please write something for us"
                              ></textarea>

                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                              disabled={!formValid}
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the from and send me an email.
                      </p>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="https://github.com/Dev-Surjendu"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-github"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/surjendu-kar"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-linkedin"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">@Surjendu kar</div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
