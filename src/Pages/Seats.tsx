import * as React from 'react';
import { Box, Button, Stack, SvgIcon } from '@mui/material';
import background from "../Media/background.svg"
import { Container } from '@mui/system';

export default function Seats() {
    return (
        <Container>
            <Stack sx={{ my: 2, alignItems: 'center' }}>
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

