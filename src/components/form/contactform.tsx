"use client";

import { useState } from "react";
import CTAButton from "../ctabutton";
import { FormInput, InputType, OptionInput } from "./forminput";

const ContactForm = () => {
  const [submission, updateSubmission] = useState({
    "contact-name": "",
    "contact-reason": "",
    "contact-message": "",
  });

  const handleTyping = (e: any) => {
    updateSubmission({ ...submission, [e.target.id]: e.target.value });
  };

  return (
    <form className="flex-col p-5" id="contact-form" action="submit">
      <FormInput
        id="contact-name"
        labelName="Name"
        inputType={InputType.TEXT}
        onChangeFcn={handleTyping}
      />
      <OptionInput
        id="contact-reason"
        labelName="Reason for Contact"
        options={["Opportunity", "Other"]}
        onChangeFcn={handleTyping}
      />
      <FormInput
        id="contact-message"
        labelName="Message"
        inputType={InputType.TEXTAREA}
        onChangeFcn={handleTyping}
      />
      <CTAButton isSubmit={true} labelName="Submit" />
    </form>
  );
};

export default ContactForm;
