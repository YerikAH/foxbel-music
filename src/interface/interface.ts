import { AllOptions, PathRoutes } from '../enum/enum';

export interface MenuOptions{
    name: AllOptions,
    value: boolean,
    path: PathRoutes
}
export interface MenuStyles {
    left: string
}
export interface ModalProps {
    title: string
    description: string
    button: string
    place: string
}