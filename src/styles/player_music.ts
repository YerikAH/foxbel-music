import styled from 'styled-components'
import { WhiteLine } from './mixins'

export const PlayerMusicStyle = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: var(--light-red);
  z-index: 500;
`

export const MusicStyleContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const DetailMusic = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: start;
  align-items: center;

  @media (min-width: 720px) {
    width: 100%;
    max-width: 15.625rem;
  }
`
export const ImageMusic = styled.img`
  max-width: 3.25rem;
  width: 100%;
  object-fit: cover;
  height: 100%;
  @media (min-width: 850px) {
    max-width: 6.25rem;
  }
`
export const DescriptionMusic = styled.div`
  display: none;
  @media (min-width: 850px) {
    display: grid;
  }
`
export const TitleMusic = styled.h2`
  font: normal normal 700 0.9rem/1.2rem var(--font-principal);
  color: var(--white);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const AutorMusic = styled.span`
  margin-top: 0.5rem;
  font: normal normal 400 0.75rem/1rem var(--font-principal);
  color: var(--white);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const PlayerRepro = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  place-content: center;
`
export const PlayerTimer = styled.input`
  ${WhiteLine(5, 5, 200, 3)}
  transition: 0.3s;
  width: 200px;
  height: 3px;

  @media (min-width: 720px) {
    ${WhiteLine(5, 5, 400, 3)}
    width: 400px;
  }
`
export const PlayerButtons = styled.div`
  display: flex;
  place-items: center;
  gap: 1.2rem;
  padding: 0.5rem 0;
  @media (min-width: 850px) {
    padding: 0;
  }
`
export const ButtonPlay = styled.button`
  border: none;
  border-radius: 15rem;
  background: var(--light-red-two);
  padding: 0.5rem;
  @media (min-width: 850px) {
    padding: 1.2rem;
  }
`
export const ButtonOption = styled.button`
  border: none;
  background: transparent;
  rotate: ${(props) => props.className === 'back' && '-180deg'};
`

export const BoxVolumen = styled.div`
  display: flex;
  place-items: center;
  gap: 2.5rem;
  margin-right: 2rem;
`
export const IconVolumen = styled.div`
  scale: 1;
  width: 24px;
  @media (min-width: 850px) {
    scale: 1.5;
  }
`
export const SliceVolumen = styled.input`
  ${WhiteLine(20, 20, 100, 6)}
  height: 20px;
  margin: 10px 0;
  width: 100px;
  rotate: 90deg;
  display: none;
  @media (min-width: 850px) {
    rotate: 0deg;
    display: block;
  }
  &:focus {
    outline: none;
  }
`
