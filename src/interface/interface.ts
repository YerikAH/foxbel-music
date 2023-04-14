import { AllOptions, PathRoutes } from '../enum/enum'

export interface MenuOptions {
  name: AllOptions
  value: boolean
  path: PathRoutes
}
export interface MenuStyles {
  left: string
}
export interface ModalProps {
  setOpenModal(openModal: boolean): void
}
export interface InterfacePlaylist {
  name: string
  music: InterfaceMusic[]
}
export interface InterfaceMusic {
  id: number
  image: string
  name: string
  autor: string
}
export interface PopupProps {
  data: InterfaceMusic
}
export interface WarningProps {
  setWarning(warning: boolean): void
  playList: InterfacePlaylist[]
  name: string
}
