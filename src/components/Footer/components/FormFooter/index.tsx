import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Form, InputFooter, LabelForm, Error, FormTitle } from "./styles";
import { IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";
import emailjs from "emailjs-com";

interface FormData {
  suggestion: string;
}

export default function FormFooter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (data: any) => {
    console.log(data, "<=");

    try {
      if (formRef.current) {
        const result = await emailjs.sendForm(
          "service_mdo2eob",
          "template_lfdohfp",
          formRef.current,
          "vynk51uWXQePkP6ey"
        );
        console.log("Email sent successfully:", result.text);
      }
    } catch (error: any) {
      console.error(
        "Error sending email:",
        error.text || error.message || error
      );
    }
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Sugestão</FormTitle>
      <LabelForm>
        Você tem mais alguma sugestão para nós colocarmos no "All Gym"? Mande
        para nós!
      </LabelForm>
      <InputFooter
        variant="outlined"
        {...register("suggestion", {
          required: "Digite algo para enviar sua sugestão.",
        })}
        InputProps={{
          endAdornment: (
            <IconButton type="submit" aria-label="send" edge="end">
              <Send sx={{ color: "orange" }} />
            </IconButton>
          ),
        }}
      />
      {errors.suggestion && (
        <Error>{errors.suggestion.message as string}</Error>
      )}
    </Form>
  );
}
