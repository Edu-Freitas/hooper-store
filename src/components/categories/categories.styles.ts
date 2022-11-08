import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px dotted #f7f7f7;
`

export const CategoriesContent = styled.div`
  height: 100%;
  width: 1920px;
  display: grid;
  grid-template-areas:
    'e e e c b'
    'a a a d d';
  grid-gap: 25px;
  padding: 30px;

  & div:nth-child(1) {
    grid-area: a;
  }
  & div:nth-child(2) {
    grid-area: b;
  }
  & div:nth-child(3) {
    grid-area: c;
  }
  & div:nth-child(4) {
    grid-area: d;
  }
  & div:nth-child(5) {
    grid-area: e;
  }
`
