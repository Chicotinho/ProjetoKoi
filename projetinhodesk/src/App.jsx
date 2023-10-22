// import './App.css';
import './index.css';
import { StyledButton } from './components/Button.style';
import { Wrapper } from './components/Wrapper.style';


function App() {
  return (
    <Wrapper>
      <StyledButton backgroundColor='red'>Teste funciona ai</StyledButton>
      <StyledButton>Teste funciona ai</StyledButton>
      <StyledButton>Teste funciona ai</StyledButton>
      <StyledButton>Teste funciona ai</StyledButton>
    </Wrapper>
  )
}

export default App;


// // ... Funções teste 
// onClick={() => console.log('Deu certo!')} //

