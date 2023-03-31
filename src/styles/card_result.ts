import styled from 'styled-components';

export const CardResult = styled.div`
    display: grid;
    place-items: start;
`
export const BoxImage = styled.div`
    position: relative;
    max-width: 10rem;
    height: auto;
    overflow: hidden;
`
export const BoxImageButton = styled.button`
    width: 100%;
    height: 100%;
    display: grid;
    place-items:center;
`
export const ImagePlay = styled.img`

`
export const BoxImageOptions = styled.button`
    position: absolute;
    top: 0;
    right:0;
    margin: 0.8rem;
`
export const HeadingMusic = styled.h5`
    font: normal normal 700 0.9rem/1.2rem var(--font-principal);
    color: var(--black-100);
`
export const TextAutor = styled.p`
    font: normal normal 400 0.75rem/1rem var(--font-principal);
    color: var(--black-50);
`