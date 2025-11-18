import React from "react";
import { createRoot } from "react-dom/client";

import RentalPropertyHelloWorld from "./component";

const container = document.getElementById("rental-property-calculator-root");

if (!container) {
  throw new Error("rental-property-calculator-root element not found");
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RentalPropertyHelloWorld />
  </React.StrictMode>
);
