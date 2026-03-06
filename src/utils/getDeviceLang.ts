import { EnumStorageLangsValues } from "@/lib";
import * as Localization from "expo-localization";

export function getDeviceLang(): EnumStorageLangsValues {
  const code = Localization.getLocales()[0]?.languageCode ?? "en";
  if (code.startsWith("ru")) return EnumStorageLangsValues.RU;
  return EnumStorageLangsValues.EN;
}