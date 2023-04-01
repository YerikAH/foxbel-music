import styled from 'styled-components'

export const MainStyle = styled.main`
  width: 100%;
  display: grid;
  @media (min-width: 850px) {
    grid-template-columns: 20.625rem auto;
  }
`

export const SimulationMenuOption = styled.section`
  width: 20.625rem;
  display: none;
  @media (min-width: 850px) {
    display: block;
  }
`

export const SectionBox = styled.article`
  padding: 0 0.5rem 125px 0.5rem;
  overflow: auto;
  height: 100vh;
  @media (min-width: 850px) {
    padding: 0 2.5rem 125px 2.5rem;
  }
`
export const SectionResults = styled.section`
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
  margin-top: 2.5rem;
  @media (min-width: 1260px) {
    max-width: 880px;
    margin: 2.5rem auto 1.2rem auto;
  }
`
export const IframeDezzer = styled.div`
  width: 100%;
  max-width: 880px;
  margin: 0 auto;

`