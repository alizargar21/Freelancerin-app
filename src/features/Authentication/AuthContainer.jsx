import React, { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm,";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(()=>{
    console.log(phoneNumber);
  } , [phoneNumber])

  const {
    isPending: isSendingOtp,
    error,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  const {register , handleSubmit , getValues}  =useForm()
  const sendOtpHandler = async (data) => {
    e.preventDefault();
   
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
      console.log(message)

      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error)
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}

            register={register}
            // phoneNumber={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            OnReSendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};

export default AuthContainer;
