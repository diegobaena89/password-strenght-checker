import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { PasswordCheckerContext } from "../../context/PasswordCheckerContext";

export const InputComponent = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { setPassword } = useContext(PasswordCheckerContext);

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  return (
    <Box>
      <InputGroup size="lg">
        <Input
          pr="7rem"
          type={show ? "text" : "password"}
          placeholder="Type your password"
          _placeholder={{ opacity: 1, color: "gray.500" }}
          onChange={handlePasswordChange}
        />
        <InputRightElement width="4.5rem">
          <Button h="2rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
