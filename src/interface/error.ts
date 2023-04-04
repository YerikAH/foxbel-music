export interface ErrorRoot {
    error: Error;
}

export interface Error {
    type:    string;
    message: string;
    code:    number;
}
