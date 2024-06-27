import { useState, ChangeEvent } from "react";

export interface FormData {
  date: string;
  time: string;
  pax: string;
  name: string;
  email: string;
  comments: string;
}

function useFormData(initialState: FormData) {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const handleChange = (key: keyof FormData) => (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [key]: event.target.value });
    setFormErrors({ ...formErrors, [key]: "" });
  };

  return { formData, setFormData, formErrors, setFormErrors, handleChange };
}

export default useFormData;
