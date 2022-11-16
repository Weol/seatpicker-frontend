import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Login() {
    React.useEffect(() => {
        window.location.replace('https://discord.com/api/oauth2/authorize?client_id=1042448593312821248&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect-login&response_type=code&scope=identify')
    }, [])

    return (
        <Typography variant="h5" component="h1" gutterBottom>
            Snakkes
        </Typography>
    );
}

