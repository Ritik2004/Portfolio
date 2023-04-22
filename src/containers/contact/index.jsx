import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import PageHeaderContent from '../../components/pageHeaderContent'
import {Animate} from 'react-simple-animate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles.scss";
const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kx0zybo', 'template_27b8uwr', form.current, '6a6QZAPkUMhDYRj2T')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
const diffToast = () => {
  toast.success("Message Sent!!", {
    position:"top-center",
    autoClose: 2000

  })
}
  return (
    
       <section id="contact" className='contact'>

     <PageHeaderContent
      headerText = "Contact"
      />
      <div className="contact__content">
      <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
            >
            <h3 className="contact__content__header-text">Let's Talk</h3>
            </Animate>      
            <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
            >
             <form ref={form} onSubmit={sendEmail}>
              <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="user_name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="user_email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="user_description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button onClick={diffToast}>Submit</button>
            <ToastContainer />
          </div>
          </form>
            </Animate>
      </div>
      </section>
    
  )
}

export default Contact
