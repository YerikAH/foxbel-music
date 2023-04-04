import styled from 'styled-components'

export const NavigationMainStyle = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 880px;
  width: 100%;
  margin: 2rem auto 2.5rem auto;
  gap: 1rem;
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
  margin-top: 4rem;
  background: var(--white);
  border-radius: 1rem;
  box-shadow: 2px 10px 5px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 2px 10px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 2px 10px 5px 0px rgba(0, 0, 0, 0.15);
  z-index: 300;
  height: 18.75rem;
  overflow: auto;
`
export const NotFoundStyles = styled.div`
  display: grid;
  place-items: center;
  place-content: center;
  width: 100%;
  height: 100%;
`
export const TextNotFound = styled.p`
  font: normal normal 700 1rem/1.5rem var(--font-principal);
  color: var(--soft-gray);
  text-align: center;
  margin-top: 1rem;
  max-width: 20rem;
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
  display: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (min-width: 850px) {
    display: block;
  }
`
export const ResultStyle = styled.button`
  background: transparent;
  border: none;
  display: flex;
  place-items: start;
  gap: 0.5rem;
  width: 100%;
  &:hover {
    background: #00000010;
  }
`
export const ResultStyleImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
`
export const ResultStyleDetail = styled.div`
  display: grid;
  place-items: start;
`
export const ResultStyleTitle = styled.h6`
  font: normal normal 600 0.9rem/1.1rem var(--font-principal);
  color: var(--black-100);
  text-align: left;
`
export const ResultStyleAutor = styled.p`
  font: normal normal 400 0.75rem/1.1rem var(--font-principal);
  color: var(--gray);
  text-align: left;
`
