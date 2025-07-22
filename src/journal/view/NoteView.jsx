import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { setActiveNote, startDeletingNote, startLoadingFiles, startSaveNote } from "../../store/journal";
import { ImageGallery } from "../components";

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const { title, body, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    const onSaveNote = () => {
        // Logic to save the note
        dispatch(startSaveNote());
    }

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved]);

    const onFileInputChange = ({ target }) => {
        const files = target.files;
        if (!files || files.length === 0) return;

        dispatch(startLoadingFiles(files));
        target.value = ''; // Reset the input value
    }

    const onDeleteNote = () => {
        // Logic to delete the note
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Esta acción no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startDeletingNote());
                Swal.fire('Nota eliminada', '', 'success');
            }
        });
    }

    return (
        <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems='center'
            sx={{ mb: 1 }}
            className='animate__animated animate__fadeIn animate__faster'>
            <Grid item>
                <Typography fontSize={39} fontWeight="light">{dateString}</Typography>
            </Grid>
            <Grid item>
                <input type="file" accept="image/*" multiple onChange={onFileInputChange} style={{ display: 'none' }} ref={fileInputRef} />
                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>
                <Button onClick={onSaveNote} color="primary" sx={{ padding: 2 }} disabled={isSaving}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container size={12}>
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

            <Grid container size={12} justifyContent="end">
                <Button
                    onClick={onDeleteNote}
                    color="error"
                    sx={{ padding: 2 }}
                    disabled={isSaving}
                >
                    <DeleteOutline sx={{ fontSize: 30, mr: 1 }} />
                    Eliminar Nota
                </Button>
            </Grid>
            {/* imagenes */}
            <ImageGallery imageUrls={note.imageUrls} />
        </Grid>
    )
}
