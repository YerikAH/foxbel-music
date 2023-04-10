import styled from 'styled-components'

export const BannerOptionPrincipal = styled.div`
  max-width: 250px;
  height: 100%;
  display: none;
  position: relative;
  overflow: hidden;
  height: 250px;
  @media (min-width: 850px) {
    display: block;
  }
`
export const BannerImagePrincipal = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const BannerOptions = styled.div`
  overflow: auto;
  display: grid;
  place-items: start;
  height: 250px;
  background-color: var(--black-10);
`
export const BannerAllOptinos = styled.button`
  display: flex;
  width: 100%;
  place-items: start;
  border: none;
  background: transparent;
  padding: 0.2rem 0.5rem;
  gap: 1rem;
  &:hover{
    background: #0001;
  }
`
export const BannerOptionsImage = styled.img`
  width: 100%;
  max-width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  border-radius: 0.2rem;
`
export const BannerOptionInfo = styled.div`
  display: grid;
`
export const BannerMusic = styled.h6`
  font: normal normal 600 1rem/1.2rem var(--font-principal);
  color: var(--black-100);
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 10rem;
  width: 100%;
`
export const BannerAutor = styled.p`
  font: normal normal 400 0.8rem/1.2rem var(--font-principal);
  color: var(--black-70);
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 10rem;
  width: 100%;
`
