import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components";

export const NoteView = () => {
    const { active: note } = useSelector(state => state.journal);
    const { title, body, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);
    // const dispatch = useDispatch();
    return (
        <Grid container direction={"row"} justifyContent="space-between" sx={{ mb: 1 }} className='animate__animated animate__fadeIn animate__faster'>
            <Grid item>
                <Typography fontSize={39} fontWeight="light">{dateString}</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={5}
                    sx={{ border: 'none', mb: 1 }}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>
            {/* imagenes */}
            <ImageGallery />
        </Grid>
    )
}
