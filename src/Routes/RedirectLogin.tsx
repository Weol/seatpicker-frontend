import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '@mui/system';



export default function RedirectLogin() {
    const [name, setName] = useState({})
    const [avatar, setAvatar] = useState("")
    const [id, setId] = useState({})

    const [searchParams, setSearchParams] = useSearchParams()

    React.useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        console.log(searchParams)

        var urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "authorization_code");
        urlencoded.append("client_id", "NONONO");
        urlencoded.append("client_secret", "NONONO");
        urlencoded.append("code", searchParams.get("code") ?? "asd");
        urlencoded.append("redirect_uri", "http://localhost:3000/redirect-login");

        fetch("https://discord.com/api/v10/oauth2/token", {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                var myHeaders = new Headers();
                let token = result["access_token"]
                myHeaders.append("Authorization", "Bearer " + token);

                fetch("https://discord.com/api/users/@me", {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                })
                    .then(response => response.json())
                    .then(result => {
                        console.log(result)
                        setName(result["username"])
                        setId(result["id"])

                        var myHeaders = new Headers();
                        myHeaders.append("Authorization", "Bearer " + token);

                        fetch("https://cdn.discordapp.com/avatars/376129925780078592/ea13e07c7e9c44c2203b5231640c82c6", {
                            method: 'GET',
                            headers: myHeaders,
                            redirect: 'follow'
                        })
                            .then(res => res.blob())
                            .then(blob => {
                                const imageObjectURL = URL.createObjectURL(blob);
                                setAvatar(imageObjectURL)
                            });
                    })
            })
    }, []);

    return (
        <Container>
            <Typography variant="h5" component="h1" gutterBottom>
                {"Hei " + name}
            </Typography>

            <img src={avatar} style={{ width: 128 }} />
        </Container>
    );
}


