import { Box, Heading, Progress, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { PasswordCheckerContext } from "../../context/PasswordCheckerContext";

export const ProgressTracker = () => {
  const { points } = useContext(PasswordCheckerContext);

  function showColorByPoints(points: number) {
    if (points <= 20) return "red";
    if (points > 20 && points <= 40) return "orange";
    if (points > 40 && points <= 60) return "yellow";
    if (points > 60 && points <= 80) return "green";
    if (points > 80) return "blue";
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
