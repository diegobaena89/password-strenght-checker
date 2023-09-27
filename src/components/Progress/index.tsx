import { Box, Heading, Progress, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { PasswordCheckerContext } from "../../context/PasswordCheckerContext";

export const ProgressTracker = () => {
  const { points } = useContext(PasswordCheckerContext);

  function showColorByPoints(points: number) {
    switch (true) {
      case points <= 20:
        return "red";
      case points <= 40:
        return "orange";
      case points <= 60:
        return "yellow";
      case points <= 80:
        return "green";
      default:
        return "blue";
    }
  }

  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        Analysis
      </Heading>
      <Text pt="2" fontSize="sm" />
      <Progress
        value={points}
        size="md"
        colorScheme={showColorByPoints(points)}
      />
    </Box>
  );
};
