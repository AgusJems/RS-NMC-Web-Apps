import React from "react";

const InPatientPage: React.FC = () => {
  return (
    <>
    <div className="py-10 mb-10 justify-items-center">
        <div className="min-h-[750px] flex justify-center items-center py-12 sm:py-0">
        <div className="container px-4 py-6">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <h1 data-aos="fade-up" className="text-2xl font-bold text-center mb-6">
              Pelayanan Rawat Inap
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
          </div>

          {/* Kelas VVIP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-8">
            <div data-aos="zoom-in">
              <img
                src="/images/room/ranap-1.svg"
                alt="Kelas VVIP"
                className="max-w-[600px] h-[400px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">Kelas VVIP</h1>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Kelas VVIP merupakan kategori ruang rawat inap yang paling eksklusif, memberikan kenyamanan dan privasi maksimal bagi pasien dan keluarga. 
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Fasilitasnya mencakup kamar pribadi, AC, televisi, Kulkas, kamar mandi dalam, bed dan sofa untuk tamu. 
                    Kelas ini bertujuan untuk memberikan pengalaman perawatan yang lebih mewah dan nyaman dibandingkan dengan kelas-kelas lainnya.
                </p>
            </div>
          </div>

          {/* Kelas VIP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-12">
            <div data-aos="zoom-in">
              <img
                src="/images/room/ranap-2.svg"
                alt="Kelas VIP"
                className="max-w-[600px] h-[400px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">Kelas VIP</h1>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Ruang VIP di rumah sakit adalah ruang perawatan khusus yang dirancang untuk memberikan pelayanan premium dan kenyamanan ekstra bagi pasien. 
                    Fasilitasnya meliputi kamar yang lebih luas, tempat tidur ganda, serta akses ke hiburan seperti TV, internet, dan makanan berkualitas. 
                    Lingkungan di ruang VIP juga lebih privat dan tenang, menciptakan suasana yang nyaman bagi pasien dan keluarga.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Fasilitasnya mencakup kamar pribadi, AC, televisi, Kulkas, kamar mandi dalam, sofa untuk tamu. 
                    Kelas ini bertujuan untuk memberikan pengalaman perawatan yang lebih mewah dan nyaman dibandingkan dengan kelas-kelas lainnya.
                </p>
            </div>
          </div>

          {/* Kelas I */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-12">
            <div data-aos="zoom-in">
              <img
                src="/images/room/ranap-3.svg"
                alt="Kelas I"
                className="max-w-[600px] h-[400px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">Kelas I</h1>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Kelas 1 di rumah sakit adalah kelas perawatan yang menawarkan fasilitas dan pelayanan yang lebih baik dibandingkan dengan kelas 2 atau kelas 3. 
                    Kamar perawatan di kelas 1 umumnya lebih luas, dengan fasilitas yang cukup lengkap seperti tempat tidur untuk pasien dan pendamping, serta akses ke layanan medis yang lebih cepat. 
                    Pasien yang dirawat di kelas 1 umumnya mendapatkan perhatian lebih intensif dari tenaga medis dan memiliki kenyamanan yang lebih dibandingkan dengan kelas perawatan lainnya.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Fasilitasnya mencakup kamar pribadi, AC, televisi, kamar mandi dalam, sofa untuk tamu. 
                    Kelas ini bertujuan untuk memberikan pengalaman perawatan yang mewah dan nyaman dibandingkan dengan kelas-kelas lainnya.
                </p>
            </div>
          </div>

          {/* Kelas II */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-12">
            <div data-aos="zoom-in">
              <img
                src="/images/room/ranap-4.svg"
                alt="Kelas II"
                className="max-w-[600px] h-[400px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">Kelas II</h1>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Kelas 2 di rumah sakit adalah kelas perawatan menengah yang menyediakan fasilitas yang lebih baik dibandingkan kelas 3, namun dengan harga yang lebih terjangkau daripada kelas 1. 
                    Kamar perawatan di kelas 2 umumnya bersifat semi-privat, di mana beberapa pasien dirawat dalam satu ruangan yang lebih luas dibandingkan kelas 3. 
                    Fasilitas yang tersedia di kelas ini sudah cukup memadai untuk kenyamanan pasien, dengan layanan medis yang baik dan cukup cepat.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Fasilitasnya mencakup kamar dengan 2 tempat tidur pasien, AC, kamar mandi dalam, kursi untuk penunggu pasien. 
                    Kelas ini bertujuan untuk memberikan pengalaman perawatan yang baik dan nyaman dibandingkan dengan kelas di bawahnya.
                </p>
            </div>
          </div>

          {/* Kelas III */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-12">
            <div data-aos="zoom-in">
              <img
                src="/images/room/ranap-5.svg"
                alt="Kelas III"
                className="max-w-[600px] h-[400px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">Kelas III</h1>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Kelas 3 di rumah sakit adalah kelas perawatan dengan biaya lebih terjangkau, biasanya untuk pasien yang menggunakan fasilitas umum atau asuransi kesehatan dasar. 
                    Kamar perawatan di kelas 3 umumnya bersifat berbeda dengan kelas 1 dan kelas 2, karena lebih sederhana dan sering kali berisi lebih banyak pasien dalam satu ruangan (bunk bed atau tempat tidur bertingkat). 
                    Fasilitas yang disediakan lebih minimalis, namun tetap memenuhi kebutuhan dasar perawatan medis.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Fasilitasnya mencakup kamar dengan 3 tempat tidur pasien, AC, kamar mandi dalam dan kursi untuk penunggu pasien. 
                    Kelas ini bertujuan untuk memberikan pengalaman perawatan yang baik, nyaman dengan biaya yang terjangkau.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default InPatientPage;
