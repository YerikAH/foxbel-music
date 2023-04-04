import * as style from '../../../styles/main'
const WidgetDeezer = () => {
  return (
    <style.IframeDezzer>
    <iframe
      title='deezer-widget'
      src='https://widget.deezer.com/widget/light/playlist/1479458365'
      width='100%'
      height='300'
      frameBorder='0'
      // eslint-disable-next-line react/no-unknown-property
      allowTransparency={true}
      allow='encrypted-media; clipboard-write'
    ></iframe>
  </style.IframeDezzer>
  )
}

export default WidgetDeezer