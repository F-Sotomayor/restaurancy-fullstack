import { Heading, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Search from "../search/Search";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Stack gap={8} p={4} bgColor="primary.100" width="100%" minH="100vh">
      <Heading textAlign="center">Restaurancy</Heading>
      <Search />
      <Stack p={4} bgColor="primary.100">
        {children}
      </Stack>
    </Stack>
  );
}
