import { Text, Timeline } from "@chakra-ui/react";
import { LuCheck } from "react-icons/lu";

export const ContainerHistory = () => {
  return (
    <Timeline.Root maxW="400px">
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuCheck />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>Código Generado</Timeline.Title>
          <Timeline.Description>5 de Mayo del 2025</Timeline.Description>
          <Text textStyle="sm">
            Código generado con el id <b>#12345</b>
          </Text>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuCheck />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>Código Generado</Timeline.Title>
          <Timeline.Description>5 de Mayo del 2025</Timeline.Description>
          <Text textStyle="sm">
            Código generado con el id <b>#12345</b>
          </Text>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuCheck />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>Código Generado</Timeline.Title>
          <Timeline.Description>5 de Mayo del 2025</Timeline.Description>
          <Text textStyle="sm">
            Código generado con el id <b>#12345</b>
          </Text>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <LuCheck />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>Código Generado</Timeline.Title>
          <Timeline.Description>5 de Mayo del 2025</Timeline.Description>
          <Text textStyle="sm">
            Código generado con el id <b>#12345</b>
          </Text>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  );
};
