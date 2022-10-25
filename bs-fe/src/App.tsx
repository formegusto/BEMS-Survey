import { useTarget } from "@hooks";
import Pages from "@pages";

function App() {
  const [isSetting, isAvailable] = useTarget();

  console.log(isSetting, isAvailable);

  return <Pages />;
}

export default App;
