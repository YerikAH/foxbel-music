import { AllOptions, PathRoutes, ResProps } from '../enum/enum'

export function routeSearch(pathname: string){
    const routeOptions = {
        [PathRoutes.recent]: ResProps.tracks,
        [PathRoutes.albums]: ResProps.albums,
        [PathRoutes.artist]: ResProps.artists,
        [PathRoutes.podcast]: ResProps.podcasts,
      }
      const optionsLocation = pathname as PathRoutes
      const option = routeOptions[optionsLocation] ?? ResProps.tracks
      return option
}
export function routeSearchMenu(pathname: string){
    const routeOptions = {
        [PathRoutes.recent]: AllOptions.recent,
        [PathRoutes.albums]: AllOptions.albums,
        [PathRoutes.artist]: AllOptions.artist,
        [PathRoutes.podcast]: AllOptions.podcast,
      }
      const optionsLocation = pathname as PathRoutes
      const option = routeOptions[optionsLocation] ?? AllOptions.recent
      return option
}
export function convertMusicTimer(time: number | undefined):string{
  const roundedNumber = Math.round(time ?? 0)
  if(roundedNumber < 10) return `0:0${roundedNumber}`
  return `0:${roundedNumber}`
}


export function elementHtmlSelect(selectHTML: HTMLElement | null, idName: string): HTMLElement {
  if (selectHTML !== null) return document.getElementById(idName) as HTMLElement

  const menuDom: HTMLElement = document.createElement('div')
  menuDom.setAttribute('id', idName)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const bodyElement = document.querySelector('body')!
  bodyElement.appendChild(menuDom)
  return menuDom
}