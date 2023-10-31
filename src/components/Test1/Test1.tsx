import { Button } from "antd";
import { useTestForm } from "../../hooks/useTestForm";
import { Form } from "../shared/Form/Form";
import styles from "./Test1.module.scss";

export default function Test1() {
  const {
    methods: { handleSubmit, control },
    formStructure,
    onSubmit,
  } = useTestForm();

  return (
    <div className={styles["main"]}>
      <Form onSubmit={handleSubmit(onSubmit)} id="test-form">
        {formStructure.map((field) => (
          <Form.FormBuilder
            key={field.name}
            structure={field}
            control={control}
          />
        ))}
      </Form>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </div>
  );
}
