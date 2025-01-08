"use client";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";

// Flexible register options type
export type FlexibleRegisterOptions<T extends FieldValues> = Omit<
  RegisterOptions<T>,
  "deps"
> & {
  deps?: Path<T> | Path<T>[] | undefined;
};

type InputProps<T extends FieldValues> = {
  label: string;
  placeholder?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  error?: FieldError;
  type?: "text" | "textarea" | "select";
  rows?: number;
  validationRules?: RegisterOptions<T, Path<T>>;
  options?: { value: string | number; label: string }[]; // Options for select
};

export default function TextInput<T extends FieldValues>({
  label,
  placeholder = "",
  name,
  register,
  required = false,
  error,
  validationRules,
  options,
  type = "text",
  rows = 4,
}: InputProps<T>) {
  const baseClassName =
    " w-full bg-white/[8%] text-white/[80%] rounded-[10px] px-[20px] mt-[3px] ";

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={name}
            {...register(name, {
              required: required ? `${label} is required` : false,
              ...validationRules,
            })}
            className={`${baseClassName} py-[10px] min-h-[120px] resize-none`}
            placeholder={placeholder}
            rows={rows}
          />
        );

      case "select":
        return (
          <select
            id={name}
            {...register(name, {
              required: required ? `${label} is required` : false,
              ...validationRules,
            })}
            className={`${baseClassName} h-[52px] bg-white`}
          >
            <option value="" disabled>
              {placeholder || `Select ${label}`}
            </option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            type="text"
            id={name}
            {...register(name, {
              required: required ? `${label} is required` : false,
              ...validationRules,
            })}
            className={`${baseClassName} h-[50px] focus:bg-white/[8%] outline-none w-full bg-white/[8%] rounded-[8px] px-4`}
            placeholder={placeholder}
          />
        );
    }
  };
  return (
    <div className="w-full flex flex-col space-y-[12px]">
      <label htmlFor={name} className="text-white/80">
        {label}
      </label>
      {renderInput()}
      {error && (
        <p className="text-red-500 text-[12px] mt-[5px]">{error.message}</p>
      )}
    </div>
  );
}
