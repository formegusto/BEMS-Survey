export interface TextInputProps {
  suffix?: string;
}

export interface SelectBoxProps {
  title: string;
  values: string[];
  isDisable?: boolean;
}

export interface BoxRadioProps {
  name: string;
  values: (string | number)[];
}
