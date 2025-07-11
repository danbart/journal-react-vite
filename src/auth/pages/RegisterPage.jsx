import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router"
import { useForm } from "../../hooks/useForm"
import { startCreatingUserWithEmailPassword } from "../../store/auth"
import { AuthLayout } from "../layout/AuthLayout"


const formData = {
    displayName: '',
    email: '',
    password: '',
}

const formValidations = {
    displayName: [(value) => value.length >= 3, 'El nombre debe tener al menos 3 caracteres'],
    email: [(value) => value.includes('@'), 'El correo debe tener un @'],
    password: [(value) => value.length >= 6, 'La contraseña debe tener al menos 6 caracteres'],
}
export const RegisterPage = () => {

    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const {
        displayName, email, password, onInputChange, formState,
        isFormValid, emailValid, passwordValid, displayNameValid
    } = useForm(formData, formValidations)

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword({ email, password, displayName }));
    }

    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={onSubmit} >
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            label="Nombre completo"
                            placeholder="Juan Perez"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="email"
                            label="Email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
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
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>
                </Grid>
                <Grid container sx={{ mb: 2, mt: 1 }}>
                    <Grid
                        item
                        xs={12}
                        display={!!errorMessage ? '' : 'none'}
                    >
                        <Alert severity='error'>{errorMessage}</Alert>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Button
                            disabled={isCheckingAuthentication}
                            variant="contained"
                            fullWidth
                            type="submit"
                        >
                            Crear cuenta
                        </Button>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="end">
                    <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
                    <Link component={RouterLink} color="inherit" to="/auth/login"> Entrar</Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}
