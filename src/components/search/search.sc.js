import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .control {
    flex: 1;
  }

  button {
    margin-left: 10px;
  }

  input {
    box-sizing: border-box;
  }

  @media screen and (max-width: 1030px) {
    padding: 0 5px;
  }
`;