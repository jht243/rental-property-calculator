import { useEffect } from "react";

export default function MortgageHelloWorld() {
  useEffect(() => {
    console.log("Mortgage Hello World widget mounted");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
        fontSize: "24px",
        fontWeight: 600,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      hello world
    </div>
  );
}
