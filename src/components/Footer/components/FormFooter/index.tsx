import React from 'react'
import { useForm } from "react-hook-form";
import { Form, InputFooter, LabelForm, Error, FormTitle } from './styles';
import { IconButton, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';


interface FormData {
    suggestion: string;
}

export default function FormFooter() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data, "<=");
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Sugestão</FormTitle>
            <LabelForm>
                Você tem mais alguma sugestão para nós colocarmos no "All Gym"?
                Mande para nós!
            </LabelForm>
            <InputFooter
                variant="outlined"
                {...register('suggestion', { required: 'Digite algo para enviar sua sugestão.' })}
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
    )
}
