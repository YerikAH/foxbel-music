import styled from 'styled-components'

export const ModalStyles = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 6000;
  overflow: auto;
  padding: 1rem;
  background:var(--black-opacity);
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
`
export const ModalCenter = styled.div`
  padding: 2rem 1.5rem;
  background-color: var(--white);
  position: relative;
  width: 100%;
  max-width: 25rem;
  border-radius: 0.5rem;
`
export const TitleModal = styled.h1`
  font: normal normal 600 1.2rem/1.5rem var(--font-principal);
  color: var(--light-red-two);
  text-align: left;
  margin-bottom: 0.5rem;
`
export const DescriptionModal = styled.p`
  font: normal normal 400 0.8rem/1rem var(--font-principal);
  color: var(--black-70);
  text-align: justify;
  margin-bottom: 1rem;
`
export const FormModal = styled.form`
  display: grid;
  width: 100%;
  gap: 0.5rem;
`
export const InputText = styled.input`
  font: normal normal 400 0.9rem/1rem var(--font-principal);
  color: var(--black-100);
  border-radius: 15rem;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border:1px solid var(--black-70)  ;
`
export const ButtonSubmit = styled.button`
  font: normal normal 400 0.9rem/1rem var(--font-principal);
  color: var(--white);
  background-color: var(--light-red-two);
  border-radius: 15rem;
  text-align: center;
  border: none;
  padding: 0.5rem 1rem;
`
export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  background-color: transparent;
  border: none;
`
