import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  errors?: string;
  register: UseFormRegisterReturn;
  isDisabled?: boolean;
  value?: string;
  autoFocus?: boolean;
  hover?: boolean;
};

export const Input: React.FC<Props> = ({
  errors,
  register,
  value,
  isDisabled,
  autoFocus,
  hover,
}) => {
  return (
    <div>
      <input
        autoFocus={autoFocus}
        className={`border 
        ${errors ? "border-red-500" : "border-gray-400"} 
        ${hover ? "hover:border-yellow-400" : ""}
        outline-none w-full p-2 rounded-md mb-2  
        ${isDisabled ? "bg-gray-100" : "bg-transparent"} focus:border-yellow-400`}
        placeholder="Write your name"
        type="text"
        value={value}
        disabled={isDisabled}
        {...register}
      />
      {errors && <p className="text-red-500">{errors}</p>}
    </div>
  );
};
