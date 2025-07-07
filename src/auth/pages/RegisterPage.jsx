import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
    return (
        <AuthLayout title="Crear cuenta">
            <form>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            label="Nombre completo"
                            placeholder="Juan Perez"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="email"
                            label="Email"
                            placeholder="correo@google.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="password"
                            label="Password"
                            placeholder="Password"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid container sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            fullWidth
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
