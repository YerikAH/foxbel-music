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


