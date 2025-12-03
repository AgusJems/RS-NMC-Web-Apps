export interface SubmenuItem {
  name: string;
  link: string;
}

export interface NavLink {
  id: number;
  name: string;
  link: string;
  submenu?: SubmenuItem[];
}

export const NavLinks: NavLink[] = [
  { id: 1, name: "Beranda", link: "/landing" },
  {
    id: 2,
    name: "Profil",
    link: "/profile",
    submenu: [
      { name: "Sejarah", link: "/profile/story" },
      { name: "Visi dan Misi", link: "/profile/visi-misi" },
      { name: "Indikator Mutu", link: "/profile/quality-indicators" },
    ],
  },
  { id: 3, name: "Jadwal Dokter", link: "/doctorpage" },
  {
    id: 4,
    name: "Layanan",
    link: "/service",
    submenu: [
      { name: "Rawat Jalan", link: "/service/outpatient" },
      { name: "Rawat Darurat", link: "/service/emergency-care" },
      { name: "Rawat Inap", link: "/service/inpatient" },
      { name: "Penunjang", link: "/service/support" },
      { name: "Resto NMC", link: "/service/resto" },
    ],
  },
  { id: 5, name: "NMC Update", link: "/newspage" },
  { id: 6, name: "Hubungi Kami", link: "/contact" },
  {
    id: 7,
    name: "Pengaduan",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfk3W1_Ew6-iQlUSuoz-mzvO8QoMC_fmx5PhKiuaDpns6H4xQ/viewform",
  },
];
