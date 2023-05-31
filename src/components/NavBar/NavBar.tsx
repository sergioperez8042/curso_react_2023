import { Menu } from 'antd';
import { FC } from 'react';
import ReactLogo from '../../assets/react.svg';
import { AvatarContainer, Container } from './NavBar.styled';
type MenuOption = {
  key: string;
  path: string;
  name: string;
};

type NavBarProps = {
  navigate: (path: string) => void;
  menuOptions: MenuOption[];
  username: string;
};

export const NavBar: FC<NavBarProps> = ({ navigate, menuOptions, username }) => {
  const defaultAvatarImageUrl = ReactLogo;

  return (
    <Container>
    
    <Menu mode="horizontal">
      {menuOptions.map(({ key, path, name }) => (
        <Menu.Item key={key} onClick={() => navigate(path)}>
          {name}
        </Menu.Item>
      ))}
    </Menu>
        <AvatarContainer  src={defaultAvatarImageUrl}>{username}</AvatarContainer>
        </Container>
  );
};
