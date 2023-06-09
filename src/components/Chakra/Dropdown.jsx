import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { getUsersSort } from "../../utils/Api";

export default function Dropdown() {
  function sortByName() {
    getUsersSort();
  }

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            style={{
              width: 196,
              height: 50,
              backgroundColor: "#EBD8FF",
              borderRadius: 10.31,
              textTransform: "uppercase",
              lineHeight: 0.82,
              fontSize: 18,
              fontWeight: 600,
              color: "#373737",
              boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
            }}
            isActive={isOpen}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            {isOpen ? "Close" : "Sort"}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={sortByName}>Show all</MenuItem>
            <MenuItem onClick={sortByName}>Follow</MenuItem>
            <MenuItem onClick={sortByName}>Following</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
