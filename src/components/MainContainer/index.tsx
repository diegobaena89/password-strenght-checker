import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { InputComponent } from "../Input";
import { ChekersComponent } from "../Checkers";
import { ProgressTracker } from "../Progress";

export const MainContainer = () => {
  return (
    <>
      <Container
        maxWidth={1200}
        maxHeight={"auto"}
        padding={20}
        marginTop={150}
      >
        <Card variant={"elevated"}>
          <CardHeader>
            <Heading size="lg">Password Strength Checker</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <InputComponent />
              <ChekersComponent />
              <ProgressTracker />
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
