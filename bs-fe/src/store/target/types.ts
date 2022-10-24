export interface Unit {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  buildingId: number;
}

export interface Building {
  image: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
}

export const INIT_UNIT = "target/init_unit";
export const INIT_BUILDING = "target/init_building";
