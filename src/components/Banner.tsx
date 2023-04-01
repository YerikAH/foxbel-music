import * as style from '../styles/banner'
import IconVerticalDots from './icons/IconVerticalDots'

const Banner = () => (
  <style.SectionBanner>
    <style.BoxImageResponsive>
      <style.ImageAutor
        src='https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/62/82/a5/6282a515-c95c-9e5e-3eef-4ef7b75639ca/191404113868.png/1200x1200bf-60.jpg'
        alt='autor'
      />
    </style.BoxImageResponsive>
    <style.BoxAllContent>
      <style.BoxImage className='https://media.glamour.mx/photos/61a52e8b17ce19dbe71710cd/16:9/w_2560%2Cc_limit/la-vida-de-adele-documental-netflix.jpg'></style.BoxImage>
      <style.BoxContent>
        <style.HeadlinePrincipal>Adele 21</style.HeadlinePrincipal>
        <style.BoxFlexLinear>
          <style.HeadlineSecondary>Lo mejor de Adele</style.HeadlineSecondary>
          <style.TextSpan>321, 123 seguidores</style.TextSpan>
        </style.BoxFlexLinear>
        <style.TextBody>
          Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida
          simplemente como Adele, es una cantante, compositora y multinstrumentista británica.
        </style.TextBody>
        <style.BoxButtons>
          <style.ButtonStroker>Reproducir</style.ButtonStroker>
          <style.ButtonStroker className='stroke'>Seguir</style.ButtonStroker>
          <style.ButtonImage>
            <IconVerticalDots />
          </style.ButtonImage>
        </style.BoxButtons>
      </style.BoxContent>
    </style.BoxAllContent>
  </style.SectionBanner>
)

export default Banner
