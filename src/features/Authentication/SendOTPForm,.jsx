import React, { useState } from "react";
import TextFieldInput from "../../ui/TextFieldInput";
import Button from "../../ui/Button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
const SendOTPForm = ({ setStep , phoneNumber , onChange }) => {
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={sendOtpHandler}>
        <TextFieldInput
          label={"    شماره موبایل"}
          name={"phoneNumber"}
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {isPending ? (
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
