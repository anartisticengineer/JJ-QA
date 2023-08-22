interface ButtonProps {
  labelName: string;
  isSubmit: boolean;
  id?: string;
}

const CTAButton = ({ labelName, isSubmit, id }: ButtonProps) => {
  return (
    <button
      id={id}
      className="p-5 m-5 text-xl text-black bg-red-100 hover:underline"
      type={isSubmit ? "submit" : "button"}
    >
      {labelName}
    </button>
  );
};

export default CTAButton;
