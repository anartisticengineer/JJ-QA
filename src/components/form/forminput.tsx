enum InputType {
  TEXT = "text",
  TEXTAREA = "textarea",
}

interface BaseInputProps {
  id: string;
  labelName: string;
  onChangeFcn: (arg0?: any) => void;
}

interface InputProps extends BaseInputProps {
  inputType: InputType;
}

interface OptionInputProps extends BaseInputProps {
  options?: string[];
}

const FormInput = ({ id, labelName, inputType, onChangeFcn }: InputProps) => {
  return (
    <div className="p-5">
      <label htmlFor={id} className="pr-5">
        {labelName}
      </label>
      <input
        type={inputType}
        id={id}
        placeholder={labelName}
        className="p-1 text-black"
        onChange={onChangeFcn}
      />
    </div>
  );
};

const OptionInput = ({
  id,
  labelName,
  options,
  onChangeFcn,
}: OptionInputProps) => {
  return (
    <div className="p-5">
      <label htmlFor={id} className="pr-5">
        {" "}
        {labelName}
      </label>
      {options ? (
        <select
          name={`select-${labelName}`}
          id={id}
          className="p-1 text-black"
          onChange={onChangeFcn}
        >
          {options.map((opt) => (
            <option key={`option-${opt}`} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

export { InputType, FormInput, OptionInput };
