import { useState } from 'react';
import styled from 'styled-components';
import { Div } from '.';
import Span from '../styled/Span';

const Input = styled.input.attrs(props =>({ 
    autoComplete: 'off',
    type:props.iType,
  }))`
    autocomplete:"off";
    padding: ${props => props.iPadding};
    margin: ${props => props.iMargin};
    color: ${props => props.tColor};
    background: ${props => props.bgColor};
    border: ${props => props.iBorder};
    border-radius: ${props => props.iBorderRadius};
    width: ${props => props.iWidth};
    text-align: ${props => props.iTxtAlign};
    &:focus {
        outline: none;
        box-shadow: ${props => props.iShadow};
    }
`;

const ErrorMessage = styled.div`
clear: both;
position: absolute;
left: ${props => props.messagePosition};
`;

const Arrow = styled.div`
width: 12px;
  height: 20px;
  overflow: hidden;
  position: relative;
  float: left;
  top: 6px;
  right: -1px;
`;

const Outer = styled.div`
  width: 0;
  height: 0;
  border-right: 20px solid #f44236;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  position: absolute;
  top: 0;
  left: 0;
`;

const Inner = styled.div`
 width: 0;
  height: 0;
  border-right: 20px solid #f44236;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  position: absolute;
  top: 0;
  left: 2px;
`;

const Message = styled.div`
float: left;
display:flex;
flex-direction:column; 
font-size:0.8vw;
width: max-content;
height: auto;
background-color:#f44236 ;
padding: 1vw;
border-radius: 5px;
color:#fff;
z-index:200;
`

Input.defaultProps = {
    iPadding: "0.6rem 0.8rem",
    alignItem: "center",
    bgColor: "#ffffff",
    tColor: "#495057",
    iBorderRadius: "4px",
    iWidth: "100%",
    iBorder: "1px solid #c9c9c9",
    iShadow: "0 0 5pt 2pt #D3D3D3", 
}

const InputBox = (props) => {

   const {label,Error,ErrorName,MessagePosition} = props;
   const [ShowErrorMessage,Show] = useState(false);
   let error = Error && Error[props.name];

    return (
        <Div flexDirection="column" jContent="" alignItem="" positionVal="relative" marginVal={props.iMargin}>
         <Div jContent="" alignItem="" > {label && <Span style={{'display':'flex','alignItems':'start','margin':'0.5rem 0 0.3rem 0','color':'#7b8996'}} >{label} {props.required && <i className="fas fa-asterisk" style={{'color':'red','margin':'0.1rem 0 0 0.1rem','fontSize':'0.4rem'}} ></i>}</Span>} {Error && ErrorName.includes(props.name) &&  <Span onMouseOver={() =>Show(true)} onMouseLeave={() =>Show(false)} style={{'margin':'0.5rem 0 0.3rem 0.5rem','color':'red'}} ><i className="fas fa-exclamation-circle"></i></Span>}
         {Error && ShowErrorMessage && 
         <ErrorMessage messagePosition={props.messagePosition} >
        <Arrow>
             <Outer></Outer>
             <Inner></Inner>
         </Arrow>
         <Message>{error && error.map(function(item, i){ return <Span key={i}>{item}</Span>})}</Message>
         </ErrorMessage> 
         }
         </Div>
          <Input disabled={props.disabled} defaultValue={props.defaultValue} iType={props.iType} style={{fontSize:props.fontSize}} onKeyUp={props.onKeyUp} onInvalid={(e) => e.preventDefault()} onClick={() => props.onClick && props.onClick()} onFocus={() =>props.Focus && props.Focus(props.name)} id={props.id} required={props.required} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} iPadding={props.iPadding} tColor={props.tColor} iShadow={props.iShadow} iBorderRadius={props.iBorderRadius}  iBorder={ ErrorName && ErrorName.includes(props.name)? "1px solid red" : props.iBorder} iTxtAlign={props.iTxtAlign} iWidth={props.iWidth} />
        </Div>
    )
}


export default InputBox;