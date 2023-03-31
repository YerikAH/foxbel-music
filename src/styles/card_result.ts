import styled from 'styled-components'

export const CardResult = styled.div`
  display: grid;
  place-items: start;
  max-width: 7rem;
  width: 100%;
  @media (min-width: 720px) {
    max-width: 10rem;
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
`
export const TextAutor = styled.p`
  font: normal normal 400 0.75rem/1rem var(--font-principal);
  color: var(--black-50);
`
