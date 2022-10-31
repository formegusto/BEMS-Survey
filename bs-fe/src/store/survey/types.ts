import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export interface IQuestion {
  _id: string;
  question: string;
  values: (string | number)[];
  sequence?: number;
}

export interface FBasicInfo {
  name: string;
  age: string;
  sex: string;
  position: string;
  numOfPeople: string;
  workingTime: string;
}

export interface BasicInfo extends FBasicInfo {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FDetailInfo {
  [key: string]: string;
}

export interface InputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  onSubmit: ReturnType<UseFormHandleSubmit<T>>;
  setValue?: UseFormSetValue<T>;
}

export const INIT_BASICINFO = "survey/basic_info";
