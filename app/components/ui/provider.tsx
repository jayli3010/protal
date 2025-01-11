"use client";
import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react";
import { ReactNode } from "react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

const system = createSystem(config);

export function Provider({ children }: { children: ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}