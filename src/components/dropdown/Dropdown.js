import React, { useState } from "react";
import {
  Container,
  SelectedValue,
  DropdownItems,
  Icon,
} from "./Dropdown.style";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <SelectedValue onClick={() => setIsOpen(!isOpen)}>
        <span>{label}</span>
        <Icon icon={faChevronDown} open={isOpen} />
      </SelectedValue>
      <DropdownItems open={isOpen}>
        {options.map((option, index) => (
          <li key={index}>
            <Link to={option.url}>{option.label}</Link>
          </li>
        ))}
      </DropdownItems>
    </Container>
  );
};

export default Dropdown;
