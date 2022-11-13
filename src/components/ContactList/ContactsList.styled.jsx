import styled from 'styled-components';

export const List = styled.ul`
  width: 350px;
  font-size: 20px;
  padding-bottom: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextList = styled.p`
  font-weight: bold;
  color: black;
`;

export const ButtonList = styled.button`
  width: 70px;
  height: 20px;
  border-radius: 4px;
  background-color: rgb(245, 122, 122);
  color: black;
  font-weight: bold;
`;

export const ItemBox = styled.div`
  display: flex;
  width: 350px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
