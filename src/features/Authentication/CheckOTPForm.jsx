import React, { useState } from "react";
import OTPInput from "react-otp-input";
import Button from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authServices";
import toast from "react-hot-toast";

const CheckOTPForm = ({ phoneNumber }) => {
  const [otp, setOtp] = useState("");
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const {message} = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
    
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <form className="space-y-10" onSubmit={checkOtpHandler}>
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
