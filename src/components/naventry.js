import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavEntry = (link, label) => {
  return (
    <NavLink
      to={link}
      style={({ isActive }) => ({
        color: isActive ? "#ff5479" : "inherit",
      })}
    >
      <Button
        fontWeight="semibold"
        fontFamily="heading"
        size="sm"
        variant="transparent"
        _hover={{ color: "brand.500" }}
      >
        {label}
      </Button>
    </NavLink>
  );
};

export default NavEntry;
