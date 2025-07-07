import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <form>
                <Grid container spacing={2} sx={{ mt: 1 }}>
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
                <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            fullWidth
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            fullWidth startIcon={<Google />}>
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
