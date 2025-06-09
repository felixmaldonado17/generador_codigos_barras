import { Box, Container, Flex, IconButton, Text } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode";

export const Navbar = () => {
  return (
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        {/* Puedes poner aquí tu logo o título */}
        <Text fontWeight="bold">OF Celulares Generador de Códigos de Barra</Text>

        {/* Botón de modo oscuro */}
        <ColorModeButton />
      </Flex>
    </Container>
  );
};
