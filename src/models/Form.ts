import { ColProps, InputProps } from "antd";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type IRulesType = Omit<
  RegisterOptions<FieldValues, FieldPath<FieldValues>>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

export type IFormStructure<FormValues = any> = Omit<
  Partial<InputProps> & {
    col?: number | undefined;
    name: FormValues extends Object ? keyof FormValues : string;
    responsive?: ColProps | undefined;
    label?: string | undefined;
    inputType: "input";
  },
  "onChange" | "allowClear" | "type"
> & {
  type?: InputProps["type"];
};
