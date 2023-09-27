import { useState, useMemo } from "react";
import { MainContainer } from "./components/MainContainer";
import { PasswordCheckerContext } from "./context/PasswordCheckerContext";

function App() {
  const [password, setPassword] = useState<string>("");
  const [points, setPoints] = useState<number>(0);

  const contextValue = useMemo(
    () => ({ password, setPassword, points, setPoints }),
    [password, setPassword, points, setPoints]
  );

  return (
    <PasswordCheckerContext.Provider value={contextValue}>
      <MainContainer />
    </PasswordCheckerContext.Provider>
  );
}

export default App;
