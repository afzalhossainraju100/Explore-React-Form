import React from "react";
import Cousin from "./cousin";

const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <Cousin key="rafsan" name="Rafsan"></Cousin>
        <Cousin key="rafsa" name="Rafsa"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
