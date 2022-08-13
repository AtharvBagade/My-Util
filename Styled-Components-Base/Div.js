import styled from "styled-components";

const Div = styled.div`
    display: ${props => props.display};
    flex: ${props => props.flex};
    position: ${props => props.position};
    flex-direction: ${props => props.flexDirection};
    background-color: ${props => props.bgColor};
    background-image: ${props => props.bgImg};
    height: ${props => props.height};
    width: ${props => props.width};
    min-width : ${props => props.minWidth};
    justify-content:  ${props => props.jContent};
    align-items:  ${props => props.alignItems};
    flex-wrap: ${props => props.flexWrap};
    font-size:  ${props => props.fontSize};
    font-weight:  ${props => props.fontWeight};
    border: ${props => props.border};
    border-bottom: ${props => props.borderBottom};
    border-top:${props => props.borderTop};
    border-right: ${props => props.borderRight};
    border-left:${props => props.borderLeft};
    border-radius: ${props => props.bRadius};
    overflow-y: ${props => props.yOverflow};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    box-shadow: ${props => props.boxShadow};
    color: ${props => props.color};
    z-index: ${props => props.zIndex};
    cursor: ${props => props.cursor};
    transform: ${props => props.transform};
    transition: ${props => props.transition};
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    text-align: ${props => props.textAlign};
    opacity: ${props => props.opacity};
    &:before {
        position: ${props => props.bfPosition};
        content: ${props => props.bfContent};
        top: ${props => props.bfTop};
        right: ${props => props.bfRight};
        width: ${props => props.bfWidth};
        height: ${props => props.bfHeight};
        border-left: ${props => props.bfBorderLeft};
        border-right: ${props => props.bfBorderRight};
        border-bottom: ${props => props.bfBorderBottom};
    }
    &:hover{
        background-color: ${props => props.hvBgColor};
        color: ${props => props.hvColor};
        font-size: ${props => props.hvFontSize};
    }
    @media (max-width: 1000px) {
        flex-direction: ${props => props.mFlexDirection};
        width: ${props => props.mWidth};
        margin: ${props => props.mMargin};
    }
    @media (max-width: 800px) {
        flex-direction: ${props => props.m8FlexDirection};
        width: ${props => props.m8Width};
        margin: ${props => props.m8Margin};
    }
`;

Div.defaultProps = {
    display: "flex",
    jContent: "center",
    alignItem: "center",
    width: "100%"
}

export default Div;