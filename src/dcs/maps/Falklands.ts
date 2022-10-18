import FalklandsAirBases from "../../data/airbases/falklands.json";
import { convertRawAirBaseData, DCSMap } from "./DCSMap";

export const Falklands: DCSMap = {
  name: "Falklands",
  center: [-52, -59],
  magDec: -2,
  airports: convertRawAirBaseData(FalklandsAirBases),
};
