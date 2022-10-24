import { RootReducer } from "@store";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import qs from "qs";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getBuilding, getUnit } from "@api";
import { useDispatch } from "react-redux";
import { initBuilding, initUnit } from "@store/actions";

type ResultUseTarget = [isSetting: boolean, isAvailable: boolean];

export function useTarget(): ResultUseTarget {
  const [isSetting, setIsSetting] = React.useState<boolean>(false);
  const [isAvailable, setIsAvailable] = React.useState<boolean>(false);

  const [buildingId, setBuildingId] = React.useState<string | null>(null);
  const [unitId, setUnitId] = React.useState<string | null>(null);

  const { building, unit } = useSelector((state: RootReducer) => state.target);
  const dispatch = useDispatch();

  const { search } = useLocation();

  // building query
  useQuery(["getBuilding"], () => getBuilding(buildingId!), {
    onSuccess: ({ target }) => {
      dispatch(initBuilding(target));
    },
    onError: () => {
      setIsSetting(true);
      setIsAvailable(false);
    },
    enabled: buildingId !== null,
  });
  // unit query
  useQuery(["getUnit"], () => getUnit(unitId!), {
    onSuccess: ({ target }) => {
      dispatch(initUnit(target));
    },
    onError: () => {
      setIsSetting(true);
      setIsAvailable(false);
    },
    enabled: buildingId !== null,
  });

  React.useEffect(() => {
    if (!isSetting && !isAvailable) {
      const { buildingId, unitId } = qs.parse(search, {
        ignoreQueryPrefix: true,
      });
      if (!buildingId || !unitId) {
        setIsSetting(true);
        setIsAvailable(false);
      } else {
        setBuildingId(buildingId as string);
        setUnitId(unitId as string);
      }
    }
  }, [search, isSetting, isAvailable]);

  React.useEffect(() => {
    if (building && unit) {
      setIsSetting(true);
      setIsAvailable(true);
    }
  }, [building, unit]);

  return [isSetting, isAvailable];
}
