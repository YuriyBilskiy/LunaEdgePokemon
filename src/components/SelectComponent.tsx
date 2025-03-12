import React from "react";
import Select from "react-select";
import "../stories/Select.css";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: Option[];
  onChange: (selected: Option[]) => void;
  isMulti?: boolean;
  type?: string;
  isDisabled?: boolean;
  autoFocus?: boolean;
  errors?: string;
  hoverSelect?: boolean;
}

const SelectComponent: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  isMulti = true,
  isDisabled,
  autoFocus,
  errors,
}) => {
  return (
    <div>
      <Select
        isMulti={isMulti}
        isDisabled={isDisabled}
        options={options}
        value={value}
        autoFocus={autoFocus}
        onChange={(selected) => onChange(selected as Option[])}
        classNamePrefix="select"
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "transparent",
            borderColor: errors ? "red" : base.borderColor,
            boxShadow: errors ? "0 0 0 1px red" : base.boxShadow,
            outline: "none",
            "&:hover": {
              borderColor: errors ? "red" : "yellow",
            },
            "&:focus-within": {
              borderColor: errors ? "red" : "yellow",
              boxShadow: "0 0 0 1px yellow !important",
            },
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }),
        }}
        formatOptionLabel={({ value, label }) => (
          <div className="flex items-center gap-2">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${options.findIndex((p) => p.value === value) + 1}.png`}
              alt={label}
              width={20}
              height={20}
            />
            {label}
          </div>
        )}
      />
      {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
    </div>
  );
};

export default SelectComponent;