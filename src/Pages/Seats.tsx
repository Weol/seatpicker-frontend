import * as React from 'react';
import {Box, Button, List, ListItemButton, Stack, SvgIcon, Typography} from '@mui/material';
import background from "../Media/background.svg"
import { Container } from '@mui/system';
import createSeats from "../StaticSeats";
import green from "../Media/green.svg";
import Seat from '../Models/Seat';
import CreateReservation from "../Adapters/CreateReservation";
import {useState} from "react";

const staticSeats = createSeats();

export default function Seats() {
    const [seats, setSeats] = useState<{[Id: string]: Seat}>(staticSeats)
    const [editingLayout, setEditingLayout] = useState<boolean>()

    const reserveSeat = (seat: Seat) => {
        CreateReservation(seat.Id ,reservations => {
        })
    }

    const r = (): number => {
        const a = 100 
        return (300 + (Math.random()*a/2 + a))
    }

    const q = (): number => {
        const a = 10 
        return (20 * Math.random())
    }
    
    const renderSeat = (seat: Seat) => {
        return (
            <Box onClick={() => reserveSeat(seat)} sx={{
                position: "absolute",
                minWidth: "0",
                top: seat.Y + "%",
                left: seat.X + "%",
                width: seat.Width + "%",
                height: seat.Height + "%",
                border: "1px #ffffff61 solid",
                backgroundColor: "#0f6a0f",
                borderTopLeftRadius: r() + "px " + q() + "px", 
                borderTopRightRadius: q() + "px " + r() + "px",
                borderBottomRightRadius: r() + "px " + q() + "px",
                borderBottomLeftRadius: q() + "px " + r() + "px",
                cursor: "pointer",
                textAlign: "center",
                display: "flex"
            }}>
                <Typography variant="subtitle1" gutterBottom component="p"
                            sx={{lineHeight: 1, fontSize: "0.9rem", margin: "auto"}}>
                    {seat.Title}
                </Typography>
            </Box>
            )
    }

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

                            {seats && Object.values(seats).map(seat => renderSeat(seat))}
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
}


