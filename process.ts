import {exec} from 'child_process'
import commands from './commands'

export type Key = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" |"C" | "D" | "*" | "#" | "start_server"

/**
 * Informations sur la commande executée
 */
interface CommandReturn{
    error: boolean,
    stderr: boolean,
    message: string
}

/**
 * 
 * @param command Commande a executer
 * @returns Informations sur la commande
 */
function executeCommand(command: string): CommandReturn{
    let result: CommandReturn = {
        error: false,
        stderr: false,
        message: ""
    }
    exec(command, (error, stdout, stderr) => {
        if(error != null){
            result.error = true;
            result.message = error.message;
            console.log("error");
        }
        if(stderr){
            result.stderr = true;
        }
        result.message = stdout;
    })
    console.log(result);
    return result;
}

// function checkCommand(command: string): boolean{
//     if(command.startsWith("Erreur commande : "))
//         return false;
//     if(command.startsWith("Stderr : "))
//         return false;
//     return true;
// }

/**
 * @async
 * @param key Touche entrée
 * @returns Informations sur le retour de la commande
 */

export default async function(key: Key): Promise<CommandReturn>{
    let result: CommandReturn = {error: false, stderr: false, message: ""};
    let command: string | Function = commands[key]
    if(typeof command == "string"){
        console.log(command);
        command = (command as string)
        result = executeCommand(command);
    } else {
        const success: boolean = await command();
        if(!success){
            result = {
                error: true,
                stderr: false,
                message: ""
            }
        }
    }
    return result;
}