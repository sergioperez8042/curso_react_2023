import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { DeleteOutlined } from "@ant-design/icons";
export const UserListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background: #f5f5f5;
`;

export const UserContainer = styled.div`
  background: #fff;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 100%;
  max-width: 500px;
  transition: transform .3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

export const ButtonShowMore = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: #007BFF;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
export const DeleteButton = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: red;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  

  &:hover {
    background-color: #0056b3;
  }
`;

export const UserDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em;
`;

export const StyledLink = styled(Link)`
  margin: 0.5em;
  color: #007BFF;
  text-decoration: none;
  &:hover {
    color: #0056b3;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 1em;
  justify-content:space-between;
`;

export const DeleteIcon = styled(DeleteOutlined)`
margin-right: 0.5em;
`;