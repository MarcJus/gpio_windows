import axios from 'axios'
import qs from 'qs'

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
    2: "\"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\" https://www.google.com/",
    3: "\"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\" https://cloud.boosteroid.com/dashboard/",
    4: "\"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\" https://platypus.go.yj.fr/",
    5: async () => {
        return await key_5()
    },
    6: "wt.exe ssh pi@rspm",
    7: "wt.exe",
    8: "wt.exe -p \"kali-linux\"",
    9: "ipconfig",
    "*": "ipconfig",
    0: "ipconfig",
    "#": "ipconfig",
    A: "ipconfig",
    B: "ipconfig",
    C: "ipconfig",
    D: "ipconfig"
}