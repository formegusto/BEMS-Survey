declare namespace Express {
  export interface Request {
    basic: {
      _id?: Schema.Types.ObjectId | string;

      name: string;
      age: number;
      sex: string;
      position: string;
      numOfPeople: number;
      workingTime: number;

      createdAt?: Date;
      updatedAt?: Date;
    };
  }
}
