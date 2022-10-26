import { InputGroup, SelectBox, TextInput } from "@components/common";
import { Wrap } from "./styles";

function BasicComponent() {
  return (
    <Wrap>
      <InputGroup>
        <TextInput type="text" placeholder="성명" />
        <TextInput type="text" placeholder="성명" />
        <SelectBox />
      </InputGroup>
    </Wrap>
  );
}

export default BasicComponent;
