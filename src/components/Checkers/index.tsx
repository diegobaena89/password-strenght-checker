import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Heading, List, Grid, GridItem } from "@chakra-ui/react";
import { ListItemComponent } from "../ListItem";
import { useContext, useEffect, useState } from "react";
import { PasswordCheckerContext } from "../../context/PasswordCheckerContext";

export const ChekersComponent = () => {
  const { password, setPoints } = useContext(PasswordCheckerContext);
  const [localPoints, setLocalPoints] = useState<number>(0);

  useEffect(() => {
    setPoints(localPoints);
  }, [localPoints, setPoints]);

  function hasLowerCaseChars(password: string) {
    return /[a-z]/.test(password);
  }

  function hasUpperCaseChars(password: string) {
    return /[A-Z]/.test(password);
  }

  function hasNumbers(password: string) {
    return /[0-9]/.test(password);
  }

  function hasSymbols(password: string) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
  }

  function hasEightChars(password: string) {
    return password.length >= 8;
  }

  useEffect(() => {
    // Recalcula os pontos quando a senha mudar
    let newPoints = 0;
    if (hasLowerCaseChars(password)) newPoints += 20;
    if (hasUpperCaseChars(password)) newPoints += 20;
    if (hasNumbers(password)) newPoints += 20;
    if (hasSymbols(password)) newPoints += 20;
    if (hasEightChars(password)) newPoints += 20;
    setLocalPoints(newPoints); // Atualize o estado local
  }, [password]);

  return (
    <Box>
      <Heading size="xs" textTransform="uppercase" marginBottom={3}>
        Strength Check
      </Heading>
      <List spacing={1}>
        <Grid templateColumns="repeat(5, 45%)" gap={6}>
          <GridItem w="100%" h="auto">
            <ListItemComponent
              icon={hasLowerCaseChars(password) ? CheckCircleIcon : CloseIcon}
              color={hasLowerCaseChars(password) ? "green.500" : "red.500"}
              text="Lower case"
            />
            <ListItemComponent
              icon={hasUpperCaseChars(password) ? CheckCircleIcon : CloseIcon}
              color={hasUpperCaseChars(password) ? "green.500" : "red.500"}
              text="Upper case"
            />
            <ListItemComponent
              icon={hasNumbers(password) ? CheckCircleIcon : CloseIcon}
              color={hasNumbers(password) ? "green.500" : "red.500"}
              text="Numbers"
            />
          </GridItem>
          <GridItem w="100%" h="10">
            <GridItem w="100%" h="auto">
              <ListItemComponent
                icon={hasSymbols(password) ? CheckCircleIcon : CloseIcon}
                color={hasSymbols(password) ? "green.500" : "red.500"}
                text="Symbols"
              />
              <ListItemComponent
                icon={hasEightChars(password) ? CheckCircleIcon : CloseIcon}
                color={hasEightChars(password) ? "green.500" : "red.500"}
                text="+8 characters"
              />
            </GridItem>
          </GridItem>
        </Grid>
      </List>
    </Box>
  );
};
