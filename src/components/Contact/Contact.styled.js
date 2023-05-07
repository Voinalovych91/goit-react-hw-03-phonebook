import styled from 'styled-components';

export const ContactItemBtn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  color: tomato;
  background-color: #fff;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 250ms ease-in-out;
  :hover,
  :focus {
    color: red;
  }
`;
