import { css } from 'styled-components'

export const WhiteLine = (circleX: number, circleY: number, width: number, height: number) => css`
  background: transparent;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${circleY}px;
    width: ${circleX}px;
    background-color: white;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    margin-top: -8px;
  }
  &::-moz-range-thumb {
    height: ${circleY}px;
    width: ${circleX}px;
    background-color: white;
    cursor: pointer;
    border-radius: 50%;
    border: none;
  }
  &::-ms-thumb {
    height: ${circleY}px;
    width: ${circleX}px;
    background-color: white;
    cursor: pointer;
    border-radius: 50%;
    border: none;
  }
  &::-webkit-slider-runnable-track {
    height: ${height}px;
    width: ${width}px;
    background-color: white;
    border-radius: 150rem;
    border: none;
  }
  &::-moz-range-track {
    height: ${height}px;
    width: ${width}px;
    background-color: white;
    border-radius: 2px;
    border: none;
  }
  &::-ms-track {
    height: ${height}px;
    width: ${width}px;
    background-color: white;
    border-radius: 2px;
    border: none;
  }
`
