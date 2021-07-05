import net, {Server} from 'net'
import process, {Key} from './process'

const server: Server = net.createServer();
console.log("Serveur lancé");

server.on("connection", (socket) => {
    const clientAdress: string | undefined = socket.remoteAddress;
    console.log("Nouvelle connexion : "+clientAdress);
    socket.setEncoding("utf-8");

    socket.setTimeout(10000, () => {
        console.log(clientAdress+" : Timeout");
    })

    socket.on("data", async (data) => {
        const dataString: string = data.toString("utf-8");
        console.log("Message de "+clientAdress+" : "+dataString);
        const command = await process(dataString as Key);
        let response: string = ""
        if(command.error || command.stderr){
            response = "error";
            socket.write(response);
        } else {
            response = "success";
            socket.write(response);
        }
        console.log("Réponse : "+response);
    });

    socket.on("close", (had_error) => {
        console.log(`${clientAdress} s'est déconnecté`);
        if(had_error)console.log("Il y a eu une erreur");
    })
})

server.listen(3000);