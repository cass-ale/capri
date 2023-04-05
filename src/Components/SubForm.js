import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SubForm(props) {
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
      alert("Success! You Have Been Subscribed To The CAPRI Media Newsletter!");
    });
    props.formSubmit();
  }

  return(
        <>
        {/* Email Submission Form */}
        <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .min(3, "Please Complete This Field").max(100)
            .email("Invalid Email Address")
            .required(""),
        })}
      >
        {({ errors, isValid, dirty }) => (
          <Form>
            <form
            ref={formRef}
            id="my-form"
            method="POST"
            action='https://script.google.com/macros/s/AKfycbzk5ZRFP_slo22CZe5lTIvKEWMBj9TMBWp3dLaJL2GjcBqkoAkYLahqtasxLhPRmOq7/exec'>
            <div className="footerForm">
            <label htmlFor="email">Subscribe To The CAPRI Catalogue For Occasional Updates From Us.</label>
            <section id="footerForm">
            <Field type="email" name="email" style={{fontFamily: 'Lato'}} placeholder='Enter Your Email . . .'/>
            <ErrorMessage name="email" />
            {dirty && (
            <button className='footerButton' type="submit" disabled={isValid === false || Object.keys(errors).length > 0}>
              Keep In Touch
            </button>
            )}
            </section>
            </div>
            </form>
          </Form>
        )}
      </Formik>
        </>
    )
}

export default SubForm;