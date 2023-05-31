import styled from 'styled-components';
type InputFormProps = {
  error?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px; 
  padding: 20px;
  margin: 0 auto; 
  background: #fff; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px; 
`;

export const InputForm = styled.input<InputFormProps>`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fafafa;
  outline: none;

  &:focus {
    border-color: #9ecaed; // Cambia el color del borde cuando el input está enfocado
    box-shadow: 0 0 10px #9ecaed; // Añade una sombra cuando el input está enfocado
  }

  ${props => props.error && `
    border-color: #ff3860;
    box-shadow: none;
  `}
`;
export const Error = styled.p`
  color: #ff3860;
  margin-bottom: 20px;
`;
