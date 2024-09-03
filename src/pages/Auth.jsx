import React from "react";
import SendOTPForm from "../features/Authentication/SendOTPForm,";
import CheckOTPForm from "../features/Authentication/CheckOTPForm";

const Auth = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        {/* <SendOTPForm /> */}
        <CheckOTPForm />
      </div>
    </div>
  );
};

export default Auth;
