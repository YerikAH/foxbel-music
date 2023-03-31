import styled from 'styled-components'

export const NavigationMenu = styled.nav`
  position: fixed;
  width: 20.625rem;
  height: 100vh;
  padding: 3.125rem 2.5rem;
  left: 0;
  top: 0;
  background-color: var(--dark-red);
`
export const MenuBoxUl = styled.div`
  display: grid;
  gap: 1.875rem;
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
export const MenuListLink = styled.a`
  width: 100%;
  font: normal normal 400 1rem/2rem var(--font-principal);
  color: var(--white);
  display: flex;
`
