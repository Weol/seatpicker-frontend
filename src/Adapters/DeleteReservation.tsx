import Cookies from 'universal-cookie';
import Config from "../config";
import Seat from "../Models/Seat";

const cookies = new Cookies();

export default function DeleteReservation(seatId: string, onSuccess: (seat: Seat) => void) {
    var token = cookies.get("token")

    var headers = new Headers();
    headers.append("Content-Type", "text/json");
    headers.append("Authorization", "Bearer " + token);

    fetch(Config.ApiBaseUrl + "/seat/" + seatId + "/unreserve", {
        method: 'DELETE',
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
