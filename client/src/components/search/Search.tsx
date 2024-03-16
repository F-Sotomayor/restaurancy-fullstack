import { Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import {SearchProps} from "../../../types"

export default function Search({ onSubmit }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <Flex maxW="300px" mx="auto" gap={4}>
      <Input
        type="search"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button
        minW="100px"
        onClick={() => {
          onSubmit(inputValue);
          setInputValue("");
        }}
      >
        Search
      </Button>
    </Flex>
  );
}
