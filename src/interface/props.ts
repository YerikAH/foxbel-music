import { Daum, Daum3 } from './chart';
import { RootSearch } from './search';

export interface CardResultProps {
    data: Daum,
}

export interface CardArtistProps{
    data: Daum3
}
export interface ContextProps {
    children: JSX.Element,
}

export interface DetailsMusicProps{
    data: Daum | undefined | null
    volume?: number,
    handleManager?(value: boolean):void
}
export interface VolumeMusicProps{
    handleVolume(vol: number): void
    volume: number
}
export interface SearchProps{
    data:RootSearch | null
    loader: boolean
}
