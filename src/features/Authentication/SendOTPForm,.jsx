import React, { useState } from "react";
import TextFieldInput from "../../ui/TextFieldInput";
import Button from "../../ui/Button";

const SendOTPForm = () => {
  const [phoneNumber, setPhonenumber] = useState();
  return (
    <div>
      <form className="space-y-4">
        <TextFieldInput
        label={"    شماره موبایل"}
          name={"phoneNumber"}
          value={phoneNumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
      <Button className={"btn btn-primary"} title={"ارسال کد تایید"} /> 
      </form>
    </div>
  );
};

export default SendOTPForm;
