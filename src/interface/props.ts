import { Daum } from './chart';

export interface CardResultProps {
    title: string,
    autor: string,
    url?: string,
}
export interface ContextProps {
    children: JSX.Element,
}

export interface DetailsMusicProps{
    data: Daum[] | undefined
}