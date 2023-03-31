import * as style from '../styles/banner'

const Banner = () => (
  <style.SectionBanner>
    <style.BoxImageResponsive>
      <style.ImageAutor src='' alt='autor' />
    </style.BoxImageResponsive>
    <style.BoxAllContent>
      <style.BoxImage></style.BoxImage>
      <style.BoxContent>
        <style.HeadlinePrincipal>Adele 21</style.HeadlinePrincipal>
        <style.BoxFlexLinear>
          <style.HeadlineSecondary>Lo mejor de Adele</style.HeadlineSecondary>
          <style.TextSpan>321, 123 seguidores</style.TextSpan>
        </style.BoxFlexLinear>
        <style.TextBody>
          Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.
        </style.TextBody>
        <style.BoxButtons>
          <style.ButtonStroker>
            Reproducir
          </style.ButtonStroker>
          <style.ButtonStroker className='stroke'>
            Seguir
          </style.ButtonStroker>
          <style.ButtonImage>
          </style.ButtonImage>
        </style.BoxButtons>
      </style.BoxContent>
    </style.BoxAllContent>
  </style.SectionBanner>
)

export default Banner
