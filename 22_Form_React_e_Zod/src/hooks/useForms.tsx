import { useForm } from "react-hook-form";
import { formSchema, type FormSchema } from "../schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  return { register, handleSubmit, errors };
};
