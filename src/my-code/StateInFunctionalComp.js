import React from "react";
import { useState } from "react";
export default function StateInFunctionalComp() {
  // =====================state Code======================

  // =====================================================
  const [data, setData] = useState("Pranav");
  function updateData() {
    setData("Devkar");
    console.warn("clicked");
  }
  // const updateData = () => {
  //     setData('hh')
  // }
  return (
    <div>
      <h1>State In Functional Componant</h1>
      <h3>{data}</h3>
      {/* To store data we use State. State is used to rerendering data */}
      <button onClick={updateData} type="button" className="btn btn-secondary">
        Update Data
      </button>
    </div>
  );
}
