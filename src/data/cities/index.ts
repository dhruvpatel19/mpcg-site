import type { CityData, PageContent, RawServiceRecord } from "../../types";
import { normalizeServiceRecords } from "../../lib/services";
import kingstonServices from "./kingston/services.json";
import { kingstonContent } from "./kingston/content";
import { kingstonServiceEnhancements } from "./kingston/serviceEnhancements";

export const kingstonCityData: CityData = {
  id: "kingston",
  name: "Kingston",
  region: "Kingston, Frontenac, Lennox and Addington",
  services: normalizeServiceRecords(
    kingstonServices as RawServiceRecord[],
    kingstonServiceEnhancements,
  ),
  pages: kingstonContent as Record<string, PageContent>,
};

export const cities: Record<string, CityData> = {
  kingston: kingstonCityData,
};

export const getCityData = (cityId = "kingston"): CityData | undefined =>
  cities[cityId];
