import styled from 'styled-components'

export const PlaylistStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 5000;
  overflow: auto;
  padding: 1rem;
  background: var(--black-opacity);
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
`
export const PlaylistCenter = styled.div`
  padding: 2rem 1.5rem;
  background-color: var(--white);
  position: relative;
  width: 100%;
  max-width: 40rem;
    height: 30rem;
  overflow: auto;
  border-radius: 0.5rem;
`
export const PlaylistTitle = styled.h2`
  font: normal normal 600 1.2rem/1.5rem var(--font-principal);
  color: var(--light-red-two);
  text-align: left;
  margin-bottom: 0.5rem;
  white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
max-width: 12rem;
`
export const PlaylistAllOptions = styled.div`
  display: grid;
`
export const PlaylistOption = styled.button`
  border: none;
  background-color: transparent;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
`
export const PlaylistImage =styled.img`
width: 3rem;
height: 3rem;
object-fit: cover;
`
export const PlaylistInfo = styled.div`
  display:grid;
  place-items: start;
`
export const PlaylistTitleMusic = styled.h2`
  font: normal normal 600 1rem/1.2rem var(--font-principal);
  color: var(--black-100);
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 10rem;
  width: 100%;
  white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`
export const PlaylistAutor = styled.p`
  font: normal normal 400 0.8rem/1.2rem var(--font-principal);
  color: var(--black-70);
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 10rem;
  width: 100%;
    white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`
export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  background-color: transparent;
  border: none;
`
export const NotPlaylistStyle = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  place-items: center;
  padding: 1rem;
`
export const NotPlaylistText = styled.p`
  font: normal normal 500 0.8rem/1.5rem var(--font-principal);
  color: var(--soft-gray);
  text-align: center;
  margin-top: 1rem;
  max-width: 20rem;

`