import styled from 'styled-components'

export const MainStyle = styled.main`
  width: 100%;
  display: grid;
  @media (min-width: 850px) {
    grid-template-columns: 20.625rem auto;
  }
`

export const SimulationMenuOption = styled.div`
  width: 20.625rem;
  display: none;
  @media (min-width: 850px) {
    display: block;
  }
`

export const SectionBox = styled.section``
export const SectionResults = styled.div`
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, 7rem);
  gap: 1.25rem;
  place-content: center;
  place-items: center;
  @media (min-width: 850px) {
    grid-template-columns: repeat(auto-fill, 10rem);
    place-content: start;
    place-items: start;
  }
  @media (min-width: 1260px) {
    max-width: 880px;
  }
`
export const HeadlinePrincipal = styled.h2`
  font: normal normal 700 1.375rem/1.75rem var(--font-principal);
  color: var(--red-principal);
  width: 100%;
  margin-bottom: 1.2rem;
  @media (min-width: 1260px) {
    max-width: 880px;
    margin: 0 auto 1.2rem auto;
  }
`
