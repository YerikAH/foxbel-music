import { Daum } from './chart';
import { RootSearch } from './search';

export interface CardResultProps {
    data: Daum,
}
export interface ContextProps {
    children: JSX.Element,
}

export interface DetailsMusicProps{
    data: Daum | undefined | null
    volume?: number
}
export interface VolumeMusicProps{
    handleVolume(vol: number): void
    volume: number
}
export interface SearchProps{
    data:RootSearch | null
    loader: boolean
}
