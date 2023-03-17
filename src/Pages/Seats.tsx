import * as React from 'react';
import {Box, Button, List, ListItemButton, Stack, SvgIcon, Typography} from '@mui/material';
import background from "../Media/background.svg"
import Seat from '../Models/Seat';
import CreateReservation from "../Adapters/CreateReservation";
import {useContext, useEffect, useState} from "react";
import GetAllSeats from "../Adapters/GetAllSeats";
import {useUserContext} from "../UserContext";
import DeleteReservation from '../Adapters/DeleteReservation';
import { Store } from 'react-notifications-component';
import StaticSeats from '../StaticSeats';

StaticSeats()

export default function Seats() {
    const [seats, setSeats] = useState<Seat[]>([])
    const { user } = useUserContext()

    useEffect(() => {
        fetchAllSeats()
    }, [])

    const fetchAllSeats = () => {
        GetAllSeats().then(seats => setSeats(seats))
    }

    async function reserveSeat(seat: Seat) {
        if (seat.user != null) {
            await DeleteReservation(seat.id)
        } else {
            await CreateReservation(seat.id)
        }

        Store.addNotification({
            title: "Wonderful!",
            message: "teodosii@react-notifications-component",
            type: "info",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 3000,
                onScreen: true
            }
        });

        fetchAllSeats()
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
            <Box key={seat.id} onClick={() => reserveSeat(seat)} sx={{
                position: "absolute",
                minWidth: "0",
                top: seat.y + "%",
                left: seat.x + "%",
                width: seat.width + "%",
                height: seat.height + "%",
                border: "1px #ffffff61 solid",
                backgroundColor: (user != null && seat.user != null && seat.user.id == user.id ? "#0f3f6a" : "#0f6a0f"),
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
                    {seat.title}
                </Typography>
            </Box>
            )
    }

    return (
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

                        {seats && seats.map(seat => renderSeat(seat))}
                    </Box>
                </Box>
            </Box>
        </Stack>
    );
}