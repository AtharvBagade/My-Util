import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:${props => props.flexDirection};
justify-content:${props => props.jContent};
font-family:${props => props.fontFamily};
background:${props => props.bg};
box-shadow:${props => props.boxShadow};
border-radius:${props => props.borderRadius};
align-items:${props => props.alignItems};
height:${props => props.height};
width:${props => props.width};
padding:${props => props.padding};
margin:${props => props.margin};
flex-wrap:${props => props.flexWrap};
overflow-x:${props => props.overflowX};
float:${props => props.float};
opacity:${props => props.disabled? "0.7":props.opacity};
pointer-events:${props => props.disabled ? "none":props.pointerEvents};
transition:0.6s all ease-in-out;
@media(min-width:1000px)
{
  width:${props => props.widthAfter1000};
}
`;

Container.defaultProps = {
    flexDirection:"column",
    bg:"#fff",
    borderRadius:"20px",
    alignItems:"center",
    height:"max-content",
    width:"max-content",
    padding:"2rem",
    margin:"",
    boxShadow:"0px 1px 17px -8px rgba(0,0,0,1)",
    flexWrap:"nowrap"
};

const Card = (props) => {
  return (
    <Container id={props.id} {...props} >
        {props.children}
    </Container>
  )
}

export default Card;