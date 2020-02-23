import styled from "styled-components";

import { setColor } from "../../globals/styles";

const bkgrndColor = `${setColor.mainColor}`;
const fntColor = `${setColor.offWhite}`;

export const CustomButton = styled.button`
  cursor: ${props => (props.cursor ? props.cursor : "pointer")};
  /* font */
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  font-size: ${props => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${props => props.fontWeight && props.fontWeight};
  letter-spacing: ${props =>
    props.letterSpacing ? props.fontWeight : "1.5px"};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "uppercase"};
  /* width */
  width: ${props => (props.width ? props.width : "120px")};
  min-width: ${props => props.minWidth && props.minWidth};
  max-width: ${props => props.maxWidth && props.maxWidth};
  /* height */
  height: ${props => (props.height ? props.height : "30px")};
  min-height: ${props => props.minHeight && props.minHeight};
  max-height: ${props => props.maxHeight && props.maxHeight};
  /* color */
  color: ${props => (props.color ? props.color : fntColor)};
  background-color: ${props =>
    props.bkgrndColor ? props.bkgrndColor : bkgrndColor};
  /* margin */
  margin: ${props => (props.margin ? props.margin : "1rem")};
  margin-top: ${props => props.margintop && props.margintop};
  margin-bottom: ${props => props.marginBottom && props.marginBottom};
  margin-right: ${props => props.marginRight && props.marginRight};
  margin-left: ${props => props.marginLeft && props.marginLeft};
  /* padding */
  padding: ${props => props.paddingAll && props.paddingAll};
  padding-top: ${props => props.paddingTop && props.paddingTop};
  padding-bottom: ${props => props.paddingBottom && props.paddingBottom};
  padding-right: ${props => props.paddingRight && props.paddingRight};
  padding-left: ${props => props.paddingLeft && props.paddingLeft};
  /* borders */
  border: ${props => props.border && props.border};
  border-top: ${props => props.borderTop && props.borderTop};
  border-bottom: ${props => props.borderBottom && props.borderBottom};
  border-right: ${props => props.borderRight && props.borderRight};
  border-left: ${props => props.borderLeft && props.borderLeft};
  border-radius: ${props =>
    props.borderRadius ? props.borderRadius : "0.5rem"};
  /* flexbox */
  display: ${props => (props.display ? props.display : "flex")};
  flex: ${props => props.flex && props.flex};
  flex-direction: ${props => props.flexDirection && props.flexDirection};
  flex-wrap: ${props => props.flexWrap && props.flexWrap};
  flex-flow: ${props => (props.flexFlow ? props.flexFlow : "column nowrap")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  align-content: ${props =>
    props.alignContent ? props.alignContent : "center"};
  align-self: ${props => props.alignSelf && props.alignSelf};
  order: ${props => props.order && props.order};
  flex-grow: ${props => props.flexGrow && props.flexGrow};
  flex-shrink: ${props => props.flexShrink && props.flexShrink};
  flex-basis: ${props => props.flexBasis && props.flexBasis};
  /* animations */
  transition: ${props => props.transition && props.transition};
  &:hover {
    background-color: ${props => (props.color ? props.color : fntColor)};
    color: ${props => (props.background ? props.background : bkgrndColor)};
  }
`;
export const CustomButtonContainer = styled.div`
  cursor: ${props => (props.cursor ? props.cursor : "pointer")};
  margin: ${props => (props.margin ? props.margin : "0")};
  margin-top: ${props => props.margintop && props.margintop};
  min-width: ${props => (props.minWidth ? props.minWidth : "150px")};
  min-height: ${props => props.minHeight && props.minWidth};
  height: ${props => props.height && props.height};
  width: ${props => (props.width ? props.width : "auto")};
  display: ${props => (props.display ? props.display : "flex")};
  flex-flow: ${props => (props.flexFlow ? props.flexFlow : "column nowrap")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  @media screen and (max-width: 800px) {
  }
`;
