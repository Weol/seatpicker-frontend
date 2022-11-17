import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <Stack sx={{ my: 4, alignItems: 'center' }} >
            <Typography variant="h5" component="h1" gutterBottom>
                Velkommen til
            </Typography>
            <Typography sx={{ color: 'primary.main' }} variant="h4" component="h1" gutterBottom>
                SaltenLAN 2022
            </Typography>
            <Typography variant="body1" component="h1" align='center' gutterBottom>
                på Drag i Hamarøy, 17-19. Februar
            </Typography>
            <Link to="/seats">
                <Button sx={{ my: 4 }} variant="contained">Reserver plass</Button>
            </Link>
        </Stack >
    );
}

