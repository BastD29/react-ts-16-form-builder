import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { IFormStructure } from "../models/Form";

export type TestFormValues = {
  firstname: string;
  lastname: string;
};

export const useTestForm = () => {
  const methods = useForm<TestFormValues>({
    defaultValues: {
      firstname: undefined,
      lastname: undefined,
    },
  });

  const formStructure = useMemo<IFormStructure<TestFormValues>[]>(
    () => [
      {
        inputType: "input",
        name: "firstname",
        placeholder: "first name",
        label: "first name",
        col: 8,
      },
      {
        inputType: "input",
        name: "lastname",
        placeholder: "last name",
        label: "last name",
        col: 8,
      },
    ],
    []
  );

  const onSubmit = (values: TestFormValues) => {
    console.log("values:", values);
  };

  return { methods, formStructure, onSubmit };
};
