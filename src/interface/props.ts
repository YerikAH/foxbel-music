import { Daum } from './chart';

export interface CardResultProps {
    title: string,
    autor: string,
    url?: string,
    id: number
}
export interface ContextProps {
    children: JSX.Element,
}

export interface DetailsMusicProps{
    data: Daum | undefined
    volume?: number
}
export interface VolumeMusicProps{
    handleVolume(vol: number): void
    volume: number
}