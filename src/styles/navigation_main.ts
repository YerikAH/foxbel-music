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
  position: relative;
`
export const SearchResultsBox = styled.div`
  position: absolute;
  width: 100%;
  height:20px;
  background: var(--white);
  border-radius: 1rem;
  bottom: -5rem;
  padding: 2rem;
  box-shadow: 2px 10px 5px 0px rgba(0,0,0,0.15);
-webkit-box-shadow: 2px 10px 5px 0px rgba(0,0,0,0.15);
-moz-box-shadow: 2px 10px 5px 0px rgba(0,0,0,0.15);
  z-index: 300
  
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
