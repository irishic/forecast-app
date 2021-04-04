import styled, { css } from 'styled-components';

const centeredFlexStyles = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 600;
  justify-content: space-around;
`;

const commonPaddingStyles = css`
  padding: 10px 0;
`;

export const Tile = styled.div`
  margin-bottom: 10px;

  @media screen and (max-width: 1000px) {
    flex-basis: 33%;
  }
  @media screen and (max-width: 500px) {
    flex-basis: 50%;
  }
`;

export const TileContent = styled.div`
  display: grid;
  border: none;
  padding: 0;
  grid-template-rows: 150px 50px 1fr;
  
  p {
    margin: 0 0 5px;
  }
`;

export const ForecastPreviewWrapper = styled.div`
  ${centeredFlexStyles}
  padding: 10px 20px;

  img {
    width: 70px;
    margin: 0 auto;
  }

  .tile-feels-like {
    font-size: 0.8rem;
  }

  .tile-temp {
    font-size: 1.2rem;
  }
`;


export const ForecastDescriptionWrapper = styled.div`
  ${commonPaddingStyles}
  margin-left: 20px;

  span {
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

export const ForecastDateWrapper = styled.div`
  ${centeredFlexStyles}
  ${commonPaddingStyles}

  background: #3298dc;
`;