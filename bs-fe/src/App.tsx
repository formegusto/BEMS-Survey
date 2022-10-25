import { useTarget } from "@hooks";
import { Pages, Template } from "@pages";

function App() {
  const [isSetting, isAvailable] = useTarget();

  console.log(isSetting, isAvailable);

  return (
    <Template>
      <Pages />
    </Template>
  );
}

export default App;
