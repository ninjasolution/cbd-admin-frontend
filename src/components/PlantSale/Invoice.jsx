import React from "react";
import Form from "./../common/Form/Form";
import PaymentOption from "./PaymentOption";
import SalePageDisclaimer from "./SalePageDisclaimer";

function Invoice() {
  return (
    <div>
      <hr />
      <div className="flex flex-col md:flex-row">
        {/* <div className="w-full md:w-6/12 md:border-r mt-5 pr-4 border-inherit">
          <h4 className="text-center text-lg  font-bold mt-1 mb-4">
            Invoice Address{" "}
          </h4>
          <hr />
          <Form />
        </div> */}

        <div className="w-full md:w-12/12 md:px-5 mt-5">
          <PaymentOption />
        </div>
      </div>
      <hr className="mt-3 mb-5" />
      <SalePageDisclaimer />
    </div>
  );
}

export default Invoice;
