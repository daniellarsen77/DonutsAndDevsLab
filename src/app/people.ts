// To parse this data:
//
//   import { Convert, People } from "./file";
//
//   const people = Convert.toPeople(json);

export interface People {
    complete: Complete[];
    tiny:     Tiny[];
}

export interface Complete {
    firstName:  string;
    lastName:   string;
    innovation: string;
    year:       number;
}

export interface Tiny {
    name:     string;
    invented: string;
    year:     number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toPeople(json: string): People {
        return JSON.parse(json);
    }

    public static peopleToJson(value: People): string {
        return JSON.stringify(value);
    }
}
