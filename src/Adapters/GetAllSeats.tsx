import Cookies from 'universal-cookie';
import Config from "../config";
import Seat from "../Models/Seat";

const cookies = new Cookies();

export default function GetAllSeats(onSuccess: (user: Array<Seat>) => void) {
    var token = cookies.get("token")

    var headers = new Headers();
    headers.append("Content-Type", "text/json");
    headers.append("Authorization", "Bearer " + token);

    fetch(Config.ApiBaseUrl + "/reservation", {
        method: 'GET',
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
