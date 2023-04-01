import styled from 'styled-components'

export const SectionBanner = styled.section`
  display: grid;
  max-width: 880px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 850px) {
    grid-template-columns: 250px auto;
  }
`

export const BoxImageResponsive = styled.div`
  max-width: 250px;
  height: 100%;
  display: none;
  @media (min-width: 850px) {
    display: block;
  }
`
export const ImageAutor = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const BoxAllContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const BoxImage = styled.div`
  background-image: ${(props) =>
    props.className === undefined
      ? 'url("https://images.pexels.com/photos/2479967/pexels-photo-2479967.jpeg?auto=compress&cs=tinysrgb&w=1600")'
      : `url("${props.className}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`
export const BoxColorImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 50;
`
export const BoxContent = styled.div`
  padding: 2.5rem 2rem 2rem 2rem;
  width: 100%;
  height: 100%;
  background: var(--dark-red-50);
  position: relative;
  z-index: 100;
`

export const HeadlinePrincipal = styled.h1`
  font: normal normal 400 1.2rem/1.75rem var(--font-principal);
  color: var(--white);
`
export const BoxFlexLinear = styled.div`
  display: flex;
  gap: 1rem;
  display: flex;
  place-items: end;
`
export const HeadlineSecondary = styled.h2`
  font: normal normal 700 0.9rem/1.125rem var(--font-principal);
  color: var(--white);
`
export const TextSpan = styled.span`
  font: normal normal 400 0.625rem/0.75rem var(--font-principal);
  color: var(--dark-red);
`

export const TextBody = styled.p`
  font: normal normal 400 0.75rem/1.25rem var(--font-principal);
  color: var(--white);
  margin-top: 1.25rem;
`
export const BoxButtons = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 3.625rem;
`
export const ButtonStroker = styled.button`
  border-radius: 15rem;
  font: normal normal 400 0.9rem/1.2rem var(--font-principal);
  background: ${(props) => (props.className === 'stroke' ? 'transparent' : 'var(--red-principal)')};
  border: ${(props) => (props.className === 'stroke' ? '1px solid var(--red-principal)' : 'none')};
  color: ${(props) => (props.className === 'stroke' ? 'var(--red-principal)' : 'var(--white)')};
  padding: 0.5rem 1.2rem;
`
export const ButtonImage = styled.button`
  border: none;
  background: transparent;
`
