import React, { useState } from "react";
import TextFieldInput from "../../ui/TextFieldInput";
import Button from "../../ui/Button";

import Loading from "../../ui/Loading";
const SendOTPForm = ({  phoneNumber , onChange , isSendingOtp , onSubmit}) => {


  return (
    <div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <TextFieldInput
          label={"    شماره موبایل"}
          name={"phoneNumber"}
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <Button
              className={"btn btn--primary"}
              title={"ارسال کد تایید"}
              type="submit"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default SendOTPForm;
