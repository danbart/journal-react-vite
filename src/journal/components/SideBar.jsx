import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);
    return (
        <Box component="nav"
            sx={{
                width: { sm: drawerWidth, flexShrink: { sm: 0 } },
                flexShrink: { sm: 0 },
            }}
        >
            <Drawer
                variant="permanent"
                open
                // ModalProps={
                //     { keepMounted: true } // Better open performance on mobile.
                // }
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {displayName}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                </Toolbar>
                <List>
                    {
                        ['January', 'February', 'March', 'April', 'May'].map((text, index) => (
                            <ListItem key={text} sx={{ padding: 2 }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Some description here'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}
