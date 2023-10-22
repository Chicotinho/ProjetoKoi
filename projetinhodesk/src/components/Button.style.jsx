import styled from 'styled-components'

export const StyledButton = styled.button `
/* ...colocar os estilos */
background-color: ${(prop) => prop.backgroundColor ? prop.backgroundColor :  'pink'};
width: 40vw;
height: 20vh;

&:active{
    background-color: #4736e490;
}
`