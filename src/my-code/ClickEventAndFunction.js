import React from "react";

export default function ClickEventAndFunction() {
  function DemoCLick() {
    alert("DemoClick called Successfully");
  }
  return (
    <div>
      <div>
        <h1>Click Event And Functions</h1>
        {/* Do not use function like this If you called like that it will called without click onClick={DemoCLick()} */}
        <button onClick={DemoCLick} type="button" class="btn btn-primary">
          Click Function
        </button>
        <button
          onClick={() => alert("Hello")}
          type="button"
          class="btn btn-primary"
        >
          call alert using Arrow function
        </button>

        {/* If you want to call DemoCLick() like this use arrow Functions */}
        <button
          onClick={() => DemoCLick()}
          type="button"
          class="btn btn-primary"
        >
          call Function using Arrow function
        </button>
      </div>
    </div>
  );
}
