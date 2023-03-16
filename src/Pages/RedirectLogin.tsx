import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '@mui/system';
import LoginWithDiscordToken from '../Adapters/LoginWithDiscordToken'
import Config from "../config"
import { CircularProgress, Stack } from '@mui/material';
import User from '../Models/User';
import {UserContext} from '../UserContext';

export default function RedirectLogin() {
    const [user, setUser] = useState<User | null>(null)
    const userContext = useContext(UserContext)
    const [searchParams] = useSearchParams()

    useEffect(() => {
        let code = searchParams.get("code")
        if (code) {
            LoginWithDiscordToken(code, user => {
                console.log(user)
                setUser(user)
                userContext.setUser(user)
            })
        }
    }, [])

    const welcome = () => {
       return (<Stack>
            <Typography variant="h5" component="h1" gutterBottom>
                {"Velkommen " + user?.nick}
            </Typography>

            <img src={Config.DiscordAvatarBaseUrl + user?.id + "/" + user?.avatar} style={{ borderRadius: '50%' }} />
        </Stack>)
    }

    const loading = () => {
        return (<Stack>
            <CircularProgress />
        </Stack>)
    }

    return (
        <Stack sx={{ my: 4, alignItems: 'center' }} >
            {user ? welcome() : loading()}
        </Stack>
    )
}