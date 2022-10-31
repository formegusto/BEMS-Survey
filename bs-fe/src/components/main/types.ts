import { Building, Unit } from "@store/types";

export interface ComponentProps {
  onStart: () => void;
  building: Building;
  unit: Unit;
}

export interface PolicyProps {
  onAgree: () => void;
  onNotAgree: () => void;
}
