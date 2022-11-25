import React from "react";
import Footer from "../../Components/Footer";

import Header from "../../Components/Header";
const ContactPage = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CCUfIKD6gB"
          width="1110px"
          height="322px"
          frameborder="0"
          allowfullscreen="true"
          style={{ position: "relative", borderRadius: "14px" }}
        ></iframe>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ContactPage;
