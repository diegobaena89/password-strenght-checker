import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListIcon,
  ListItem,
  Progress,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

function App() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Container maxWidth={1200} maxHeight={"auto"} padding={20} marginTop={150}>
      <Card variant={"elevated"}>
        <CardHeader>
          <Heading size="lg">Password Strenght Checker</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Text pt="2" fontSize="sm" marginBottom={4}>
                Enter your password below
              </Text>
              <InputGroup size="lg">
                <Input
                  pr="7rem"
                  type={show ? "text" : "password"}
                  placeholder="Type your password"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="2rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Strength Check
              </Heading>
              <Text pt="2" fontSize="sm">
                <List spacing={1}>
                  <Grid templateColumns="repeat(5, 45%)" gap={6}>
                    <GridItem w="100%" h="auto">
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        Lower case
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        Upper case
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        Numbers
                      </ListItem>
                    </GridItem>
                    <GridItem w="100%" h="10">
                      <GridItem w="100%" h="auto">
                        <ListItem>
                          <ListIcon as={CloseIcon} color="red.500" />
                          Symbols
                        </ListItem>
                        <ListItem>
                          <ListIcon as={CloseIcon} color="red.500" />
                          +8 characters
                        </ListItem>
                      </GridItem>
                    </GridItem>
                  </Grid>
                </List>
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                <Progress value={20} size="md" colorScheme="red" />
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
