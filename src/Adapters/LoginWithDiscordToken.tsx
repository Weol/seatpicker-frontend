import User from "../Models/User";
import Config from "../config"

type TokenContract = {
    Token: string
}

export default function LoginWithDiscordToken(token: string, onSuccess: (user: User) => void) {
    var headers = new Headers();
    headers.append("Content-Type", "text/json");

    let contract: TokenContract = { Token: token }

    fetch(Config.ApiBaseUrl + "/oauth2/token", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(contract),
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => {
            let id = result["id"]
            let nick = result["nick"]
            let name = result["name"]
            let avatar = result["avatar"]

            
        })
        .catch(result => {
            console.log(result)
        })
}