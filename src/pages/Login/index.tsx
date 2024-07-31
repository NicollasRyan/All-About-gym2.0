import { LockOutlined } from "@mui/icons-material";
import { Typography, Container, CssBaseline, Box, Avatar, TextField, FormControlLabel, Checkbox, Button, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Error } from "./styles";

import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';
import { auth } from '../../firebase';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link to="/" color="inherit">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [rememberMe, setRememberMe] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);

    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;
            await setPersistence(auth, persistence);
            setErrorLogin(true)
            navigate("/")
        } catch (err) {
            setErrorLogin(true)
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            autoComplete="email"
                            type="email"
                            {...register('email', { required: 'Email é obrigatório' })}
                            autoFocus
                        />
                        {errors.email && <Error>{errors.email.message as string}</Error>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            id="password"
                            autoComplete="current-password"
                            type="password"
                            {...register('password', { required: 'Senha é obrigatório' })}
                        />
                        {errors.password && <Error>{errors.password.message as string}</Error>}
                        {errorLogin && <Error>Email ou senha estão incorretos</Error>}
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            onChange={(e: any) => setRememberMe(e.target.checked)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="#">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/register">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}