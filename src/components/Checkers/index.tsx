import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Heading, List, Grid, GridItem } from "@chakra-ui/react";
import { ListItemComponent } from "../ListItem";
import { useContext, useEffect, useState } from "react";
import { PasswordCheckerContext } from "../../context/PasswordCheckerContext";
import {
  hasEightChars,
  hasLowerCaseChars,
  hasNumbers,
  hasSymbols,
  hasUpperCaseChars,
} from "../../utils/helpers";

export const ChekersComponent = () => {
  const { password, setPoints } = useContext(PasswordCheckerContext);
  const [localPoints, setLocalPoints] = useState<number>(0);
  const checkLowerCase = hasLowerCaseChars(password)
    ? CheckCircleIcon
    : CloseIcon;
  const checkUpperCase = hasUpperCaseChars(password)
    ? CheckCircleIcon
    : CloseIcon;
  const checkNumbers = hasNumbers(password) ? CheckCircleIcon : CloseIcon;
  const checkSymbols = hasSymbols(password) ? CheckCircleIcon : CloseIcon;
  const checkLength = hasEightChars(password) ? CheckCircleIcon : CloseIcon;

  useEffect(() => {
    setPoints(localPoints);
  }, [localPoints, setPoints]);

  useEffect(() => {
    const passwordChecks = [
      hasLowerCaseChars,
      hasUpperCaseChars,
      hasNumbers,
      hasSymbols,
      hasEightChars,
    ];

    let newPoints = 0;
    for (const check of passwordChecks) {
      if (check(password)) newPoints += 20;
    }

    setLocalPoints(newPoints);
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
              icon={checkLowerCase}
              color={hasLowerCaseChars(password) ? "green.500" : "red.500"}
              text="Lower case"
            />
            <ListItemComponent
              icon={checkUpperCase}
              color={hasUpperCaseChars(password) ? "green.500" : "red.500"}
              text="Upper case"
            />
            <ListItemComponent
              icon={checkNumbers}
              color={hasNumbers(password) ? "green.500" : "red.500"}
              text="Numbers"
            />
          </GridItem>
          <GridItem w="100%" h="10">
            <GridItem w="100%" h="auto">
              <ListItemComponent
                icon={checkSymbols}
                color={hasSymbols(password) ? "green.500" : "red.500"}
                text="Symbols"
              />
              <ListItemComponent
                icon={checkLength}
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
