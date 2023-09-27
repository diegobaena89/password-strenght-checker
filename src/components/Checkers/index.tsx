import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Heading, List, Grid, GridItem } from "@chakra-ui/react";
import { ListItemComponent } from "../ListItem";

export const ChekersComponent = () => {
  return (
    <Box>
      <Heading size="xs" textTransform="uppercase" marginBottom={3}>
        Strength Check
      </Heading>
      <List spacing={1}>
        <Grid templateColumns="repeat(5, 45%)" gap={6}>
          <GridItem w="100%" h="auto">
            <ListItemComponent
              icon={CheckCircleIcon}
              color="green.500"
              text="Lower case"
            />
            <ListItemComponent
              icon={CheckCircleIcon}
              color="green.500"
              text="Upper case"
            />
            <ListItemComponent
              icon={CheckCircleIcon}
              color="green.500"
              text="Numbers"
            />
          </GridItem>
          <GridItem w="100%" h="10">
            <GridItem w="100%" h="auto">
              <ListItemComponent
                icon={CloseIcon}
                color="red.500"
                text="Symbols"
              />
              <ListItemComponent
                icon={CloseIcon}
                color="red.500"
                text="+8 characters"
              />
            </GridItem>
          </GridItem>
        </Grid>
      </List>
    </Box>
  );
};
