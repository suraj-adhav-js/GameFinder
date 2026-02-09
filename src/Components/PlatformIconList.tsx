import {
  FaApple,
  FaBox,
  FaLinux,
  FaPlaystation,
  FaWindows
} from "react-icons/fa";

import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import Platform from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaBox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    iso: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <HStack>
        {platforms.map((platform) => {
          return <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"></Icon>;
        })}
      </HStack>
    </>
  );
};

export default PlatformIconList;
