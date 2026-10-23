export const BULAN = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
] as const;

export type Bulan = (typeof BULAN)[number];

export type EventBudaya = {
  slug: string;
  nama: string;
  provinsi?: string;
  provinsiNama: string;
  bulan: Bulan[];
  waktu: string;
  lokasi: string;
  deskripsi: string;
  sumber: string;
};

/*
 * Jadwal festival disimpan sebagai bulan perayaan, bukan tanggal pasti.
 * Tanggal penyelenggaraan dapat berubah setiap tahun; halaman menandainya
 * sebagai jadwal indikatif agar tidak menampilkan kepastian yang keliru.
 */
export const eventList: EventBudaya[] = [
  {
    slug: "cap-go-meh-singkawang",
    nama: "Cap Go Meh Singkawang",
    provinsi: "kalimantan-barat",
    provinsiNama: "Kalimantan Barat",
    bulan: ["Januari", "Februari", "Maret"],
    waktu: "Kalender lunar",
    lokasi: "Singkawang, Kalimantan Barat",
    deskripsi:
      "Perayaan penutup rangkaian Tahun Baru Imlek dengan arak-arakan tatung, lampion, dan pertunjukan di jalanan Singkawang.",
    sumber: "https://id.wikipedia.org/wiki/Cap_Go_Meh",
  },
  {
    slug: "festival-danau-toba",
    nama: "Festival Danau Toba",
    provinsi: "sumatera-utara",
    provinsiNama: "Sumatera Utara",
    bulan: ["September"],
    waktu: "Jadwal indikatif",
    lokasi: "Kawasan Danau Toba, Sumatera Utara",
    deskripsi:
      "Pesta budaya tahunan di kawasan Danau Toba dengan pertunjukan seni, olahraga tradisional, dan kegiatan masyarakat Batak.",
    sumber:
      "https://www.visitsoutheastasia.travel/activity/lake-toba-festival-in-north-sumatra",
  },
  {
    slug: "festival-rendang",
    nama: "Festival Rendang",
    provinsi: "sumatera-barat",
    provinsiNama: "Sumatera Barat",
    bulan: ["Agustus"],
    waktu: "Jadwal indikatif",
    lokasi: "Payakumbuh, Sumatera Barat",
    deskripsi:
      "Perayaan kuliner rendang dengan demonstrasi memasak, pasar makanan, dan pertunjukan budaya Minangkabau.",
    sumber: "https://id.wikipedia.org/wiki/Festival_Rendang",
  },
  {
    slug: "festival-sriwijaya",
    nama: "Festival Sriwijaya",
    provinsi: "sumatera-selatan",
    provinsiNama: "Sumatera Selatan",
    bulan: ["Juni"],
    waktu: "Jadwal indikatif",
    lokasi: "Palembang, Sumatera Selatan",
    deskripsi:
      "Festival budaya yang mengangkat sejarah Sriwijaya melalui pertunjukan, pameran, dan kegiatan di tepi Sungai Musi.",
    sumber: "https://id.wikipedia.org/wiki/Festival_Sriwijaya",
  },
  {
    slug: "jakarta-fair",
    nama: "Jakarta Fair",
    provinsi: "dki-jakarta",
    provinsiNama: "DKI Jakarta",
    bulan: ["Juni", "Juli"],
    waktu: "Jadwal indikatif",
    lokasi: "Kemayoran, Jakarta",
    deskripsi:
      "Pameran dan pekan raya tahunan yang juga menampilkan kuliner, kerajinan, serta pertunjukan budaya dari berbagai daerah.",
    sumber: "https://www.jakartafair.co.id/",
  },
  {
    slug: "pesta-kesenian-bali",
    nama: "Pesta Kesenian Bali",
    provinsi: "bali",
    provinsiNama: "Bali",
    bulan: ["Juni", "Juli"],
    waktu: "Jadwal indikatif",
    lokasi: "Denpasar, Bali",
    deskripsi:
      "Panggung tahunan seni dan budaya Bali: tari, gamelan, sastra, serta prosesi yang melibatkan sanggar dari berbagai daerah.",
    sumber: "https://id.wikipedia.org/wiki/Pesta_Kesenian_Bali",
  },
  {
    slug: "makassar-international-writers-festival",
    nama: "Makassar International Writers Festival",
    provinsi: "sulawesi-selatan",
    provinsiNama: "Sulawesi Selatan",
    bulan: ["Juni"],
    waktu: "Jadwal indikatif",
    lokasi: "Makassar, Sulawesi Selatan",
    deskripsi:
      "Pertemuan penulis, pembaca, dan praktisi budaya dari Indonesia dan mancanegara, dengan diskusi serta pertunjukan sastra.",
    sumber: "https://miwf.org/",
  },
];

export function eventUntukProvinsi(slug: string): EventBudaya[] {
  return eventList.filter((event) => event.provinsi === slug);
}
