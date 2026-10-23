export const KATEGORI_INOVASI = [
  "fesyen",
  "kerajinan",
  "kuliner",
  "teknologi",
  "desain-produk",
  "arsitektur",
  "media-kreatif",
  "musik",
] as const;

export type KategoriInovasi = (typeof KATEGORI_INOVASI)[number];

export type Inovasi = {
  slug: string;
  judul: string;
  ringkasan: string;
  kategori: KategoriInovasi;
  daerah: string;
  provinsi?: string;
  tahun?: number;
  pelaku?: string;
  sumber: string;
};

export const inovasiList: Inovasi[] = [
  {
    slug: "batik-fractal",
    judul: "Batik Fractal",
    ringkasan:
      "Motif batik diolah dengan pola fraktal dan perangkat digital, membuka cara baru merancang batik tanpa meninggalkan tradisi.",
    kategori: "teknologi",
    daerah: "Jawa Barat",
    provinsi: "jawa-barat",
    tahun: 2007,
    pelaku: "Nancy Margried dan Piksel Indonesia",
    sumber: "https://batikfractal.com/",
  },
  {
    slug: "wayang-hip-hop",
    judul: "Wayang Hip Hop",
    ringkasan:
      "Wayang kulit bertemu musik hip-hop dalam pertunjukan yang membawa lakon tradisional ke bahasa generasi muda.",
    kategori: "media-kreatif",
    daerah: "DI Yogyakarta",
    tahun: 2010,
    pelaku: "Ki Catur “Benyek” Kuncoro",
    sumber:
      "https://hyperallergic.com/enduring-power-southeast-asias-traditional-shadow-puppets",
  },
  {
    slug: "papermoon-puppet-theatre",
    judul: "Papermoon Puppet Theatre",
    ringkasan:
      "Teater boneka kontemporer dari Yogyakarta yang memadukan boneka, objek, dan narasi visual untuk cerita lintas budaya.",
    kategori: "media-kreatif",
    daerah: "DI Yogyakarta",
    tahun: 2006,
    pelaku: "Maria Tri Sulistyani dan Iwan Effendi",
    sumber: "https://papermoonpuppet.com/",
  },
  {
    slug: "ibuku-bamboo-architecture",
    judul: "Arsitektur Bambu IBUKU",
    ringkasan:
      "Praktik arsitektur di Bali yang membentuk ruang organik dari bambu, menghubungkan teknik lokal dengan desain kontemporer.",
    kategori: "arsitektur",
    daerah: "Bali",
    provinsi: "bali",
    tahun: 2010,
    pelaku: "Elora Hardy dan tim IBUKU",
    sumber: "https://ibuku.com/",
  },
  {
    slug: "gamelan-salukat",
    judul: "Gamelan Salukat",
    ringkasan:
      "Ansambel gamelan kontemporer yang menjelajahi tuning dan komposisi baru, sekaligus merawat bunyi gamelan Bali.",
    kategori: "musik",
    daerah: "Bali",
    provinsi: "bali",
    tahun: 2007,
    pelaku: "Dewa Alit",
    sumber: "https://www.dewaalitsalukat.com/salukat",
  },
  {
    slug: "ulos-kontemporer",
    judul: "Ulos dalam Fesyen Kontemporer",
    ringkasan:
      "Tenun ulos Batak dibawa ke panggung mode modern melalui potongan, warna, dan gaya yang baru.",
    kategori: "fesyen",
    daerah: "Sumatera Utara",
    provinsi: "sumatera-utara",
    pelaku: "Merdi Sihombing",
    sumber: "https://notjustalabel.com/merdi-sihombing",
  },
  {
    slug: "threads-of-life",
    judul: "Threads of Life",
    ringkasan:
      "Inisiatif yang mendampingi pengrajin tenun tradisional dan pewarna alami, menghubungkan karya mereka dengan pasar yang lebih luas.",
    kategori: "kerajinan",
    daerah: "Bali",
    provinsi: "bali",
    tahun: 1998,
    sumber: "https://threadsoflife.com/",
  },
  {
    slug: "khastara",
    judul: "Khastara",
    ringkasan:
      "Platform digital Perpustakaan Nasional RI untuk naskah dan koleksi langka, memperluas akses penelitian budaya.",
    kategori: "teknologi",
    daerah: "Nasional",
    sumber: "https://khastara.perpusnas.go.id/",
  },
  {
    slug: "indonesia-kaya",
    judul: "Indonesia Kaya",
    ringkasan:
      "Platform digital yang memublikasikan cerita, pertunjukan, dan pengetahuan budaya Indonesia untuk publik yang lebih luas.",
    kategori: "media-kreatif",
    daerah: "Nasional",
    tahun: 2013,
    sumber: "https://www.indonesiakaya.com/",
  },
  {
    slug: "diplomasi-kuliner",
    judul: "Diplomasi Kuliner Nusantara",
    ringkasan:
      "Masakan Indonesia diperkenalkan melalui demonstrasi memasak, kolaborasi, dan perjalanan kuliner di forum internasional.",
    kategori: "kuliner",
    daerah: "DKI Jakarta",
    provinsi: "dki-jakarta",
    pelaku: "William Wongso",
    sumber: "https://id.wikipedia.org/wiki/William_Wongso",
  },
];

export function getInovasi(slug: string): Inovasi | undefined {
  return inovasiList.find((item) => item.slug === slug);
}

export function inovasiUntukProvinsi(slug: string): Inovasi[] {
  return inovasiList.filter((item) => item.provinsi === slug);
}
