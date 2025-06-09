import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

const Barcode = ({ id }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, id.toString().padStart(5, "0"), {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 80,
        displayValue: true,
      });
    }
  }, [id]);

  return <svg ref={svgRef} />;
};

export default Barcode;
