import * as React from 'react';
import { Box, Button, Stack, SvgIcon } from '@mui/material';
import background from "../Media/background.svg"
import discord from "../Media/discord.svg"
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

export default function Seats() {
    return (
        <Container>
            <Stack sx={{ my: 2, alignItems: 'center' }}>
                <Link to="/login">
                    <Button startIcon={<img src={discord} style={{width: 20 }} />} variant="outlined">Logg dæ inn med Discord</Button>
                </Link>
                <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{
                        display: "flex",
                        width: "100%",
                        height: "calc(100% - 64px)",
                        overflowX: "hidden",
                    }}>
                        <Box sx={{
                            marginTop: "1em",
                            marginBottom: "auto",
                            marginLeft: "auto",
                            marginRight: "auto",
                            position: "relative"
                        }}>
                            <img src={background} alt="" style={{
                                width: "100%"
                            }} />
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
}

