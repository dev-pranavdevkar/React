import React from "react";

export default function PropsWithFunctionalComp(prop) {
  console.log(prop);
  return (
    <div>
      <h1>Props WIth Functional Componant{(name = "Pranav")}</h1>
    </div>
  );
}
