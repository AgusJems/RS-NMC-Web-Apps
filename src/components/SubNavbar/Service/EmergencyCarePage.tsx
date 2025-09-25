import React from "react";

const EmergencyCarePage: React.FC = () => {
  return (
    <>
    <div className="py-10 mb-10 justify-items-center">
        <div className="min-h-[750px] flex justify-center items-center py-12 sm:py-0">
        <div className="container px-4 py-6">
          {/* Section IGD */}
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <h1 data-aos="fade-up" className="text-2xl font-bold text-center mb-6">
              Pelayanan Rawat Darurat
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-8">
            {/* image section */}
            <div data-aos="zoom-in">
              <img
                src="/images/room/igd-1.svg"
                alt="Instalasi Gawat Darurat"
                className="max-w-[600px] h-[400px] w-full mx-auto 
                           drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
                           object-cover rounded-lg"
              />
            </div>

            {/* text details section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">
                Instalasi Gawat Darurat (IGD)
              </h1>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    IGD (Instalasi Gawat Darurat) adalah unit layanan medis yang menangani pasien dalam keadaan darurat atau kritis yang memerlukan penanganan segera. 
                    IGD berfungsi sebagai tempat pertama yang dikunjungi pasien dengan kondisi medis yang membahayakan jiwa atau membutuhkan perawatan cepat. 
                    Layanan di IGD diberikan oleh dokter umum dan spesialis yang bekerja dalam tim bersama tenaga medis lainnya seperti perawat dan ahli laboratorium. 
                    IGD memiliki peran penting untuk menstabilkan kondisi pasien sebelum diberikan perawatan lebih lanjut atau dipindahkan ke unit lainnya.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Penanganan di IGD dimulai dengan pemeriksaan triase untuk menentukan tingkat keparahan pasien. 
                    Pasien yang membutuhkan perawatan segera akan ditangani terlebih dahulu, seperti pemberian pertolongan pertama, pemeriksaan penunjang (misalnya rontgen, EKG, atau tes darah), dan pemberian pengobatan untuk menstabilkan kondisi. 
                    Setelah pasien stabil, mereka akan dirujuk ke ruang rawat inap, ICU, atau spesialis jika diperlukan. IGD menangani berbagai kasus seperti kecelakaan, serangan jantung, stroke, pendarahan hebat, serta gangguan medis akut lainnya yang memerlukan penanganan cepat
                </p>
            </div>
          </div>

          {/* Section VK */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-12">
            {/* image section */}
            <div data-aos="zoom-in">
              <img
                src="/images/room/igd-2.svg"
                alt="Kamar Bersalin"
                className="max-w-[600px] h-[400px] w-full mx-auto 
                           drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
                           object-cover rounded-lg"
              />
            </div>

            {/* text details section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">
                Kamar Bersalin (VK)
              </h1>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Kamar bersalin adalah ruang khusus di rumah sakit atau fasilitas kesehatan yang digunakan untuk persalinan atau melahirkan bayi. 
                    Kamar ini dilengkapi dengan peralatan medis yang dibutuhkan selama proses persalinan, seperti tempat tidur bersalin, alat monitor detak jantung janin, oksigen, dan peralatan untuk tindakan medis lainnya. 
                    Kamar bersalin dirancang agar ibu dan bayi dapat ditangani dengan aman selama proses melahirkan.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Kamar bersalin tidak hanya digunakan untuk melahirkan, tetapi juga untuk pemantauan ibu hamil yang berada dalam kondisi berisiko tinggi atau membutuhkan perhatian medis lebih lanjut. 
                    Selain itu, di kamar bersalin juga dilakukan tindakan medis seperti induksi persalinan, episiotomi, dan jika diperlukan, seksio sesarea (operasi caesar). 
                    Setelah melahirkan, ibu dan bayi akan dipindahkan ke ruang perawatan atau observasi untuk pemulihan pasca persalinan.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EmergencyCarePage;
