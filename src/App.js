import { useEffect, useState } from "react";
import { Toaster } from "./components/ui/toaster";
import { Button, Container, Flex, VStack } from "@chakra-ui/react";
import { ContainerCard } from "./components/container-card/containerCard";
import { ContainerHistory } from "./components/container-history/containerHistory";
import { Navbar } from "./components/navbar/navbar";

function App() {
  const [list, setList] = useState([]);
  const [barcodeId, setBarcodeId] = useState(0);
  const [fecha, setFecha] = useState(null);

  const obtenerCodigos = async () => {
    const resultado = await window.api.obtenerCodigos();
    setList(resultado);
  };

  useEffect(() => {
    obtenerCodigos();
  }, [barcodeId]);

  const insertarCodigo = async () => {
    const nuevo = await window.api.insertarCodigo();
    console.log("Insertado:", nuevo);
    setBarcodeId(nuevo.id);
    setFecha(new Date());
  };

  const handleVerDetalle = ({ id, fecha_creacion }) => {
    setBarcodeId(id);
    setFecha(new Date(fecha_creacion));
  };

  return (
    <Container>
      <Container maxW="container.xl" position="relative" p={4}>
        <Navbar />
      </Container>
      <Flex>
        <Container>
          <VStack spacing={4} align="center">
            <ContainerCard barcodeId={barcodeId} fecha={fecha} />
            <Button colorPalette="teal" variant="solid" onClick={insertarCodigo}>
              Generar Nuevo Código
            </Button>
          </VStack>
        </Container>
        <Container>
          {/* 🆕 Pasamos la función al hijo */}
          <ContainerHistory codigos={list} onVerDetalle={handleVerDetalle} />
        </Container>
      </Flex>
      <Toaster />
    </Container>
  );
}

export default App;
