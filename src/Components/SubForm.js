import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SubForm() {
    return(
        <>
        {/* Email Submission Form */}
        <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid Email Address")
            .required(""),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="footerForm">
            <label htmlFor="email">Subscribe To The CAPRI Catalogue For Occasional Updates From Us.</label>
            <section id="footerForm">
            <Field type="email" name="email" style={{fontFamily: 'Gopher'}} placeholder='Enter Your Email . . .'/>
            <ErrorMessage name="email" />
            <button className='footerButton' type="submit" disabled={isSubmitting}>
              Keep In Touch
            </button>
            </section>
            </div>
          </Form>
        )}
      </Formik>
        </>
    )
}

export default SubForm;