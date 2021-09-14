export declare type Key = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "*" | "#" | "start_server";
/**
 * Informations sur la commande executée
 */
interface CommandReturn {
    error: boolean;
    stderr: boolean;
    message: string;
}
/**
 * @async
 * @param key Touche entrée
 * @returns Informations sur le retour de la commande
 */
export default function (key: Key): Promise<CommandReturn>;
export {};
