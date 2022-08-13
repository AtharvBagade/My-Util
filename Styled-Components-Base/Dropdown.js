import React, { useRef, useState } from 'react';
import styled from "styled-components";
import { Span } from '../styled';
import { Div } from '../styled';
import { useEffect } from 'react';

const Wrapper =styled.div`
width:${props => props.widthVal};
background-color:${props => props.bgColor};
position:relative;
margin: ${props => props.marginVal};
border:${props => props.borderVal};
border-radius: 4px;
`;

const Header = styled.div`
display:flex;
padding:0.6rem 0.8rem;
font-size:1rem;
`;

const List = styled.div`
height:${props => props.heightVal};
overflow:auto;
width:100%;
position:absolute;
marginVal:${props => props.marginVal};
bottom:${props => props.bottomVal};
padding:0;
background:#fff;
height:${props => props.height};
border: 2px solid #e5e5e5;
z-index:100;
opacity:${props => props.opacity};
  pointer-events:${props => props.pointerEvents};
`
const ListItem = styled.div`
  display:flex;
  width:100%;
  pointer-events:${props => props.pointerEvents};
  background:#fff;
  flex-direction:column;
  align-items:none;
  justify-content:none;
  padding:0.5rem;
  list-style: none;
  border-top: 1px solid #e5e5e5;
  z-index:100;
  &:hover{
   background:#faebd7;
  }
`;

Wrapper.defaultProps = {
    marginVal:"0 auto",
    borderVal:"1px solid #c9c9c9",
    widthVal:"100%",
    bgColor:"#fff"
}

List.defaultProps = {
    pointerEvents:"none",
    marginVal:"0"
}

ListItem.defaultProps = {
    pointerEvents:"none",
}

const Dropdown = (props) => {
 
    const {head,value,optionsList,onChange,inverted,ErrorName} = props;
    const [open ,IsOpen] = useState(false);
    const [selectedOpt , setSelectedOpt] = useState(null);
    
    const menuRef =useRef();

    function Click(value){
       onChange && onChange(value);
        IsOpen(!open)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
    
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);

    function handleClick(event) {

        if(!menuRef.current.contains(event.target))
        {
            IsOpen(false);
        }
    
      };

    function displayValue(list,value){

      let displayVal = '';
      
       list && list.map(
        item => 
        {
          if(item.value === value)
          {
            displayVal = item.head
          }
        }
      )

      return displayVal
      
    }

    return (
       <Wrapper onClick={() =>props.Focus && props.name && props.Focus(props.name)} name={props.name} ref={menuRef} marginVal={props.marginVal} widthVal={props.widthVal} borderVal={ props.name && ErrorName && ErrorName.includes(props.name) ?"1px solid red":props.borderVal} bgColor={props.bgColor}>

          {  
              props.inverted=== true &&
               <List bottomVal="2%" marginVal="0 0 7.5rem 0" className={open ?"dropdown-open":"dropdown-close"}  pointerEvents={open ?"all":"none"}>
                   {
                          optionsList && optionsList.map(
                           option =>
                          <ListItem  pointerEvents={open?"all":"none"}  onClick={() => {
                         Click(option.value); }}>
                              <Span fontWeignt="600">{option.head}</Span>
                             { option.subhead!== '' &&  <Span fontSize="0.8rem" colorVal="#7b8996">{option.subhead}</Span>}
                          </ListItem>
                       )
                   }

               </List>
            }

           <Header onClick={() =>IsOpen(!open)}><Div jContent="flex-start" fontSize="0.8rem">{value!== null && value!== undefined && value!=='' ? displayValue(optionsList,value):head}</Div><Div widthVal="10%" paddingVal="" marginVal="" jContent="flex-end"><i style={{'transition':'0.5s all ease-in-out'}} className={open ?"fas fa-chevron-down rotate":"fas fa-chevron-down"}></i></Div></Header>
            {  
              (props.inverted=== false || props.inverted=== null || props.inverted === undefined) &&
               <List heightVal={props.heightVal} className={open ?"dropdown-open":"dropdown-close"}  pointerEvents={open ?"all":"none"}>
                   {
                          optionsList && optionsList.map(
                           option =>
                          <ListItem  pointerEvents={open?"all":"none"}  onClick={() => {
                         Click(option.value); }}>
                              <Span fontWeignt="600">{option.head}</Span>
                             { option.subhead!== '' &&  <Span fontSize="0.8rem" colorVal="#7b8996">{option.subhead}</Span>}
                          </ListItem>
                       )
                   }

               </List>
            }
       </Wrapper>
    )
}


export default Dropdown;