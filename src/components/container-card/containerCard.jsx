import React from "react";
import { Text, Card, Center, Button, HStack } from "@chakra-ui/react";
import Barcode from "../barcode/barcode";
import { LuCopy, LuPrinter } from "react-icons/lu";
import { toaster } from "../ui/toaster";
import { formatearFechaConTextoHumano } from "../../util/fechaCustom";

const SinCodigo = () => (
  <Card.Root width="320px">
    <Card.Body>
      <Card.Title>Sin código generado</Card.Title>
      <Card.Description>Aún no se ha generado ningún código.</Card.Description>
    </Card.Body>
  </Card.Root>
);

export const ContainerCard = ({ barcodeId, fecha }) => {
  if (barcodeId === 0) {
    return <SinCodigo />;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(`${barcodeId}`).then(() => {
      toaster.create({
        title: "Copiado al portapapeles",
        description: `Se copió el código: ${String(barcodeId).padStart(5, "0")}`,
        type: "success",
        closable: true,
      });
    });
  };

  const handlePrint = () => {
    const printContent = document.getElementById("print-area")?.innerHTML;
    if (printContent) {
      const printWindow = window.open("", "", "width=600,height=600");
      if (printWindow) {
        printWindow.document.write(`
         <html>
           <head>
             <title>Imprimir Código</title>
           </head>
           <body>${printContent}</body>
         </html>
       `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  return (
    <Card.Root width="320px">
      <div id="print-area">
        <Center>
          <Barcode id={barcodeId} />
        </Center>
      </div>

      <Card.Body gap="2">
        <HStack mt="4">
          <Card.Title>Detalle de Código</Card.Title>
          <Button size="sm" colorPalette="black" onClick={handleCopy} variant="ghost">
            <LuCopy />
          </Button>
          <Button size="sm" colorPalette="black" onClick={handlePrint} variant="ghost">
            <LuPrinter />
          </Button>
        </HStack>
        <Card.Description>{formatearFechaConTextoHumano(fecha)}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          ID: {String(barcodeId).padStart(5, "0")}
        </Text>
      </Card.Body>
    </Card.Root>
  );
};
