import { Text, Card, Center, Box, Button, HStack } from "@chakra-ui/react";
import Barcode from "../barcode/barcode";
import { LuCopy, LuPrinter } from "react-icons/lu";

export const ContainerCard = () => {
  return (
    <Card.Root width="320px">
      <Center>
        <Barcode id={12345} />
      </Center>
      <Card.Body gap="2">
        <HStack mt="4">
          <Card.Title>Detalle de Código</Card.Title>
          <Button size="sm" colorPalette="black" variant="ghost">
            <LuCopy />
          </Button>
          <Button size="sm" colorPalette="black" variant="ghost">
            <LuPrinter />
          </Button>
        </HStack>
        <Card.Description>5 de Mayo del 2025</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          #12345
        </Text>
      </Card.Body>
    </Card.Root>
  );
};
