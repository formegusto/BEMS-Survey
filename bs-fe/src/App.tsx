import { useTarget } from "@hooks";

function App() {
  const [isSetting, isAvailable] = useTarget();

  console.log(isSetting, isAvailable);

  return <></>;
}

export default App;
