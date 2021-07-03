type Matiere = "FRANC" | "MATHS" | "ESP2" | "TECHN" | "PH_CH" | "ANGL1" |
     "SVT" | "EPS" | "A-PLA" | "HI-GE" | "ELOQ" | "MUSIQ"

namespace Types{
    export interface Day{
        day: string,
        devoirs: Devoirs[]
    }

    export interface Devoirs{
        matiere: string,
        codeMatiere: Matiere,
        aFaire: boolean,
        idDevoir: number,
        documentAFaire: boolean,
        donneLe: string,
        effectue: boolean,
        interrogation: boolean,
        rendreEnLigne: boolean
    }
}

export = Types