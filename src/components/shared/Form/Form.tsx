import { FC, ReactNode } from "react";
import styles from "./Form.module.scss";
import { Col, FormProps } from "antd";
import { IFormStructure } from "../../../models/Form";
import { Control } from "react-hook-form";
import classname from "../../../utils/classname";
import { Input } from "../Input/Input";

interface ICustomFormProps
  extends Pick<FormProps, "id">,
    Pick<HTMLFormElement, "onSubmit"> {
  children: ReactNode;
}

interface IFormBuilderProps {
  structure: IFormStructure;
  control: Control<any, any>; // The first any refers to the form values, the second any refers to the context data
}

const Form = ({ onSubmit, children, ...props }: ICustomFormProps) => {
  return (
    <form className={styles["form"]} onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
};

const FormItem = ({
  children,
  label,
  className,
}: {
  children: ReactNode;
  label?: string | undefined;
  className?: string | undefined;
}) => (
  <div className={classname([className])}>
    {label && (
      <div className="classname">
        <label title={label}>{label}</label>
      </div>
    )}
    {children}
  </div>
);

const FormBuilder: FC<IFormBuilderProps> = ({ structure, control }) => (
  <Col
    span={structure?.col || 8}
    key={structure.name}
    {...structure?.responsive}
  >
    <Form.Item className="mb-2" key={structure.name} label={structure.label}>
      {structure.inputType === "input" && (
        <Input.Controlled control={control} {...structure} />
      )}
    </Form.Item>
  </Col>
);

Form.Item = FormItem;
Form.FormBuilder = FormBuilder;
export { Form };
