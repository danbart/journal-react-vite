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

        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder='Nombre completo'
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
                            label="Correo"
                            type="email"
                            placeholder='correo@google.com'
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
                            label="Contraseña"
                            type="password"
                            placeholder='Contraseña'
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid
                            item
                            xs={12}
                            display={!!errorMessage ? '' : 'none'}
                        >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                disabled={isCheckingAuthentication}
                                type="submit"
                                variant='contained'
                                fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>


                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to="/auth/login">
                            ingresar
                        </Link>
                    </Grid>

                </Grid>


            </form>
        </AuthLayout>
    )
}
