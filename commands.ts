import axios from 'axios'
import qs from 'qs'

const chrome_path = "\"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\""

async function key_5(): Promise<boolean>{
    let promise_return: boolean = true;
    await axios.post("https://platypus.go.yj.fr/apiEC/moyenne/?periode=A003", 
    qs.stringify({
        "username": "MarcJus",
        "password": "Hen12goa"
    }))
    .then((value) => {
        console.log(value.data);
    }).catch((reason) => {
        promise_return = false;
        console.log("Status : "+reason.response.status)
        console.log(reason.response.data);
    })
    return promise_return;
}

export default {
    1: "code",
    2: chrome_path + " https://www.google.com/",
    3: chrome_path + " https://cloud.boosteroid.com/dashboard/",
    4: "\"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\" https://www.google.com/",
    5: async () => {
        return await key_5()
    },
    6: "wt.exe ssh pi@rspm",
    7: "wt.exe",
    8: "wt.exe -p \"kali-linux\"",
    9: "\"C:\\Users\\jusse\\AppData\\Local\\Postman\\Postman.exe\"",
    "*": "ipconfig",
    0: "ipconfig",
    "#": "ipconfig",
    A: "ipconfig",
    B: "ipconfig",
    C: "ipconfig",
    D: "ipconfig",
    "start_server": "wt.exe \"C:\\Users\\jusse\\OneDrive\\Bureau\\serveur 1.17\\start.bat\""
}