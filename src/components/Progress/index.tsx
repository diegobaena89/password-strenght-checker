import { Box, Heading, Progress, Text } from "@chakra-ui/react";

export const ProgressTracker = () => {
  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        Analysis
      </Heading>
      <Text pt="2" fontSize="sm" />
      <Progress value={20} size="md" colorScheme="red" />
    </Box>
  );
};
