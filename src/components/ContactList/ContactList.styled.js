import styled from 'styled-components';

export const List = styled.ul`
  list-style: circle;
  margin: 0;
  padding: 30px 0px 30px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ContactItem = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #bdbdbd;
`;
