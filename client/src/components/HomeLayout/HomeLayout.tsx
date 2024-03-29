import { Heading, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Search from "../Search/Search";

export default function Layout({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: (value: string) => void;
}) {
  return (
    <Stack gap={8} p={4} bgColor="primary.100" width="100%" minH="100vh">
      <Heading textAlign="center">Restaurancy</Heading>
      <Search onSubmit={(value) => onSubmit(value)} />
      <Stack p={4} bgColor="primary.100">
        {children}
      </Stack>
    </Stack>
  );
}
