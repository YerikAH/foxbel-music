export interface ErrorRoot {
    error: Error;
}

export interface Error {
    type:    string;
    message: string;
    code:    number;
}

export interface ErrorArtist {
    error: ErrorClass;
}

export interface ErrorClass {
    type:    string;
    message: string;
    code:    number;
}
