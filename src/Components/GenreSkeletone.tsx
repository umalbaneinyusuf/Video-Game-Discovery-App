import { HStack, ListItem, Skeleton } from "@chakra-ui/react"


const GenreSkeletone = () => {
  return (
    <ListItem paddingY="5px">
    <HStack>
      <Skeleton boxSize="32px" borderRadius={8} />
      <Skeleton height="20px" width="100px" />
    </HStack>
  </ListItem>

  )
}

export default GenreSkeletone