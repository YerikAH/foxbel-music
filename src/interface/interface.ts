import { AllOptions, PathRoutes } from '../enum/enum';

export interface MenuOptions{
    name: AllOptions,
    value: boolean,
    path: PathRoutes
}
export interface MenuStyles {
    left: string
}