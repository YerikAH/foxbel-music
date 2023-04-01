import styled from 'styled-components'

export const PlayerMusicStyle = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: var(--light-red);
`

export const MusicStyleContent = styled.div`
  display: flex;
  justify-t: space-between;
`
export const DetailMusic = styled.div`
  display: flex;
  gap: 1.2rem;
`
export const ImageMusic = styled.img`
  width: 100%;
  height: 100%;
  max-width: 6.25rem;
`
export const DescriptionMusic = styled.div`
  display: grid;
`
export const TitleMusic = styled.h2`
  font: normal normal 700 0.9rem/1.2rem var(--font-principal);
  color: var(--white);
`
export const AutorMusic = styled.span`
  margin-top: 0.5rem;
  font: normal normal 400 0.75rem/1rem var(--font-principal);
  color: var(--white);
`

export const PlayerButtons = styled.div``
export const ButtonPlay = styled.button``
export const ButtonOption = styled.button``

export const BoxVolumen = styled.div``
export const IconVolumen = styled.img``
export const SliceVolumen = styled.input``
