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
export const BoxImage = styled.img`
  max-width: 7rem;
  width: 100%;
  height: 7rem;
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
export const TextAutor = styled.p`
  font: normal normal 400 0.75rem/1rem var(--font-principal);
  color: var(--black-70);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`