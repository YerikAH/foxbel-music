import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavigationMenu = styled.nav`
  position: fixed;
  width: 16.625rem;
  height: 100vh;
  padding: 3.125rem 2.5rem 10rem 2.5rem;
  left: -100vw;
  top: 0;
  z-index: 2000;
  background-color: var(--dark-red);
  overflow: auto;
  transition: 0.3s;
  @media (min-width: 850px) {
     left: 0 !important;
     width: 20.625rem;
  }
`
export const NavigationHam = styled.button`
  display: block;
  position: absolute;
  z-index: 100;
margin: 2.5rem 0.5rem;
right: 0;
top: 0;
background-color: transparent;
border:none;
  @media (min-width: 850px) {
    display: none;
  }
`
export const MenuBoxUl = styled.div`
  display: grid;
  gap: 1.875rem;
  margin-top: 1.8rem;
`
export const ImageLogo = styled.img``
export const MenuLinkTitle = styled.h5`
  font: normal normal 700 1.5rem/2rem var(--font-principal);
  color: var(--white);
  margin-bottom:${props => props.className && ' 1.6rem'};
`
export const MenuUl = styled.ul`
  gap: ${props => props.className === 'separate' && ' 0.8rem'};
  display: grid;
`
export const MenuList = styled.li`
  width: 100%;
`
export const MenuListLink = styled(Link)`
  width: 100%;
  font: normal normal 400 1rem/2rem var(--font-principal);
  color: ${(props) => (props.className === 'true' ? 'var(--red-principal)' : 'var(--white)')};
  font-weight: ${(props) => (props.className === 'true' ? '700' : '400')};
  display: flex;
  &::before {
    content: '';
    height: 100%;
    position: relative;
    background: ${(props) => (props.className === 'true' ? 'var(--red-principal)' : 'transparent')};
    width: 5px;
    height: auto;
    left: -2.5rem;
  }
`
export const ListPlaylistRemove = styled.button`
  background-color: transparent;
  border: none;
  display: none;
`
export const ListPlaylist = styled.button`
  width: 100%;

  display: flex;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  opacity: 0.7;
  border-radius: 1rem;
  padding: 0.5rem 1rem ;
  &:hover{
    background-color: #fff2;
    & button{
        display: block;
    }
  }
`
export const ListPlaylistText = styled.p`
  font: normal normal 400 1rem/2rem var(--font-principal);
  color:  var(--white);
  max-width: 10rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;

`

export const MenuListButton = styled.button`
  background: transparent;
  border: none;
  font: normal normal 700 1rem/2rem var(--font-principal);
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  color: var(--light-red-two);
  border-radius: 1rem;
  padding: 0.5rem ;
  transition: 0.3s;
  &:hover{
    background-color: var(--soft-red-two);
  
  }
`
