import styled from 'styled-components'

export const CardResult = styled.div`
  display: grid;
  place-items: start;
  max-width: 7rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  @media (min-width: 720px) {
    max-width: 10rem;
  }
  &:hover{
    scale: 1.1;
  }
`
export const BoxImage = styled.div`
  position: relative;
  max-width: 7rem;
  width: 100%;
  height: 7rem;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2rem;
  background-image: ${(props) =>
    props.className === undefined
      ? 'url("https://images.pexels.com/photos/2479967/pexels-photo-2479967.jpeg?auto=compress&cs=tinysrgb&w=1600")'
      : `url("${props.className}")`};
  @media (min-width: 850px) {
    max-width: 10rem;
    height: 10rem;
  }
`
export const BoxImageButton = styled.button`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: transparent;
  border: none;

  @media (min-width: 720px) {
    & svg {
      scale: 2;
    }
  }
`
export const BoxImageOptions = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.8rem;
  background: transparent;
  border: none;
`
export const HeadingMusic = styled.h5`
  font: normal normal 700 0.9rem/1.2rem var(--font-principal);
  color: var(--black-100);
  margin-top: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`
export const TextAutor = styled.p`
  font: normal normal 400 0.75rem/1rem var(--font-principal);
  color: var(--black-70);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`



export const ButtonLink = styled.button`
  position: absolute;
  top: 0;
  left: 0%;
  z-index: 1;
  outline: none;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  display: flex;
  transition: 0.3s;
`

export const BoxImageAtrr = styled.img`
  max-width: 7rem;
  width: 100%;
  height: 7rem;
  border-radius: 2rem;
  @media (min-width: 850px) {
    max-width: 10rem;
    height: 10rem;
  }
`
export const HeadingAutor = styled.h5`
  font: normal normal 700 0.9rem/1.2rem var(--font-principal);
  color: var(--black-100);
  margin-top: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`

export const TexDescription = styled.p`
  font: normal normal 400 0.75rem/1rem var(--font-principal);
  color: var(--black-70);
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: justify;
`
