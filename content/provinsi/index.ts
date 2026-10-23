import type { Provinsi } from "./types";

import { aceh } from "./aceh";
import { bali } from "./bali";
import { dkiJakarta } from "./dki-jakarta";
import { jawaBarat } from "./jawa-barat";
import { kalimantanBarat } from "./kalimantan-barat";
import { sulawesiSelatan } from "./sulawesi-selatan";
import { sumateraBarat } from "./sumatera-barat";
import { sumateraSelatan } from "./sumatera-selatan";
import { sumateraUtara } from "./sumatera-utara";

export type { EntriBudaya, KategoriBudaya, Provinsi } from "./types";
export { KATEGORI_BUDAYA } from "./types";

export const provinsiList: Provinsi[] = [
  aceh,
  sumateraUtara,
  sumateraBarat,
  sumateraSelatan,
  kalimantanBarat,
  dkiJakarta,
  jawaBarat,
  bali,
  sulawesiSelatan,
];

export const provinsiAktif = provinsiList.filter((provinsi) => provinsi.aktif);

export function getProvinsi(slug: string): Provinsi | undefined {
  return provinsiList.find((provinsi) => provinsi.slug === slug);
}
