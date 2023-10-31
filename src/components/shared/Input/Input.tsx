import { Input as InputAnt, InputProps } from "antd";
import { Controller, ControllerProps, FieldError } from "react-hook-form";
import { IRulesType } from "../../../models/Form";
import { FC } from "react";
import styles from "./Input.module.scss";

export interface IControlledInputProps extends Omit<InputProps, "error"> {
  name: string;
  control: ControllerProps["control"];
  rules?: IRulesType | undefined;
  error?: string | undefined;
}

const renderInput = ({ ...props }) => {
  return <InputAnt {...props} />;
};

const Input = ({ ...props }) => {
  return (
    <div className={styles["input-container__element"]}>
      <div className={styles["input-container__input-wrapper"]}>
        {renderInput({ ...props })}
      </div>
    </div>
  );
};

const ControlledInput: FC<IControlledInputProps> = ({
  control,
  name,
  rules,
  value: _value,
  error: _error,
  ...props
}) => {
  const externalErrors: FieldError | undefined = { type: "", message: "" };
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Input
          onChange={onChange}
          value={value !== undefined ? value : _value}
          error={
            _error ?? error?.message ?? externalErrors?.message ?? undefined
          }
          {...props}
        />
      )}
    />
  );
};

Input.Controlled = ControlledInput;
export { Input };
