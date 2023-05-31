import { HomeContainer, Header, MainSection, FeatureList, Button, Image } from './Home.styled'
import ReactLogo from '../../assets/react.svg';


export const Home = () => {
  
  return (
    <>
   
    <HomeContainer>
      <Header>Countigo SRL</Header>
      <MainSection>
       Proyecto de Curso React 2023 Countigo:
        <FeatureList>
        <Image src={ReactLogo} alt="React"/>
        </FeatureList>
      </MainSection>
      <Button to="user">Navegar a usuarios</Button>
    </HomeContainer>
    </>
  )
}
