import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platforms</MenuButton>
      <MenuList>
        {data.map((platform)=>{
            return <MenuItem key={platform.id}>{platform.name}</MenuItem>
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
