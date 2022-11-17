import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '@mui/system';

const LoginWithToken = (token: string) => {

}

export default function RedirectLogin() {
    const [name, setName] = useState({})
    const [avatar, setAvatar] = useState("")
    const [id, setId] = useState({})

    const [searchParams, setSearchParams] = useSearchParams()
    
    return (
        <Container>
            <Typography variant="h5" component="h1" gutterBottom>
                {"Hei " + name}
            </Typography>

            <img src={avatar} style={{ width: 128 }} />
        </Container>
    );
}


