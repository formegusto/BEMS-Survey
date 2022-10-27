import { UseFormSetValue } from "react-hook-form";

export interface TextInputProps {
  suffix?: string;
}

export interface SelectBoxProps {
  title: string;
  values: string[];
  isDisable?: boolean;
  setValue: UseFormSetValue<any>;
}

export interface BoxRadioProps {
  name: string;
  values: (string | number)[];
}
