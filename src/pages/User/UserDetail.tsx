import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import { UserDetailContainer, StyledLink, Title, Description, ButtonContainer, UserContainer, DeleteButton, ButtonShowMore } from "./index.styled";


export const UserDetail = () => {
  const { data, setData } = useContext(AppContext);
  
  const params = useParams();
  const navigate = useNavigate();
  const handleUser = () => {
    const result = data.users.find(
      (element) => element.id.toString() === params.id
    );
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setData({ ...data, user: result! });
  };

  const onBack = () => {
    navigate(-1);
  };
  const onDelete = () => {
    const updatedUsers = data.users.filter((element) => element.id.toString() !== params.id);
    setData({ ...data, users: updatedUsers });
    navigate(-1);
  };
  useEffect(() => {
    handleUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <UserDetailContainer>
      <ButtonContainer>
        <StyledLink to="/users/create">
          Create
        </StyledLink>
        <StyledLink to="/users/update">
          Update
        </StyledLink>
      </ButtonContainer>
      <UserContainer>
        <Title>
          {data.user.name.toUpperCase()}
        </Title>
        <Description>{data.user?.email}</Description>
        <ButtonContainer>
        <ButtonShowMore onClick={onBack}>Back</ButtonShowMore>
        <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        </ButtonContainer>
      </UserContainer>
    </UserDetailContainer>
  );
};
