import { useState } from "react";
import { Text, Timeline, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { LuCheck, LuFileSymlink } from "react-icons/lu";
import { formatearFechaConTextoHumano } from "../../util/fechaCustom";

const ITEMS_PER_PAGE = 4;
const MAX_PAGE_BUTTONS = 5;

const TimelineItem = ({ id, fecha_creacion, onVerDetalle }) => {
  const fechaFormateada = formatearFechaConTextoHumano(new Date(fecha_creacion));

  return (
    <Timeline.Item>
      <Timeline.Connector>
        <Timeline.Separator />
        <Timeline.Indicator>
          <LuCheck />
        </Timeline.Indicator>
      </Timeline.Connector>
      <Timeline.Content>
        <HStack justify="space-between" align="center">
          <Timeline.Title>Código Generado</Timeline.Title>
          <IconButton
            aria-label="Ver detalle"
            size="xs"
            variant="ghost"
            onClick={() => onVerDetalle({ id, fecha_creacion })}
          >
            <LuFileSymlink />
          </IconButton>
        </HStack>
        <Timeline.Description>{fechaFormateada}</Timeline.Description>
        <Text textStyle="sm">
          Código generado con el id <b>{String(id).padStart(5, "0")}</b>
        </Text>
      </Timeline.Content>
    </Timeline.Item>
  );
};

const NoRecords = () => (
  <Box p={4} textAlign="center" color="gray.500">
    No hay registros para mostrar
  </Box>
);

function getPaginationRange(currentPage, totalPages, maxButtons) {
  const half = Math.floor(maxButtons / 2);

  let start = Math.max(currentPage - half, 1);
  let end = Math.min(start + maxButtons - 1, totalPages);

  start = Math.max(end - maxButtons + 1, 1);

  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

export const ContainerHistory = ({ codigos, onVerDetalle }) => {
  const [page, setPage] = useState(1);

  if (!codigos || codigos.length === 0) {
    return <NoRecords />;
  }

  const totalPages = Math.ceil(codigos.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = codigos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const paginationRange = getPaginationRange(page, totalPages, MAX_PAGE_BUTTONS);

  return (
    <>
      <Timeline.Root maxW="400px" mb={4}>
        {currentItems.map(({ id, fecha_creacion }) => (
          <TimelineItem key={id} id={id} fecha_creacion={fecha_creacion} onVerDetalle={onVerDetalle} />
        ))}
      </Timeline.Root>

      <HStack justifyContent="center" spacing={1} mt={2}>
        {paginationRange[0] > 1 && (
          <>
            <Button
              size="xs"
              onClick={() => setPage(1)}
              variant={page === 1 ? "solid" : "ghost"}
              colorScheme={page === 1 ? "blue" : "gray"}
            >
              1
            </Button>
            {paginationRange[0] > 2 && (
              <Box fontSize="xs" px={1} color="gray.500">
                …
              </Box>
            )}
          </>
        )}

        {paginationRange.map((p) => (
          <Button
            key={p}
            size="xs"
            onClick={() => setPage(p)}
            variant={page === p ? "solid" : "ghost"}
            colorScheme={page === p ? "blue" : "gray"}
          >
            {p}
          </Button>
        ))}

        {paginationRange[paginationRange.length - 1] < totalPages && (
          <>
            {paginationRange[paginationRange.length - 1] < totalPages - 1 && (
              <Box fontSize="xs" px={1} color="gray.500">
                …
              </Box>
            )}
            <Button
              size="xs"
              onClick={() => setPage(totalPages)}
              variant={page === totalPages ? "solid" : "ghost"}
              colorScheme={page === totalPages ? "blue" : "gray"}
            >
              {totalPages}
            </Button>
          </>
        )}
      </HStack>
    </>
  );
};
