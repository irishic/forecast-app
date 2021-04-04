import styled from 'styled-components';

export const WeatherListDate = styled.h4`
  text-decoration: underline;
  margin-bottom: 10px;
`;

export const WeatherListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;