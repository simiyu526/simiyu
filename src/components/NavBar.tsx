import { HStack,  Image } from '@chakra-ui/react';
import ColorSwitchBtn from './ColorSwitchBtn';
import SearchInput from './SearchInput';
import icon from '../assets/icon.png';
interface Props {
  onSearch:(searchText:string) => void;
}

const NavBar = ({onSearch} : Props) => {
  return (
    <HStack  padding='10px'>
      <Image src={icon} boxSize="40px" borderRadius={10} />
        <SearchInput onSearch={onSearch}/>
        <ColorSwitchBtn/>
    </HStack>
    )
}

export default NavBar
