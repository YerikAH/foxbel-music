import styled from 'styled-components'

export const PopupStyles = styled.div`
  position: absolute;
  width: 100%;
  max-width: 5rem;
  background-color: var(--white);
  border-radius: 0.3rem;
  padding: 0.5rem 0;
  display: grid;
  z-index: 100;
  place-items: start;
  right: 0.5rem;
bottom: 5.5rem;
border: 1px solid var(--black-10);
box-shadow: 0px 0px 4px 4px #0002;
`
export const PopupList = styled.button`
  border: none;
  background-color: transparent;
  font: normal normal 600 0.7rem/1rem var(--font-principal);
  color: var(--black-100);
  padding: 0.1rem 0.5rem;
  text-align: left;
  width: 100%;
  &:hover{
    background-color: var(--black-10);
  }
`
