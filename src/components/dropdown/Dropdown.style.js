import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  position: relative;
  display: inline-block;
  min-width: 160px;
`;

export const SelectedValue = styled.div`
  width: 100%;
  font-size: 16px;
  padding: 7px 15px;
`;

export const DropdownItems = styled.ul`
  position: absolute;
  right: 0;
  left: 0;
  top: 110%;
  ${({ open }) => (open ? `display: block` : `display: none`)};
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1em;
  transition: transform 0.3s;
  ${({ open }) =>
    open ? `transform: rotate(180deg)` : `transform: rotate(0)`};
`;
