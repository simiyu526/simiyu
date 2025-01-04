import { HStack, List, ListItem,Image, Button, Spinner, Heading } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre"
import getCroppedImgUrl from "../services/image-url";

interface Props {
    onSelectGenre:(genre:Genre)=>void;
    selectedGenre:Genre | null;
}

const GameGenres = ({onSelectGenre,selectedGenre}:Props) => {
    const {data,isLoading,error} = useGenre()

    if (isLoading) return <Spinner/>
    if (error) return null;

    return(
        <>
        <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
        <List>
            {data.map(genre => <ListItem key={genre.id} paddingY="5px">
                <HStack>
                    <Image boxSize="32px" objectFit='cover'  borderRadius={8}  src={getCroppedImgUrl(genre.image_background)}/>
                    <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}  variant="link" onClick={()=> onSelectGenre(genre)}  fontSize="lg" textAlign='left' whiteSpace='nowrap'>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
        </>
    );
}

export default GameGenres
