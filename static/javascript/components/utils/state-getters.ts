import { ICombinedReducersState } from "../../reducers";

export function getSelectedUnit(state: ICombinedReducersState) {
  const currentLevelData = state.regions.levels[state.regions.mapLevel];
  if (!currentLevelData) {
    return null;
  }
  const unitsInRegion = state.units.regions[currentLevelData.selectedRegion];
  if (!unitsInRegion) {
    return null;
  }
  const unit = unitsInRegion.units.find(u => u.id === state.units.selectedUnitId);
  if (!unit) {
    return null;
  }
  return unit;
}
