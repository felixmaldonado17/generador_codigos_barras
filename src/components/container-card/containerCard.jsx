import { Text, Card, Center, Box, Button, HStack } from "@chakra-ui/react";
import Barcode from "../barcode/barcode";
import { LuCopy, LuPrinter } from "react-icons/lu";
import { toaster } from "../ui/toaster";

export const ContainerCard = () => {
  const barcodeId = 12345;

  const handleCopy = () => {
    navigator.clipboard.writeText(`#${barcodeId}`).then(() => {
      toaster.create({
        title: "Copiado al portapapeles",
        description: `Se copió el código #${barcodeId}`,
        type: "success",
        closable: true,
      });
    });
  };
  return (
    <Card.Root width="320px">
      <Center>
        <Barcode id={barcodeId} />
      </Center>
      <Card.Body gap="2">
        <HStack mt="4">
          <Card.Title>Detalle de Código</Card.Title>
          <Button size="sm" colorPalette="black" onClick={handleCopy} variant="ghost">
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
