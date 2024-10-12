import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavEntry = ({ link, label, isExternal = false }) => {
  const props = isExternal ? { target: "_blank" } : {};
  return (
    <NavLink
      to={link}
      style={({ isActive }) => ({
        color: isActive ? "#ff5479" : "inherit",
      })}
      {...props}
    >
      <Button
        fontWeight="semibold"
        fontFamily="heading"
        size="sm"
        variant="transparent"
        _hover={{ color: "brand.500" }}
      >
        {label}
        {isExternal && <ExternalLinkIcon mx={1} />}
      </Button>
    </NavLink>
  );
};

export default NavEntry;
