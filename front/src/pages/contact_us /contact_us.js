import React from 'react';
import Header from "../../components/header/header";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

function ContactUs(props)
{
    return (
      <>
      <Header/>
      <Form product_id={props.product_id} product_price={props.product_price}/>
      <Footer />
      </>
    );
}
export default ContactUs;