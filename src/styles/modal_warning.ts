import styled from 'styled-components'

export const ModalWarningStyles = styled.div`
    padding: 2rem 1.5rem;
  background-color: var(--white);
  position: relative;
  width: 100%;
  max-width: 25rem;
  border-radius: 0.5rem;
`
export const ModalWarningTitle = styled.h2`
  font: normal normal 600 1.2rem/1.5rem var(--font-principal);
  color: var(--light-red-two);
  text-align: left;
  margin-bottom: 0.5rem;
`
export const ModalWarningText = styled.p`
  font: normal normal 400 0.8rem/1rem var(--font-principal);
  color: var(--black-70);
  text-align: justify;
  margin-bottom: 1rem;
`
export const ModalWarningWindonw = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 7000;
  overflow: auto;
  padding: 1rem;
  background: var(--black-opacity);
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
`
export const ModalWarningBoxButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: column;
  @media (min-width: 850px) {
    flex-direction: row;
    justify-content: end;
  }
`
export const ModalWarningBotton = styled.button`
  font: normal normal 400 0.9rem/1rem var(--font-principal);
  color:${props => props.className !== 'stroke' ?'var(--white)' : 'var(--light-red-two)'};
  background-color: ${props => props.className === 'stroke' ?'transparent' : 'var(--light-red-two)'};
  border-radius: 15rem;
  text-align: center;
  border: none;
  padding: 0.5rem 1rem;
  border: ${props => props.className === 'stroke' ?'1px solid var(--light-red-two)' : 'none'};
`
export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  background-color: transparent;
  border: none;
`

