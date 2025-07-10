import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router"
import { useForm } from "../../hooks/useForm"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {

    const { fullName, email, password, onInputChange, formState } = useForm({
        fullName: '',
        email: '',
        password: '',
    })

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
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
                            name="fullName"
                            value={fullName}
                            onChange={onInputChange}
                            error={!!formState.fullName && formState.fullName.length < 3}
                            helperText={formState.fullName && formState.fullName.length < 3 ? "El nombre debe tener al menos 3 caracteres" : ""}
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
                <Grid container sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Button
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
