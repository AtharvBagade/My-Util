import styled from 'styled-components';

const Span = styled.span`
    position: ${props => props.positionVal};
    line-height:${props => props.lineHeight};
    background-color: ${props => props.bgColor};
    height: ${props => props.heightVal};
    width: ${props => props.widthVal};
    font-size:  ${props => props.fontSize};
    font-weight:  ${props => props.fontWeignt};
    border-radius: ${props => props.bRadius};
    border-bottom:${props =>props.borderBottom};
    margin: ${props => props.marginVal};
    color: ${props => props.colorVal};
    padding: ${props => props.paddingVal};
    cursor: ${props => props.cursorVal};
    opacity:${props =>props.opacity};
    display:${props =>props.display};
`;

Span.defaultProps = {
    
}

export default Span;