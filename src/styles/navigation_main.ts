import styled from 'styled-components'

export const NavigationMainStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 880px;
  width: 100%;
  margin: 2rem auto 2.5rem auto;
`
export const SearchInput = styled.input`
  font: normal normal 400 1.15rem/1.22rem var(--font-principal);
  color: var(--black-100);
  border-radius: 15rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
`
export const SearchStyles = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 32.75rem;
  border: 1px solid var(--soft-gray);
  border-radius: 15rem;
`
export const IconField = styled.div`
  position: absolute;
  scale: 0.8;
  margin: auto 0;
  top: 0;
  bottom: 0;
  right: 1rem;
  display: flex;
  place-items: center;
`
export const IconProfile = styled.button`
  display: flex;
  gap: 0.75rem;
  place-items: center;
  border: none;
  background: transparent;
`
export const TextProfile = styled.p`
  font: normal normal 400 1rem/1.5rem var(--font-principal);
  color: var(--gray);
`
