import React, { useState, useEffect } from "react";
import OTPInput from "react-otp-input";
import Button from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

const RESEND_TIME = 90;
const CheckOTPForm = ({ phoneNumber, onBack, OnReSendOtp, otpResponse }) => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();
  const { isPending, user, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1, 1000);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user , message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (Number(user.status) !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "ADMIN") return navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <Button
        title={<HiArrowRight className={"h-6 w-5 text-secondary-500"} />}
        onClick={onBack}
      />
      {otpResponse && (
        <p className="flex items-center gap-x-2 my-4">
          {otpResponse?.message}{" "}
          <Button
            title={<CiEdit className="h-6 w-5 text-secondary-500" />}
            onClick={onBack}
          />{" "}
        </p>
      )}
      <div className="mb-4 text-secondary-500">
        {" "}
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد </p>
        ) : (
          <Button title={"ارسال مجدد کد تایید"} onClick={OnReSendOtp} />
        )}
      </div>
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
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <Button
              className={"btn btn--primary"}
              title={" تایید"}
              type="submit"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckOTPForm;
