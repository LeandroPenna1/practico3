import styled from 'styled-components';
/* importamos la librería Styled Components y designamos estilos para los botones */
export const Boton = styled.button`
  background-color: white;
  color: rgb(15, 15, 79);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all .3s ease;

${'' /* Aquí, al posar el cursor sobre el botón, cambiará el color */}
&:hover {
background: #09f; 
}
`
