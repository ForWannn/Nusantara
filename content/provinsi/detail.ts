export type GambarBudaya = {
  src: string;
  alt: string;
  caption?: string;
  kredit?: string;
  lisensi?: string;
  sumber: string;
  host?: string;
  remoteSrc?: string;
};

export type DetailBudaya = {
  info: string[];
  gambar?: GambarBudaya;
};

/**
 * Data pendamping untuk halaman detail budaya.
 * Dipisahkan dari berkas provinsi agar entri inti tetap ringkas.
 * Teks diadaptasi dari Wikipedia bahasa Indonesia (CC BY-SA 4.0).
 */
export const detailBudaya: Record<string, Record<string, DetailBudaya>> = {
  "aceh": {
    "mie-aceh": {
      "info": [
        "Mi aceh adalah masakan mi pedas khas Aceh di Indonesia. Mi kuning tebal dengan irisan daging sapi, daging kambing atau makanan laut (udang dan cumi) disajikan dalam sup sejenis kari yang gurih dan pedas. Mi aceh biasanya ditaburi dengan bawang goreng dan disajikan bersama emping, potongan bawang merah, mentimun, dan jeruk nipis. Mi aceh biasanya disajikan dalam tiga bentuk yaitu mi kuah, mi goreng basah, dan mi goreng kering. Di Aceh, karena ekslusivitas makanan di setiap daerah, mi Aceh hanya merujuk pada mi goreng, sedangkan istilah mi Aceh hanya digunakan di luar provinsi Aceh. Keunikan cita rasa mie Aceh terletak pada racikan bumbu yang kaya akan rempah-rempah, sehingga menghasilkan rasa yang kuat di lidah. Mienya pun cukup unik karena berwarna kuning dan bentuknya tebal pipih. Mie Aceh memiliki beberapa varian, ada yang kering,…",
        "Mi aceh menunjukkan sejarah budaya masyarakat Aceh dengan yang mendapat banyak pengaruh budaya asing yang membentuk wilayah Aceh. Kuah berbahan dasar kari adalah pengaruh masakan India, sedangkan mi adalah pengaruh masakan Tionghoa. Preferensi pada daging kambing dan daging sapi menunjukkan nilai Islam yang mengharuskan memakan makanan yang halal. Sedangkan preferensi pada seafood menunjukkan letak geografis Aceh yang dikelilingi perairan seperti Selat Malaka, Laut Andaman dan Samudra Hindia, juga cara hidup mayoritas penduduk Aceh sebagai pedagang, petani dan nelayan. Saat ini, tempat makan mi aceh dapat ditemukan di sebagian besar kota-kota di Indonesia, dan juga negara tetangga seperti Malaysia dan Australia."
      ],
      "gambar": {
        "src": "/images/budaya/aceh/mie-aceh.jpg",
        "alt": "Ilustrasi Mie Aceh — Aceh",
        "kredit": "Yasmina Haryono",
        "lisensi": "CC BY-SA 2.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Mie_Aceh_with_beef.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Mie_Aceh_with_beef.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "tari-saman": {
      "info": [
        "Tari Saman adalah tari rakyat dari masyarakat Suku Gayo di Provinsi Aceh, Indonesia. Pada tahun 2011, Tari Saman diakui oleh UNESCO sebagai warisan tak benda dunia. Tarian ini merupakan salah satu media untuk menyampaikan pesan atau dakwah. Tarian ini mencerminkan pendidikan, keagamaan, sopan santun, kepahlawanan, kekompakan, dan kebersamaan. Sebelum tari Saman dimulai yaitu sebagai mukaddimah atau pembukaan, tampil seorang tua cerdik pandai atau pemuka adat untuk mewakili masyarakat setempat (keketar) atau nasihat-nasihat yang berguna kepada para pemain dan penonton. Lagu dan syair pengungkapannya secara bersama dan berkesinambungan, pemainnya terdiri dari pria-pria yang masih muda-muda dengan memakai pakaian adat. Penyajian tarian tersebut dapat juga dipentaskan, dipertandingkan antara grup tamu dengan grup sepangkalan (dua grup).…",
        "Nyanyian para penari menambah kedinamisan dari tarian Saman. Cara menyanyikan lagu-lagu dalam tari saman dibagi dalam 5 macam:",
        "Rengum, yaitu auman yang diawali oleh pengangkat. Dering, yaitu rengum yang segera diikuti oleh semua penari. Redet, yaitu lagu singkat dengan suara pendek yang dinyanyikan oleh seorang penari pada bagian tengah tari. Syekh, yaitu lagu yang dinyanyikan oleh seorang penari dengan suara panjang tinggi melengking, biasanya sebagai tanda perubahan gerak. Saur, yaitu lagu yang diulang bersama oleh seluruh penari setelah dinyanyikan oleh penari solo.",
        "Tarian Saman menggunakan dua unsur gerak yang menjadi unsur dasar dalam tarian Saman, yakni tepuk tangan dan tepuk dada. Diduga, ketika menyebarkan agama Islam, Syekh Saman mempelajari tarian Melayu kuno, kemudian menghadirkan kembali lewat gerak yang disertai dengan syair-syair dakwah islam demi memudahkan dakwahnya. Dalam konteks kekinian, tarian ritual yang bersifat religius ini masih digunakan sebagai media untuk menyampaikan pesan-pesan dakwah melalui pertunjukan-pertunjukan. Tari Saman termasuk salah satu tarian yang cukup unik, karena hanya menampilkan gerak tepuk tangan dan gerakan-gerakan lainnya, seperti gerak guncang, kirep, lingang, surang-saring (semua gerak ini menggunakan bahasa Bahasa Gayo)."
      ],
      "gambar": {
        "src": "/images/budaya/aceh/tari-saman.jpg",
        "alt": "Ilustrasi Tari Saman — Aceh",
        "kredit": "Fajriboy",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Saman_dance.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Saman_dance.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "ulee-balang": {
      "info": [
        "Uleebalang (ejaan lama: Oeloebalang; Aceh: ulèëbalang; Melayu: hulubalang) adalah golongan bangsawan militer yang memegang kekuasaan atas tata pemerintahan sipil, hukum, adat, dan militer di tingkat kenegerian (landschap) atau daerah swatantra dalam struktur Kesultanan Aceh Darussalam. Jabatan ini setara dengan tingkat bupati atau gubernur dalam pembagian administratif Indonesia modern. Jabatan uleebalang diwariskan secara turun-temurun kepada garis keturunan laki-laki yang sah. Laki-laki keturunan bangsawan ini menyandang gelar Teuku, sedangkan kaum perempuannya menyandang gelar Cut.",
        "Struktur pemerintahan Sultan bertindak sebagai pemegang kekuasaan tertinggi di Kesultanan Aceh (bergelar Sultan Imam Adil). Di bawah sultan, wilayah teritorial inti dibagi menjadi federasi daerah yang disebut Aceh Lhèë Sagoë (Aceh Tiga Sagi) di wilayah Aceh Besar. Masing-masing sagi dikepalai oleh seorang Panglima Sagoë yang membawahi para uleebalang daerah. Jabatan ini terbagi atas dua tingkatan utama berdasarkan luas wilayahnya:",
        "Ulèëbalang Chik: Kepala kenegerian luas yang memimpin urusan pertahanan, memungut cukai pelabuhan, serta memiliki hierarki kekuasaan penuh atas wilayah bawahan. Ulèëbalang Cut (atau Ulèëbalang Kecil): Kepala wilayah otonom kecil yang secara administratif dan hierarki adat berada di bawah koordinasi seorang Ulèëbalang Chik. Dalam menjalankan fungsi hukum dan pemerintahan lokal, seorang ulèëbalang dibantu oleh Imam Mukim (pemimpin urusan keagamaan dan gabungan kampung) serta Keuchik (kepala desa atau gampong).",
        "Sagoë XXII Mukim: Dipimpin secara turun-temurun oleh dinasti Teuku Panglima Polem yang menyandang gelar kebesaran Sri Muda Setia Peurkasa (bertindak selaku Wazirud Daulah atau Menteri Negara). Sagoë XXV Mukim: Dipimpin oleh kepala sagi bergelar adat Sri Seutia Ulama Kadli Malikul 'Alam. Sagoë XXVI Mukim: Dipimpin oleh kepala sagi yang menyandang gelar kebesaran Sri Imam Muda. Kenegerian Meuraksa (9 Mukim): Dipimpin oleh Teuku Nèh (Teuku Neh Meuraksa) beserta Teuku Nek Radja Meuraksa. Kenegerian Lam Nga (Lamnga): Dipimpin oleh Teuku Ibrahim Lam Nga (suami pertama Cut Nyak Dhien)."
      ],
      "gambar": {
        "src": "/images/budaya/aceh/ulee-balang.jpg",
        "alt": "Ilustrasi Ulee Balang — Aceh",
        "caption": "Ulèëbalang adalah kepala pemerintah dalam kesultanan Aceh yang memimpin sebuah wilayah atau sagoë.",
        "kredit": "Unknown author",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:COLLECTIE_TROPENMUSEUM_Districtshoofd_Wabil_en_volgeling_Atjeh_TMnr_10001702.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/3/3f/COLLECTIE_TROPENMUSEUM_Districtshoofd_Wabil_en_volgeling_Atjeh_TMnr_10001702.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "rencong": {
      "info": [
        "Rencong (Aksara Jawoë : رنچوڠ) (Bahasa Aceh: rincông / reuncông) adalah senjata khas Suku Aceh. Rencong merupakan simbol identitas diri, keberanian, dan ketangguhan Suku Aceh. Ada beberapa jenis rencong. Pertama Rencong Pudoi yaitu Rencong yang belum sempurna pada bentuk gagangnya. Kedua Rencong Meukure yaitu Rencong yang diberi hiasan seperti gambar hewan, akar kayu, dan bunga di bagian mata pisaunya. Ketiga Rencong Meupucok yaitu Rencong yang di atas gagangnya ada sebuah pucuk yang biasanya terbuat dari emas. Keempat Rencong Meucugek, yaitu Rencong yang pada gagangnya ada suatu bentuk cugek (perekat dan bergagang lengkung 90 derajat).",
        "Menurut catatan sejarah, Rencong merupakan senjata tradisional yang digunakan di Kesultanan Aceh sejak masa pemerintahan Sultan Ali Mughayat Syah yang merupakan Sultan Aceh yang pertama. Kedudukan Rencong di Kesultanan Aceh sangatlah penting, Rencong selalu diselipkan di pinggang Sultan Aceh, selain itu para Ulee Balang dan masyarakat biasa juga menggunakan Rencong. Rencong emas milik Sultan Aceh dapat kita jumpai di Museum Sejarah Aceh, dari bukti sejarah tersebut dapat disimpulkan bahwa Rencong memang sudah terlahir sejak masa Kesultanan Aceh tetapi pembuat pertamanya sampai saat ini belum diketahui.",
        "Dalam acara adat Kesultanan Aceh, Rencong biasanya digunakan saat acara pernikahan, meugang, peusijuek, tueng dara baro, intat linto dan dalam setiap acara penting lainnya. Rencong masih digunakan dan dipakai sebagai atribut busana di dalam setiap upacara-upacara adat Aceh. Pemakaian rencong mengarah kepada simbolisasi dari keberanian dari seorang lelaki dalam memimpin keluarga setelah menikah.",
        "Rencong memiliki berbagai tingkatan, untuk Sultan terbuat dari emas yang berukirkan sekutip ayat-ayat suci Al-Qur'an, sedangkan Rencong lainnya biasanya terbuat dari perak, kuningan, besi putih, kayu, dan gading. Masyarakat Aceh menghubungkan kekuatan mistik dengan senjata Rencong. Rencong adalah simbol keberanian dan kegagahan ureueng (orang) Aceh. Bagi siapa saja yang memegang senjata akan merasa lebih berani di dalam menghadapi musuh. Pada masa sekarang, senjata ini memang sudah tidak begitu relevan untuk digunakan sebagai senjata penyerang. Namun demikian, senjata ini masih relevan sebagai sebuah simbolisasi dari keberanian, ketangguhan, dan kejantanan dari masyarakat Aceh. Masyarakat Aceh memercayai bahwa bentuk dari Rencong mewakili simbol dari Bismillah dalam kepercayaan Agama Islam. Rencong telah mejadi salah satu Warisan…"
      ],
      "gambar": {
        "src": "/images/budaya/aceh/rencong.jpg",
        "alt": "Ilustrasi Rencong — Aceh",
        "caption": "Rencong Aceh",
        "kredit": "Tropenmuseum",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:COLLECTIE_TROPENMUSEUM_Dolk_met_rechthoekig_gebogen_hoornen_greep_en_houten_schede_TMnr_151-19.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/3/3f/COLLECTIE_TROPENMUSEUM_Dolk_met_rechthoekig_gebogen_hoornen_greep_en_houten_schede_TMnr_151-19.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "hikayat-prang-sabi": {
      "info": [
        "Hikayat Prang Sabi (Aceh: حكاية ڤراڠ سابي; juga ditulis Hikayat Perang Sabil) adalah sebutan bagi suatu korpus sastra Aceh berbentuk hikayat yang membicarakan prang sabi atau perang di jalan Allah, baik teks tersebut secara eksplisit berjudul Hikayat Prang Sabi maupun menggunakan judul lain. Dalam pengertian yang lebih sempit, nama Hikayat Prang Sabi terutama merujuk kepada sebuah karya yang secara tradisional dikaitkan dengan Teungku Chik Pante Kulu dan dipopulerkan dalam lingkungan Teungku Chik di Tiro Muhammad Saman pada masa Perang Aceh. Hikayat tersebut memadukan seruan keagamaan dengan cerita mengenai perang, mati syahid, pahala akhirat dan kehidupan para syuhada. Karya ini menjadi salah satu teks sastra Aceh yang paling terkenal karena digunakan untuk membangkitkan semangat perlawanan terhadap pemerintahan kolonial Hindia…",
        "Dalam bahasa Aceh, prang berarti \"perang\", sedangkan sabi berasal dari bahasa Arab sabīl dalam ungkapan fī sabīl Allāh (في سبيل الله), \"di jalan Allah\". Istilah prang sabi dalam konteks sejarah Aceh dipakai untuk perang yang diberikan legitimasi keagamaan sebagai jihad. Adapun hikayat dalam tradisi Aceh tidak identik dengan pengertian hikayat dalam sastra Melayu yang umumnya diasosiasikan dengan prosa naratif. Hikayat Aceh terutama merupakan sastra berirama yang tersusun dalam larik-larik bersajak dan lazim disampaikan secara lisan oleh pembaca atau pelantun hikayat. Karena banyak teks Aceh lama tidak mempunyai judul asli yang tetap, istilah Hikayat Prang Sabi dapat merujuk kepada dua hal:",
        "Gagasan perang sabil di Aceh berkembang dari tradisi keilmuan Islam yang lebih luas. Ulama Aceh membaca karya-karya berbahasa Arab dan Melayu mengenai jihad, pahala syahid, hukum mempertahankan wilayah Muslim, serta kehidupan akhirat. Salah satu karya yang mempunyai pengaruh besar adalah Naṣīḥat al-Muslimīn wa Tadhkirat al-Mu'minīn fī Faḍā'il al-Jihād fī Sabīl Allāh karya ulama Palembang Abd al-Samad al-Palimbani. Karya al-Palimbani kemudian mengalami transformasi dalam tradisi Aceh. Pokok-pokok ajarannya diterjemahkan, disadur dan digubah ke dalam bahasa Aceh dalam bentuk yang dapat dibacakan kepada masyarakat luas."
      ],
      "gambar": {
        "src": "/images/budaya/aceh/hikayat-prang-sabi.jpg",
        "alt": "Ilustrasi Hikayat Prang Sabi — Aceh",
        "kredit": "Tropenmuseum",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:COLLECTIE_TROPENMUSEUM_Handgeschreven_boek_in_Acehs_schrift_TMnr_2454-4a.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/7/7a/COLLECTIE_TROPENMUSEUM_Handgeschreven_boek_in_Acehs_schrift_TMnr_2454-4a.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "kesultanan-aceh-darussalam": {
      "info": [
        "Kesultanan Aceh, atau Kesultanan Aceh Darussalam (bahasa Aceh: Acèh Darussalam; Jawoë: كاورجاون اچيه دارالسلام) merupakan sebuah kerajaan Islam yang pernah berdiri di provinsi Aceh, Indonesia. Kesultanan Aceh terletak di utara pulau Sumatra dengan ibu kota Banda Aceh Darussalam dengan sultan pertamanya adalah Sultan Ali Mughayat Syah yang dinobatkan pada Ahad, 1 Jumadil awal 913 H atau pada tanggal 8 September 1507. Dalam sejarahnya yang panjang itu (1496–1903), Aceh mengembangkan pola dan sistem pendidikan militer, berkomitmen dalam menentang imperialisme bangsa Eropa, memiliki sistem pemerintahan yang teratur dan sistematik, mewujudkan pusat-pusat pengkajian ilmu pengetahuan, dan menjalin hubungan diplomatik dengan negara lain.",
        "Kesultanan Aceh didirikan oleh Sultan Ali Mughayat Syah pada tahun 1496. Pada awalnya kerajaan ini berdiri atas wilayah Kerajaan Lamuri, kemudian menundukan dan menyatukan beberapa wilayah kerajaan sekitarnya mencakup Daya, Pedir, Lidie, Nakur. Selanjutnya pada tahun 1524 wilayah Pasai sudah menjadi bagian dari kedaulatan Kesultanan Aceh diikuti dengan Aru. Pada tahun 1528, Ali Mughayat Syah digantikan oleh putera sulungnya yang bernama Salahuddin, yang kemudian berkuasa hingga tahun 1537. Kemudian Salahuddin digantikan oleh Sultan Alauddin Riayat Syah al-Kahar yang berkuasa hingga tahun 1571.",
        "Meskipun Sultan dianggap sebagai penguasa tertinggi, tetapi nyatanya selalu dikendalikan oleh orangkaya atau hulubalang. Hikayat Aceh menuturkan Sultan yang diturunkan paksa di antaranya Sultan Sri Alam digulingkan pada 1579 karena perangainya yang sudah melampaui batas dalam membagi-bagikan harta kerajaan pada pengikutnya. Penggantinya Sultan Zainal Abidin terbunuh beberapa bulan kemudian karena kekejamannya dan karena kecanduannya berburu dan adu binatang. Raja-raja dan orangkaya menawarkan mahkota kepada Alaiddin Riayat Syah Sayyid al-Mukamil dari Dinasti Darul Kamal pada 1589. Ia segera mengakhiri periode ketidak-stabilan dengan menumpas orangkaya yang berlawanan dengannya sambil memperkuat posisinya sebagai penguasa tunggal Kesultanan Aceh yang dampaknya dirasakan pada sultan berikutnya."
      ],
      "gambar": {
        "src": "/images/budaya/aceh/kesultanan-aceh-darussalam.jpg",
        "alt": "Ilustrasi Kesultanan Aceh Darussalam — Aceh",
        "caption": "Makam Sultan Ali Mughayat Syah di Banda Aceh",
        "kredit": "Si Gam Acèh",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Jirat_Soleutan_Ali_Mughayat_Syah.JPG",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Jirat_Soleutan_Ali_Mughayat_Syah.JPG/1280px-Jirat_Soleutan_Ali_Mughayat_Syah.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "bahasa-aceh": {
      "info": [
        "Bahasa Aceh (Endonim: Bahsa/Basa Acèh, Jawoë: باس اچيه, pengucapan dalam IPA: [bahsa at͡ʃɛh]) adalah sebuah bahasa yang dituturkan oleh masyarakat Aceh yang terdapat di wilayah pesisir, sebagian pedalaman dan sebagian kepulauan di Aceh. Bahasa ini juga dituturkan oleh keturunan Aceh di beberapa wilayah Malaysia seperti di Distrik Yan, Kedah. Bahasa Aceh digunakan sebagai bahasa ko-resmi di provinsi Aceh, bersama dengan Bahasa Indonesia. Bahasa Aceh termasuk dalam rumpun bahasa Chamik, cabang dari rumpun bahasa Melayu-Polinesia, cabang dari rumpun bahasa Austronesia.",
        "Bahasa Aceh termasuk dalam kelompok bahasa Chamic, cabang dari rumpun bahasa Melayu-Polinesia, cabang dari rumpun bahasa Austronesia. Bahasa-bahasa yang memiliki kekerabatan terdekat dengan bahasa Aceh adalah bahasa Cham, Roglai, Jarai, Rade dan 6 bahasa lainnya dalam rumpun bahasa Chamic. Bahasa-bahasa lainnya yang juga berkerabat dengan bahasa Aceh adalah bahasa Melayu dan bahasa Minangkabau.",
        "Bahasa Aceh tersebar terutama di wilayah pesisir Aceh. Bahasa ini dituturkan mulai dari Manyak Payed, Aceh Tamiang di pesisir timur sampai ke Trumon, Aceh Selatan di pesisir barat."
      ],
      "gambar": {
        "src": "/images/budaya/aceh/bahasa-aceh.jpg",
        "alt": "Ilustrasi Bahasa Aceh — Aceh",
        "kredit": "Tropenmuseum",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:COLLECTIE_TROPENMUSEUM_Handgeschreven_boek_in_Acehs_schrift_TMnr_2454-4a.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/7/7a/COLLECTIE_TROPENMUSEUM_Handgeschreven_boek_in_Acehs_schrift_TMnr_2454-4a.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    }
  },
  "bali": {
    "tari-kecak": {
      "info": [
        "Kecak (bahasa Bali: ᬓᬾᬘᬓ᭄, translit. Kécak, pelafalan: ['kɛ.tʃak], secara kasar \"KEH-chahk\", pengejaan alternatif: Ketjak atau Ketjack) adalah dramatari seni khas Bali yang lebih utama menceritakan mengenai Ramayana dan dimainkan terutama oleh laki-laki. Tarian ini dipertunjukkan oleh banyak (puluhan atau lebih) penari laki-laki yang duduk berbaris melingkar dan dengan irama tertentu menyerukan \"cak\" dan mengangkat kedua lengan, menggambarkan kisah Ramayana saat barisan kera membantu Rama melawan Rahwana. Namun, Kecak berasal dari ritual sanghyang, yaitu tradisi tarian yang penarinya akan berada pada kondisi tidak sadar, melakukan komunikasi dengan Tuhan atau roh para leluhur dan kemudian menyampaikan harapan-harapannya kepada masyarakat. Para penari yang duduk melingkar tersebut mengenakan kain kotak-kotak seperti papan catur…"
      ],
      "gambar": {
        "src": "/images/budaya/bali/tari-kecak.jpg",
        "alt": "Ilustrasi Tari Kecak — Bali",
        "kredit": "Mr Aaron from (optional)",
        "lisensi": "CC BY-SA 2.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Kecak_Dance_1.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Kecak_Dance_1.jpg/1280px-Kecak_Dance_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "subak": {
      "info": [
        "Subak adalah organisasi kemasyarakatan yang khusus mengatur sistem pengairan sawah (irigasi) yang digunakan dalam bercocok tanam padi di Bali, Indonesia. Subak pada umumnya memiliki pura yang dinamakan Pura Uluncarik atau Pura Bedugul, yang khusus dibangun oleh para pemilik lahan dan petani. Pura tersebut diperuntukkan bagi Dewi Sri, yaitu dewi kemakmuran dan kesuburan menurut kepercayaan masyarakat Bali. Sistem irigasi ini diatur oleh seorang pemuka adat (Pekaseh) yang juga adalah seorang petani di Bali. Sistem subak telah menjadi salah satu ciri khas dari masyarakat Bali. Sistem pengairan ini berkembang dalam pengaruh nilai-nilai ajaran agama Hindu yang kuat dan membentuk suatu kearifan lokal, yang membuat masyarakat petani di Bali dapat serasi dengan alam untuk memperoleh hasil panen yang optimal. Dalam kajian sejarah, subak telah…",
        "Bali adalah bagian dari kepulauan Indonesia, terletak di antara delapan dan sembilan derajat selatan khatulistiwa. Mencakup area seluas 563.300 hektare termasuk tiga pulau lepas pantai, pulau tersebut telah lama dicirikan di dunia sebagai \"surga\" terakhir di Bumi, yang penduduknya meluangkan cukup banyak waktu dan materi untuk upacara-upacara adat demi dewa-dewi Hindu yang mereka puja. Oleh karena itu, hubungan antara aspek berwujud dan tidak berwujud merupakan aspek utama dari budaya dan warisan nenek moyang masyarakat Bali. Kombinasi antara iklim tropis, hujan dan tanah vulkanis yang subur menjadikan pulau Bali sebagai tempat yang ideal untuk budidaya tanaman; termasuk tumbuhan padi, kelapa, cengkih dan kopi. Kegiatan pertanian ini mempunyai pengaruh yang besar pada lanskap Bali, terutama dalam penciptaan sawah berundak-undak.…",
        "Museum Subak sebagai warisan peradaban agraris, sosial, dan spiritual yang hidup dan berkembang di masyarakat Bali rentan tergerus zaman. Oleh karena itu keberadaan museum sangat penting dalam upaya pengenalan dan pelestariannya. Salah satunya adalah Museum Subak yang ada di Kabupaten Tabanan. Museum Subak di Kabupaten Tabanan berada di bawah naungan Pemerintah Kabupaten Tabanan dan dikelola oleh Dinas Kebudayaan Kabupaten Tabanan. Museum ini dibangun karena daerah ini memiliki jumlah subak terbanyak, areal pertanian yang luas, serta dikenal sebagai lumbung berasnya Bali. Setelah melalui proses perencanaan dan pengumpulan koleksi, Museum Subak diresmikan pada tanggal 13 Oktoberfest 1981 oleh Gubernur Bali, Prof. Dr. Ida Bagus Mantra. Selain di Kabupaten Tabanan, museum subak juga ada di Kabupaten Gianyar. Museum ini dikenal dengan…"
      ],
      "gambar": {
        "src": "/images/budaya/bali/subak.jpg",
        "alt": "Ilustrasi Subak — Bali",
        "caption": "Sawah berundak di Jatiluwih, Bali.",
        "kredit": "Globe-trotter",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Rice_terraces_in_Jatiluwih,_Tabanan_Regency,_Bali,_Indonesia.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Rice_terraces_in_Jatiluwih%2C_Tabanan_Regency%2C_Bali%2C_Indonesia.jpg/1280px-Rice_terraces_in_Jatiluwih%2C_Tabanan_Regency%2C_Bali%2C_Indonesia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "kain-endek": {
      "info": [
        "Endek adalah kain tenun yang berasal dari Bali. Kain endek merupakan hasil dari karya seni rupa terapan, yang berarti karya seni yang dapat diterapkan dalam kehidupan sehari-hari. Endek berasal dari kata \"gendekan\" atau \"ngendek\" yang berarti diam atau tetap, tidak berubah warnanya. Kegiatan menenun atau pertenunan endek di Bali dapat dijumpai di kabupaten Karangasem, Klungkung, Gianyar, Buleleng, Jembrana dan Kota Denpasar. Tenun ikat endek memiliki sebutan yang beragam di setiap daerah, endek yang dibuat di Kabupaten Gianyar dikenal dengan nama endek Gianyar, di Klungkung terkenal dengan nama endek Klungkung.",
        "Kain endek mulai berkembang sejak abad ke-16, yaitu masa pemerintahan Raja Dalem Waturenggong di Gelgel, Klungkung. Kain endek ini kemudian berkembang di sekitar daerah Klungkung, salah satunya adalah di Desa Sulang. Di desa Sulang, kain tenun endek dipelopori oleh Wayan Rudja yang saat itu memiliki tenaga kerja sekitar 200 karyawan. Meskipun kain endek telah ada sejak Kerajaan Gelgel, tetapi endek baru mulai berkembang pesat di desa Sulang setelah masa kemerdekaan. Perkembangan kain endek di Desa Sulang dimulai pada tahun 1975 dan kemudian berkembang pesat pada tahun 1985 hingga sekarang. Dahulu, kerajinan Tenun Ikat Endek di desa Sulang berjumlah 25 perusahaan, namun seiring berjalannya waktu kerajinan ini mulai berkurang. Sekarang usaha kerajinan tenun endek yang bertahan hanya dua perusahaan yaitu usaha Tenun Endek Astika…",
        "Kain Endek dapat digunakan sebagai pakaian adat atau banyak digunakan sebagai seragam sekolah dan kantor. Namun ada beberapa motif yang dianggap sakral yang hanya digunakan dalam acara keagamaan saja. Ada juga motif yang hanya digunakan untuk orang-orang tertentu seperti para raja atau bangsawan. Hingga kini, penggunaan kain endek telah digunakan dalam berbagai kepentingan, mulai dari menjadi bahan dasar pakaian formal, kerja, acara adat ataupun gaya fashion. Kain endek Bali mengikuti perkembangan jaman dan kegunaannya dimodifikasi secara khusus untuk memadukan kesan traditional modern. Hasil modifikasi ini secara umum dibuat menjadi Kebaya Endek., Kemeja Endek dan Kebaya Adat."
      ],
      "gambar": {
        "src": "/images/budaya/bali/kain-endek.jpg",
        "alt": "Ilustrasi Kain Endek — Bali",
        "caption": "Kain endek Geringsing",
        "kredit": "Chris Hazzard",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Geringsing_endek_weaving_106_cm_wide.JPG",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Geringsing_endek_weaving_106_cm_wide.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "babi-guling": {
      "info": [
        "Babi guling atau babi putar (di Bali disebut be guling) adalah sejenis makanan yang terbuat dari anak babi betina atau jantan yang perutnya diisikan dengan bumbu dan sayuran seperti daun ketela pohon dan lalu dipanggang sambil diputar-putar (diguling-gulingkan) sampai matang, ditandai dengan perubahan warna kulit menjadi kecokelatan dan renyah. Awalnya, babi guling digunakan untuk sajian pada upacara baik upacara adat maupun upacara keagamaan, tetapi saat ini babi guling telah dijual sebagai hidangan baik di warung-warung, rumah makan, bahkan hotel-hotel tertentu di daerah Bali dan lainnya. Nama babi guling merujuk pada teknik pengolahannya tersebut. Sebelum dipanggang, isi perut seekor babi utuh dibersihkan dan dibumbui. Proses pemasakan dilakukan dengan cara memanggang karkas babi secara utuh di atas bara api sambil digulingkan…",
        "Di belahan dunia, tradisi babi panggang sudah dikenal sejak berabad-abad silam, dan mungkin lebih lama. Ada banyak cara untuk menyajikan babi panggang, termasuk gaya memanggang rotisserie, dan \"Caja china\" kotak gaya memanggang. Banyak keluarga tradisional memiliki kebiasaan babi panggang untuk acara syukuran atau Natal. Di Miami dan daerah lainnya seperti Kuba, Puerto Rico, Karibia pesta babi panggang diadakan pada malam Natal dengan keluarga dan teman-teman. Keluarga dari Hawaii sering menyantap babi panggang pada hari-hari peringatan.",
        "Di Indonesia babi panggang umum disebut babi guling, masakan babi panggang atau bakar jarang ditemukan secara umum karena Indonesia adalah negara mayoritas muslim, kecuali dalam provinsi mayoritas non-muslim, seperti Hindu Bali dan tanah Batak Kristen di Sumatera Utara, orang Minahasa di Sulawesi Utara, Toraja di Sulawesi Selatan, Papua, orang Dayak di Kalimantan, orang-orang di NTT dan juga di antara orang Tionghoa Indonesia. Di Bali, babi guling biasanya disajikan dengan nasi lawar dan itu adalah hidangan populer di restoran dan warung Bali. Nama babi guling untuk daerah Bali lebih dikenal dengan be guling. Sebetulnya be guling dapat dibuat dari jenis daging lainnya seperti itik dan ayam. Babi guling yang paling terkenal berasal dari kabupaten Gianyar. Dalam tradisi orang Batak, babi guling merupakan prasyarat dalam penawaran…",
        "Selain disajikan dalam ritual adat dan perayaan besar, babi guling juga dijual secara bebas."
      ],
      "gambar": {
        "src": "/images/budaya/bali/babi-guling.jpg",
        "alt": "Ilustrasi Babi Guling — Bali",
        "kredit": "Rollan Budi from Vancouver, BC, Canada",
        "lisensi": "CC BY-SA 2.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Babi_guling.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Babi_guling.jpg/1280px-Babi_guling.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "ogoh-ogoh": {
      "info": [
        "Ogoh-ogoh (Aksara Bali: ᬳᭀᬕᭀᬄᬳᭀᬕᭀᬄ) adalah karya seni patung dalam kebudayaan Bali yang umumnya diarak saat Pengrupukan, tradisi Hindu Bali yang dilaksanakan untuk menyambut Hari Raya Nyepi (Tahun Baru Saka). Tradisi tersebut merupakan bagian dari prosesi Tawur Kesanga, ritual Hindu Bali untuk menetralisir kekuatan negatif di alam sekitar dan \"mendamaikan\" makhluk-makhluk alam bawah menjelang pergantian Tahun Saka. Dalam pawai saat Pengrupukan, ogoh-ogoh merupakan lambang keburukan sifat-sifat manusia atau negativitas di alam. Maka setelah pawai selesai, ogoh-ogoh akhirnya dibakar sebagai representasi pengenyahan sifat-sifat tadi. Pembakaran biasanya di lapangan kuburan desa. Ogoh-ogoh pada umumnya dibuat di setiap banjar, yaitu komunitas tradisional masyarakat Bali setingkat Rukun Warga. Sosok Butakala, yaitu makhluk jejadian atau…",
        "Secara etimologi, \"Ogoh-ogoh\" berasal dari bahasa Bali, yaitu kata ogah yang artinya \"goyang\"; ngogah artinya \"menggoyang\". Reduplikasi ogah-ogah artinya \"digoyang-goyangkan\". Hal tersebut berkaitan dengan cara pengarakan ogoh-ogoh, yaitu digoyang-goyangkan agar terlihat seolah-olah bergerak dan menari. Kata \"ogoh-ogoh\" ini termasuk kosakata asli Bali yang relatif baru dan tidak ditemukan definisinya dalam kamus bahasa Bali yang disusun sebelum 1980. Kata ogoh-ogoh pertama kali tercatat dalam pemberitaan harian Bali Post edisi 6 Maret 1984. Pada kamus bahasa Bali terbitan tahun 1991, kata \"ogoh-ogoh\" ada dan didefinisikan sebagai patung yang dibuat dari bambu atau kertas, berbentuk butakala atau raksasa. Sebelum dikenal sebagai ogoh-ogoh, sebutan yang dipakai ialah \"onggokan\", artinya \"sesuatu yang diangkat-angkat (onggok-onggok)\".",
        "Tradisi ogoh-ogoh seperti yang dikenal sekarang ini tergolong budaya yang relatif baru, dan tidak berasal dari zaman Bali Kuno, tetapi memiliki akar dan inspirasi dari tradisi kuno. Tradisi pembuatan patung raksasa untuk diarak beramai-ramai sudah ada sebelum tradisi ogoh-ogoh yang dikenal sekarang ini. Namun sebelum 1980-an, patung-patung tersebut belum dikenal dengan istilah ogoh-ogoh, dan pengarakannya tidak untuk pawai Pengrupukan (sehari sebelum Nyepi), melainkan untuk upacara kremasi besar atau pelebonan yang menggunakan Bade Awin atau Pengabenan Mawangun. Upacara jenis ini diselenggarakan oleh keluarga bangsawan puri. Patung tersebut juga dapat dibuat saat kremasi pendeta Hindu. Video bersejarah yang direkam oleh komponis Colin McPhee dari Kanada menampilkan sejumlah patung diarak sewaktu pelebon di Gianyar tahun 1933. Menurut…"
      ],
      "gambar": {
        "src": "/images/budaya/bali/ogoh-ogoh.jpg",
        "alt": "Ilustrasi Ogoh-ogoh — Bali",
        "caption": "Ogoh-ogoh sebelum pangrupukan di Ubud.",
        "kredit": "MagdaLena7",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Ogoh-ogoh_carried_during_the_Ngrupuk_parade_in_Ubud.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Ogoh-ogoh_carried_during_the_Ngrupuk_parade_in_Ubud.jpg/1280px-Ogoh-ogoh_carried_during_the_Ngrupuk_parade_in_Ubud.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "kerajaan-gelgel": {
      "info": [
        "Kerajaan Gelgel merupakan salah satu kerajaan yang pernah berdiri di Bali, diperkirakan sejak abad ke-14, tepatnya pada tahun 1384 hingga 1686 Masehi. Kerajaan ini merupakan kelanjutan dari Kerajaan Samprangan yang lebih dahulu didirikan oleh Sri Aji Kresna Kepakisan pada tahun 1352. Raja pertama Gelgel adalah Dalem Ketut Smara Kepakisan yang kemudian menurunkan raja-raja Gelgel. Pada masa puncak kejayaannya, Kerajaan Gelgel berhasil memperluas kekuasaannya hingga mencakup wilayah Pasuruan, Blambangan, Lombok, dan Sumbawa Barat. Selain pencapaian dibidang militer, kerajaan ini juga menjadi pusat dari perkembangan sastra, adat istiadat dan seni tradisi kebudayaan Hindu Bali. Pusat pemerintahan kerajaan ini terletak di Swecalinggarsapura, Gelgel di Kabupaten Klungkung saat ini.",
        "Pendirian Kerajaan Gelgel merupakan transformasi politik dari Kerajaan Samprangan yang dipimpin oleh Wangsa Kepakisan. Pendirian kerajaan ini tidak dapat dilepaskan dari ekspedisi militer Majapahit ke Bali pada pertengahan abad ke-14. Pada tahun 1343 Masehi, Majapahit di bawah kepemimpinan Patih Gajah Mada berhasil menaklukkan kekuatan lokal Bali dibawah Kerajaan Bedahulu. Sebagai bagian dari strategi penguatan kendali, Majapahit mengangkat seorang bangsawan berdarah brahmana, yakni Sri Aji Kresna Kepakisan, sebagai raja vassal di Bali. Ia diangkat secara resmi pada tanggal 4 Oktober 1352 Masehi (Saka 1274) dan memusatkan kekuasaannya di wilayah Samprangan, dekat dengan Ibukota Bali dibawah Kerajaan Bedahulu terdahulu. Sri Aji Kresna Kepakisan memerintah hingga wafat pada tahun 1380 Masehi. Pemerintahan selanjutnya…",
        "Sebelum menjadi pusat kekuasaan Kerajaan Bali selama tiga abad, Desa Gelgel telah dikenal sebagai salah satu desa tua di Bali yang sama tuanya dengan desa-desa Bali Aga. Sebuah naskah Bali tertua yang berisi candrasengkala menyebutkan desa ini didirikan bersamaan dengan Pura Dasar Bhuana, yang dibangun oleh Mpu Dwijaksara tahun 1267 Masehi di atas bekas ashrama Mpu Ghana, seorang brahmana yang hidup pada masa pemerintahan Sri Udayana Warmadewa dan Gunapriya Dharmapatni sekitar tahun 988 Masehi. Versi lain menyebutkan Gelgel sudah ada sejak 988 Masehi yang dibangun oleh Mpu Ghana dan murid-muridnya. Setelah penaklukan Bali oleh Majapahit pada tahun 1343 Masehi, seorang bangsawan dari kalangan Arya bernama Sira Arya Kuthawaringin ditugaskan sebagai adipati di wilayah ini dan mendirikan keratonnya bernama Puri Jero Agung di…"
      ],
      "gambar": {
        "src": "/images/budaya/bali/kerajaan-gelgel.png",
        "alt": "Ilustrasi Kerajaan Gelgel — Bali",
        "kredit": "Gunawan Kartapranata",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Bali_Kingdom_Gelgel.svg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Bali_Kingdom_Gelgel.svg/1280px-Bali_Kingdom_Gelgel.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "bahasa-bali": {
      "info": [
        "Bahasa Bali (Endonim: Basa Bali, Aksara Bali: ᬩᬲᬩᬮᬶ, pengucapan dalam IPA: [ˈbasə ˈbali], atau Bhāṣā Bali, ᬪᬵᬱᬵᬩᬮᬶ) adalah bahasa yang termasuk kedalam kelompok Melayu-Polinesia dalam rumpun bahasa Austronesia yang dituturkan oleh sekitar 3.3 juta jiwa pada tahun 2000 yang utamanya terkonsentrasi di pulau Bali dan juga tersebar di Nusa Penida, Lombok bagian barat, dan Jawa bagian timur, hingga Sumatra bagian selatan dan Sulawesi. Diperkirakan bahwa pada tahun 2011, terdapat kurang dari 1 juta orang yang masih menggunakan bahasa Bali sebagai bahasa utama mereka di Bali. Bahasa Bali juga termasuk kedalam kelompok rumpun bahasa Bali-Sasak-Sumbawa yang berarti bahasa ini memiliki hubungan kekerabatan yang sangat dekat dengan Bahasa Sasak di pulau Lombok dan Bahasa Sumbawa di pulau Sumbawa. Di Lombok, bahasa Bali terutama dipertuturkan di…",
        "Bahasa Bali seperti halnya Bahasa Jawa dan Bahasa Sasak juga memiliki tingkatan penggunaannya, misalnya ada yang disebut Bali Alus, Bali Madya, dan Bali Kasar. Hal ini terjadi karena pengaruh bahasa Jawa menyebar ke Bali sejak zaman Majapahit menguasai Bali.",
        "Basa Alus. Bahasa Alus atau bahasa singgih merupakan bahasa yang digunakan untuk menghormati atau meninggikan. Bahasa Bali Halus memiliki beberapa jenis sebagai berikut: Basa Bali Alus Singgih (a.si), digunakan ketika berbicara kepada sulinggih (brahman), penguasa dunia, pejabat tinggi, dan orang-orang penting. Basa Bali Alus Madia (a.ma), dipakai ketika berbicara dengan bahasa lembut, tetapi tidak diketahui apakah pembicara harus meninggikan atau merendahkan nada bicaranya. Basa Alus Mider (a. mi), merupakan bahasa halus yang menghiasi penggunaannya ketika berbicara kepada ras atas maupun ras bawah yang seharusnya dihormati. Basa Bali Alus Sor (a. so), dipakai oleh orang pada waktu bercerita atau menyebut dirinya apabila sedang berbicara dengan sanak saudara yang dihormati. Basa alus sor digunakan untuk merendahkan diri ketika…",
        "Bahasa Bali termasuk dalam cabang Melayu-Polinesia dari rumpun bahasa Austronesia. Dalam rumpun Melayu-Polinesia, bahasa Bali berada di subcabang Bali-Sasak-Sumbawa. Terdapat dua dialek utama dari bahasa Bali, yakni bahasa Bali yang dituturkan di pegunungan dan dataran tinggi, bahasa Bali dataran rendah, dan penuturan di Nusa Penida dan Lombok."
      ],
      "gambar": {
        "src": "/images/budaya/bali/bahasa-bali.gif",
        "alt": "Ilustrasi Bahasa Bali — Bali",
        "kredit": "I Love Languages! (dialects)",
        "lisensi": "Public domain",
        "sumber": "https://commons.wikimedia.org/wiki/File:Basa_Bali_in_Balinese_script.gif",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Basa_Bali_in_Balinese_script.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "calon-arang": {
      "info": [
        "Calon Arang, disebut pula Rangda ing Dirah (\"Janda Dirah\") atau Walu Naténg Girah (Walu Nata ing Girah, \"Janda pemimpin Girah\"), adalah seorang tokoh dalam cerita rakyat Jawa dan Bali dari abad ke-12. Tidak diketahui lagi siapa yang mengarang cerita ini. Salinan teks Latin yang sangat penting berada di Belanda, yaitu dalam Jurnal Bijdragen tot de Taal-, Land- en Volkenkunde 82 (1926) halaman 110-180.",
        "Diceritakan bahwa Calon Arang adalah seorang janda (bahasa Jawa: Randa atau Rondo; bahasa Bali: Balu atau Walu) penguasa ilmu hitam yang sering merusak hasil panen para petani dan menyebabkan datangnya penyakit. Ia mempunyai seorang putri bernama Dyah Ayu Ratna Manggali, yang meskipun cantik, tidak dapat mendapatkan seorang suami karena orang-orang takut pada ibunya. Karena kesulitan yang dihadapi puterinya, Calon Arang marah dan ia pun berniat membalas dendam dengan menculik seorang gadis muda. Gadis tersebut ia bawa ke sebuah kuil untuk dikorbankan kepada Dewi Durga. Hari berikutnya, banjir besar melanda desa tersebut dan banyak orang meninggal dunia. Penyakit pun muncul. Raja Airlangga mengetahui hal tersebut kemudian meminta bantuan penasehatnya, Empu Baradah untuk mengatasi masalah ini. Empu Baradah lalu mengirimkan…",
        "Pada mulanya suasana di wilayah Kerajaan Daha (Kadiri) sangat tenteram. Raja di Daha bernama Erlangga. Di sana hidup seorang janda (bahasa Bali: Walu atau Balu), yang bernama Calon Arang, yang mempunyai anak yang cantik, yang bernama Ratna Manggali. Mereka berdua tinggal di desa Girah, di wilayah Kerajaan Daha.",
        "Meskipun cantik, banyak pria di kerajaan tersebut yang tidak mau meminangnya. Ini disebabkan oleh ulah ibunya yang senang menenung. Hal ini menyebabkan kemarahan Calon Arang. Oleh sebab itulah dia membacakan mantra tulah, sehingga muncul mala-petaka dahsyat melanda desa Girah atau Gurah, dan pada akhirnya melanda Daha. Tulah tersebut menyebabkan banyak penduduk daerah tersebut sakit dan mati. Oleh karena tulah tersebut melanda Daha, maka Raja Airlangga marah dan berusaha melawan. Namun kekuatan Raja tidak dapat menandingi kesaktian Calon Arang, sehingga Raja memerintahkan Empu Baradah untuk melawan Calon Arang."
      ],
      "gambar": {
        "src": "/images/budaya/bali/calon-arang.jpg",
        "alt": "Ilustrasi Calon Arang — Bali",
        "kredit": "Crisco 1492",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Satua_Calonarang_performance_by_AyuBulan_Legong_Dance_Group,_International_Conference_on_Feminism,_2016-09-24_02.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Satua_Calonarang_performance_by_AyuBulan_Legong_Dance_Group%2C_International_Conference_on_Feminism%2C_2016-09-24_02.jpg/1280px-Satua_Calonarang_performance_by_AyuBulan_Legong_Dance_Group%2C_International_Conference_on_Feminism%2C_2016-09-24_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    }
  },
  "dki-jakarta": {
    "kerak-telor": {
      "info": [
        "Kerak telur adalah makanan asli daerah Jakarta (Betawi), dengan bahan-bahan beras ketan putih, telur ayam atau bebek, ebi (udang kering yang diasinkan), ditambah bawang merah goreng, lalu diberi bumbu yang dihaluskan berupa kelapa sangrai, cabai merah, kencur, jahe, kunyit,sereh halus, merica butiran, garam dan gula pasir. Kerak telor dapat ditemukan pada hari biasa. Anda bisa menemukan kerak telor di sekitar Kota Tua, Jakarta Barat. Menurut sejarah, Kerak Telor sudah ada dari zaman kolonial Belanda, kerak telor diciptakan oleh masyarakat Betawi secara tak sengaja Pada tahun 1920-an.Makanan ini cukup digemari oleh banyak sekali masyarakat Betawi.",
        "Kerak telor diciptakan pada tahun 1920-an dari hasil percobaan sekelompok masyarakat Betawi yang tinggal di kawasan Menteng, Jakarta Pusat. Berawal dari buah kelapa yang berlimpah di daerah tersebut, masyarakat Betawi pun mencoba mengolah kelapa tersebut menjadi beragam aneka makanan. Pada saat itu Gubernur Jakarta Ali Sadikin mulai mempromosikan makanan khas Betawi tersebut. Dalam perkembangannya, kerak telor mulai sering dijumpai setiap harinya di beberapa kawasan di Kota Jakarta. Pada tahun 1970-an, masyarakat Betawi pun mulai menjajakan camilan tersebut ke sekitaran Monumen Nasional (Monas). Pada saat itu banyak masyarakat Betawi mulai memanfaatkan tumbuhan kelapa yang ada di jakarta sebagai bahan dasar makanan tradisional Betawi seperti soto Betawi, nasi uduk, hingga kerak telor itu sendiri. Pada zaman penjajahan…",
        "Kerak telor memiliki makna kepemimpinan yang berada di atas perbedaan sifat individu yang berada di bawahnya. Perbedaan individu tersebut kemudian disatukan oleh sang pemimpin yang dicerminkan oleh telur yang menyatukan semua rempah dan bumbu. Saat ini kerak telor menjadi daya tarik bagi turisme dan mencerminkan nilai-nilai lokal."
      ],
      "gambar": {
        "src": "/images/budaya/dki-jakarta/kerak-telor.jpg",
        "alt": "Ilustrasi Kerak Telor — DKI Jakarta",
        "kredit": "Warta Kota",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Kerak_telor_Betawi.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Kerak_telor_Betawi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "kebaya-betawi": {
      "info": [
        "Kebaya (pelafalan dalam bahasa Indonesia: [kəˈbaya]; kê‧ba‧ya) adalah sejenis pakaian bagian atas tradisional yang berasal dari kebudayaan Jawa, Sunda dan Madura di Indonesia, tetapi penggunaannya telah meluas di negara-negara Asia Tenggara lainnya seperti Malaysia, Brunei, dan Singapura. Selain itu, kebaya juga dikenakan di daerah di luar Asia Tenggara, yakni oleh orang Orang Jawa, Melayu dan orang Eurasia Portugis di Kepulauan Cocos, Pulau Natal, pesisir India dan Sri Lanka, Makau serta Afrika Selatan. Kebaya adalah pakaian bagian atas yang memiliki karakteristik terbuka di bagian depan dan dibuat secara tradisional dari kain ringan seperti brokat, katun, kasa, renda, atau voile, dan terkadang dihiasi dengan sulaman. Bagian depan diamankan dengan kancing, pin, atau bros. Sedangkan pakaian bagian bawah untuk pakaian ini biasanya…",
        "Istilah \"kebaya\" diyakini berasal dari kata serapan Arab kaba atau qaba yang berarti \"pakaian\", istilah ini mungkin berhubungan dengan kata Arab abaya (bahasa Arab: عباءة) yang berarti jubah atau garmen longgar. Istilah tersebut kemudian diperkenalkan ke Nusantara melalui kata serapan dari bahasa Portugis, cabaya.",
        "Ada kemungkinan besar bahwa asal-usul kebaya berasal dari Timur Tengah karena komposisi akar budayanya. Hal ini dibuktikan dengan adanya keterkaitan kebaya dengan qaba dari Arab yang merupakan sejenis jubah panjang kendur yang dikemukakan oleh orientalis Henry Yule dan Arthur Burnell pada tahun 1886. Pakaian-pakaian dari tanah Arab memang sudah dikenal sejak abad ke-7 masehi, beberapa jejak sejarah bahkan menunjukkan bahwa Nabi Islam Muhammad mendapatkan hadiah berupa aqbiya (yang merupakan bentuk jamak dari qaba) dalam beberapa kejadian. Banyak ahli berpendapat bahwa orang Persia merupakan asal-usul utama dari qaba. Selain itu dengan adanya penyebaran agama Islam melalui proses perdagangan dan sebagainya, tata busana seperti ini tidak lagi hanya ditemukan di tanah Arab, tetapi juga di tanah Persia, Turki, dan Urdu.…"
      ],
      "gambar": {
        "src": "/images/budaya/dki-jakarta/kebaya-betawi.jpg",
        "alt": "Ilustrasi Kebaya Betawi — DKI Jakarta",
        "caption": "Kebaya Encim Betawi dengan bordir dan kain bermotif.",
        "kredit": "Naval Scene",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Kebaya_Encim_Betawi_20240622_121405.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Kebaya_Encim_Betawi_20240622_121405.jpg/1280px-Kebaya_Encim_Betawi_20240622_121405.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "ondel-ondel": {
      "info": [
        "Ondel-ondel adalah bentuk pertunjukan seni khas Betawi yang sering ditampilkan dalam pesta rakyat. Tampaknya ondel-ondel memerankan leluhur atau nenek moyang yang senantiasa menjaga anak cucunya atau penduduk suatu desa. Kesenian ondel-ondel yang dulunya mengakar dari tradisi barong/barongan masyarakat Sunda di kawasan 𝙅𝘼𝘽𝙊𝘿𝙀𝙏𝘼𝘽𝙀𝙆 kemudian dilestarikan dan bertransformasi menjadi bagian dari identitas kebudayaan Betawi. Ondel-ondel berupa boneka besar dengan tinggi sekitar 2,5 meter dengan garis tengah ± 80 cm, dibuat dari anyaman bambu yang disiapkan begitu rupa sehingga mudah dipikul dari dalamnya. Bagian wajah berupa topeng atau kedok, dengan rambut kepala dibuat dari ijuk. Wajah ondel-ondel laki-laki biasanya dicat dengan warna merah, sedangkan yang perempuan warna putih. Bentuk pertunjukan ini banyak persamaannya…",
        "Ondel-ondel atau barongan raksasa adalah tokoh yang dihilangkan pada sendratari Reog versi Wengker dari Ponorogo yang merupakan tokoh sepasang makhluk halus dengan tubuh raksasa, tetapi karena mengganggu perjalanan Singo Barong, maka dikutuklah mereka menjadi burung gagak dan burung merak dalam bentuk raksasa pula. Namun pada pemerintahan Bathara Katong, tokoh-tokoh yang tidak terlalu penting dihilangkan. Ondel-Ondel Masuk ke Batavia atau Jakarta pada abad ke 17 ketika terjadinya penyerangan Mataram kepada VOC Batavia. Setelah VOC berhasil membakar lumbung-lumbung beras di sekitar Batavia, prajurit Mataram membalas dengan cara mencemari sungai Ciliwung yang menjadi kebutuhan air orang-orang di Batavia terutama VOC. Kemudian prajurit Ponorogo yang tergabung pasukan Mataram membuat Barongan rakasa berwajah seram yang…",
        "Sejarah ondel-ondel pada zaman dahulu digunakan sebagai penolak bala dan penjaga kampung. Biasanya ia diarak saat ada pagebluk (wabah) yang melanda kampung, selametan, hajatan besar (Cap Go Meh, dll.) atau sedekah bumi setelah panen raya. Karenanya bentuk ondel-ondel laki-laki yang asli lebih seram dengan mata melotot dan adanya gigi taring. Awalnya ia juga dikenal dengan sebutan \"barongan\". Kata \"ondel-ondel\" menjadi lebih populer ketika Benyamin Sueb membawakan lagu \"Ondel-ondel\" pada tahun 1971 dalam irama gambang kromong yang digubah oleh Djoko Subagyo. Dewasa ini ondel-ondel biasanya digunakan untuk menambah semarak pesta-pesta rakyat, atau diarak untuk mengamen. Betapapun derasnya arus modernisasi, ondel-ondel masih bertahan dan menjadi penghias wajah kota metropolitan Jakarta."
      ],
      "gambar": {
        "src": "/images/budaya/dki-jakarta/ondel-ondel.jpg",
        "alt": "Ilustrasi Ondel-ondel — DKI Jakarta",
        "caption": "Ondel-ondel diarak dalam rangka selametan pembukaan sayap baru Hotel des Indes pada tahun 1923.",
        "kredit": "Unknown author",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:COLLECTIE_TROPENMUSEUM_Reuzenpoppen_Ondel-ondel_sieren_de_straat_tijdens_het_religieuze_feest_%27selamatan%27_ter_gelegenheid_van_de_inwijding_van_de_nieuwe_vleugel_van_Hotel_des_Indes_Java_TMnr_10003392.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/0/07/COLLECTIE_TROPENMUSEUM_Reuzenpoppen_Ondel-ondel_sieren_de_straat_tijdens_het_religieuze_feest_%27selamatan%27_ter_gelegenheid_van_de_inwijding_van_de_nieuwe_vleugel_van_Hotel_des_Indes_Java_TMnr_10003392.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "si-pitung": {
      "info": [
        "Si Pitung (lahir di Rawa Belong, Palmerah, Batavia, Hindia Belanda (kini Jakarta, Indonesia), 1866 - meninggal di Kecamatan Tanah Abang, Batavia, Hindia Belanda, 1893; ejaan lama: Si Pitoeng) atau Pitung adalah seorang pahlawan betawi abad ke-19 di Batavia, Hindia Belanda (sekarang Jakarta, Indonesia). Sepak terjangnya telah menciptakan berbagai legenda tentang riwayat hidup, petualangan, dan kematiannya.",
        "Si Pitung lahir pada tahun 1866 di kampung Pengumben, sebuah permukiman kumuh di Rawabelong, dekat Stasiun Palmerah sekarang ini. Putra keempat pasangan Bang Piung dan Mbak Pinah ini bernama asli Salihoen. Menurut riwayat lisan, julukan \"Si Pitung\" berasal dari frasa Jawa \"pituan pitulung\" yang berarti \"tujuh sekawan tolong-menolong\". Semasa kanak-kanak, Salihoen berguru di pesantren Hadji Naipin, tempat ia diajari mengaji, dilatih pencak silat, dan dibiasakan untuk selalu waspada terhadap keadaan di sekitarnya. Pada dasarnya ada tiga versi kisah Si Pitung yang beredar di tengah masyarakat, yakni versi Indonesia, Belanda, dan Cina. Masing-masing versi menyoroti pribadi Si Pitung dengan penilaian tersendiri. Si Pitung disanjung sebagai pahlawan dalam versi Indonesia, tetapi dikecam sebagai penjahat dalam versi Belanda. Hikayat Si…",
        "Menurut versi van Till (1996) Si Pitung adalah seorang penjahat. Kisahnya berawal ketika Si Pitung menjual kambing di pasar Tanah Abang yang kemudian dicuri oleh para pencuri (Rais, Jiih, dan Jampang) “centeng” (Si Gomar menurut versi Film Si Pitung tahun 1970) tuan tanah. Si Pitung pulang dengan tangan hampa, tetapi si Pitung hanya tersenyum dan menjawab bahwa dia telah dirampok. Ayah Pitung yang marah kemudian menyuruh Pitung pergi mencari uang tersebut dan akhirnya dapat menemukannya kembali. Namun, para pencuri alias \"centeng\" tersebut mengajak Pitung untuk bergabung sebagai perampok dan menjadi ketua mereka. Pada awalnya Pitung menolak, tetapi akhirnya Pitung bergabung dengan mereka. Legenda yang dikisahkan dalam film Si Pitung, Pitung dan kawanannya menggunakan cara yang “pintar” dengan menyamar sebagai pegawai…"
      ],
      "gambar": {
        "src": "/images/budaya/dki-jakarta/si-pitung.jpg",
        "alt": "Ilustrasi Si Pitung — DKI Jakarta",
        "kredit": "Post of Indonesia",
        "lisensi": "Public domain",
        "sumber": "https://commons.wikimedia.org/wiki/File:Stamp_of_Indonesia_-_2001_-_Colnect_261508_-_Folk_Tales_-_Si_Pitung.jpeg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Stamp_of_Indonesia_-_2001_-_Colnect_261508_-_Folk_Tales_-_Si_Pitung.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "kota-tua-jakarta": {
      "info": [
        "Kota Tua Jakarta, juga dikenal dengan sebutan Batavia Lama (Oud Batavia), adalah sebuah wilayah kecil di Jakarta, Indonesia. Wilayah khusus ini memiliki luas 1,3 kilometer persegi melintasi Jakarta Utara dan Jakarta Barat (Pinangsia, Taman Sari dan Roa Malaka). Dijuluki \"Permata Asia\" dan \"Ratu dari Timur\" pada abad ke-16 oleh pelayar Eropa, Jakarta Lama dianggap sebagai pusat perdagangan untuk benua Asia karena lokasinya yang strategis dan sumber daya melimpah.",
        "Pada abad ke-16, tepatnya di tahun 1526, Fatahillah, dikirim oleh Kesultanan Demak, menyerang pelabuhan Sunda Kelapa (sekarang bagian dari Kota Tua) di kerajaan Hindu Pajajaran, kemudian dinamai Jayakarta. Kota ini hanya seluas 15 hektare dan memiliki tata kota pelabuhan tradisional Jawa. Tahun 1619, VOC menghancurkan Jayakarta di bawah komando Jan Pieterszoon Coen. Satu tahun kemudian, VOC membangun kota baru bernama Batavia untuk menghormati Batavieren, leluhur bangsa Belanda. Kota ini terpusat di sekitar tepi timur Sungai Ciliwung, saat ini Lapangan Fatahillah. Penduduk Batavia disebut \"Batavianen\", kemudian dikenal sebagai suku \"Betawi\", terdiri dari etnis kreol yang merupakan keturunan dari berbagai etnis yang menghuni Batavia. Tahun 1635, kota ini meluas hingga tepi barat Sungai Ciliwung, di reruntuhan bekas Jayakarta. Kota ini…",
        "Dalam pengembangan daerah Jakarta, beberapa bangunan atau tempat yang berada di daerah kota Tua Jakarta dihancurkan dengan alasan tertentu. Beberapa tempat tersebut adalah:",
        "Benteng Batavia dihancurkan antara 1890–1910, beberapa material digunakan untuk pembangunan Istana Daendels (sekarang Departemen Keuangan Nasional) Gerbang Amsterdam (lokasinya berada dipertigaan Jalan Cengkih, Jalan Tongkol dan Jalan Nelayan Timur. Dihancurkan untuk memperlebar akses jalan) dihancurkan pada tahun 1950an untuk pelebaran jalan. Jalur Trem Batavia (Jalur ini pernah ada di kota Batavia, tetapi sekarang sudah ditimbun dengan aspal. Karena Presiden Soekarno menganggap Trem Batavia yang membuat macet) Beberapa bangunan berada dalam kondisi mengenaskan kebanyakan akibat kepemilikan bangunan yang tidak jelas."
      ],
      "gambar": {
        "src": "/images/budaya/dki-jakarta/kota-tua-jakarta.jpg",
        "alt": "Ilustrasi Kota Tua Jakarta — DKI Jakarta",
        "caption": "Bekas Stadhuis (Balai Kota) Batavia, kantor Gubernur Jenderal VOC. Bangunan ini sekarang menjadi Museum Sejarah Jakarta.",
        "kredit": "Chainwit.",
        "lisensi": "CC BY 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Batavia_City_Hall_(Jakarta_History_Museum)_Fatahillah_Square_(2025)_-_img_02.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Batavia_City_Hall_%28Jakarta_History_Museum%29_Fatahillah_Square_%282025%29_-_img_02.jpg/1280px-Batavia_City_Hall_%28Jakarta_History_Museum%29_Fatahillah_Square_%282025%29_-_img_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "bahasa-betawi": {
      "info": [
        "Bahasa Betawi (basé Betawi, basa Betawi) adalah bahasa kreol yang dituturkan oleh suku Betawi yang mendiami daerah Jakarta dan sekitarnya. Nama \"Betawi\" berasal dari \"Batavia\", nama resmi Jakarta pada era Hindia Belanda. Jumlah penutur yang tepat sulit ditentukan karena penggunaan nama yang kurang jelas. Bahasa ini pun juga turut menjadi dasar atas bahasa gaul (ragam bahasa Indonesia non-baku), yang digunakan oleh orang-orang di Jabodetabek, dan menyebar ke seluruh Indonesia melalui penayangan media yang Jakartasentris. Laras ini memiliki ciri khas, yaitu adanya sebagian kosakata dengan fonem /a/ pada suku akhir tertutup berubah menjadi /ə/ [e pepet], dan akhiran /-in/ untuk mengganti sufiks /-i/, /-kan/ dan /-lah/ pada bahasa Indonesia.",
        "Bahasa Betawi Tengahan adalah sebuah dialek dari Bahasa Betawi yang dituturkan oleh masyarakat Jakarta (terutama masyarakat Betawi) yang cenderung memakai huruf \"é\" tinggi pada akhir penempatan katanya. Bahasa ini merupakan bahasa mayoritas di DKI Jakarta dan sebagian Kota Tangerang. Umumnya dialek ini berbunyi \"è\" pada akhir kata. Dialek ini cukup berbeda dengan dialek Betawi Ora karena bahasanya yang tidak begitu beragam karena penggunaan kosakatanya lebih dekat dengan bahasa Indonesia yang akhiran katanya kerap diganti dengan vokal 'è' dengan beberapa serapan kosakata dari bahasa lain atau bahasa asing lainnya.",
        "Dialek ini dituturkan di pusat kota Jakarta dan sekitarnya, seperti; Tanah Abang, Kebon Jeruk, Palmerah, Kemayoran, Penjaringan, Kramat Jati, Menteng, Jatinegara, Senen, dan daerah lainnya. Dialek ini memiliki ciri khas; umumnya akhiran yang berfonem /a/ pada bahasa Indonesia akan berubah menjadi /ɛ/ [è = taling], seperti pada; ada menjadi adè, apa menjadi apè, siapa menjadi siapè, dan sebagainya. Akan tetapi, tidak semuanya berubah menjadi demikian, seperti pada contoh kata; buka, bidara, dan doa.",
        "Betawi Pinggiran atau Betawi Ora merupakan salah satu ragam dialek dari bahasa Betawi. Dialek ini cukup berbeda dengan dialek Betawi Tengahan. Perbedaan dari segi khazanah kekayaan kosakatanya, Betawi Pinggiran lebih kentara dan dekat dalam penyerapan kosakata asingnya (umumnya dari bahasa Sunda, Bahasa Jawa, dan bahasa-bahasa lainnya) yang menyebabkan kosakatanya lebih beragam dibanding dialek Betawi Tengahan. Dalam pelafalan kata juga dialek ini berakhiran \"a\" berbeda dengan Betawi Tengahan yang berakhiran \"è\". Dialek ini dituturkan oleh orang Betawi yang bermukim di Kota Depok, Kota Bekasi, bagian utara Kabupaten Bekasi, Kota Tangerang Selatan, Kota Tangerang, timur laut Kabupaten Tangerang, utara Kabupaten Bogor, utara Kabupaten Karawang tepatnya di kecamatan Batujaya dan Pakisjaya, dan juga dituturkan di bagian utara…"
      ],
      "gambar": {
        "src": "/images/budaya/dki-jakarta/bahasa-betawi.jpg",
        "alt": "Ilustrasi Bahasa Betawi — DKI Jakarta",
        "kredit": "Rantemario",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Suburban_Betawi.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Suburban_Betawi.jpg/1280px-Suburban_Betawi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "setu-babakan": {
      "info": [
        "Setu Babakan atau Situ Babakan adalah suatu cagar budaya yang terletak di Srengseng Sawah, Kecamatan Jagakarsa, Jakarta Selatan. Situ berarti 'danau' dalam bahasa Sunda, sedangkan babakan berarti 'kampung baru'. Penamaan ini disebabkan oleh fakta Situ Babakan diapit oleh tiga buah danau. Pada tahun 2004, daerah ini dijadikan Pusat Perkampungan Betawi bersamaan dengan HUT DKI yang ke-474 karena masih banyaknya perkampungan Betawi asli di daerah ini. Daerah cagar budaya ini meliputi 175 hektare, terdiri dari Kebun Rakyat, perkampungan masyarakat betawi serta kedua danau yang mengapit perkampungan ini. Masyarakat di wilayah ini mengembangkan usaha pertanian dan perikanan sekaligus membantu dalam usaha penghijauan wilayah Situ Babakan. Selain itu di daerah ini dapat disaksikan pula keseharian masyarakat setempat seperti budidaya ikan…"
      ],
      "gambar": {
        "src": "/images/budaya/dki-jakarta/setu-babakan.jpg",
        "alt": "Ilustrasi Setu Babakan — DKI Jakarta",
        "caption": "Papan selamat datang di Perkampungan Budaya Betawi, Setu Babakan.",
        "kredit": "Herryz",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Setu_Babakan.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Setu_Babakan.jpg/1280px-Setu_Babakan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "gambang-kromong": {
      "info": [
        "Gambang keromong (atau kadang ditulis gambang kromong) adalah sejenis orkes yang memadukan alat-alat musik gamelan dengan alat-alat musik Tionghoa, seperti sukong, tehyan, dan kong'ahyan. Sebutan gambang kromong diambil dari nama dua buah alat perkusi, yaitu gambang dan keromong. Alat musik gambang diyakini merupakan alat yang menggantikan yangqin (Phoa Kian Shu). Awal mula terbentuknya orkes gambang kromong tidak lepas dari seorang pemimpin komunitas Tionghoa yang diangkat Belanda (kapitan Cina) bernama Nie Hoe Kong (masa jabatan 1736-1740). Gambang kromong merupakan ansambel gamelan khas Betawi yang digunakan untuk mengiringi berbagai bentuk seni pertunjukan rakyat Betawi, seperti lenong dan cokek.",
        "Pada awal mula perkembangannya, orkes gambang keromong menggunakan lagu-lagu instrumental yang disebut Phobin, yang biasa dimainkan di pesta-pesta kaum Tionghoa kelas atas. Selanjutnya, gambang keromong berkembang dengan melibatkan penyanyi yang disebut cokek yang berasal dari kata chhio-khek berarti bernyanyi. Lagu-lagu yang diciptakan dengan perkembangan ini disebut Lagu Dalem (Klasik). Selain menambahkan instrumen vokal, perkembangan gambang keromong juga pada periode ini juga menambahkan instrumen kendang. Penambahan kendang membuat lagu-lagu dalem dapat dibawakan untuk mengiringi tarian atau ngibing sehingga kata cokek mengalami pergeseran makna pada tarian.",
        "Gambang Kromong mulai terkenal dan menyebar ke seluruh penjuru kota. Saat itu tidak hanya dikenal di Jakarta, tetapi juga di bagian utara Kota Bogor, Tangerang, dan Bekasi (Jabodetabek). Kawasan-kawasan tersebut memang merupakan area budaya Betawi. Dalam musik gambang kromong dikenal dua gaya permainan, yaitu liau kulon dan liau wetan. Liau kulon atau gaya barat berkembang di wilayah Jakarta Barat hingga Tangerang, dengan ciri pengaruh musik Tionghoa dan Betawi yang lebih kuat. Sementara liau wetan atau gaya timur tumbuh di daerah Jakarta Timur sampai Bekasi, dengan nuansa pengaruh musik Sunda yang lebih menonjol.",
        "Secara umum gambang kromong memiliki aturan atau pakem yang terbagi ke dalam tiga tingkat repertoar lagu, yaitu lagu phobin yang bersifat instrumental, lagu dalem yang merupakan lagu klasik, serta lagu sayur yang termasuk kategori lagu populer."
      ],
      "gambar": {
        "src": "/images/budaya/dki-jakarta/gambang-kromong.jpg",
        "alt": "Ilustrasi Gambang Kromong — DKI Jakarta",
        "caption": "Dua perempuan memainkan gambang Betawi di tahun 1870",
        "kredit": "Isidore van Kinsbergen",
        "lisensi": "Public domain",
        "sumber": "https://commons.wikimedia.org/wiki/File:KITLV_26587_-_Isidore_van_Kinsbergen_-_Girl_plays_a_gambang_Batavia_-_Around_1870.tif",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/KITLV_26587_-_Isidore_van_Kinsbergen_-_Girl_plays_a_gambang_Batavia_-_Around_1870.tif/lossy-page1-1280px-KITLV_26587_-_Isidore_van_Kinsbergen_-_Girl_plays_a_gambang_Batavia_-_Around_1870.tif.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    }
  },
  "jawa-barat": {
    "angklung": {
      "info": [
        "Angklung (Aksara Sunda Baku: ᮃᮀᮊᮣᮥᮀ) adalah alat musik multitonal (bernada ganda) yang berkembang dari masyarakat Sunda. Alat musik ini dibuat dari bambu, dibunyikan dengan cara digoyangkan (bunyi disebabkan oleh benturan badan pipa bambu) sehingga menghasilkan bunyi yang bergetar dalam susunan nada 2, 3, sampai 4 nada dalam setiap ukuran, baik besar maupun kecil. Dictionary of the Sunda Language karya Jonathan Rigg yang diterbitkan pada tahun 1862 di Batavia, menuliskan bahwa angklung adalah alat musik yang terbuat dari pipa-pipa bambu yang dipotong ujung-ujungnya menyerupai pipa-pipa dalam suatu organ, dan diikat bersama dalam suatu bingkai, digetarkan atau digoyangkan untuk menghasilkan bunyi. Angklung terdaftar sebagai Karya Agung Warisan Budaya Lisan dan Nonbendawi Manusia dari UNESCO sejak November 2010. Dan pada tanggal 16…",
        "Istilah angklung berakar dari bahasa Sunda angkleung-angkleungan, yang menggambarkan gerakan pemain serta bunyi klung yang muncul. Secara etimologis, kata ini terbentuk dari “angka” yang berarti nada dan “lung” yang berarti pecah, sehingga angklung dimaknai sebagai nada pecah atau nada yang tidak utuh.",
        "Tidak ada petunjuk akan sejak kapan angklung digunakan, tetapi diduga bentuk primitifnya telah digunakan dalam kultur Neolitikum yang berkembang di Nusantara sampai awal penanggalan modern, sehingga angklung merupakan bagian dari relik pra-Hinduisme dalam kebudayaan Nusantara. Catatan mengenai angklung yang baru muncul merujuk pada masa Kerajaan Sunda (abad ke-12 sampai abad ke-16). Asal-usul terciptanya musik bambu seperti angklung berdasar pada pandangan hidup masyarakat Sunda yang agraris dengan sumber kehidupan dari padi (paré) sebagai makanan pokoknya. Hal ini melahirkan mitos kepercayaan terhadap Nyai Sri Pohaci sebagai lambang Dewi Padi pemberi kehidupan (hirup-hurip). Masyarakat Badui, yang dianggap sebagai sisa-sisa masyarakat Sunda asli, menerapkan angklung sebagai bagian dari ritual mengawali penanaman padi. Permainan…"
      ],
      "gambar": {
        "src": "/images/budaya/jawa-barat/angklung.jpg",
        "alt": "Ilustrasi Angklung — Jawa Barat",
        "caption": "Perajin angklung dan alat musik bambu di Jawa Barat.",
        "kredit": "Galeri ega",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Angklung_Alat_Musik_Tradisional_Warisan_Budaya_Indonesia.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Angklung_Alat_Musik_Tradisional_Warisan_Budaya_Indonesia.jpg/1280px-Angklung_Alat_Musik_Tradisional_Warisan_Budaya_Indonesia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "wayang-golek": {
      "info": [
        "Wayang golek (Bahasa Sunda: ᮝᮚᮀ ᮍᮧᮜᮦᮊ᮪; pengucapan bahasa Sunda: [wajaŋ ɡolɛk]) merupakan salah satu aliran dari kesenian wayang. Umumnya wayang ini dipentaskan di wilayah Parahyangan, Jawa Barat dengan menggunakan Bahasa Sunda. Dan Bahasa Jawa Di Jawa Tengah seperti di Surakarta Brebes dan Cilacap di Jawa Tengah. Lakon yang dimainkan dalam wayang Golek Purwa adalah kisah Mahabharata dan Ramayana. Aliran wayang golek ini diperkirakan mulai berkembang di Jawa Barat sejak abad ke-19. Sementara di Jawa Tengah di populerkan Kesultanan Demak, di Jawa Barat dipelopori oleh Bupati Bandung Wiranatakusumah III. Pagelarannya di waktu itu dikhususkan untuk kaum menak (bangsawan) sebelum akhirnya menyebar luas di kalangan masyarakat Sunda. Pertunjukan seni wayang golek merupakan seni pertunjukan teater rakyat yang banyak dipagelarkan. Selain…",
        "Wayang adalah bentuk teater rakyat yang sangat populer, terutama di pulau Jawa dan Bali. Berdasarkan sebuah Naskah Jawa Kuno – yang kemudian diterbitkan Pradnya Paramita pada tahun 1981 – mengatakan bahwa wayang bermula dari khayalan ataupun gagasan tentang bayangan manusia yang dapat ditonton. Wayang sendiri berasal dari kata wayangan yang artinya adalah bayangan yang memiliki maksud mempertontonkan sebuah lakon lewat bayangan. Pada mulanya, wayang hanya merupakan hasil khayalan ataupun gagasan yang dilukiskan dalam sebuah daun Tal (ron Tal) yang kemudian mempertontonkan hasil lukisan tersebut lewat bayangan. Mempertontonkan lewat bayangan dilakukan dengan memantulkan lukisan tersebut di atas kain putih dan hanya diterangi lampu. Hal ini membuat orang lain dapat melihat lukisan tersebut dalam bentuk bayangan. Di Jawa Barat, selain…",
        "Kehadiran wayang golek tidak dapat dipisahkan dari keberadaan wayang kulit, penyebaran wayang di Jawa Barat dimulai pada masa pemerintahan Raden Patah dari Kerajaan Demak, kemudian disebarluaskan para Wali Songo. Termasuk Sunan Gunung Jati yang pada tahun 1568 memegang kendali pemerintahan di Kasultanan Cirebon. Ia memanfaatkan pergelaran wayang kulit sebagai media dakwah untuk penyebaran agama Islam. Baru sekitar tahun 1584 Masehi di Jawa Tengah salah satu Sunan dari Dewan Wali Songo menciptakan Wayang Golek, tidak lain adalah Sunan Kudus yang menciptakan Wayang Golek Pertama. Dalam perjalanan sejarahnya, pergelaran wayang golek mula-mula dilaksanakan oleh kaum bangsawan. Terutama peran penguasa terutama para bupati di Jawa Barat, mempunyai pengaruh besar terhadap berkembangnya wayang golek tersebut. Pada awalnya pertunjukan…"
      ],
      "gambar": {
        "src": "/images/budaya/jawa-barat/wayang-golek.jpg",
        "alt": "Ilustrasi Wayang Golek — Jawa Barat",
        "kredit": "Sudanto Ponco Sularso",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Wayang_santri.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Wayang_santri.jpg/1280px-Wayang_santri.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "tari-jaipong": {
      "info": [
        "Jaipongan (aksara Sunda: ᮏᮄᮕᮧᮍᮔ᮪) adalah genre seni pertunjukan tradisi Jawa Barat yang merupakan transformasi dari tari pergaulan masyarakat Sunda dan sangat populer di Indonesia.",
        "Jaipongan secara utuh dilahirkan dari proses kreatif dan buah pemikiran Gugum Gumbira pada tahun 1976 di Kabupaten Karawang. Jaipongan merupakan genre seni pertunjukan khas Jawa Barat yang bertransformasi dari perkembangan bentuk pertunjukan seni tradisi Jawa Barat seperti ketuk tilu, pencak silat, wayang golek, teater tradisi seperti longser dan topeng banjet. Jaipongan dipopulerkan oleh Gugum Gumbira dan tumbuh pesat di Kota Bandung pada tahun 80-an, ditandai dengan munculnya studio rekaman yang representatif yaitu studio rekaman JUGALA. Studio ini yang telah memproduksi kaset rekaman Jaipongan hingga menyebar ke hampir seluruh wilayah di Jawa Barat. Tak disangka Jaipongan mendapat sambutan hangat dari masyarakat Sunda di kala itu. Selanjutnya, Jaipongan menjadi sarana hiburan masyarakat yang berkembang di Subang dan…",
        "Karya Jaipongan pertama yang mulai dikenal oleh masyarakat adalah tari \"Daun Pulus Keser Bojong\" dan \"Rendeng Bojong\" yang keduanya merupakan jenis tari putri dan tari berpasangan (putra dan putri). Dari tarian itu muncul beberapa nama penari Jaipongan yang handal seperti Tati Saleh, Yeti Mamat, Eli Somali, dan Pepen Dedi Kurniadi. Awal kemunculan tarian tersebut sempat menjadi perbincangan, vulgar. Namun dari ekspos beberapa media cetak, nama Gugum Gumbira mulai dikenal masyarakat, apalagi setelah tari Jaipongan pada tahun 1980 dipentaskan di TVRI stasiun pusat Jakarta. Dampak dari kepopuleran tersebut lebih meningkatkan frekuensi pertunjukan, baik di media televisi, hajatan maupun perayaan-perayaan yang diselenggarakan oleh pihak swasta dan pemerintah. Kehadiran Jaipongan memberikan kontribusi yang cukup besar terhadap para…"
      ],
      "gambar": {
        "src": "/images/budaya/jawa-barat/tari-jaipong.jpg",
        "alt": "Ilustrasi Tari Jaipong — Jawa Barat",
        "kredit": "Herusutimbul",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Jaipong.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Jaipong.jpg/1280px-Jaipong.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "karedok": {
      "info": [
        "Karedok adalah salah satu makanan khas Sunda di Indonesia. Karedok sekilas mirip dengan lotek. Karedok dibuat dengan bahan-bahan sayuran mentah seperti, mentimun, taoge, kol, kacang panjang, ubi, labu siam daun kemangi, dan terong atau leunca. Sedangkan sausnya adalah bumbu kacang yang dibuat dari cabai merah, bawang putih, kencur, kacang tanah, air asam, gula kawung, garam, dan terasi.",
        "Salah satu ciri dari karedok adalah menggunakan oncom bakar. Bila tidak menggunakan oncom bakar disebutnya lotek mentah walau tidak semua begitu.",
        "Potong-potong timun ukuran kecil. Buang tangkai terong dan potong-potong tipis. Potong melintang kacang panjang dan daun kol 1 cm dan petiki daun kemangi. Siapkan air matang dalam wadah, beri sedikit garam. Rendam sayuran sebentar di dalamnya lalu angkat dan tiriskan hingga kering. Aduk Bumbu Halus dengan air asam dan air secukupnya hingga cukup kentalnya. Masukkan sayuran segar yang sudah dipotong dan tauge, aduk hingga terbalur rata dengan bumbu. Sajikan dengan topping kerupuk, jika suka.",
        "Kegunaan makanan Karedok biasanya menjadi makanan pelengkap dalam menu sehari-hari orang Sunda."
      ],
      "gambar": {
        "src": "/images/budaya/jawa-barat/karedok.jpg",
        "alt": "Ilustrasi Karedok — Jawa Barat",
        "kredit": "Gunawan Kartapranata",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Karedok_platter.JPG",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Karedok_platter.JPG/1280px-Karedok_platter.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "payung-geulis": {
      "info": [
        "Payung geulis (aksara Sunda: ᮕᮚᮥᮀ ᮌᮩᮜᮤᮞ᮪ pengucapan bahasa Sunda: [pa.jʊŋ.gɤ.lɪs], EBSYD: payung gölis) adalah salah satu kerajinan berupa payung kertas yang berasal dari Kota Tasikmalaya. Payung ini terbuat dari anyaman bambu dengan penutup berbahan kertas yang dihias dengan motif atau corak khas berwarna-warni. Payung geulis memiliki 2 motif hias, pertama, berbentuk hias geometris bangunan yang lebih menonjol seperti lengkung, patah-patah, dan garis lurus, kedua, motif hias non-geometris yang terinspirasi dari bentuk alam seperti tanaman, hewan dan manusia. Pembuatan payung ini dilakukan secara manual atau handmade oleh para perajin.",
        "Secara etimologis, payung geulis berasal dari dua kata dalam bahasa Sunda, yaitu payung yang memiliki makna yang sama dengan payung dalam bahasa Indonesia ('benda untuk melindungi diri dari hujan'), dan geulis yang artinya cantik, sehingga secara keseluruhan, payung geulis mempunyai arti \"payung yang cantik\", penamaan tersebut menunjukkan bahwa payung ini memiliki nilai estetika yang tinggi karena motifnya yang khas. Payung ini juga menjadi salah satu ikon Kota Tasikmalaya, terlihat dari lambang Kota Tasikmalaya yang mengandung gambar payung geulis di dalamnya.",
        "Payung geulis mulai diproduksi sejak tahun 1930-an di wilayah Panyingkiran, Indihiang. Pada saat itu, tokoh yang paling terkenal karena keuletannya dalam memproduksi payung geulis adalah H. Muhyi, seorang tokoh lokal yang berinisiatif membuat payung berbahan kertas untuk digunakan ketika pergi berladang. Karyanya tersebut dalam membuat payung geulis membuat warga lain terinspirasi dan akhirnya melakukan hal yang sama serta menjadikannya sebagai salah satu komoditas usaha.",
        "Payung geulis mempunyai keunikan tersendiri yang membedakannya dengan berbagai jenis payung lainnya. Bila dilihat dari bentuknya, ia memiliki kerangka yang terbuat dari bambu, sedangkan tudungnya terbuat dari semacam kertas semen, sementara untuk pegangannya, ia menggunakan kayu. Karena bentuknya yang berestetika inilah, ia dinamakan payung geulis."
      ],
      "gambar": {
        "src": "/images/budaya/jawa-barat/payung-geulis.jpg",
        "alt": "Ilustrasi Payung Geulis — Jawa Barat",
        "caption": "Seorang pengrajin yang tengah menyelesaikan pembuatan payung geulis.",
        "kredit": "Arie Basuki",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Pembuat_payung_tasik.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Pembuat_payung_tasik.jpg/1280px-Pembuat_payung_tasik.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "sangkuriang": {
      "info": [
        "Sangkuriang (bahasa Sunda: ᮞᮀᮊᮥᮛᮤᮃᮀ, translit. Sang Kuriang) adalah cerita rakyat serta legenda masyarakat Sunda. Legenda tersebut berkisah tentang terciptanya embung Bandung, Gunung Tangkuban Parahu, Gunung Burangrang, dan Gunung Bukit Tunggul. Legenda ini didukung dengan fakta geologi, diperkirakan bahwa orang Sunda telah hidup di dataran tinggi tersebut sejak seribu tahun sebelum Masehi. Legenda Sangkuriang awalnya merupakan tradisi lisan. Rujukan tertulis mengenai legenda ini ada pada naskah Bujangga Manik yang ditulis pada daun lontar yang berasal dari akhir abad ke-15 atau awal abad ke-16 Masehi. Dalam naskah tersebut ditulis bahwa Pangeran Jaya Pakuan alias Pangeran Bujangga Manik atau Ameng Layaran mengunjungi tempat-tempat suci agama Hindu di pulau Jawa dan pulau Bali pada akhir abad ke-15. Setelah melakukan perjalanan…",
        "Awalnya diceritakan di kahyangan ada sepasang dewa dan dewi yang berbuat kesalahan, maka oleh Sang Hyang Tunggal mereka dikutuk turun ke bumi dalam wujud hewan. Sang dewi berubah menjadi babi hutan (celeng) bernama Celeng Wayung Hyang (atau Wayungyang), sedangkan sang dewa berubah menjadi anjing bernama si Tumang. Mereka harus turun ke bumi menjalankan hukuman dan bertapa mohon pengampunan agar dapat kembali ke wujudnya menjadi dewa-dewi kembali. Diceritakan bahwa Raja Sungging Perbangkara tengah pergi berburu. Di tengah hutan Sang Raja membuang air seni yang tertampung dalam daun caring (keladi hutan), dalam versi lain disebutkan air kemih sang raja tertampung dalam batok kelapa. Seekor babi hutan betina bernama Celeng Wayung Hyang yang tengah bertapa sedang kehausan, ia kemudian tanpasengaja meminum air seni sang…"
      ],
      "gambar": {
        "src": "/images/budaya/jawa-barat/sangkuriang.jpg",
        "alt": "Ilustrasi Sangkuriang — Jawa Barat",
        "caption": "Perangko Indonesia tahun 1998 bergambar cerita rakyat Sangkuriang.",
        "kredit": "Post of Indonesia",
        "lisensi": "Public domain",
        "sumber": "https://commons.wikimedia.org/wiki/File:Stamp_of_Indonesia_-_1998_-_Colnect_254729_-_Folk_Tales_-_Sangkuriang.jpeg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/3/39/Stamp_of_Indonesia_-_1998_-_Colnect_254729_-_Folk_Tales_-_Sangkuriang.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "tangkuban-perahu": {
      "info": [
        "Gunung Tangkuban Parahu (Aksara Sunda Baku: ᮌᮥᮔᮥᮀ ᮒᮀᮊᮥᮘᮔ᮪ ᮕᮛᮠᮥ, Latin: Gunung Tangkuban Parahu) adalah salah satu gunung yang terletak di antara Kabupaten Subang dan Kabupaten Bandung Barat, Provinsi Jawa Barat, Indonesia. Sekitar 20 km ke arah utara Kota Bandung, dengan rimbun pohon pinus dan hamparan kebun teh di sekitarnya, Gunung Tangkuban Parahu mempunyai ketinggian setinggi 2.086 meter. Bentuk gunung ini adalah Stratovolcano dengan pusat erupsi yang berpindah dari timur ke barat. Jenis batuan yang dikeluarkan melalui letusan kebanyakan adalah lava dan sulfur, mineral yang dikeluarkan adalah sulfur belerang, mineral yang dikeluarkan saat gunung tidak aktif adalah uap belerang. Daerah Gunung Tangkuban Parahu dikelola oleh Perum Perhutanan. Suhu rata-rata hariannya adalah 17oC pada siang hari dan 2 °C pada malam hari. Gunung…",
        "Gunung Tangkuban Parahu terbentuk sekitar 125.000 tahun lalu di Kaldera Sunda. Gunung ini, menurut T. Bachtiar dan Dewi Syafriani dalam buku Bandung Purba, lebih muda dari Gunung Burangrang. Gunung Burangrang yang terletak di sisi barat Gunung Tangkuban Parahu terbentuk sekitar 210.000 hingga 105.000 tahun lalu. Menurut T. Bachtiar, Gunung Tangkuban Parahu lahirnya setelah terbentuknya Sesar Lembang. Ketika Gunung Tangkuban Parahu meletus, sebagian material alirannya yang mengalir ke selatan tertahan di kaki patahan. Sepanjang sejarahnya, aktivitas yang terjadi di gunung Tangkuban Parahu telah membentuk 13 kawah. Tiga kawah diantaranya populer dijadikan destinasi wisata, yakni Kawah Ratu, Kawah Upas, dan Kawah Domas. Sementara perincian 13 kawah lengkapnya sebagai berikut: Kawah Upas terdiri dari Kawah Upas (termuda), Kawah Upas…",
        "DAS Kawasan gunung Tangkuban Perahu beserta Cagar Alam Gunung Burangrang merupakan bagian dari daerah aliran sungai atau DAS Citarum, kecuali sisi Utara dan Timur kawasan tersebut yang merupakan kawasan hulu bagi DAS Cilamaya, DAS Ciasem (mayoritas kawasan Cagar Alam Gunung Tangkuban Perahu) serta DAS Cipunagara."
      ],
      "gambar": {
        "src": "/images/budaya/jawa-barat/tangkuban-perahu.jpg",
        "alt": "Ilustrasi Tangkuban Perahu — Jawa Barat",
        "kredit": "DimasSepur",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Panoramic_View_of_Kawah_Ratu_Crater_in_Mt.Tangkuban_Perahu.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Panoramic_View_of_Kawah_Ratu_Crater_in_Mt.Tangkuban_Perahu.jpg/1280px-Panoramic_View_of_Kawah_Ratu_Crater_in_Mt.Tangkuban_Perahu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "bahasa-sunda": {
      "info": [
        "Bahasa Sunda (Endonim: Basa Sunda, Aksara Sunda: ᮘᮞ ᮞᮥᮔ᮪ᮓ, Abjad Pegon: باسا سوندا, pengucapan dalam IPA: [basa sʊnda]) adalah sebuah bahasa dari cabang Melayu-Polinesia dalam rumpun bahasa Austronesia. Bahasa ini umumnya dituturkan oleh penduduk bersuku Sunda di wilayah yang disebut Tatar Sunda di Indonesia. Bahasa Sunda juga dituturkan oleh diaspora Sunda di beberapa wilayah lain di Indonesia dan di luar Indonesia. Bahasa ini memiliki penutur setidaknya 42 juta orang pada tahun 2016.",
        "Dialek (basa wewengkon) bahasa Sunda mempunyai beberapa ragam. Para pakar bahasa biasanya membedakan enam dialek yang berbeda. Dialek-dialek ini adalah:",
        "Dialek Barat (Banten, sebagian barat Kabupaten Bogor khususnya wilayah Jasinga Raya, dan sebagian barat Kabupaten Sukabumi.) Dialek Utara (Kabupaten Bogor, Kota Bogor, Kabupaten Karawang, sebagian timur dan selatan Kabupaten Bekasi, Kabupaten Purwakarta, dan Kabupaten Subang.) Dialek Selatan (Kota Bandung, Kota Cimahi, Kota Tasikmalaya, Kota Sukabumi, Kabupaten Bandung Barat, Kabupaten Bandung, Kabupaten Sumedang, Kabupaten Garut, Kabupaten Cianjur, Kabupaten Tasikmalaya, Kabupaten Sukabumi, dan sebagian kecil selatan Jonggol, Bogor.) Dialek Tengah Timur (Kabupaten Majalengka, Kabupaten Indramayu bagian selatan, dan sebagian barat Kabupaten Kuningan.) Dialek Timur Laut (Kabupaten Kuningan, sebagian barat Kabupaten Brebes, dan sebagian selatan Kabupaten Cirebon.) Dialek Tenggara (Kota Banjar, Kabupaten Ciamis, Kabupaten Pangandaran,…",
        "Bahasa Sunda terutama dipertuturkan di sebelah barat pulau Jawa, di daerah yang dijuluki Tatar Sunda (Pasundan). Bahasa Sunda juga dipertuturkan di bagian barat Jawa Tengah, khususnya di sebagian selatan Kabupaten Brebes dan sebagian barat Cilacap, karena beberapa kecamatan di wilayah ini dahulunya berada di bawah kekuasaan Kerajaan Galuh. Seiring transmigrasi dan imigrasi yang dilakukan etnis Sunda, penutur bahasa ini telah menyebar sampai ke luar pulau Jawa. Misalkan di Lampung, Sumatera Selatan, Jambi, Riau, Kalimantan Barat dan Sulawesi Tenggara di mana penduduk etnis Sunda dengan jumlah signifikan menetap di wilayah tersebut."
      ],
      "gambar": {
        "src": "/images/budaya/jawa-barat/bahasa-sunda.png",
        "alt": "Ilustrasi Bahasa Sunda — Jawa Barat",
        "kredit": "Haikal FK 1705",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Word_Sunda_in_Sundanese_Script_SVG_Version.svg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Word_Sunda_in_Sundanese_Script_SVG_Version.svg/1280px-Word_Sunda_in_Sundanese_Script_SVG_Version.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    }
  },
  "kalimantan-barat": {
    "bubur-pedas": {
      "info": [
        "Bubur pedas atau bubbor paddas adalah makanan tradisional sejenis bubur khas suku Melayu yang memiliki berbagai macam varian berbeda seperti Melayu Sambas di Kalimantan Barat, Berau di Kalimantan Timur, Melayu Langkat dan Melayu Deli dari Sumatera Utara. Bubur pedas juga populer di kalangan orang Melayu di Sarawak, Malaysia yang biasanya disajikan selama bulan Ramadhan setelah umat Muslim mengakhiri puasa pada waktu berbuka. Orang Tionghoa setempat secara harfiah menyebutnya sebagai (Hakka: Lat Moi; Hanzi: 辣糜), 'Lat' yang artinya pedas dan 'Moi' yang artinya bubur. Bubur pedas juga populer bagi masyarakat Melayu di Tambelan, Kepulauan Riau. Bubur pedas terbuat dari beras sangrai dan kelapa parut yang dihaluskan. Kaldu dibuat baik dari daging tulang seperti tulang rusuk atau irisan ayam. Bumbu campuran termasuk bawang merah, bawang…",
        "Pada masa Hindia Belanda, bubur pedas merupakan sajian yang umumnya dihidangkan di lingkungan Kesultanan Deli. Awalnya, di bawah kepemimpinan Tuanku Sultan Makmun Al-Rasyid Perkasa Alam Syah, bubur pedas dihidangkan sebagai makanan buka puasa di kompleks istana Kesultanan Deli. Namun, jauh sebelum itu, kebiasaan buka puasa dengan hidangan bubur pedas ini sudah jauh lebih dulu dilakukan di Masjid Al-Osmani, Medan sejak tahun 1870-an.",
        "Di Kalimantan Barat, bubur pedas biasanya terbuat dari bubur nasi dicampur ikan teri sedikit, kacang, daun bawang, dan rempah-rempah. Juga tak lupa dengan saus dan kecap untuk menambah cita rasanya. Biasanya ditambahkan juga perasan jeruk limau. Di Sambas, makanan ini merupakan makanan rakyat. Di Pontianak, biasanya orang menjual bubur pedas menggunakan gerobak.",
        "Di pantai timur Sumatera Utara yang secara historis merupakan bekas dari wilayah Keresidenan Sumatera Timur milik Hindia Belanda, yang merupakan rumah bagi beberapa sub-etnik Melayu seperti Melayu Langkat, Melayu Asahan, Melayu Batubara dan Melayu Deli, bubur pedas memiliki corak tersendirinya berupa tambahan topping/taburan anyang. Anyang merupakan campuran antara kelapa parut, pakis, dan taoge rebus, yang rasanya gurih serta mirip seperti urap. Sayuran yang menjadi bahan pembuatan bubur pedas di Sumatera Utara juga cukup bervariasi, mulai dari jagung, timun, daun kesum, wortel dan kentang."
      ],
      "gambar": {
        "src": "/images/budaya/kalimantan-barat/bubur-pedas.jpg",
        "alt": "Ilustrasi Bubur Pedas — Kalimantan Barat",
        "kredit": "Wibowo Djatmiko ( Wie146 )",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Bubur_100618-4100_sbs.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Bubur_100618-4100_sbs.jpg/1280px-Bubur_100618-4100_sbs.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "tenun-ikat-sintang": {
      "info": [
        "Tenun ikat atau kain ikat adalah kriya tenun Indonesia berupa kain yang ditenun dari helaian benang pakan atau benang lungsin yang sebelumnya diikat dan dicelupkan ke dalam zat pewarna alami. Alat tenun yang dipakai adalah alat tenun bukan mesin. Kain ikat dapat dijahit untuk dijadikan pakaian dan perlengkapan busana, kain pelapis mebel, atau penghias interior rumah. Sebelum ditenun, helai-helai benang dibungkus (diikat) dengan tali plastik sesuai dengan corak atau pola hias yang diingini. Ketika dicelup, bagian benang yang diikat dengan tali plastik tidak akan terwarnai. Tenun ikat ganda dibuat dari menenun benang pakan dan benang lungsin yang keduanya sudah diberi motif melalui teknik pengikatan sebelum dicelup ke dalam pewarna. Teknik tenun ikat terdapat di berbagai daerah di Indonesia. Daerah-daerah di Indonesia yang terkenal…"
      ],
      "gambar": {
        "src": "/images/budaya/kalimantan-barat/tenun-ikat-sintang.jpg",
        "alt": "Ilustrasi Tenun Ikat Sintang — Kalimantan Barat",
        "caption": "Kain tenun ikat warga di Rumah Betang Ensaid Panjang, Sintang.",
        "kredit": "Zhilal Darma",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Hasil_Tenun_Warga_di_Rumah_Betang_Ensaid_Panjang_Sintang.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Hasil_Tenun_Warga_di_Rumah_Betang_Ensaid_Panjang_Sintang.jpg/1280px-Hasil_Tenun_Warga_di_Rumah_Betang_Ensaid_Panjang_Sintang.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "tari-monong": {
      "info": [
        "Tari monong adalah salah satu tarian tradisional Indonesia asal suku Dayak di Kalimantan Barat. Tari monong juga sering disebut sebagai tari manang. Tarian ini merupakan tarian penyembuhan atau tarian penolak penyakit yang dilakukan saat warga suku Dayak terkena penyakit. Pada awalnya tarian monong merupakan tarian penyembuhan yang dilakukan dukun suku Dayak dengan membacakan mantra sambil menari. Dalam tarian ini juga diikuti oleh anggota keluarga yang sakit dan di pimpin oleh seorang dukun. Namun, seiring dengan perkembangan zaman, saat ini tarian ini tidak hanya digunakan sebagai penyembuhan saja melainkan juga sebagai sarana hiburan.",
        "Tari Monong menggambarkan kehidupan masyarakat Kalimantan yang kaya akan budaya. Melalui Tari Monong, masyarakat setempat memperlihatkan kebanggaan mereka terhadap warisan budaya yang sudah ada sejak lama. Tarian ini juga berfungsi sebagai sarana untuk menyampaikan nilai-nilai sosial, seperti persatuan dan keharmonisan dalam masyarakat. Tarian Monong sering ditampilkan dalam acara adat dan perayaan, dengan gerakan yang lincah dan penuh makna. Dengan menggunakan kostum khas dan iringan musik tradisional.",
        "Tari Monong awalnya merupakan bentuk ritual yang dilakukan suku Dayak untuk mengusir roh jahat yang diyakini menyebabkan seseorang sakit, sekaligus meminta kesembuhan dari Tuhan. Para dukun dan tabib akan melakukan tarian sambil membaca mantra. Anggota keluarga dari orang sakit yang sedang diobati juga ikut menari mengikuti tabib atau dukun yang mengobati.",
        "Tari monong memiliki gerakan yang lebih menekankan gerakan saat dukun melakukan ritual penyembuhan. Gerakan tersebut adalah saat dukun melakukan pembacaan mantra dan menari pada saat ritual sedang berlangsung. Tarian tersebut dihadirkan saat tetua atau dukun tengah dalam keadaan trance (di bawah alam sadar). Keberadaan Tari Monong merupakan salah satu kesenian tradisional yang masih terjaga hingga saat ini. Tari Monong ditarikan oleh wanita, pria, atau keduanya sebagai tari berpasangan. Oleh karena itu, tarian ini sangat kental dengan unsur atau nuansa mistis. Di dalam pertunjukannya, para penari di balut dengan busana khas suku Dayak di Kalimantan barat. Penari juga dilengkapi dengan berbagai alat yang digunakan untuk ritual. Selain itu, dalam tarian ini juga diiringi dengan alunan alat musik tradisional suku…"
      ]
    },
    "legenda-batu-menangis": {
      "info": [
        "Legenda Batu Menangis adalah cerita rakyat dari Kalimantan Barat yang mengandung pesan moral tentang pentingnya menghormati orang tua serta akibat sifat angkuh dan durhaka kepada ibu kandung.",
        "Dikisahkan pada zaman dahulu, di sebuah bukit yang jauh dari pemukiman penduduk, hiduplah seorang janda miskin bersama Darmi, anaknya yang berparas cantik. Namun, kecantikan itu tidak sejalan dengan perilakunya; Darmi dikenal manja, pemalas, dan sombong.",
        "Suatu hari, sang ibu mengajak Darmi ke pasar. Darmi berdandan indah, sementara ibunya berjalan di belakang dengan pakaian kusam dan membawa keranjang. Ketika penduduk desa bertanya, Darmi malu mengakui ibunya dan menyebut perempuan tua itu sebagai pembantunya.",
        "Mendengar penghinaan putrinya berulang kali, sang ibu berdoa agar anaknya dihukum. Kaki Darmi perlahan berubah menjadi batu; ia menangis memohon ampun, tetapi kutukan tidak dapat ditarik. Tubuhnya berubah menjadi batu utuh, dan air mata yang masih terlihat mengalir membuat batu itu dikenal sebagai Batu Menangis."
      ]
    },
    "bahasa-melayu-pontianak": {
      "info": [
        "Bahasa Melayu Pontianak sering juga disebut Base Pontianak merupakan dialek bahasa Melayu yang dituturkan di wilayah Kota Pontianak, Kabupaten Kubu Raya, Kabupaten Mempawah dan sekitarnya. Dialek ini dipengaruhi oleh bahasa Klemantan dan Iban. Bahasa Melayu Pontianak ini memiliki keunikan dalam pelafalan, karena huruf 'r' dalam dialek ini diucapkan seperti r sengau atau konsonan geser langit-langit belakang bersuara (ɣ). Fonem ini bisa ditulis sebagai 'r' atau 'gh'. Terdapat tambahan partikel bah sebagai penegas kata yang diucapkan sebelumnya, seperti yang digunakan dalam logat-logat bahasa Melayu yang digunakan di bagian utara Pulau Kalimantan (Sarawak, Brunei, Sabah dan provinsi Kalimantan Utara). Dialek ini tidak mengenal tingkatan berbahasa. Kasar dan halusnya seseorang berbicara tergantung pada penekanan nada dan intonasi.…",
        "Ada berbagai usaha pelestarian yang sudah dan sedang dilakukan seperti penggunaan bahasa Melayu Pontianak pada konten-konten Youtube.",
        "Pada tahun 2020, Bahasa Melayu Pontianak ditetapkan sebagai warisan budaya takbenda Indonesia dengan nomor registrasi 202001197."
      ],
      "gambar": {
        "src": "/images/budaya/kalimantan-barat/bahasa-melayu-pontianak.png",
        "alt": "Ilustrasi Bahasa Melayu Pontianak — Kalimantan Barat",
        "kredit": "Cal1407",
        "lisensi": "CC0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Pontianak_Malay.svg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Pontianak_Malay.svg/1280px-Pontianak_Malay.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "danau-sentarum": {
      "info": [
        "Danau Sentarum adalah danau musiman yang berada di Kabupaten Kapuas Hulu, Kalimantan Barat. Danau ini dipenuhi air selama 10 bulan setiap tahunnya dan sisanya akan surut, membentuk kolam-kolam kecil yang menjadi habitat berbagai jenis ikan-ikan air tawar. Saat musim kemarau, kawasan Danau Sentarum berperan penting sebagai pemasok air bagi Sungai Kapuas. Luas keseluruhan kawasan Danau Sentarum mencapai sekitar 132.000 hektare. Danau Sentarum merupakan bagian dari Taman Nasional Danau Sentarum yang dikenal sebagai salah satu kawasan lahan basah terpenting di Asia Tenggara. Kawasan ini memiliki ekosistem rawa banjiran musiman dengan tingkat keanekaragaman hayati yang tinggi.",
        "Untuk mencapai Danau Sentarum, dibutuhkan waktu sekitar 14 jam dari Kota Pontianak melalui perjalanan darat dan air dengan rute Pontianak-Sintang-Semitau. Dari Semitau menuju kawasan Danau Sentarum dapat ditempuh menggunakan perahu motor menuju Lanjak. Selain melaui jalur darat, kawasan ini juga dapat dicapai melalui jalur udara dari Pontianak menuju Putussibau sekitar dua jam dan dari Putussibau ke Nanga Suhaid menggunakan transportasi sungai (longboat) meunju kawasan danau sekitar tujuh jam.",
        "Daerah sekitar Danau Sentarum dihuni oleh masyarakat tradisional yang telah beradaptasi dengan naik turun air danau, antara lain Suku Dayak Iban, Sebaruk, Sontas, Kenyah dan Punan. Rumah panjang atau \"betang\" yang dihuni masyarakat adat suku memiliki ukuran beragam, ada yang dihuni lima sampai delapan kepala keluarga dan ada yang dihuni 15 sampai 30 kepala keluarga. Rumah panjang yang dihuni 15 – 30 kepala keluarga, mempunyai panjang rata-rata 186 meter dan lebar 6 meter."
      ],
      "gambar": {
        "src": "/images/budaya/kalimantan-barat/danau-sentarum.jpg",
        "alt": "Ilustrasi Danau Sentarum — Kalimantan Barat",
        "caption": "Danau Sentarum",
        "kredit": "Natureandpoverty.net",
        "lisensi": "CC BY-SA 2.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Danau_Sentarum_2006.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/d/de/Danau_Sentarum_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "rumah-betang": {
      "info": [
        "Rumah betang adalah rumah adat khas Kalimantan yang terdapat diberbagai penjuru Kalimantan dan dihuni oleh masyarakat Dayak terutama di daerah hulu sungai yang biasanya menjadi pusat permukiman suku Dayak. Di Kalimantan Barat, rumah betang biasa disebut rumah panjang, rumah radakng, atau rumah panjai. Di Kalimantan Tengah, ada yang menyebutnya lewu. Di Kalimantan Timur, ada yang menyebutnya lou atau lamin. Di Kalimantan Utara, rumah betang dikenal dengan lamin atau baloi. Sedangkan di Kalimantan Selatan di sebut Balai.",
        "Rumah Betang yaitu bentuk panggung dan memanjang. Panjangnya bisa mencapai 30-150 meter serta lebarnya dapat mencapai sekitar 10-30 meter, memiliki tiang yang tingginya sekitar 3-5 meter. Biasanya Betang dihuni oleh 100-150 jiwa, Betang dapat dikatakan sebagai rumah suku, karena selain di dalamnya terdapat satu keluarga besar yang menjadi penghuninya dan dipimpin pula oleh seorang Pambakas Lewu. Bagian dalam betang terbagi menjadi beberapa ruangan yang bisa dihuni oleh setiap keluarga. Pada suku Dayak tertentu, pembuatan rumah Betang atau rumah panjang haruslah memenuhi beberapa persyaratan berikut di antaranya pada hulunya haruslah searah dengan matahari terbit dan sebelah hilirnya ke arah matahari terbenam. Hal ini dianggap sebagai simbol dari kerja keras untuk bertahan hidup mulai dari matahari terbit hingga…",
        "Rumah Panjang/Rumah Betang bagi masyarakat Dayak tidak saja sekadar ungkapan legendaris kehidupan nenek moyang, melainkan juga suatu pernyataan secara utuh dan konkret tentang tata pamong desa, organisasi sosial serta sistem kemasyarakatan, sehingga tak pelak menjadi titik sentral kehidupan warganya. Sistem nilai budaya yang dihasilkan dari proses kehidupan rumah panjang, menyangkut soal makna dari hidup manusia; makna dari pekerjaan; karya dan amal perbuatan; persepsi mengenai waktu; hubungan manusia dengan alam sekitar; soal hubungan dengan sesama. Dapat dikatakan bahwa rumah betang memberikan makna tersendiri bagi masyarakat Dayak. Rumah betang adalah pusat kebudayaan mereka karena disanalah seluruh kegiatan dan segala proses kehidupan berjalan dari waktu ke waktu. Rumah betang memang bukan sebuah…"
      ],
      "gambar": {
        "src": "/images/budaya/kalimantan-barat/rumah-betang.jpg",
        "alt": "Ilustrasi Rumah Betang — Kalimantan Barat",
        "caption": "Rumah Betang Sei Pasah di Kapuas, Kalimantan Tengah.",
        "kredit": "Ezagren ( bicara / talk )",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Rumah_Betang_Sei_Pasah_180505002.JPG",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Rumah_Betang_Sei_Pasah_180505002.JPG/1280px-Rumah_Betang_Sei_Pasah_180505002.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    }
  },
  "sulawesi-selatan": {
    "perahu-pinisi": {
      "info": [
        "Istilah pinisi, pinisiq, pinisi', atau phinisi mengacu pada jenis sistem layar (rig), tiang-tiang, layar, dan konfigurasi tali dari suatu jenis kapal layar Indonesia. Sebuah pinisi membawa tujuh hingga delapan layar dengan dua tiang, diatur seperti gaff-ketch dengan apa yang disebut standing gaffs — yaitu, tidak seperti kebanyakan kapal Barat yang menggunakan sistem layar semacam itu, kedua layar utama tidak dibuka dengan menarik galahnya ke atas, tetapi layarnya 'ditarik keluar' seperti tirai dari sekitar tengah tiang.",
        "Seperti kebanyakan kapal layar Indonesia, kata 'pinisi' hanya menyebut jenis sistem layar, dan tidak merujuk pada bentuk lambung kapal yang menggunakan layar tersebut. Kapal dengan layar pinisi sebagian besar dibangun oleh masyarakat desa Ara yang berbahasa Konjo, sebuah desa di Kecamatan Bontobahari, Kabupaten Bulukumba, Sulawesi Selatan, dan banyak digunakan oleh pelaut Bugis dan Makassar sebagai kapal kargo (lihat pula #Kesalahpahaman umum mengenai pinisi). Pada tahun-tahun sebelum hilangnya angkutan bertenaga angin dalam rangka motorisasi armada perdagangan tradisional Indonesia pada tahun 1970/80-an, kapal yang menggunakan sistem layar pinisi adalah kapal layar Indonesia terbesar. UNESCO menetapkan seni pembuatan kapal Pinisi sebagai Karya Agung Warisan Manusia yang Lisan dan Takbenda pada Sesi ke-12 Komite Warisan Budaya Unik…",
        "Penyebutan paling awal, baik dalam sumber asing maupun dalam negeri, istilah 'pinisi' yang jelas-jelas mengacu pada jenis kapal layar dari Sulawesi ditemukan dalam artikel tahun 1917 di majalah Belanda Coloniale Studiën: \"... kapal dengan sistem layar sekunar cara Eropa.\" Memang, catatan penggunaan sistem layar depan-belakang tipe Eropa pada kapal-kapal pribumi Nusantara baru dimulai pada paruh pertama abad ke-19, dan baru pada awal abad ke-20 sejumlah besar kapal dari Sulawesi dilengkapi dengan layar seperti itu. Hingga pertengahan abad ke-20, para pelaut Sulawesi sendiri menyebut kapal mereka dengan istilah palari, jenis lambung yang paling cocok untuk tenaga penggerak layar pinisi. Ada berbagai tradisi lokal yang mengklaim asal mula kata 'pinisi' dan jenis kapal yang lebih awal, namun banyak di antaranya hanya dapat ditelusuri…"
      ],
      "gambar": {
        "src": "/images/budaya/sulawesi-selatan/perahu-pinisi.jpg",
        "alt": "Ilustrasi Perahu Pinisi — Sulawesi Selatan",
        "caption": "Perahu palari berlayar pinisi, Sulawesi Selatan, 1938.",
        "kredit": "Unknown author",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:COLLECTIE_TROPENMUSEUM_Het_Mandarse_zeilschip_de_Pelari_bij_Zuid-Celebes_TMnr_10010700.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/c/c9/COLLECTIE_TROPENMUSEUM_Het_Mandarse_zeilschip_de_Pelari_bij_Zuid-Celebes_TMnr_10010700.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "tari-pakarena": {
      "info": [
        "Tari Pakarena (Makassar: ᨄᨀᨑᨙᨊ, translit. Pakarena, har. 'penari' pengucapan bahasa Makassar: [pakaˈrena] adalah tarian tradisional asli suku Makassar dari Sulawesi Selatan yang diiringi oleh 2 (dua) kepala drum (gandrang) dan sepasang instrumen alat semacam suling (puik-puik). Selain tari pakarena yang selama ini dimainkan oleh maestro tari pakarena Coppong Daeng Rannu (alm) di kabupaten Gowa, juga ada jenis tari pakarena lain yang berasal dari Kabupaten Kepulauan Selayar yaitu “Tari Pakarena Gantarang”. Disebut sebagai Tari Pakarena Gantarang karena tarian ini berasal dari Selayar di sebuah perkampungan yang merupakan pusat kerajaan di Pulau Selayar pada masa lalu yaitu Gantarang Lalang Bata. Tarian yang dimainkan oleh empat orang penari perempuan ini pertama kali ditampilkan pada abad ke 17 tepatnya tahun 1603 saat Pangali Patta…"
      ],
      "gambar": {
        "src": "/images/budaya/sulawesi-selatan/tari-pakarena.jpg",
        "alt": "Ilustrasi Tari Pakarena — Sulawesi Selatan",
        "kredit": "Ali Froghi",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Performing_pakarena_dance.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Performing_pakarena_dance.jpg/1280px-Performing_pakarena_dance.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "baju-bodo": {
      "info": [
        "Baju Bodo/Tokko adalah pakaian tradisional perempuan suku Bugis & Makassar yang dipasangkan dengan Lipa Sabbe sarung sutera khas bugis dari sengkang kabupaten wajo dari Sulawesi Selatan, Indonesia. Baju bodo/tokko juga dikenali sebagai salah satu busana tertua di dunia.",
        "Baju bodo/tokko berbentuk segi empat, biasanya berlengan pendek, dan biasanya di pasangkan menggunakan lipa sabbe sarung sutera khas bugis dari kabupaten wajo Perempuan Bugis & Makassar dahulu mengenakan pakaian sederhana. Sehelai sarung menutupi pinggang hingga kaki dan baju tipis longgar dari kain muslin (kasa). Cara memakai baju bodo/tokko ini masih berlaku pada tahun sampai tahun 1930-an.",
        "Menurut adat Suku Bugis & Makassar, setiap warna baju bodo/tokko yang dipakai oleh perempuan Makassar menunjukkan usia ataupun martabat pemakainya.",
        "Pakaian ini kerap dipakai untuk acara adat seperti upacara pernikahan. Namun, kini, baju bodo mulai direvitalisasi melalui acara lainnya seperti lomba menari atau menyambut tamu agung."
      ],
      "gambar": {
        "src": "/images/budaya/sulawesi-selatan/baju-bodo.jpg",
        "alt": "Ilustrasi Baju Bodo — Sulawesi Selatan",
        "caption": "Potret wanita suku Makassar dalam busana adat Baju Bodo, 1889.",
        "kredit": "Meyer, Adolf Bernhard (1840-1911). Photographe",
        "lisensi": "Public domain",
        "sumber": "https://commons.wikimedia.org/wiki/File:Album_von_Cel%C3%A8bes-Typen._Circa_250_Abbildungen_auf_37_Tafeln_in_Lichtdruck._Herausgegeben_von_Dr_A.B._Meyer._Dresden,_Stengel_und_Markert,_1889._Album_de_105_phot._des_C%C3%A9l%C3%A8bes_par_A.B._Meyer._Des..._-_btv1b53281340c_(53_of_61).jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Album_von_Cel%C3%A8bes-Typen._Circa_250_Abbildungen_auf_37_Tafeln_in_Lichtdruck._Herausgegeben_von_Dr_A.B._Meyer._Dresden%2C_Stengel_und_Markert%2C_1889._Album_de_105_phot._des_C%C3%A9l%C3%A8bes_par_A.B._Meyer._Des..._-_btv1b53281340c_%2853_of_61%29.jpg/1280px-thumbnail.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "coto-makassar": {
      "info": [
        "Coto Makassar atau Pallu coto mangkasarak adalah hidangan tradisional Suku Makassar, Sulawesi Selatan. Makanan ini terbuat dari jeroan sapi yang direbus dalam waktu yang lama. Pada umumnya, coto makassar dihidangkan dalam mangkuk dan dinikmati dengan ketupat. Pada awalnya hidangan ini hanya disajikan pada raja atau bangsawan namun semakin berkembang nya zaman, hidangan coto Makassar akhirnya dapat di nikmati oleh semua orang Coto Makassar biasanya dibuat dengan 40 rempah, dan dijual secara terpisah, tergantung konsumen memilih campur antara jeroan dan daging, jeroan saja, atau daging saja.",
        "Coto Makassar sudah ada sejak zaman kerajaan Gowa. Saat itu, berpusat di Somba Opu pada tahun 1538 Masehi di bagian selatan kota Makassar. Coto Makassar diperkirakan telah ada semenjak masa Kerajaan Gowa, tepatnya di Kabupaten Gowa pada abad ke-16. Dahulu, hidangan coto bagian daging sapi sirloin dan tenderloin hanya disajikan untuk disantap oleh keluarga kerajaan. Sementara bagian jeroan disajikan untuk masyarakat kelas bawah atau abdi dalem pengikut kerajaan.",
        "Ada juga yang mengatakan coto Makassar diciptakan oleh rakyat yang disajikan kepada pengawal kerajaan dipagi hari sebelum bekerja. Dalam catatan sejarah yang dikutip dalam arsip pemerintah di Makassar, pada abad 16, hidangan coto makassar sebagai kuliner khas juga mendapat pengaruh dari kuliner Cina yang telah ada saat itu. Hal ini dapat dilihat dari jenis sambal yang digunakan, yakni sambal tauco sebagai salah satu identitasnya.",
        "Umumnya daging yang digunakan dalam coto ini adalah daging sapi. Namun ada pula yang menggunakan berbagai macam daging jeroan sapi seperti lidah, otak, limpa, paru, hati, jantung, babat dan lain-lain. Konon, diperlukan sekitar 40 macam rempah untuk membuat coto Makassar, yang disebut Rampa patang pulo. Aneka bumbu itu, di antaranya adalah bawang merah, bawang putih, cabai, biji-bijian dan bebungaan (lada, ketumbar, jintan, kemiri, pala, foeli, cengkih), dedaunan (daun salam, daun jeruk purut, daun kunyit, daun serai, daun seledri, daun bawang, daun bawang prei), rerimpangan (lengkuas, jahe), serta pelbagai bumbu lain seperti asam, garam, gula, kayu manis, dan juga Kacang tanah, irisan daun bawang dan bawang goreng, serta perasan jeruk nipis dicampurkan pada saat dihidangkan."
      ],
      "gambar": {
        "src": "/images/budaya/sulawesi-selatan/coto-makassar.jpg",
        "alt": "Ilustrasi Coto Makassar — Sulawesi Selatan",
        "caption": "Coto makassar dengan ketupat daun pandan",
        "kredit": "Iyrafeeasrul",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Kuliner_Coto_Makassar.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Kuliner_Coto_Makassar.jpg/960px-Kuliner_Coto_Makassar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "la-galigo": {
      "info": [
        "Sureq Galigo, I La Galigo, atau Galigo, atau disebut juga La Galigo adalah sebuah epik mitos penciptaan dari peradaban Bugis di Sulawesi Selatan (sekarang bagian dari Republik Indonesia) yang disalin oleh Colliq Pujie pada abad ke-19 dalam bentuk puisi bahasa Bugis kuno, ditulis dalam aksara Lontara. Puisi ini terdiri dalam sajak bersuku lima dan selain menceritakan kisah asal-usul manusia, peran penting Bissu dalam kebudayaan Bugis dan juga berfungsi sebagai almanak praktis sehari-hari. Epik ini berkembang dalam masyarakat Bugis sebagai tradisi lisan dan masih dinyanyikan pada tradisi Massureq Galigo. Versi tertulis hikayat ini yang paling awal diawetkan pada abad ke-18, di mana versi-versi yang sebelumnya telah hilang akibat serangga, iklim atau perusakan. Akibatnya, tidak ada versi Galigo yang pasti atau lengkap, tetapi…",
        "Epik ini berisi cerita yang berlatar belakang kerajaan Luwu pada abad ke-15. Namun isinya sendiri mencerminkan ciri-ciri penulisan pada abad kemudian, misalnya dengan adanya penyebutan istilah Peringgi (Frank atau orang Eropa), yang merupakan penyebutan orang Portugis dalam bahasa Lontara. Isinya sebagian terbesar berbentuk puisi yang ditulis dalam bahasa Aksara. Epik ini mengisahkan tentang Sawerigading, seorang pahlawan yang gagah berani dan juga perantau. La Galigo bukanlah teks sejarah karena isinya penuh dengan mitos dan peristiwa-peristiwa luar biasa. Dari perbandingan hasil ekskavasi arkeologis, laporan-laporan historis, perbandingan perlengkapan berhias dan barang-barang lain, naskah La Galigo mencerminkan kebudayaan Luwu abad ke-19. Versi bahasa Lontara asli Galigo sekarang hanya dipahami…",
        "Epik ini dimulai dengan kisah penciptaan dunia. Ketika dunia ini kosong (merujuk kepada Sulawesi Selatan), Raja Di Langit, La Patiganna, mengadakan suatu musyawarah keluarga dari beberapa kerajaan termasuk Senrijawa dan Peretiwi dari alam gaib dan membuat keputusan untuk melantik anak lelakinya yang tertua, La Toge' langi' menjadi Raja Alekawa (Bumi) dan memakai gelar Batara Guru. La Toge' langi' kemudian menikah dengan sepupunya We Nyili'timo', anak dari Guru ri Selleng, Raja alam gaib. Tetapi sebelum Batara Guru dinobatkan sebagai raja di bumi, ia harus melalui suatu masa ujian selama 40 hari, 40 malam. Tidak lama sesudah itu ia turun ke bumi, yaitu di Ussu', sebuah daerah di Luwu', sekarang wilayah Luwu Timur dan terletak di Teluk Bone. Batara Guru kemudian digantikan oleh anaknya, La Tiuleng yang memakai gelar Batara Lattu'. Ia…"
      ],
      "gambar": {
        "src": "/images/budaya/sulawesi-selatan/la-galigo.jpg",
        "alt": "Ilustrasi La Galigo — Sulawesi Selatan",
        "caption": "Manuskrip Sureq Galigo dari abad ke-19.",
        "kredit": "Unknown master",
        "lisensi": "Public domain",
        "sumber": "https://commons.wikimedia.org/wiki/File:Galigo.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/8/83/Galigo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "kesultanan-gowa": {
      "info": [
        "Kesultanan Gowa (bahasa Makassar: ᨀᨙᨔᨘᨒᨘᨈᨊ ᨁᨚᨓ), terkadang disebut sebagai Gowa–Tallo atau Kesultanan Makassar adalah sebuah kesultanan Islam yang terletak di bagian selatan Pulau Sulawesi, yang saat ini menjadi bagian dari Indonesia. Kesultanan ini didirikan sebagai Kerajaan Gowa pada abad ke-12, sebelum akhirnya mengubah nama menjadi kesultanan pada akhir abad ke-14 dan berkembang menjadi kekuatan besar sampai akhirnya mengalami kemunduran pada abad ke-16 dan menjadi protektorat Hindia Belanda. Gowa kemudian dibubarkan pada tahun 1957 dan Sultan terakhir memerintah sebagai Bupati Gowa, sebelum akhirnya didirikan kembali tanpa pengaruh politik pada tahun 2016. Berawal dari chiefdom yang didirikan pada awal abad ke-14 (1320). Kerajaan Gowa mencapai puncak kejayaannya bersama Kerajaan Tallo sekitar tahun 1511 hingga 1669, ketika…",
        "Naskah Lontara Patturioloang Gowa menyebutkan bahwa keturunan penguasa Kerajaan/Kesultanan Gowa berawal dari perkawinan Tumanurung yang secara harfiah dapat diartikan orang tidak diketahui asal muasalnya secara pasti dengan seorang bangsawan yang hanya dikenali dengan Karaeng Bayo\", sebagai perkawinan antara wanita bangsawan setempat dan penguasa. Bangsawan-bangsawan Bate Salapanga di Gowa pun bersepakat membentuk negeri dan mengangkat mereka berdua suami-istri sebagai penguasa. Bukti genealogis dan arkeologis mengisyaratkan bahwa pembentukan negeri Gowa terjadi pada sekitar tahun 1320 Masehi. Para ahli mengaitkan kemunculan Kerajaan Gowa dan negeri-negeri di Sulawesi Selatan lainnya dengan intensifikasi pertanian dan pemusatan pemerintahan besar-besaran pada abad ke-14, yang dipicu oleh naiknya permintaan luar bagi beras Sulawesi…",
        "Pada tahun 1666, di bawah pimpinan Laksamana Cornelis Speelman, VOC berusaha menundukkan kerajaan-kerajaan kecil di Sulawesi, tetapi belum berhasil menundukkan Kesultanan Gowa. Di lain pihak, setelah Sultan Hasanuddin naik takhta, ia berusaha menggabungkan kekuatan kerajaan-kerajaan kecil di Indonesia bagian timur untuk melawan VOC (Kompeni). Pertempuran terus berlangsung, Kompeni menambah kekuatan pasukannya hingga pada akhirnya Gowa terdesak dan semakin lemah sehingga pada tanggal 18 November 1667 bersedia mengadakan Perjanjian Bungaya di Bungaya. Gowa merasa dirugikan, karena itu Sultan Hasanuddin mengadakan perlawanan lagi. Akhirnya pihak Kompeni minta bantuan tentara ke Batavia. Pertempuran kembali pecah di berbagai tempat. Sultan Hasanuddin memberikan perlawanan sengit. Bantuan tentara dari luar menambah kekuatan pasukan VOC,…"
      ],
      "gambar": {
        "src": "/images/budaya/sulawesi-selatan/kesultanan-gowa.jpg",
        "alt": "Ilustrasi Kesultanan Gowa — Sulawesi Selatan",
        "caption": "Catatan sejarah Gowa yang ditulis dalam bahasa dan aksara Makassar",
        "kredit": "Unknown author",
        "lisensi": "Public domain",
        "sumber": "https://commons.wikimedia.org/wiki/File:Makassar_historical_record.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Makassar_historical_record.jpg/1280px-Makassar_historical_record.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "bahasa-bugis": {
      "info": [
        "Bahasa Bugis (Basa Ugi, Aksara Lontara: ᨅᨔ ᨕᨘᨁᨗ, Aksara Serang: بهاس بوڬيس/ بَاسَ أُوْࢴِيْ, pelafalan [basa.uɡi]) adalah bahasa yang termasuk kedalam rumpun bahasa Austronesia yang dituturkan oleh sekitar 4 juta orang, terutama di bagian selatan pulau Sulawesi, Indonesia. Ini adalah bahasa ibu dari orang Bugis. Di Sulawesi wilayah penuturnya terutama di sebagian Kabupaten Maros, sebagian Kabupaten Pangkajene dan Kepulauan, Kabupaten Barru,Kabupaten Majene, Kabupaten Sidenreng Rappang, Kabupaten Soppeng, Kabupaten Wajo, Kabupaten Bone, Kabupaten Sinjai, sebagian Kabupaten Bulukumba, Kabupaten Pinrang dan Kota Parepare.",
        "Dalam bahasa Bugis, bahasa ini disebut sebagai Basa Ugi dan suku Bugis sendiri disebut sebagai To Ugi. Menurut beberapa mitos suku Bugis, istilah Ugi diambil dari nama La Sattumpugi, yakni raja pertama Cina yang sendirinya merupakan kerajaan kuno di tanah Bugis. Kata To Ugi sendiri dapat diartikan sebagai \"pengikut daripada La Sattumpugi\". Hanya sedikit hal yang diketahui tentang sejarah awal bahasa ini karena kurangnya catatan tertulis. Catatan tertulis paling awal dari bahasa ini adalah Sureq Galigo, yakni sebuah wiracarita mengenai penciptaan orang Bugis. Sumber tertulis lain dari bahasa Bugis adalah Lontara, sebuah istilah yang mengacu pada naskah tradisional dan juga catatan sejarah. Catatan sejarah Lontara paling awal berasal dari sekitar abad ke-17. Catatan Lontara telah digambarkan oleh sejarawan Indonesia sebagai \"faktual\"…",
        "Bahasa Bugis termasuk dalam kelompok Sulawesi Selatan yang sendirinya merupakan rumpun turunan dari rumpun bahasa Austronesia. Dalam kelompok bahasa-bahasa Sulawesi Selatan, bahasa ini berkerabat dekat dengan bahasa Campalagian.",
        "Sebagian besar penutur asli (sekitar 3 juta orang) terkonsentrasi di Sulawesi Selatan, Indonesia. Terdapat juga kelompok kecil penutur bahasa Bugis di pulau Jawa (termasuk Pulau Sebira), pesisir timur pulau Kalimantan yakni Samarinda, Balikpapan, Bontang, Tarakan, Kabupaten Tanah Bumbu, Kabupaten Kotabaru, Sumatra bagian timur, Sabah bagian timur dan Semenanjung Malaysia, dan Selatan Filipina. Diaspora suku Bugis ini merupakan hasil migrasi sejak abad ke-17 yang terutama didorong oleh situasi peperangan yang terus menerus."
      ],
      "gambar": {
        "src": "/images/budaya/sulawesi-selatan/bahasa-bugis.jpg",
        "alt": "Ilustrasi Bahasa Bugis — Sulawesi Selatan",
        "caption": "Buku pelajaran bahasa Bugis tentang aksara Lontara dan alih aksaranya.",
        "kredit": "Gunarta",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Aksara_Lontara-3_Buku_mata_palajaran_bahasa_Bugis_2.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Aksara_Lontara-3_Buku_mata_palajaran_bahasa_Bugis_2.jpg/1280px-Aksara_Lontara-3_Buku_mata_palajaran_bahasa_Bugis_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "tana-toraja": {
      "info": [
        "Kabupaten Tana Toraja adalah salah satu kabupaten yang berada di Provinsi Sulawesi Selatan, Indonesia. Ibu kota dari kabupaten ini ada di kecamatan Makale. Tana Toraja memiliki luas wilayah 2.054,30 km² dan pada tahun 2023 memiliki penduduk sebanyak 257.901 jiwa dengan kepadatan 130 jiwa/km². Dan pada pertengahan 2024, penduduk Tana Toraja sebanyak 258.257 jiwa. Suku Toraja yang mendiami daerah pegunungan dan mempertahankan gaya hidup yang khas dan masih menunjukkan gaya hidup Austronesia yang asli dan mirip dengan budaya suku Batak Toba dan Nias yang ada di provinsi Sumatera Utara. Daerah ini merupakan salah satu objek wisata unggulan di provinsi Sulawesi Selatan.",
        "Jauh sebelum nama Toraja di kenal secara ilmiah, nama kuno, wilayah masyarakat Toraja (yang kini kita sebut suku Toraja) disebut \"Tana Matari' Allo\". Berbicara tentang Toraja tentu kita perlu melihat dari perjalanan asal mula orang Toraja. Dalam sejarah, nenek moyang Toraja datang di Rura kemudian terjadi masalah, maka kelompok nenek moyang orang toraja yang dipimpin oleh Tandilino pindah ke dataran yang lebih tinggi, sekarang Mengkendek dan bermukin di Marinding yang lebih dikenal Tongkonan Banua Puan. Pemerintahan Di Toraja telah diawali sejak masa pemerintah Hindia Belanda. Berdasarkan Undang-Undang Darurat Nomor 3 Tahun 1957 yang diperjuangkan oleh W. L. Tambing di DPR RI akhirnya dibentuk Kabupaten Daerah Tingkat II Tana Toraja yang peresmiannya dilakuan pada tanggal 31 Agustus 1957 dengan Bupati Kepala Daerah yang pertama…"
      ],
      "gambar": {
        "src": "/images/budaya/sulawesi-selatan/tana-toraja.jpg",
        "alt": "Ilustrasi Tana Toraja — Sulawesi Selatan",
        "caption": "Makale (Sulawesi, Indonesia)",
        "kredit": "Jorge Franganillo",
        "lisensi": "CC BY 2.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Makale_(50460596912).jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Makale_%2850460596912%29.jpg/1280px-Makale_%2850460596912%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    }
  },
  "sumatera-barat": {
    "rendang": {
      "info": [
        "Rendang (Minangkabau: randang; Jawi: رندڠ) adalah hidangan lauk pauk yang berasal dari Minangkabau, Indonesia dengan bahan dasar daging (ayam, bebek, telur, rusa, sapi, kerbau, dan lainnya) yang melalui proses memasak dengan suhu rendah dalam waktu lama dengan menggunakan aneka rempah-rempah dan santan. Hidangan ini terlahir akibat perilaku sedari lampau suku Minangkabau yang gemar merantau ke sana kemari sehingga butuh banyak perbekalan, terutama hidangan yang awet, tahan lama, dan bercita rasa sesuai lidah asli orang Minang. Awal mula olahan rendang menggunakan daging rusa. Namun, karena rusa mulai sulit didapat, bahan dasarnya beralih menjadi daging sapi atau kerbau. Proses memasak rendang berlangsung lama, biasanya sekitar empat jam, hingga menyisakan potongan daging dengan tekstur yang empuk serta bumbu kehitaman yang…",
        "Rendang adalah masakan yang kaya akan kandungan bumbu rempah. Selain bahan dasar daging, rendang menggunakan santan kelapa (karambia), dan campuran dari berbagai bumbu khas yang dihaluskan di antaranya cabai (lado), serai, lengkuas, kunyit, jahe, bawang putih, bawang merah, dan aneka bumbu lainnya yang biasanya disebut sebagai pemasak. Keunikan rendang adalah penggunaan bumbu-bumbu alami yang bersifat antiseptik dan membunuh bakteri patogen sehingga bersifat sebagai bahan pengawet alami. Bawang putih, bawang merah, jahe, dan lengkuas diketahui memiliki aktivitas antimikroba yang kuat. Tidak mengherankan jika rendang dapat disimpan seminggu hingga empat minggu. Proses memasak rendang asli dapat menghabiskan waktu berjam-jam (biasanya sekitar empat sampai lima jam), karena itulah memasak rendang memerlukan waktu dan kesabaran. Potongan…",
        "Rendang memiliki posisi istimewa dalam budaya masyarakat Minangkabau. Rendang memiliki filosofi tersendiri bagi masyarakat Minang Sumatera Barat, yaitu musyawarah dan mufakat, yang berangkat dari empat bahan pokok yang melambangkan keutuhan masyarakat Minang. Secara simbolik, dagiang (daging sapi) melambangkan \"niniak mamak\" (para pemimpin suku adat), karambia (kelapa) melambangkan \"cadiak pandai\" (kaum Intelektual), lado (cabai) melambangkan \"alim ulama\" yang tegas untuk mengajarkan syariat agama, dan pemasak (bumbu) melambangkan keseluruhan masyarakat Minangkabau. Dalam tradisi Minangkabau, rendang adalah hidangan yang wajib disajikan dalam setiap perayaan adat, seperti berbagai upacara adat Minangkabau, kenduri, atau menyambut tamu kehormatan. Dalam tradisi Melayu, baik di Riau, Jambi, Bengkulu, Palembang, Lampung, Medan, atau…"
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-barat/rendang.jpg",
        "alt": "Ilustrasi Rendang — Sumatera Barat",
        "caption": "Rendang daging sapi asli Padang",
        "kredit": "Midori",
        "lisensi": "CC BY 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Rendang_daging_sapi_asli_Padang.JPG",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Rendang_daging_sapi_asli_Padang.JPG/1280px-Rendang_daging_sapi_asli_Padang.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "pakaian-adat-minangkabau": {
      "info": [
        "Busana tradisional Minangkabau adalah pakaian adat yang berasal dari Sumatra Barat, Indonesia.",
        "Di Sumatra barat, terdapat beberapa variasi busana adat pernikahan yang dipakai oleh pasangan mempelai.Perbedaan ini berdasarkan pembagian beberapa adat nagari di Sumatra barat.",
        "Busana pengantin Bukittinggi dan Kabupaten Agam Busana pengantin Padang dan sekitarnya Busana pengantin kota Padang memiliki kekhasan tersendiri dibandingkan busana daerah lain di Minangkabau.dalam sejarah nya selain oleh budaya Minangkabau, busana pengantin kota Padang juga dipengaruhi oleh kebudayaan busana negara-negara Eropa dan Tiongkok. Hal ini terlihat dari segi corak dan pemilihan warna.",
        "Pakaian Limpapeh Rumah Nan Gadang Lambang kebesaran wanita Minangkabau disebut “Limpapeh Rumah nan gadang”. Limpapeh artinya tiang tengah pada sebuah bangunan dan tempat memusatkan segala kekuatan tiang-tiang lainnya. Apabila tiang tengah ini ambruk maka tiang-tiang lainnya ikut jatuh berantakan. Dengan kata lain perempuan di Minangkabau merupakan tiang kokoh dalam rumah tangga. Pakaian Limpapeh Rumah Nan Gadang tidak sama ditiap-tiap nagari, seperti dikatakan “Lain lubuk lain ikannyo, lain padang lain bilalangnyo”. Namun pakaian Limpapeh Rumah Nan Gadang mempunyai sifat umum yang akan kita kemukakan dalam tulisan ini."
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-barat/pakaian-adat-minangkabau.jpg",
        "alt": "Ilustrasi Pakaian Adat Minangkabau — Sumatera Barat",
        "caption": "Busana pengantin Padang",
        "kredit": "Mamasamala",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Minangkabau_wedding_2.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Minangkabau_wedding_2.jpg/1280px-Minangkabau_wedding_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "songket-minangkabau": {
      "info": [
        "Songket atau sungkit adalah jenis tenun tradisional Indonesia yang berasal dari Sumatra. Songket digolongkan dalam keluarga tenunan brokat. Songket ditenun dengan tangan menggunakan benang emas dan perak. Benang logam metalik yang tertenun berlatar kain menimbulkan efek kemilau cemerlang. Bahan kain yang umum digunakan dalam pembuatan Songket yakni meliputi sutra, katun, dan katun sutra. Songket kerap dikaitkan dengan Kemaharajaan Sriwijaya sebagai asal mula tradisi songket berasal, beberapa jenis Songket yang populer pun tak lepas dari lokasi-lokasi yang pernah berada dibawah kekuasaan Sriwijaya, salah satu lokasi dominan yang juga diyakini sebagai ibukota Kemaharajaan Sriwijaya di masa lampau yakni Palembang, yang terletak di Sumatera Selatan. Selain Palembang, beberapa daerah di Sumatra juga menjadi lokasi penghasil Songket…",
        "Secara etimologi, istilah \"songket\" berasal dari lakuran kata dalam bahasa Melayu Palembang yakni \"songsong\" + \"teket\" yang artinya \"songsong\" dan \"sulam\" secara berturutan, hal ini berkaitan atau merujuk pada metode pembuatan tenunan Songket itu sendiri; yakni dengan mengaitkan dan mengambil sejumput kain tenun, dan kemudian menyelipkan benang emas. Istilah \"songke\" kemudian diserap sebagai \"sungkit\" dalam bahasa Melayu Riau dan bahasa Indonesia, yang berarti \"mengaitkan\", \"menyungit\" atau \"mencungkil\". Namun, bukti tertulis paling awal yang dapat dipastikan mengenai pakaian ini dalam naskah berbahasa Melayu selalu menyebutnya sebagai sungkit bukan songket, misalnya dalam Hikayat Aceh tahun 1620-an dan Hikayat Banjar tahun 1660-an. Selain itu, dalam teori lain, kata songket juga mungkin berasal dari istilah songka, yang…",
        "Proses penenunan songket secara sejarah dikaitkan dengan kawasan permukiman dan budaya Palembang maupun Minangkabau yang berasal dari pulau Sumatra. Menurut Hikayat Palembang, asal mula kain songket bermula dari kemaharajaan Sriwijaya. Bahan utama pembuatan songket seperti sutra biasanya diproduksi oleh petani ulat sutra lokal, tetapi untuk menghasilkan kualitas songket yang lebih bagus masyarakat lokal juga mengekspor bahan sutra dari Tiongkok, sedangkan untuk benang emas biasanya diproduksi oleh para masyarakat lokal dengan mengolah emas yang dihasilkan dari beberapa daerah di pulau Sumatra (pada masa lampau, Sumatra dikenali juga sebagai Swarnadwipa, berasal dari gabungan kata dalam Sanskerta: स्वर्ण (svarna; emas) dan द्वीप (dvipa; pulau), yang artinya \"pulau emas\"). Kain songket ditenun pada alat tenun bingkai, pola-pola rumit…"
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-barat/songket-minangkabau.jpg",
        "alt": "Ilustrasi Songket Minangkabau — Sumatera Barat",
        "caption": "Perempuan Minang yang tengah menenun songket sekitar tahun 1900",
        "kredit": "Unknown author",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:COLLECTIE_TROPENMUSEUM_Vrouw_aan_weefstoel_Padangse_Bovenlanden_TMnr_10014503.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/1/13/COLLECTIE_TROPENMUSEUM_Vrouw_aan_weefstoel_Padangse_Bovenlanden_TMnr_10014503.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "tari-piring": {
      "info": [
        "Tari Piring (Jawi: تاري ڤيريڠ; Minangkabau: Tari Piriang) adalah tarian tradisional Minangkabau yang berasal dari Sumatera Barat, Solok. Tarian ini menampilkan atraksi menggunakan piring. Para penari mengayunkan piring di tangan mengikuti gerakan-gerakan cepat yang teratur, tanpa satu pun piring terlepas dari tangan. Gerakannya diambil dari langkah dalam silat Minangkabau atau silek. Tari ini dipopulerkan oleh Huriah Adam. Saat ini, tari piring dipertunjukkan untuk penyambutan tamu terhormat atau pembukaan upacara adat. Bersama dengan tari saman, pendet, dan jaipong, tari ini menjadi tarian populer Indonesia yang kerap ditampilkan di ajang promosi pariwisata dan kebudayaan Indonesia.",
        "Secara tradisional, tari ini berasal dari Solok, Sumatera Barat. Menurut legenda awal kemunculannya, Tari Piring ini berfungsi sebagai tarian dalam upacara kesuburan. Tarian ini juga menjadi salah satu bentuk seni tradisional yang banyak sekali menyimpan nilai-nilai estetis yang cukup tinggi dan mengandung nilai-nilai kebudayaan leluhur yang sangat mendalam. Tari ini juga merupakan ritual ucapan rasa syukur masyarakat setempat kepada dewa-dewa setelah mendapatkan hasil panen yang melimpah ruah. Ritual dilakukan dengan membawa sesaji dalam bentuk makanan yang diletakkan di dalam piring sembari melangkah dengan gerakan yang dinamis. Setelah masuknya agama Islam ke Minangkabau, tari piring tidak lagi digunakan sebagai ritual ucapan rasa syukur kepada dewa-dewa. Akan tetapi, tari tersebut digunakan sebagai sarana hiburan bagi masyarakat…",
        "Gerakan tari piring pada umumnya adalah meletakkan dua piring di atas dua telapak tangan. Penari mengayunkan piring dalam gerakan-gerakan yang cepat, diselingi dengan mendentingkan piring atau dua cincin di jari penari terhadap piring yang dibawanya. Pada akhir tarian, biasanya piring-piring yang dibawakan oleh para penari dilemparkan ke lantai dan para penari akan menari di atas pecahan-pecahan piring. Jumlah penari tari piring biasanya berjumlah ganjil yang terdiri dari tiga sampai tujuh orang. Para penari mengenakan pakian berwarna cerah dengan nuansa warna merah dan kuning keemasan serta tutup kepala. Tarian ini diiringi oleh kombinasi alat musik talempong dan saluang. Tempo alunan musik awalnya lembut dan teratur, kemudian lama-kelamaan berubah menjadi lebih cepat. Gerakan dalam tari piring ini merupakan salah satu unsur…",
        "Jenis alat musik yang digunakan adalah: Talempong pacik. Talempong adalah alat musik pukul khas Minangkabau yang terbuat dari campuran tembaga dan kuningan yang akan berbunyi jika dipukul dengan sepasang kayu. Disebut dengan talempong pacik karena dalam memainkan alat musik ini dengan dipegang. Ada tiga jenis talempong pacik :"
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-barat/tari-piring.jpg",
        "alt": "Ilustrasi Tari Piring — Sumatera Barat",
        "kredit": "Syofiardi Bachyul Jb",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Tari_Piring_dan_Pecahan_Kaca.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Tari_Piring_dan_Pecahan_Kaca.jpg/1280px-Tari_Piring_dan_Pecahan_Kaca.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "bahasa-minangkabau": {
      "info": [
        "Bahasa Minangkabau (Endonim: Baso Minangkabau, Abjad Jawi: باسو مينڠكابو, pengucapan dalam IPA: [ˈbaso mi.naŋˈka.bau]) atau Bahasa Minang adalah suatu bahasa Austronesia yang dituturkan oleh Suku Minangkabau. Melalui diaspora masyarakat bersuku Minangkabau, bahasa ini juga dituturkan di beberapa wilayah lain di Sumatera Utara,Bengkulu, sebagian Aceh, sebagian Riau, serta di wilayah luar negeri meliputi Negeri Sembilan.",
        "Dialek Bahasa Minang memiliki banyak dialek, bahkan antarkampung yang dipisahkan oleh sungai sekali pun dapat mempunyai dialek yang berbeda. Menurut Nadra, di wilayah Sumatera Barat bahasa Minang dapat dibagi dalam 8 dialek, yaitu:",
        "Dialek Rao Mapat Dialek Muara Lolo Dialek Lubuak Alai Dialek Payakumbuh Dialek Agam Dialek Pancung Soal Dialek Koto Baru Dialek Pekal Dialek Lintau Selain itu, masing-masing dialek Payakumbuh, Agam, dan Pancung Soal masih dapat dibagi lagi ke dalam sub-dialek.. Dialek bahasa Minangkabau yang dituturkan di Singkil, Simeulue, Aceh Selatan, Aceh Barat Daya, Nagan Raya dan Aceh Barat juga disebut dengan bahasa Aneuk Jamee. Sedangkan di Tapanuli Tengah, Sibolga, pantai Tapanuli Selatan dan Pantai Mandailing Natal disebut bahasa Pesisir. Bahasa Minangkabau yang ada di Provinsi Riau terdiri dari 4 dialek, di antaranya:",
        "Dialek Rokan, dipakai di Kabupaten Rokan Hilir dan Rokan Hulu Dialek Kampar juga disebut sebagai bahaso Ocu, dipakai di Kabupaten Rokan Hilir, Rokan Hulu, Kampar, Kota Pekanbaru, Pelalawan, Kuantan Singingi (Kuansing), dan Indragiri Hulu Dialek Basilam, dipakai di Kabupaten Rokan Hilir Dialek Indragiri, dipakai di Kabupaten Indragiri Hulu dan Indragiri Hilir Dialek-dialek bahasa Minangkabau yang berada di Provinsi Riau dalam perkembangannya mendapat pengaruh dari bahasa Melayu di sekitarnya. Oleh sebagian masyarakat pengguna dialek tersebut mengganggapnya sebagai bahasa tersendiri. Bahasa Minangkabau Umum ini juga disebut sebagai dialek Padang yang biasa disebut Bahaso Padang atau Bahaso Urang Awak."
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-barat/bahasa-minangkabau.jpg",
        "alt": "Ilustrasi Bahasa Minangkabau — Sumatera Barat",
        "kredit": "Ubs6u!d-pongsakorn",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Minangkabau_language.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Minangkabau_language.jpg/1280px-Minangkabau_language.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "malin-kundang": {
      "info": [
        "Malin Kundang adalah kaba atau cerita rakyat yang berasal dari provinsi Sumatera Barat, Indonesia. Legenda Malin Kundang berkisah tentang seorang anak yang durhaka pada ibunya dan karena itu dia dikutuk menjadi batu. Cerita rakyat yang mirip juga dapat ditemukan di negara-negara lain di Asia Tenggara. Di Malaysia cerita serupa berkisah tentang Si Teng gang yang berasas dari kisah lebih awal lagi pada tahun 1900 dalam buku Malay Magic yang ditulis oleh Walter William Skeat sebagai satu cerita rakyat berjudul Saleh Megat Sajobang. Cerita Si Tenggang pernah diterbitkan oleh Balai Pustaka, Jakarta pada tahun 1975 sebagai judul Nakoda Tenggang: Sebuah Legenda dari Indonesia.",
        "Diceritakan bahwa Malin Kundang merupakan anak semata wayang yang tinggal bersama ibunya. Saat remaja, ia memutuskan untuk merantau dengan menumpang kapal seorang saudagar. Di tengah perjalanan, kapal yang dinaiki Malin Kundang diserang oleh bajak laut. Semua barang dagangan dirampas, sementara para awak kapal dan penumpang dibantai. Malin Kundang bersembunyi sehingga nyawanya selamat. Setelah terkatung-katung di laut, akhirnya kapal yang ditumpanginya terdampar di sebuah pantai. Malin Kundang berjalan menuju ke desa yang terdekat dan memulai kehidupan yang baru di sana. Berkat kegigihannya dalam bekerja, ia berhasil menjadi saudagar yang memiliki banyak kapal dagang beserta anak buah. Setelah menjadi kaya, Malin Kundang pun menikah. Bertahun-tahun kemudian, Malin Kundang dan istrinya melakukan pelayaran dan berlabuh di tanah…",
        "Legenda Malin Kundang telah memberi inspirasi bagi sebuah karya seni di pantai Air Manis, Padang. Karya itu berbentuk pecahan kapal dan seseorang yang disebutkan sebagai Malin Kundang, dalam posisi tertelungkup di pesisir Pantai Air Manis, Kota Padang, Sumatera Barat. Bongkahan batu menggambarkan akhir hidup tokoh Malin Kundang, saudagar yang saat kedatangannya ke kampung halaman mendapat kutukan karena menolak mengakui ibunya. Keberadaan Batu Malin Kundang telah memopulerkan Pantai Air Manis, tempat latar legenda sebagai salah satu daya tarik wisata di Padang. Relief pada Batu Malin Kundang sendiri dikerjakan pada tahun 1980-an, hasil karya Ibenzani Usman.",
        "Karena kepopulerannya kisah Malin Kundang berkali-kali diolah dalam berbagai bentuk, baik cerpen, drama, dan sinetron. Karya-karya adaptasi ini sangat beragam."
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-barat/malin-kundang.jpg",
        "alt": "Ilustrasi Malin Kundang — Sumatera Barat",
        "kredit": "Government of Indonesia",
        "lisensi": "Public domain",
        "sumber": "https://commons.wikimedia.org/wiki/File:Malin_Kundang,_300rp_(1998).jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Malin_Kundang%2C_300rp_%281998%29.jpg/1280px-Malin_Kundang%2C_300rp_%281998%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "lembah-harau": {
      "info": [
        "Lembah Harau adalah sebuah ngarai dekat Kota Payakumbuh di Kabupaten Lima Puluh Kota, provinsi Sumatera Barat. Lembah Harau diapit dua bukit cadas terjal dengan ketinggian mencapai 150 meter berupa batu pasir yang terjal berwarna-warni, dengan ketinggian 100 sampai 500 meter. Topografi Cagar Alam Harau adalah berbukit-bukit dan bergelombang. Tinggi dari permukaan laut adalah 500 sampai 850 meter, bukit tersebut antara lain adalah Bukit Air Putih, Bukit Jambu, Bukit Singkarak, dan Bukit Tarantang. Berjalan menuju Lembah Harau amat menyenangkan. Dengan udara yang masih segar, anda bisa melihat keindahan alam sekitarnya. Tebing-tebing granit yang menjulang tinggi dengan bentuknya yang unik mengelilingi lembah. Tebing-tebing granit yang terjal ini mempunyai ketinggian 80 meter hingga 300 meter.",
        "Sebuah monumen peninggalan Belanda yang terletak di kaki air terjun Sarasah Bunta merupakan bukti bahwa Lembah Harau sudah sering dikunjungi orang sejak 1926. Menyaksikan hamparan sawah yang indah, itu hal yang sudah biasa. Namun, jika hamparan sawah itu diapit oleh tebing tebing tegak lurus menjulang setinggi sekitar 150 meter hingga 200 meter, orang pasti akan berdecak kagum. Pemandangan itu bisa dilihat di Lembah Harau, Keindahan masih bertebaran di dataran tingginya. Di sana ada cagar alam dan suaka margasatwa. Lembah Harau seluas 270,5 hektare/2.705 km² . Tempat ini ditetapkan sebagai cagar alam sejak 10 Januari 1993. Di cagar alam dan suaka margasatwa Lembah Harau terdapat berbagai spesies tanaman hutan hujan tropis dataran tinggi yang dilindungi, plus sejumlah binatang langka asli Sumatra. Monyet ekor panjang (Macaca…",
        "Di sini juga terdapat fasiltas penginapan berupa homestay yang bisa dimanfaatkan wisatawan yang ingin menginap lengkap dengan fasilitasnya. Resort Sarasah Bunta terletak disebelah timur Aka Barayun, memeliki 4( empat) air terjun (sarasah Aie Luluih, Sarasah Bunta, Sarasah Murai dan sarasah Aie Angek ) dengan telaga dan pemandangan yang indah seperti ; Sarasah Aie Luluih, di mana pada sarasah ini air yang mengalir melewati dinding batu dan dibawahnya mempunyai kolam tempat mandi alami yang asri. Sarasah Bunta di mana sarasah ini mempunyai air terjunnya yang berunta-unta indah seperti bidadari yang sedang mandi apabila terpancar sinar matahari siang sehingga dinamakan “Sarasah Bunta”. Sarasah Murai, pada sarasah ini sering pada siangnya burung murai mandi sambil memadu kasih sehingga masyarakat menamakan “Sarasah Murai “. Pada Sarasah…"
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-barat/lembah-harau.jpg",
        "alt": "Ilustrasi Lembah Harau — Sumatera Barat",
        "caption": "Lembah Harau, Lima Puluh Kota, Sumatera Barat.",
        "kredit": "Official Website of BPMPPT of Lima Puluh Kota Indonesia'City",
        "lisensi": "Public domain",
        "sumber": "https://commons.wikimedia.org/wiki/File:Lembah_harau_50_kota.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Lembah_harau_50_kota.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    }
  },
  "sumatera-selatan": {
    "pempek": {
      "info": [
        "Pempek adalah makanan khas Palembang, Sumatera Selatan. Pempek terbuat dari daging tenggiri atau gabus yang digiling lembut, dicampur tepung kanji atau tepung sagu, serta dengan bahan-bahan lain seperti telur, bawang putih halus, penyedap rasa, dan garam. Pempek biasanya disajikan dengan kuah yang disebut cuko yang terasa asam, manis, dan pedas. Selain di Palembang, pempek juga dapat ditemukan di berbagai daerah di luar Palembang, baik yang dibuat oleh pendatang asal Palembang maupun masyarakat lokal. Pempek juga dikenal luas sebagai salah satu ikon kuliner Indonesia yang telah diperkenalkan dalam berbagai festival makanan, acara diplomasi budaya, serta menjadi hidangan yang mewakili Indonesia di kancah internasional. Pada tahun 1880-an, para penjual pempek biasa memikul satu keranjang penuh sambil berjalan kaki berkeliling untuk…",
        "Pempek mempunyai sejarah yang unik dan tidak dapat dilepaskan dari masuknya para perantau Tionghoa ke Palembang semasa pemerintahan Kesultanan Palembang Darussalam ketika dipimpin oleh Sultan Mahmud Badaruddin II pada abad ke-16 Masehi. Berdasarkan cerita masyarakat, pempek dijual keliling kota oleh seseorang asal Tionghoa yang sering dipanggil Apek di kisaran tahun 1617 M. Apek sendiri dalam Bahasa Tionghoa memiliki arti paman atau laki-laki tua, Apek pada saat itu berusia sekitar 65 tahun. Apek yang tinggal di pinggiran Sungai Musi dan memiliki ide untuk memanfaatkan potensi ikan yang melimpah, dengan mengolahnya menjadi makanan selain digulai dan digoreng. Akhirnya, Apek mengolah ikan hasil tangkapannya dan mencampurnya dengan tepung. Mirip dengan makanan bakso yang dibawa pedagang Tiongkok ke Palembang. Setelah itu, Apek…",
        "Pada awalnya pempek dibuat dari daging ikan belida. Namun, dengan semakin langka dan mahal harga ikan belida (hingga ditetapkan sebagai spesies yang dilindungi pada tahun 2021 ikan tersebut diganti dengan ikan gabus yang harganya lebih murah, tetapi dengan rasa yang tetap gurih. Pada perkembangan selanjutnya, beberapa jenis ikan sungai lainnya juga dapat digunakan, misalnya ikan putak, toman, dan kehung. Dipakai juga jenis ikan laut seperti tenggiri, kakap merah, parang-parang, ekor kuning, dan ikan sebelah. Ada juga yang menggunakan ikan sarden, ikan lele, serta ikan tuna putih. Penyajian pempek ditemani oleh kuah saus berwarna hitam kecokelat-cokelatan, yang disebut cuka atau cuko (bahasa Palembang). Cuko dibuat dari air yang dididihkan, kemudian ditambah gula merah, ebi (udang kering), cabai rawit tumbuk, bawang putih, dan garam.…"
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-selatan/pempek.jpg",
        "alt": "Ilustrasi Pempek — Sumatera Selatan",
        "kredit": "Gunawan Kartapranata",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Pempek_Kuah_Cuko.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Pempek_Kuah_Cuko.jpg/1280px-Pempek_Kuah_Cuko.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "songket-palembang": {
      "info": [
        "Songket atau sungkit adalah jenis tenun tradisional Indonesia yang berasal dari Sumatra. Songket digolongkan dalam keluarga tenunan brokat. Songket ditenun dengan tangan menggunakan benang emas dan perak. Benang logam metalik yang tertenun berlatar kain menimbulkan efek kemilau cemerlang. Bahan kain yang umum digunakan dalam pembuatan Songket yakni meliputi sutra, katun, dan katun sutra. Songket kerap dikaitkan dengan Kemaharajaan Sriwijaya sebagai asal mula tradisi songket berasal, beberapa jenis Songket yang populer pun tak lepas dari lokasi-lokasi yang pernah berada dibawah kekuasaan Sriwijaya, salah satu lokasi dominan yang juga diyakini sebagai ibukota Kemaharajaan Sriwijaya di masa lampau yakni Palembang, yang terletak di Sumatera Selatan. Selain Palembang, beberapa daerah di Sumatra juga menjadi lokasi penghasil Songket…",
        "Secara etimologi, istilah \"songket\" berasal dari lakuran kata dalam bahasa Melayu Palembang yakni \"songsong\" + \"teket\" yang artinya \"songsong\" dan \"sulam\" secara berturutan, hal ini berkaitan atau merujuk pada metode pembuatan tenunan Songket itu sendiri; yakni dengan mengaitkan dan mengambil sejumput kain tenun, dan kemudian menyelipkan benang emas. Istilah \"songke\" kemudian diserap sebagai \"sungkit\" dalam bahasa Melayu Riau dan bahasa Indonesia, yang berarti \"mengaitkan\", \"menyungit\" atau \"mencungkil\". Namun, bukti tertulis paling awal yang dapat dipastikan mengenai pakaian ini dalam naskah berbahasa Melayu selalu menyebutnya sebagai sungkit bukan songket, misalnya dalam Hikayat Aceh tahun 1620-an dan Hikayat Banjar tahun 1660-an. Selain itu, dalam teori lain, kata songket juga mungkin berasal dari istilah songka, yang…",
        "Proses penenunan songket secara sejarah dikaitkan dengan kawasan permukiman dan budaya Palembang maupun Minangkabau yang berasal dari pulau Sumatra. Menurut Hikayat Palembang, asal mula kain songket bermula dari kemaharajaan Sriwijaya. Bahan utama pembuatan songket seperti sutra biasanya diproduksi oleh petani ulat sutra lokal, tetapi untuk menghasilkan kualitas songket yang lebih bagus masyarakat lokal juga mengekspor bahan sutra dari Tiongkok, sedangkan untuk benang emas biasanya diproduksi oleh para masyarakat lokal dengan mengolah emas yang dihasilkan dari beberapa daerah di pulau Sumatra (pada masa lampau, Sumatra dikenali juga sebagai Swarnadwipa, berasal dari gabungan kata dalam Sanskerta: स्वर्ण (svarna; emas) dan द्वीप (dvipa; pulau), yang artinya \"pulau emas\"). Kain songket ditenun pada alat tenun bingkai, pola-pola rumit…"
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-selatan/songket-palembang.jpg",
        "alt": "Ilustrasi Songket Palembang — Sumatera Selatan",
        "caption": "Pengantin yang menggunakan baju Songket khas Palembang",
        "kredit": "Biggo id",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Songket_pengantin_khas_Palembang.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Songket_pengantin_khas_Palembang.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "tari-gending-sriwijaya": {
      "info": [
        "Gending Sriwijaya merupakan lagu dan tarian tradisional masyarakat Kota Palembang, Sumatera Selatan. Melodi lagu Gending Sriwijaya diperdengarkan untuk mengiringi Tari Gending Sriwijaya. Baik lagu maupun tarian ini menggambarkan keluhuran budaya, kejayaan, dan keagungan kemaharajaan Sriwijaya yang pernah berjaya mempersatukan wilayah Barat Nusantara. Lirik lagu ini juga menggambarkan kerinduan seseorang akan zaman di mana pada saat itu Sriwijaya pernah menjadi pusat studi agama Buddha di dunia. Lagu Gending Sriwijaya diciptakan tahun 1943 tepatnya dari bulan oktober sampai dengan Desember oleh A. Dahlan Muhibat, seorang komposer juga violis pada grup Bangsawan Bintang Berlian di Palembang dan untuk syair lagu Gending Sriwijaya diciptakan oleh Nungcik AR.",
        "Tari Gending Srwijaya mulai diciptakan sejak tahun 1943 dan selesai pada tahun 1944. Tari ini diciptakan untuk memenuhi permintaan dari pemerintah (era pendudukan Jepang) kepada Jawatan Penerangan (Hodohan) untuk menciptakan sebuah tarian dan lagu guna menyambut tamu yang datang berkunjung Keresidenan Palembang (sekarang Provinsi Sumatera Selatan). Pencipta gerak tari (penata tarinya) yaitu Tina Haji Gong dan Sukainan A. Rozak, berbagai konsep dicari dan dikumpulkan dengan mengambil unsur-unsur tari adat Palembang yang sudah ada. Sementara musik atau lagu Gending Sriwijaya diciptakan tahun 1943 tepatnya dari bulan oktober sampai dengan Desember oleh A. Dahlan Muhibat, seorang komposer juga violis pada grup Bangsawan Bintang Berlian di Palembang. Lagu Gending Sriwijaya ini merupakan perpaduan lagu Sriwijaya Jaya, yang…"
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-selatan/tari-gending-sriwijaya.jpg",
        "alt": "Ilustrasi Tari Gending Sriwijaya — Sumatera Selatan",
        "caption": "Tari Gending Sriwijaya dalam prangko edisi 1993",
        "kredit": "Post of Indonesia",
        "lisensi": "Public domain",
        "sumber": "https://commons.wikimedia.org/wiki/File:Stamp_of_Indonesia_-_1993_-_Colnect_252647_-_Tari_Gending_Sriwijaya.jpeg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/6/62/Stamp_of_Indonesia_-_1993_-_Colnect_252647_-_Tari_Gending_Sriwijaya.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "kerajaan-sriwijaya": {
      "info": [
        "Sriwijaya adalah kedatuan bahari historis yang berasal dari Pulau Sumatra bagian selatan sekitar abad ke-7 sampai abad ke-11. Kehadirannya banyak memberi pengaruh pada perkembangan sejarah Asia Tenggara (terutama dalam kawasan Nusantara barat). Lokasi ibukota Sriwijaya dapat dengan akurat disimpulkan berada di Kota Palembang, tepatnya di muara Sungai Musi. Kedatuan Sriwijaya terdiri dari sejumlah pelabuhan yang saling berhubungan di sekitar Selat Malaka. Bukti awal mengenai keberadaan kerajaan ini berasal dari abad ke-7; seorang pendeta Tiongkok dari Dinasti Tang, I Tsing, menulis bahwa ia mengunjungi Sriwijaya tahun 671 dan tinggal selama 6 bulan. Selanjutnya prasasti yang paling tua mengenai Sriwijaya juga berada pada abad ke-7, yaitu prasasti Kedukan Bukit di Palembang, bertarikh 682, prasasti ini merupakan catatan bahasa Melayu…",
        "Sriwijaya adalah nama yang berasal dari bahasa Sanskerta: श्रीविजय, Śrīwijaya. Śrī berarti \"beruntung\", \"makmur\", atau \"bahagia\", serta memiliki kaitan dengan hal-hal ilahi, setidaknya dalam agama Hindu. Wijaya berarti \"penuh kemenangan\" atau \"unggul\". Dengan demikian, gabungan kata Sriwijaya berarti \"kemenangan yang gemilang\",",
        "Tujuan utama hubungan ekonomi luar negeri Sriwijaya adalah untuk mendapatkan perjanjian perdagangan yang menguntungkan untuk melayani pasar Tiongkok yang besar, yang terbentang dari Dinasti Tang hingga Dinasti Song. Untuk berpartisipasi dalam perjanjian perdagangan ini, Sriwijaya terlibat dalam hubungan upeti dengan Tiongkok, di mana mereka mengirimkan beberapa utusan dan kedutaan untuk mengamankan dukungan istana Tiongkok. Dalam dunia perdagangan, Sriwijaya berkembang pesat menjadi sebuah kerajaan yang luas menguasai dua jalur antara India dan Cina, yaitu Selat Sunda dari Palembang dan Selat Malaka dari Kedah. Selain menjalin hubungan dagang dengan India dan Tiongkok, Sriwijaya juga menjalin perdagangan dengan tanah Arab. Kemungkinan utusan Maharaja Sri Indrawarman yang mengantarkan surat kepada khalifah Umar bin…"
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-selatan/kerajaan-sriwijaya.jpg",
        "alt": "Ilustrasi Kerajaan Sriwijaya — Sumatera Selatan",
        "kredit": "Original: Unknown, photograph: Rachmat04",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:MUS_Koin_perak_Kerajaan_Sriwijaya;_3.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://upload.wikimedia.org/wikipedia/commons/3/32/MUS_Koin_perak_Kerajaan_Sriwijaya%3B_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
      }
    },
    "legenda-pulau-kemaro": {
      "info": [
        "Pulau Kemaro, merupakan sebuah delta kecil di Sungai Musi, terletak sekitar 6 km dari Jembatan Ampera. Pulau Kemaro terletak di daerah industri, yaitu di antara Pabrik Pupuk Sriwijaya dan Pertamina Plaju dan Sungai Gerong. Posisi Pula-u Kemaro adalah agak ke timur dari pusat Kota Palembang. Pulau kemaro memiliki luas ±79 Ha dengan ketinggian 5 m dpl, Selain memiliki pesona alam yang indah, pulau Kemaro identik dengan kota Tiongkok dan masyarakat Tionghoa serta adat istiadat dan kehidupan asli masyarakat Palembang. Daya tarik wisata sejarah yang ada di pulau Kemaro berupa adanya peninggalan-peninggalan sejarah (Pagoda berlantai 9, Makam putri Sriwijaya, Klenteng Hok Tjing Rio, Kuil Buddha, pertunjukkan kesenian, dan ritual keagamaan khususnya umat Tridharma). Sejarah Pulau Kemaro sudah ada sejak Kerajaan Sriwijaya yang erat kaitannya…",
        "Pulau Kemaro di Palembang terkenal dengan kisah percintaan yang sangat dalam yang melahirkan julukan \"Pulau Cinta\", di masa lalu pulau di tengah Sungai Musi ini juga sempat dijuluki \"Pulau Maut\". Adapun Julukan \"Pulau Cinta\" berasal dari legenda rakyat setempat mengenai kisah cinta antar saudagar Tiongkok, Tan Bun An, dengan putri Raja Sriwijaya, Siti Fatimah yang konon terjadi pada masa kejayaan Kerajaan Sriwijaya di Kota Palembang.",
        "Di Pulau Kemaro juga terdapat makam dari putri Palembang, Siti Fatimah. Menurut legenda setempat yang tertulis di sebuah batu di samping Klenteng Hok Tjing Bio, pada zaman dahulu, datang seorang pangeran dari Negeri Tiongkok, bernama Tan Bun An, ia datang ke Palembang untuk berdagang. Ketika ia meminta izin ke Raja Palembang, ia bertemu dengan putri raja yang bernama Siti Fatimah. Ia langsung jatuh hati, begitu juga dengan Siti Fatimah. Merekapun menjalin kasih dan berniat untuk ke pelaminan. Tan Bun An mengajak sang Siti Fatimah ke daratan Tiongkok untuk melihat orang tua Tan Bun Han. Setelah beberapa waktu, mereka kembali ke Palembang. Bersama mereka disertakan pula tujuh guci yang berisi emas. Sesampai di muara Sungai Musi Tan Bun han ingin melihat hadiah emas di dalam Guci-guci tersebut. Namun, alangkah kagetnya karena yang…"
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-selatan/legenda-pulau-kemaro.jpg",
        "alt": "Ilustrasi Legenda Pulau Kemaro — Sumatera Selatan",
        "caption": "Pagoda Pulau Kemaro",
        "kredit": "Wikipedia",
        "lisensi": "CC-BY-SA-3.0",
        "sumber": "https://id.wikipedia.org/wiki/Berkas:PulauKemaro.jpg",
        "host": "id.wikipedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/id/thumb/8/89/PulauKemaro.jpg/1280px-PulauKemaro.jpg?utm_source=id.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "sungai-musi": {
      "info": [
        "Sungai Musi, dikenal pula sebagai Sungi Musi (Jawi: سوڠي موسي) dalam bahasa Melayu Palembang atau Bioa Musêi (Bioa Musai) dalam bahasa Rejang, adalah sebuah sungai lintas provinsi, yang mengaliri wilayah provinsi Bengkulu dan Sumatera Selatan, Indonesia. Dengan panjang 720 km, tidak jauh dari muaranya di Selat Bangka, sungai ini membelah Kota Palembang menjadi dua bagian, Ilir dan Ulu. Kedua bagian tersebut dihubungkan oleh Jembatan Ampera yang merupakan ikon Palembang dan tiga jembatan lainnya. Sejak zaman Kerajaan Sriwijaya hingga sekarang, sungai ini terkenal sebagai sarana transportasi utama bagi masyarakat. Sungai Musi ini merupakan pernah tempat terjadi jatuhnya Pesawat SilkAir Penerbangan 185 Pada Tanggal 19 Desember 1997.",
        "Hulu sungai Hulu Sungai Musi berada di Bukit Kelam, sekitar 15 kilometer dari Curup, ibu kota Kabupaten Rejang Lebong, Provinsi Bengkulu. Air sungai Musi di titik paling awalnya memancar dari dasar tebing di Bukit Kelam, dengan lebar 5 meter dan kedalaman semata kaki, dengan dasar berupa batu-batu kerikil. Air dari tebing tersebut turun ke arah tenggara dan semakin membesar setelah menyatu dengan air dari sumber-sumber lain, termasuk puluhan anak sungai, dan mengalir hingga 720 km panjangnya sebelum bermuara ke Selat Bangka. Bagian hulu sungai ini dalam kebudayaan Rejang dikenal sebagai Luak Ulu Musi.",
        "Sungai Musi membelah Kota Palembang menjadi dua bagian kawasan, yaitu Seberang Ilir di bagian utara dan Seberang Ulu di bagian selatan. Sungai Musi, bersama dengan sungai lainnya, membentuk sebuah delta di dekat Kota Sungsang. Sungai Musi disebut juga \"Batanghari Sembilan\" yang berarti sembilan sungai besar, pengertian sembilan sungai besar adalah Sungai Musi beserta delapan sungai besar yang bermuara di sungai Musi. Adapun delapan sungai tersebut adalah:",
        "Sungai Komering Sungai Rawas Sungai Batanghari Leko Sungai Lakitan Sungai Kelingi Sungai Lematang Sungai Rupit Sungai Ogan Lahan seluas 3 juta ha di daerah aliran sungai (DAS) Musi dianggap kritis akibat maraknya penebangan liar. Kondisi ini dapat memicu banjir bandang dan tanah longsor.DAS Musi secara geografis terletak pada 103° 34’ 12 “ – 105° 0’ 36” BT dan 02° 58’ 12” - 04° 59’ 24” LS dengan luas 7.760.222, 86 Ha. Secara administrasi DAS Musi termasuk pada 4 (empat) provinsi yaitu Sumatera Selatan, Bengkulu, Jambi dan Lampung. Kabupaten/Kota di Provinsi Sumatera Selatan yang masuk ke dalam DAS Musi meliputi 17 (tujuh belas) Kabupaten/Kota atau seluruh Kabupaten/Kota yang berada di Provinsi Sumatera Selatan."
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-selatan/sungai-musi.jpg",
        "alt": "Ilustrasi Sungai Musi — Sumatera Selatan",
        "kredit": "Gunawan Kartapranata",
        "lisensi": "CC BY-SA 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Ampera_Bridge_at_Noon,_Palembang.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Ampera_Bridge_at_Noon%2C_Palembang.jpg/1280px-Ampera_Bridge_at_Noon%2C_Palembang.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "bahasa-palembang": {
      "info": [
        "Bahasa Palembang atau Melayu Palembang (baso Pelémbang) (Jawi: بهاس ملايو ڤاليمبڠ ) adalah bahasa Austronesia cabang Melayik yang dituturkan di kawasan Palembang Raya. Bahasa ini juga adalah bahasa perantara masyarakat di Sumatera Selatan yang sering digunakan bersama dengan Indonesia dan dialek setempat lainnya. Bahasa ini memiliki banyak serapan non-Melayik terutama dari bahasa Jawa, sebagai dampak dari interaksi budaya intens yang telah berlangsung berabad-abad antara Palembang dengan kawasan lainnya di Nusantara.",
        "Sebagian besar bahasa-bahasa Melayik di Sumatera bagian Selatan dapat digolongkan ke dalam dua kelompok utama, yaitu 1) kelompok Melayu Tengah atau Melayu Barisan Selatan dan 2) kelompok Musi. Bahasa Palembang dapat digolongkan sebagai salah satu bahasa dalam kelompok Musi, tepatnya sebagai bagian dari kumpulan dialek Palembang–Melayik Dataran Rendah yang juga mencakup ragam-ragam Belide, Lematang Ilir, dan Penesak.",
        "Sebagaimana bahasa Melayik lainnya, bahasa Palembang merupakan keturunan dari bahasa Proto-Melayik yang diperkirakan berasal dari Kalimantan bagian barat. Menurut Adelaar (2004), perkembangan Melayu sebagai etnis tersendiri mungkin saja dipengaruhi oleh persentuhan dengan budaya India, setelah migrasi penutur Proto-Malayik ke Sumatra bagian selatan. Kerajaan Sriwijaya yang berpusat di Palembang pada abad ke-7 merupakan salah satu wujud terawal negara bangsa Melayu, jika bukan yang pertama. Prasasti Kedukan Bukit yang ditemukan di Palembang merupakan bukti tertulis pertama dari bahasa-bahasa Melayik yang dituturkan di daerah tersebut. Meski begitu, ahli bahasa masih memperdebatkan apakah memang bahasa yang digunakan di prasasti tersebut merupakan leluhur langsung dari bahasa-bahasa Melayu (termasuk Palembang) modern. Selain…",
        "Penggunaan bahasa Palembang resmi diakui oleh pemerintah Provinsi Sumatera Selatan sebagai salah satu bahasa daerah di Sumatera Selatan yang wajib dijaga kelestariannya. Sebagai salah satu upaya penggiatan sosialisasi dan pelestarian bahasa Palembang, pemerintah Provinsi Sumatera Selatan yang didukung oleh Kementerian Agama Republik Indonesia mengadakan peluncuran Al-Qur'an (kitab suci umat Islam) dengan terjemahan bahasa Palembang yang diterbitkan oleh Puslitbang Lektur Dan Khazanah Keagamaan pada tahun 2019. Bahasa Palembang tingkatan jegho/jero (atau alus) juga telah masuk sebagai muatan lokal (kegiatan kurikulum) bagi sekolah-sekolah tingkat dasar dan menengah di Palembang sejak 2021."
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-selatan/bahasa-palembang.jpg",
        "alt": "Ilustrasi Bahasa Palembang — Sumatera Selatan",
        "caption": "Kedudukan dan Fungsi Bahasa Palembang terbitan 1981",
        "kredit": "Pusat Pembinaan dan Pengembangan Bahasa",
        "lisensi": "Public domain",
        "sumber": "https://commons.wikimedia.org/wiki/File:Kedudukan_dan_Fungsi_Bahasa_Palembang_1981.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Kedudukan_dan_Fungsi_Bahasa_Palembang_1981.jpg/1280px-Kedudukan_dan_Fungsi_Bahasa_Palembang_1981.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    }
  },
  "sumatera-utara": {
    "bika-ambon": {
      "info": [
        "(Jawi: بيكا امبون) adalah kue tradisional khas Medan, Indonesia. Kue ini terbuat dari bahan-bahan seperti tepung tapioka, telur, gula, dan santan. Bika Ambon dimasak selama 12 jam agar dapat bertahan dalam kondisi terbaik dan sesuai apa yang diinginkan selama empat hari karena setelahnya kue tersebut mulai mengeras. Kue basah ini biasanya memiliki jaring-jaring pada bagian dalam. Bika ambon juga dijual dengan berbagai macam rasa, seperti pandan, coklat, keju, dan lain-lain.",
        "Hingga saat ini, belum studi sosiokultur tunggal tentang asal muasal dari bika ambon. Namun, ada beberapa versi yang berkembang mengenai sejarah kue Bika Ambon. Menurut penjelasan M. Muhar Omtatok, seorang budayawan dan sejarawan, kue bika ambon terilhami dari Bika atau Bingka makanan khas Melayu. Selanjutnya, bingka tersebut dimodifikasi dengan bahan pengembang berupa nira/tuak enau hingga berongga dan berbeda dari kue bika asalnya. Selanjutnya, M. Muhar Omtatok menyebutkan bahwa kue ini disebut bika ambon karena pertama kali dijual dan populer di simpang Jl. Ambon-Sei Kera Medan. Versi lain menyebutkan bahwa kata \"Ambon\" dalam bika ambon adalah akronim dari Amplas Kebon sebagaimana orang medan suka menyingkat kata,Dialek medan. Kisahnya; Pada zaman kolonial Belanda, para imigran yang tinggal di Daerah Amplas…",
        "Pada tanggal 26 Agustus 1933, koran edisi Belanda, De locomotief, memampangkan iklan di Kota Semarang yang menyebutkan bikang ambon. Bikang ambon juga sudah dituliskan oleh koran yang sama pada tahun 1896 di Kwitang, Batavia --sekarang Jakarta-- (De locomotief: Samarangsch handels- en advertentie-blad, 10-02-1896). Bika ambon dikenal sebagai oleh-oleh khas Kota Medan, Sumatera Utara. Di Medan, Jalan Mojopahit di daerah Medan Petisah terdapat sedikitnya 30 toko yang menjual kue ini. Setiap toko di lokasi ini bisa menjual lebih dari 1.000 bungkus bika ambon perhari menjelang hari raya."
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-utara/bika-ambon.jpg",
        "alt": "Ilustrasi Bika Ambon — Sumatera Utara",
        "kredit": "Midori",
        "lisensi": "CC BY 3.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Kue_bika_ambon.JPG",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Kue_bika_ambon.JPG/1280px-Kue_bika_ambon.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "ulos": {
      "info": [
        "Ulos (Surat Batak: ᯥᯞᯬᯘ᯲) adalah salah satu jenis kain khas masyarakat Batak, Sumatera Utara. Dari bahasa asalnya, \"ulos\" berarti kain. Cara membuat ulos serupa dengan cara membuat songket khas Melayu, yaitu menggunakan alat tenun bukan mesin. Warna dominan pada ulos adalah merah, hitam, dan putih yang dihiasi oleh ragam tenunan dari benang emas atau perak. Mulanya ulos dikenakan di dalam bentuk selendang atau sarung saja, kerap digunakan pada perhelatan resmi atau upacara adat Batak, tetapi kini banyak dijumpai di dalam bentuk produk suvenir, sarung bantal, ikat pinggang, tas, pakaian, alas meja, dasi, dompet, dan gorden. Ulos juga kadang-kadang diberikan kepada sang ibu yang sedang mengandung supaya mempermudah lahirnya sang bayi ke dunia dan untuk melindungi ibu dari segala mara bahaya yang mengancam saat proses persalinan.…",
        "Mangulosi adalah suatu kegiatan adat yang sangat penting bagi orang batak. Dalam setiap kegiatan seperti upacara pernikahan, kelahiran, dan dukacita, ulos selalu menjadi bagian adat yang selalu diikutsertakan. Menurut pemikiran moyang orang batak, salah satu unsur yang memberikan kehidupan bagi tubuh manusia adalah “kehangatan”. Mengingat orang-orang batak dahulu memilih hidup di dataran yang tinggi sehingga memiliki temperatur yang dingin. Demikian juga dengan huta/kampung yang ada di daerah tapanuli umumnya dikelilingi dengan pepohonan bambu. Di mana memiliki kegunaan bukan hanya sebagai pagar untuk menjaga serangan musuh saja, tetapi juga menahan terjangan angin yang dapat membuat tubuh menggigil kedinginan. Ada 3 hal yang di yakini moyang orang batak yang memberi kehidupan bagi tubuh manusia, yaitu: Darah, Nafas dan Kehangatan.…",
        "Ulos hanya diberikan kepada kerabat yang di bawah kita. Misalnya Natoras tu ianakhon (orang tua kepada anak), hula-hula kepada boru, dll. Ulos yang diberikan haruslah sesuai dengan kerabat yang akan diberi ulos. Misalnya ulos Ragihotang diberikan untuk ulos kepada hela (menantu laki-laki) yang nantinya akan disebut menjadi ulos hela. Sedangkan menurut penggunaanya antara lain:"
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-utara/ulos.jpg",
        "alt": "Ilustrasi Ulos — Sumatera Utara",
        "caption": "Kain ulos Batak, koleksi Honolulu Museum of Art.",
        "kredit": "Hiart",
        "lisensi": "CC0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Ceremonial_cloth_(ulos)_from_Batak,_Indonesia,_Honolulu_Museum_of_Art,_5099.1.JPG",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Ceremonial_cloth_%28ulos%29_from_Batak%2C_Indonesia%2C_Honolulu_Museum_of_Art%2C_5099.1.JPG/1280px-Ceremonial_cloth_%28ulos%29_from_Batak%2C_Indonesia%2C_Honolulu_Museum_of_Art%2C_5099.1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "tari-tortor": {
      "info": [
        "Tortor adalah jenis tarian tradisional masyarakat Batak yang berasal dari provinsi Sumatera Utara, meliputi daerah kabupaten Tapanuli Utara, Humbang Hasundutan, Toba, Samosir, Tapanuli Tengah,Tapanuli Selatan, Mandailing Natal dan Simalungun. Tortor merupakan bagian penting dalam upacara adat (ulaon adat) masyarakat Batak. Melalui Tortor, masyarakat Batak menyampaikan harapan dan doa-doanya. Peragaan sikap dan perasaan melalui Tortor selalu menggambarkan kondisi dan situasi yang dialami.",
        "Nama \"Tortor\" berasal dari bunyi hentakan kaki pada lantai rumah adat Suku Batak, yang terbuat dari kayu, sehingga menghasilkan suara berbunyi “tor, tor”.",
        "Tortor merupakan tarian dari masyarakat Batak yang diperkirakan telah ada dalam kebudayaan Batak sejak sekitar abad ke-13. Adapun makna simbol dalam tiap gerakan Tortor masing-masing mempunyai arti yang menjelaskan bagaimana proses menghargai dan memberi penghormatan antar marga sebagai bentuk hubungan yang baik. Dalam unsur kekerabatan masyarakat Batak antara hulahula, dongan sabutuha, dan boru gerakan itu semua menjelaskan proses tersebut melalui simbol gerakan yang akan dibawakan oleh panortor.",
        "Ciri khas Tortor adalah salah satu tarian seremonial yang disajikan dengan musik gordang. Secara fisik, tortor merupakan tarian, tetapi makna yang lebih dari hanya sekadar gerakan-gerakannya menunjukkan tortor adalah sebuah media komunikasi, di mana melalui gerakan yang disajikan terjadi interaksi antarpartisipan upacara. Gerakan menarikan tortor disebut manortor. Tortor dan musik gondang ibarat koin yang tidak bisa dipisahkan. Sebelum acara dilakukan, secara terbuka, terlebih dahulu tuan rumah (hasuhutan) melakukan acara khusus yang dinamakan 'mambuat tua ni gondang', meminta berkat dari gondang sabangunan. Praktik dulu dianggap animistik ini kini ditujukan kepada Tuhan agar memberkati acara. Dalam pelaksanaan tarian tersebut salah seorang dari hasuhutan akan meminta kepada para pemain gondang dengan kata-kata yang sopan dan santun…"
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-utara/tari-tortor.jpg",
        "alt": "Ilustrasi Tari Tortor — Sumatera Utara",
        "caption": "Penari Tortor",
        "kredit": "Angeline Claudia",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Tor-Tor_Pose.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Tor-Tor_Pose.jpg/1280px-Tor-Tor_Pose.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "bahasa-batak": {
      "info": [
        "Bahasa Batak adalah salah satu bahasa daerah yang berasal dari daerah Sumatera Utara, dengan penutur alaminya adalah masyarakat Batak itu sendiri. Bahasa Batak merupakan bahasa yang tergabung dalam rumpun bahasa Austronesia. Bahasa Batak dapat mengacu pada beberapa hal berikut:",
        "Rumpun bahasa Batak, termasuk bahasa-bahasa di dalamnya, seperti: Utara Bahasa Batak Alas-Kluet Bahasa Batak Karo Bahasa Singkil Bahasa Batak Pakpak Selatan Bahasa Batak Simalungun Bahasa Batak Toba Bahasa Batak Angkola Bahasa Batak Mandailing Bahasa Batak Palawan, sebuah bahasa yang dituturkan oleh orang Negrito di Palawan, Filipina."
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-utara/bahasa-batak.png",
        "alt": "Ilustrasi Bahasa Batak — Sumatera Utara",
        "kredit": "Alteaven",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Batak_in_batak_script_toba_var.png",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Batak_in_batak_script_toba_var.png/1280px-Batak_in_batak_script_toba_var.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "legenda-danau-toba": {
      "info": [
        "Legenda Danau Toba adalah salah satu sastra lisan yang sangat terkenal di Sumatera Utara, khususnya di sekitar wilayah Danau Toba. Legenda ini mengisahkan asal-usul terbentuknya danau besar tersebut melalui peristiwa ajaib yang melibatkan seorang pemuda dan seorang putri ikan.",
        "Di sebuah desa kecil di sekitar Danau Toba, hiduplah seorang pemuda bernama Toba. Suatu hari, Toba memancing dan menangkap seekor ikan mas besar yang ternyata adalah seorang putri yang disihir. Putri itu meminta Toba melepaskannya dengan syarat Toba tidak menceritakan bahwa ia pernah menjadi ikan. Toba menyetujuinya, lalu menikahi putri tersebut.",
        "Mereka hidup bahagia dan dikaruniai seorang anak laki-laki. Namun, Toba melanggar janjinya dan menceritakan kepada anak mereka bahwa ibunya adalah seekor ikan yang disihir menjadi manusia. Sang putri sangat kecewa, meninggalkan Toba dan anaknya, serta memperingatkan bahwa pelanggaran janji itu akan mendatangkan musibah.",
        "Tidak lama kemudian, air dari sungai-sungai di sekitar desa meluap dan menenggelamkan wilayah tersebut, membentuk Danau Toba. Dalam beberapa versi cerita, Pulau Samosir dipercaya sebagai bekas daratan tempat Toba dan keluarganya tinggal. Kisah ini menjadi peringatan tentang pentingnya menjaga janji dan bertindak bijak terhadap alam."
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-utara/legenda-danau-toba.jpg",
        "alt": "Ilustrasi Legenda Danau Toba — Sumatera Utara",
        "caption": "Danau Toba dan Pulau Samosir, latar legenda Toba.",
        "kredit": "Bisajunisa",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Lake_Toba_and_the_surrounding_hills.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Lake_Toba_and_the_surrounding_hills.jpg/1280px-Lake_Toba_and_the_surrounding_hills.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    },
    "danau-toba": {
      "info": [
        "Danau Toba (Indonesia: Danau Toba, Batak Toba: ᯖᯀᯬ ᯖᯬᯅ; romanisasi: Tao Toba) adalah sebuah danau alami berukuran besar di Sumatera Utara dan Indonesia. Danau ini merupakan kaldera raksasa dari gunung berapi super Toba. Danau ini terletak di tengah bagian utara pulau Sumatra, dengan ketinggian permukaan sekitar 900 meter (2.953 ft), danau ini membentang dari 2.88°N 98.52°E / 2.88; 98.52 hingga 2.35°N 99.1°E / 2.35; 99.1. Danau ini memiliki panjang sekitar 100 kilometer (62 mil), lebar 30 kilometer (19 mi), dan kedalaman hingga 505 meter (1.657 ft). Danau Toba adalah danau terbesar di Indonesia dan danau vulkanik terbesar di dunia. Kaldera Toba adalah satu dari dua puluh geopark di Indonesia, dan diakui pada Juli 2020 sebagai salah satu UNESCO Global Geoparks. Danau Toba adalah lokasi letusan supervulkanik dengan perkiraan skala 8…",
        "Kaldera Toba di Sumatera Utara terdiri dari empat kawah vulkanik tumpang tindih yang berbatasan dengan \"barisan vulkanik\" Sumatra. Dengan ukuran 100 x 30 kilometer (62 x 19 mi), ini adalah kaldera Kuarter terbesar di dunia, dan kaldera keempat serta termuda. Kaldera ini memotong tiga kaldera yang lebih tua. Diperkirakan 2.800 km3 (670 cu mi) material piroklastik setara batuan padat, yang dikenal sebagai tuf Toba termuda, dilepaskan selama salah satu letusan gunung berapi eksplosif terbesar dalam sejarah geologi baru-baru ini. Menyusul letusan ini, kubah kebangkitan terbentuk di dalam kaldera baru, menggabungkan dua setengah kubah yang dipisahkan oleh graben memanjang. Setidaknya empat kerucut, empat stratovulkan, dan tiga kawah terlihat di danau tersebut. Kerucut Tandukbenua di tepi barat laut kaldera hanya memiliki vegetasi yang…",
        "Letusan Toba (peristiwa Toba) terjadi di lokasi yang sekarang menjadi Danau Toba sekitar 73.700±300 tahun yang lalu. Letusan ini merupakan letusan terakhir dalam serangkaian setidaknya empat letusan pembentuk kaldera di lokasi tersebut, dengan kaldera yang diketahui sebelumnya telah terbentuk sekitar 1,2 juta tahun yang lalu. Letusan terakhir ini diperkirakan memiliki skala 8 pada VEI, menjadikannya letusan gunung berapi eksplosif terbesar yang diketahui pada Periode Kuarter. Bill Rose dan Craig Chesner dari Universitas Teknologi Michigan memperkirakan bahwa jumlah total material yang dilepaskan dalam letusan tersebut setidaknya 2.800 km3 (670 cu mi)—sekitar 2.000 km3 (480 cu mi) ignimbrit yang mengalir di atas tanah, dan sekitar 800 km3 (190 cu mi) yang jatuh sebagai abu yang sebagian besar ke arah barat. Namun, seiring dengan…"
      ],
      "gambar": {
        "src": "/images/budaya/sumatera-utara/danau-toba.jpg",
        "alt": "Ilustrasi Danau Toba — Sumatera Utara",
        "caption": "Danau Toba dan Pulau Samosir, Sumatera Utara.",
        "kredit": "Bisajunisa",
        "lisensi": "CC BY-SA 4.0",
        "sumber": "https://commons.wikimedia.org/wiki/File:Lake_Toba_and_the_surrounding_hills.jpg",
        "host": "commons.wikimedia.org",
        "remoteSrc": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Lake_Toba_and_the_surrounding_hills.jpg/1280px-Lake_Toba_and_the_surrounding_hills.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
      }
    }
  }
};
