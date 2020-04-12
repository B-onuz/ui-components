import React from "react";
import styled from "styled-components";
import Color from "color";
import { color, variant, space } from "styled-system";

const Button = styled.button`
  appearance: none;
  font-family: inherit;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  padding: .5rem 1rem;
  ${props => variant({
    variants: {
      primary: {
        color: new Color(props.theme.colors.lightRed).isDark() ? '#fff' : '#000',
        bg: "lightRed",
        fontSize: 2,
      },
      secondary: {
        color: new Color(props.theme.colors.fullDarkRed).isDark() ? '#fff' : '#000',
        bg: "fullDarkRed",
        fontSize: 2,
      },
      default: {
        color: new Color(props.theme.colors[props.bg] || '#e0e1e2').isDark() ? '#fff' : '#000',
        bg: "#e0e1e2",
        fontSize: 2,
      },
    },
  })}
  ${color}
  ${space}
  border: 1px solid ${({ theme, variant, bg }) => bg ? theme.colors[bg] : theme.colors[variant] };
  &:focus {
    box-shadow: 0 0 8px ${({ theme, variant, bg }) => bg ? theme.colors[bg] : theme.colors[variant] || "rgba(0,0,0,.3)"};
  }
  &:hover {
    background-color: ${({ theme, variant, bg }) => bg ? new Color(theme.colors[bg]).lighten(0.2).string() : new Color(theme.colors[variant] || "#ddd").lighten(0.15).string()};
  }
  &:active {
    background-color: ${({ theme, variant, bg }) => bg ? new Color(theme.colors[bg]).darken(0.2).string() : new Color(theme.colors[variant] || "#ddd").darken(0.15).string()};
  }
`;

export default Button;
