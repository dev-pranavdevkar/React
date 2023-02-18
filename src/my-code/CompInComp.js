import React from "react";

export default function CompInComp() {
  function Chiild() {
    return (
      <div>
        <h1>This is Child Componant</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>This is parant Componant</h1>
      {/* It s hard to call chield componant to outside of paraent componant */}
      <Chiild />
    </div>
  );
}
