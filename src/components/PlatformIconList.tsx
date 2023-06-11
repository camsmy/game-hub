import { Icon, Text, HStack } from '@chakra-ui/react';
import { Platform } from '../assets/hooks/useGames';
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons/lib';

interface Props{
    platforms: Platform[]
}
const PlatformIconList = ({platforms}:Props) => {
    const iconMap: {[key:string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbos: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
        nintendo: SiNintendo
    }
  return (
    <HStack marginY='2'>
    {platforms.map((platform) => 
        <Icon as={iconMap[platform.slug]} color='gray.400'/>
    )}
    </HStack>
  )
}

export default PlatformIconList