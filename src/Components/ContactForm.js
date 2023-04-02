import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function ContactForm(props) {
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
                firstName: Yup.string().required(""),
                lastName: Yup.string().required(""),
                email: Yup.string().email("Invalid Email Address").required(""),
                message: Yup.string().required(""),
              })
        }
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
            {({ isSubmitting }) => (
        <Form>
            <div className="contactForm">

            <form className='formContents'>

            <div className='formClose'><FontAwesomeIcon icon={faClose} onClick={props.closeForm} size='3x'/></div>


            <section id="contactForm">
            <label htmlFor='firstName'>First Name*</label>
            <Field type="text" name="firstName" style={{fontFamily: 'Gopher'}} placeholder='First Name . . .' />
            <ErrorMessage name='firstName' />
            </section>


            <section id="contactForm">
            <label htmlFor='lastName'>Last Name*</label>
            <Field type="text" name="lastName" style={{fontFamily: 'Gopher'}} placeholder='Last Name . . .' />
            <ErrorMessage name='lastName' />
            </section>


            <section id="contactForm">
            <label htmlFor="email">Email Address*</label>
            <Field type="email" name="email" style={{fontFamily: 'Gopher'}} placeholder='Enter Your Email . . .' />
            <ErrorMessage name="email" />
            </section>


            <section id="messageForm">
            <label htmlFor="message">Message*</label>
            <Field as="textarea" name="message" style={{ width: '25rem', height: '10rem', flexGrow: '1', textAlign: 'left', fontFamily: 'Gopher' }} placeholder='What Would You Like To Let Us Know?' />
            <ErrorMessage name="message" />
            </section>

            <section id="contactForm">
            <button className='navButton' type="submit" disabled={isSubmitting}>
            Send
            </button>
            </section>


            </form>


            </div>
        </Form>
        )}
        </Formik>
        </>
    )
}
export default ContactForm;