import Head from "next/head";
import React from "react";

export default function Contact() {
  return (
    <>
      <Head>
        <title>NINJA LIST | CONTACT US</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <h1 className="contact-heading">CONTACT PAGE</h1>
      <form className="contact-form">
        <input type="text" placeholder="Enter email address" />
        <input type="text" placeholder="Enter contact number" />
        <textarea placeholder="Enter message here" />
        <button>Send</button>
      </form>
    </>
  );
}
