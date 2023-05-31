
// import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
// import { AppContext } from "../../context";
import { useGetUsers } from '../../modules/User/hooks/useGetUser';
import { UserListContainer, UserContainer, Title, Description, ButtonShowMore } from './index.styled';
import { Spin } from 'antd';
import { useContext } from "react";
import { AppContext } from '../../context/index';
export const UserList = () => {
  const {loading } = useGetUsers();
  const {data} = useContext(AppContext);
  const navigate = useNavigate();

  const handleShowMore = (id: number) => {
    navigate({ pathname: id.toString() });
  };

  return (


    <UserListContainer>
      {
        loading && <Spin/>
      }
      {data.users.map((element) => (
        <UserContainer key={element.id}>
          <Title>{element.name.toUpperCase()}</Title>
          <Description>{element.email}</Description>
          <ButtonShowMore onClick={() => handleShowMore(element.id)}>
            Show More
          </ButtonShowMore>
        </UserContainer>
      ))}
    </UserListContainer>
  );
};
