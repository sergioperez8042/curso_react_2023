import { Link } from "react-router-dom"
import { styled } from "styled-components"

export const HomeContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Header = styled.h1`
  font-size: 2.5em;
  color: #333;
`

export const MainSection = styled.section`
  font-size: 1.2em;
  color: #666;
  margin: 1em 0;
  margin-left: 30px;
`

export const FeatureList = styled.ul`
  list-style-type: none;
`

export const FeatureItem = styled.li`
  margin: 0.5em 0;
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
  align-self: center;
  margin-right: 30px;
`

export const Button = styled(Link)`
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 0.25em;
  margin-top: 2em;
  margin-left: 30px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`