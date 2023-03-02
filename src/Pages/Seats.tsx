import * as React from 'react';
import { Box, Button, Stack, SvgIcon } from '@mui/material';
import background from "../Media/background.svg"
import { Container } from '@mui/system';
import {useState} from "react";
import GetAllReservations, {Resevation} from '../Adapters/GetAllReservations';
import createSeats from "../StaticSeats";
import green from "../Media/green.svg";
import Typography from "@mui/material/Typography";
import Seat from '../Models/Seat';
import CreateReservation from "../Adapters/CreateReservation";

const seats = createSeats(34, 36.9, 8.72 + (8.72 * 2 / 5), 2.51);

export default function Seats() {
    const [reservations, setReservations] = useState<Array<Resevation>>([])

    React.useEffect(() => {
        fetchAllSeats()
    }, [])

    const fetchAllSeats = () => {
        GetAllReservations(reservations => {
            setReservations(reservations)
        })
    }

    const reserveSeat = (seat: Seat) => {
        console.log(seat)
        CreateReservation(seat.Id ,reservations => {
        })
    }

    const renderSeat = (seat: Seat) => {
        return (
                <Box onClick={() => reserveSeat(seat)} sx={{
                    position: "absolute",
                    top: seat.Top,
                    left: seat.Left,
                    width: seat.Width,
                    height: seat.Height,
                    background: "url(" + green + ")",
                    backgrondRepeat: "no-repeat",
                    backgroundSize: "cover",
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

                            {seats && seats.map(seat => renderSeat(seat))}
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
}

