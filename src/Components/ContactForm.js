import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function ContactForm(props) {
    const formRef = React.useRef(null);

    React.useEffect(() => {
      const form = formRef.current;
      form.addEventListener("submit", handleSubmit);

      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    },);

    function handleSubmit(e) {
      e.preventDefault();
      const data = new FormData(e.target);
      const action = e.target.action;
      fetch(action, {
        method: "POST",
        body: data,
      }).then(() => {
        alert("Success! We Have Received Your Message And Will Get Back To You Shortly.");
      });
      props.closeForm();
    }

    return(
        <>
        <Formik
        initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            message: "" }}
        validationSchema={
            Yup.object({
                firstName: Yup.string().matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces').min(1, "Please Fill Out This Field").max(100).required("Please Fill Out This Field"),
                lastName: Yup.string().matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces').min(1, "Please Fill Out This Field").max(100).required("Please Fill Out This Field"),
                email: Yup.string().matches(/([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})$/, "Invalid Email").min(3, "Please Complete This Field").max(100).email("Invalid Email Address").required("Please Fill Out This Field"),
                message: Yup.string().min(10, "Messages Must Be At Least 10 Characters").max(750, "Please Shorten Your Message").required("Please Fill Out This Field"),
              })
        }
        >
            {({ errors, isValid, dirty }) => (
        <Form ref={formRef} className='contactForm'
        action="https://script.google.com/macros/s/AKfycbyCArEL1T5IRmV7JMAGxuG1VBIP-HZDrFps7FO4yl9vcvRQTOw9K0Ae0RaYFRj_XVAV/exec" method="post" id="my-form">
            <div className="formContents">



            <div className='formClose'><FontAwesomeIcon data-tooltip-id='close' data-tooltip-content="Close Form" icon={faClose} onClick={props.closeForm} size='2x'/></div>
            <ReactTooltip id="close" />

            <section id="contactForm">
            <label htmlFor='firstName'>First Name*</label>
            <Field type="text" name="firstName" style={{fontFamily: 'Gopher'}} placeholder='First Name' />
            <ErrorMessage name='firstName' />
            </section>


            <section id="contactForm">
            <label htmlFor='lastName'>Last Name*</label>
            <Field type="text" name="lastName" style={{fontFamily: 'Gopher'}} placeholder='Last Name' />
            <ErrorMessage name='lastName' />
            </section>


            <section id="contactForm">
            <label htmlFor="email">Email Address*</label>
            <Field type="email" name="email" style={{fontFamily: 'Gopher'}} placeholder='Enter Your Email' />
            <ErrorMessage name="email" />
            </section>


            <section id="messageForm">
            <label htmlFor="message">Message*</label>
            <Field as="textarea" name="message" id="messageForm" style={{ height: '10rem', flexGrow: '1', resize: 'none', textAlign: 'left', fontFamily: 'Gopher' }} placeholder='What Would You Like To Let Us Know?' />
            <ErrorMessage name="message" />
            </section>

            <section id="contactForm">
            {dirty && (
            <input className='formButton' type="submit" value='Send' style={{paddingBottom: '2.5rem',paddingTop:'1rem'}} disabled={isValid === false || Object.keys(errors).length > 0} />)}
            </section>





            </div>
        </Form>
        )}
        </Formik>
        </>
    )
}
export default ContactForm;