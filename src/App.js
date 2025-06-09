import logo from "./logo.svg";
import "./App.css";
import { Provider } from "./components/ui/provider";
import { Button, Container, Flex, VStack } from "@chakra-ui/react";
import { ContainerCard } from "./components/container-card/containerCard";
import { ContainerHistory } from "./components/container-history/containerHistory";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <Container>
      <Container maxW="container.xl" position="relative" p={4}>
        <Navbar />
      </Container>
      <Flex>
        <Container>
          <VStack spacing={4} align="center">
            <ContainerCard />
            <Button colorPalette="teal" variant="solid">
              Generar Nuevo Código
            </Button>
          </VStack>
        </Container>
        <Container>
          <ContainerHistory />
        </Container>
      </Flex>
    </Container>
  );
}

export default App;
