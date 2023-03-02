import Cookies from 'universal-cookie';
import Config from "../config";
import User from "../Models/User";

const cookies = new Cookies();

export interface Resevation {
    Id: string,
    User: User
}

export default function CreateReservation(seatId: string, onSuccess: (user: Resevation) => void) {
    var token = cookies.get("token")

    var headers = new Headers();
    headers.append("Content-Type", "text/json");
    headers.append("Authorization", "Bearer " + token);

    fetch(Config.ApiBaseUrl + "/reservation/" + seatId, {
        method: 'POST',
        headers: headers,
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => {
            console.log(result)

            onSuccess(result)
        })
        .catch(result => {
            console.log(result)
        })
}
