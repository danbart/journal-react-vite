import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/";

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();
    const newTitle = useMemo(() => {
        return title.length > 13 ? title.substring(0, 13) + '...'
            : title;
    }, [title]);

    const onClickNote = () => {
        dispatch(setActiveNote({ id, title, body, date, imageUrls }));
    }

    return (
        <ListItem sx={{ padding: 2 }}>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle || <Typography variant="body2" color="text.secondary">Untitled</Typography>} />
                    <ListItemText secondary={body || <Typography variant="body2" color="text.secondary">No content</Typography>} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
