import useGenre, { type Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/Servises/image-url";
import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import GenreSkeletone from "./GenreSkeletone";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectGenre: Genre | null;
}


const GenreList = ({onSelectGenre, selectGenre}: Props) => {
  const { data, error, isLoading } = useGenre();

  if (error) return null;

  return (
    <List>
  {isLoading
    ? Array.from({ length: 23 }).map((_, index) => (
        <GenreSkeletone key={index} />
      ))
    : data.map((genre) => {
        const isSelected = genre.id === selectGenre?.id;
        return (
          <ListItem
            key={genre.id}
            paddingY="5px"
            bg={isSelected ? "rgba(0, 0, 0, 0.1)" : "transparent"} 
            borderRadius="8px"
            transition="background 0.2s ease"
          >
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Button
                fontWeight={isSelected ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
</List>

  );
};

export default GenreList;
