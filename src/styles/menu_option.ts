import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavigationMenu = styled.nav`
  position: fixed;
  width: 20.625rem;
  height: 100vh;
  padding: 3.125rem 2.5rem 10rem 2.5rem;
  left: 0;
  top: 0;
  background-color: var(--dark-red);
  overflow: auto;
  display: none;
  @media (min-width: 850px) {
    display: block;
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
`
export const MenuUl = styled.ul`
  gap: 0.8rem;
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
