import styled from 'styled-components'

export const PlayerMusicStyle = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: var(--light-red);
  z-index: 500;
`

export const MusicStyleContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const DetailMusic = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: start;
  align-items: center;
`
export const ImageMusic = styled.img`
  width: 100%;
  height: 100%;
  max-width: 6.25rem;
  object-fit: cover;
`
export const DescriptionMusic = styled.div`
  display: grid;
`
export const TitleMusic = styled.h2`
  font: normal normal 700 0.9rem/1.2rem var(--font-principal);
  color: var(--white);
`
export const AutorMusic = styled.span`
  margin-top: 0.5rem;
  font: normal normal 400 0.75rem/1rem var(--font-principal);
  color: var(--white);
`
export const PlayerButtons = styled.div`
  display: flex;
  place-items: center;
  gap: 1.2rem;
`
export const ButtonPlay = styled.button`
  border: none;
  border-radius: 15rem;
  background: var(--light-red-two);
  padding: 1.2rem;
`
export const ButtonOption = styled.button`
  border: none;
  background: transparent;
  rotate: ${(props) => props.className === 'back' && '-180deg'};
`

export const BoxVolumen = styled.div`
  display: flex;
  place-items: center;
  gap: 2.5rem;
`
export const IconVolumen = styled.img``
export const SliceVolumen = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 20px;
  background: transparent;
  margin: 10px 0;
  width: 100px;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background-color: white;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    margin-top: -8px;
  }
  &::-moz-range-thumb {
    height: 20px;
    width: 20px;
    background-color: white;
    cursor: pointer;
    border-radius: 50%;
    border: none;
  }
  &::-ms-thumb {
    height: 20px;
    width: 20px;
    background-color: white;
    cursor: pointer;
    border-radius: 50%;
    border: none;
  }
  &::-webkit-slider-runnable-track {
    height: 6px;
    width: 100px;
    background-color: white;
    border-radius: 150rem;
    border: none;
  }
  &::-moz-range-track {
    height: 6px;
    width: 100px;
    background-color: white;
    border-radius: 2px;
    border: none;
  }
  &::-ms-track {
    height: 6px;
    width: 100px;
    background-color: white;
    border-radius: 2px;
    border: none;
  }
`
