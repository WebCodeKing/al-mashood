import React from "react";

const MapEmbed = () => {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56183.36725529034!2d73.03040647457476!3d33.66274236454744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20No.4%2C%201st%20Floor%2C%20AL-Rayan%20Plaza%20Police%20Foundation%2C%20Islamabad!5e0!3m2!1sen!2s!4v1740655528810!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
