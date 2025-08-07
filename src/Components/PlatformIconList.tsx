import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}

const PlatformIconList = ({ platform }: Props) => {
  const iconeMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    andiroid: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack  marginY={'10px'}>
      {platform.map((platform) => (
        <Icon key={platform.id} as={iconeMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
