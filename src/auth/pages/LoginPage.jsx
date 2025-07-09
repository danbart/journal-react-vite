import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router"
import { signInWithGoogle } from "../../firebase"
import { useForm } from "../../hooks/useForm"
import { checkingAuthentication, login, logout, startGoogleSignIn } from "../../store/auth"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {

    const { status } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const { email, password, onInputChange } = useForm({
        email: '',
        password: '',
    })

    const isAuthenticated = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Login submitted:', { email, password });
        // You can dispatch an action to the store or call an API
        // For example:
        dispatch(checkingAuthentication(email, password));
    }

    const onGoogleSignIn = async () => {
        // Handle Google sign-in logic here
        console.log('Google sign-in clicked');
        // You can dispatch an action to the store or call an API
        // For example:
        dispatch(startGoogleSignIn());

        const result = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit} >
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="email"
                            label="Email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="password"
                            label="Password"
                            placeholder="Password"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                            disabled={isAuthenticated}
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                        <Button
                            onClick={onGoogleSignIn}
                            variant="contained"
                            fullWidth startIcon={<Google />}
                            disabled={isAuthenticated}>
                            <Typography >Google</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="end">
                    <Link component={RouterLink} color="inherit" to="/auth/register"> Crear una cuenta</Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}
