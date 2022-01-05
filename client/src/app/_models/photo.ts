export interface Photo {
    id: number;
    url: string;
    isMain: boolean;
}

/* TYPESCRIPT EINLEITUNG

let uno = 42; //Ist automatisch eine Zahl (erinnert an var in c#)
uno = 10;

let dos: number = 42; //Typ Zuweisung

let tres: number | string = 42; //Variable kann int oder string sein
tres = "uno";

interface Car{
    colour: string;
    type: string;
    topSpeed?: number;  //? operator wenn optional
}

const car1: Car = {     //Objekt zu obigen interface
    colour: "farbe",
    type: "auto"
}

const multi1 = (x,y) => {   //(Lambda-) Funktionsdeklaration
    return x*y;             //Typescript weiß, dass eine Zahl rauskommt
}                           //Type: any Eingangsparameter hier nicht sicher deswegen unteringelt

const multi2= (x: number, y: number): number => { //So weißt man sichere typen zu
    return x*y;
}

*/