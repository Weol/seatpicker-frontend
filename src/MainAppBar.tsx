import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';

export default function App() {
    return (
        <AppBar title="Home Page" position="sticky" sx={{ bgcolor: 'background.paper', color: 'text.primary'}}>
            <Toolbar>
                <Typography variant="h6" component="div">
                    SaltenLAN 2023 presents... Rocket League w/ Asle!!
                </Typography>
            </Toolbar>
        </AppBar>
    );
}