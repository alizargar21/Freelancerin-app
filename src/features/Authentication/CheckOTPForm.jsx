import React, { useState } from "react";
import OTPInput from "react-otp-input";
import Button from "../../ui/Button";

const CheckOTPForm = () => {
  const [otp, setOtp] = useState("");

  return (
    <div>
      <form className="space-y-10">
        <p>کد تایید یکبار مصرف را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          containerStyle="flex flex-row-reverse justify-center gap-x-2 "
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "5px",
          }}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputType="number"
        />
        <Button className={"btn btn--primary"} title={" تایید"} />
      </form>
    </div>
  );
};

export default CheckOTPForm;
