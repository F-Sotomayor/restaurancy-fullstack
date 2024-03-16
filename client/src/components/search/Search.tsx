import { Button, Flex, Input } from "@chakra-ui/react";

export default function Search() {
  return (
    <Flex maxW="300px" mx="auto" gap={4}>
      <Input type="search" />
      <Button minW="100px">Search</Button>
    </Flex>
  );
}
