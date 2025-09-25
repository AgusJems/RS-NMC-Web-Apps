// src/pages/SupportPage.tsx
import React from "react";

const SupportPage: React.FC = () => {
  return (
    <>
    <div className="py-10 mb-10 justify-items-center">
        <div className="min-h-[750px] flex justify-center items-center py-12 sm:py-0">
        <div className="container px-4 py-6">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <h1 data-aos="fade-up" className="text-2xl font-bold text-center mb-6">
              Pelayanan Penunjang
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
          </div>

          {/* Radiologi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-8">
            <div data-aos="zoom-in">
              <img
                src="/images/room/support-1.svg"
                alt="Radiologi"
                className="max-w-[600px] h-[400px] w-full mx-auto 
                           drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
                           object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">Radiologi</h1>
              <p data-aos="fade-up" className="text-md text-gray-500 leading-5 mb-4">
                Radiologi adalah ilmu kedokteran yang menggunakan teknologi pencitraan medis untuk mendiagnosis dan mengobati berbagai penyakit atau kondisi medis. 
                      Prosedur radiologi mencakup penggunaan berbagai alat pencitraan, seperti X-ray (rontgen), CT scan, MRI, ultrasonografi (USG), dan mammografi, untuk melihat struktur internal tubuh dan mendeteksi kelainan atau penyakit. 
                      Radiologi sangat penting dalam memberikan gambaran visual yang membantu dokter untuk mendiagnosis berbagai masalah kesehatan, mulai dari patah tulang hingga kelainan organ dalam seperti kanker, infeksi, atau gangguan jantung.
              </p>
            </div>
          </div>

          {/* Laboratorium */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-12">
            <div data-aos="zoom-in">
              <img
                src="/images/room/support-2.svg"
                alt="Laboratorium"
                className="max-w-[600px] h-[400px] w-full mx-auto 
                           drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
                           object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">Laboratorium</h1>
              <p data-aos="fade-up" className="text-md text-gray-500 leading-5 mb-4">
                Laboratorium rumah sakit adalah fasilitas yang menyediakan layanan pemeriksaan medis untuk membantu diagnosis penyakit melalui analisis sampel biologis seperti darah, urin, atau jaringan tubuh. 
                Di laboratorium, dilakukan berbagai tes diagnostik yang penting untuk mengidentifikasi kondisi medis, seperti infeksi, kelainan darah, penyakit ginjal, atau masalah hormon. 
                Layanan yang disediakan di laboratorium sangat beragam, mulai dari tes darah rutin, tes fungsi organ, hingga pemeriksaan khusus seperti kultur bakteri atau analisis genetik.
              </p>
              <p data-aos="fade-up" className="text-md text-gray-500 leading-5 mb-4">
                Laboratorium rumah sakit biasanya dilengkapi dengan peralatan canggih dan dikelola oleh tenaga medis terlatih seperti ahli patologi klinis, teknisi laboratorium, dan dokter spesialis yang menganalisis hasil tes. 
                Hasil dari pemeriksaan laboratorium ini membantu dokter dalam membuat keputusan medis yang lebih akurat dan menentukan rencana perawatan yang tepat untuk pasien.
              </p>
            </div>
          </div>

          {/* Gizi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-12">
            <div data-aos="zoom-in">
              <img
                src="/images/room/support-3.svg"
                alt="Gizi"
                className="max-w-[600px] h-[400px] w-full mx-auto 
                           drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
                           object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">Gizi</h1>
              <p data-aos="fade-up" className="text-md text-gray-500 leading-5 mb-4">
                Gizi di rumah sakit merujuk pada pelayanan terkait pemenuhan kebutuhan gizi pasien selama mereka menjalani perawatan medis. Unit gizi rumah sakit bertanggung jawab untuk menyediakan makanan yang sehat dan bergizi sesuai dengan kondisi medis pasien, guna mendukung proses penyembuhan dan pemulihan. 
                Para ahli gizi di rumah sakit bekerja sama dengan dokter dan perawat untuk menyusun rencana diet khusus, baik untuk pasien rawat inap maupun rawat jalan, berdasarkan kondisi medis tertentu, seperti diabetes, hipertensi, atau gangguan pencernaan.
              </p>
              <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                Layanan gizi di rumah sakit mencakup penyusunan menu makanan yang seimbang dan terpadu, serta pemantauan asupan gizi pasien selama perawatan. 
                Selain itu, ahli gizi juga memberikan edukasi kepada pasien dan keluarga tentang pentingnya pola makan sehat untuk mencegah penyakit atau mendukung pengobatan.
            </p>
            </div>
          </div>

          {/* Laundry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-12">
            <div data-aos="zoom-in">
              <img
                src="/images/room/support-4.svg"
                alt="Laundry"
                className="max-w-[600px] h-[400px] w-full mx-auto 
                           drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
                           object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">Laundry</h1>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Laundry di rumah sakit adalah layanan yang menyediakan pengolahan dan pencucian pakaian, linen, dan perlengkapan medis lainnya yang digunakan selama perawatan pasien. 
                    Layanan laundry ini sangat penting untuk menjaga kebersihan, kenyamanan, dan higienitas di rumah sakit, mengingat banyaknya barang yang digunakan dalam lingkungan medis, seperti sprei, selimut, handuk, pakaian pasien, serta pakaian untuk tenaga medis. 
                    Proses laundry dilakukan dengan standar kebersihan yang sangat ketat, menggunakan deterjen dan prosedur khusus yang aman bagi kesehatan.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Di rumah sakit, laundry juga berfungsi untuk mencuci dan mendistribusikan perlengkapan medis sekali pakai, seperti masker, sarung tangan, serta alat pelindung lainnya. 
                    Layanan ini mendukung upaya rumah sakit dalam menjaga standar kebersihan dan sterilisasi, yang sangat penting untuk mencegah infeksi nosokomial (infeksi yang didapat di rumah sakit) dan memastikan kenyamanan pasien serta tenaga medis.
                </p>
            </div>
          </div>

          {/* IBS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-12">
            <div data-aos="zoom-in">
              <img
                src="/images/room/support-5.svg"
                alt="IBS"
                className="max-w-[600px] h-[400px] w-full mx-auto 
                           drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
                           object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">Instalasi Bedah Sentral (IBS)</h1>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Instalasi Bedah Sentral (IBS) adalah unit khusus di rumah sakit yang bertanggung jawab untuk menyediakan dan mengelola peralatan medis serta keperluan yang dibutuhkan selama proses operasi. 
                    IBS memiliki peran penting dalam memastikan semua peralatan bedah yang digunakan selama prosedur medis dalam kondisi bersih, steril, dan siap pakai. 
                    Selain itu, IBS juga mengatur alur persiapan dan pembersihan ruang bedah, serta pembagian tugas terkait kebutuhan perawatan pascaoperasi.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Layanan utama di IBS meliputi sterilisasi peralatan bedah, pengelolaan instrumen medis, dan memastikan ketersediaan bahan medis yang dibutuhkan untuk operasi, seperti jarum, kain bedah, dan obat-obatan. 
                    Proses ini dilakukan dengan protokol ketat agar tidak ada kontaminasi atau infeksi yang terjadi selama atau setelah prosedur bedah. 
                    IBS juga bekerja sama dengan berbagai unit rumah sakit lainnya untuk mendukung kelancaran setiap tindakan bedah yang dilakukan.
                </p>
            </div>
          </div>

          {/* CSSD */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-12">
            <div data-aos="zoom-in">
              <img
                src="/images/room/support-2.svg"
                alt="CSSD"
                className="max-w-[600px] h-[400px] w-full mx-auto 
                           drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
                           object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">CSSD</h1>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    CSSD (Central Sterile Supply Department) adalah unit di rumah sakit yang bertanggung jawab untuk sterilisasi dan distribusi peralatan medis yang digunakan dalam berbagai prosedur medis dan bedah. 
                    Fungsi utama CSSD adalah memastikan bahwa semua peralatan medis, instrumen bedah, dan perlengkapan lainnya yang digunakan dalam rumah sakit dalam kondisi steril dan aman untuk digunakan pada pasien. 
                    Proses ini dilakukan dengan menggunakan teknologi sterilisasi seperti autoklaf (penyemprotan uap panas), serta prosedur pencucian dan desinfeksi yang ketat.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    CSSD juga berperan dalam pengelolaan logistik peralatan medis, mulai dari penyimpanan, distribusi, hingga pemantauan ketersediaan peralatan steril yang dibutuhkan. 
                    Unit ini memastikan bahwa tidak ada peralatan yang terkontaminasi selama proses pengolahan, serta menjaga standar kebersihan dan keamanan untuk mencegah infeksi nosokomial (infeksi yang didapat di rumah sakit).
                </p>
            </div>
          </div>

          {/* Farmasi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-12">
            <div data-aos="zoom-in">
              <img
                src="/images/room/support-7.svg"
                alt="Farmasi"
                className="max-w-[600px] h-[400px] w-full mx-auto 
                           drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
                           object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">Farmasi</h1>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Farmasi di rumah sakit adalah unit yang bertanggung jawab untuk pengelolaan obat-obatan serta penyediaan layanan terkait obat kepada pasien dan tenaga medis. 
                    Apoteker di rumah sakit berperan dalam penyusunan resep obat, memastikan kesesuaian dosis, serta memberikan informasi obat kepada pasien dan tenaga medis. 
                    Selain itu, farmasi juga berperan dalam pengawasan penggunaan obat, memastikan kualitas obat, serta melakukan pengelolaan distribusi obat-obatan yang digunakan dalam perawatan pasien.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Di rumah sakit, layanan farmasi juga mencakup edukasi pasien mengenai cara penggunaan obat dengan benar, potensi efek samping, dan interaksi obat. 
                    Farmasi bekerja sama dengan dokter untuk memilih obat yang paling sesuai dengan kondisi medis pasien dan memperhatikan potensi reaksi alergi atau efek samping. 
                    Selain itu, farmasi di rumah sakit juga mengatur persediaan obat, memastikan semua obat yang dibutuhkan tersedia dengan kualitas dan kuantitas yang tepat.
                </p>
            </div>
          </div>

          {/* ICU / NICU / PICU */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-12">
            <div data-aos="zoom-in">
              <img
                src="/images/room/support-8.svg"
                alt="Unit Intensive"
                className="max-w-[600px] h-[400px] w-full mx-auto 
                           drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
                           object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl font-bold">Unit Intensive (ICU, NICU, PICU, PERINA)</h1>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    ICU (Intensive Care Unit): ICU adalah unit perawatan intensif di rumah sakit yang dirancang untuk merawat pasien dengan kondisi medis yang sangat kritis atau membutuhkan pemantauan terus-menerus. 
                    Pasien di ICU sering kali mengalami gangguan fungsi organ atau memerlukan perawatan medis yang intensif dan terkontrol, seperti pasien dengan serangan jantung, stroke, atau gagal organ. 
                    ICU dilengkapi dengan peralatan medis canggih, seperti ventilator, monitor jantung, dan alat pemantauan lainnya.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    PICU (Pediatric Intensive Care Unit): PICU adalah unit perawatan intensif khusus untuk pasien anak-anak yang berada dalam kondisi kritis atau membutuhkan perawatan intensif. 
                    PICU memberikan perhatian medis yang lebih spesifik untuk anak-anak yang mengalami penyakit serius, cedera berat, atau gangguan pernapasan. 
                    Ruang PICU dilengkapi dengan alat medis yang disesuaikan untuk kebutuhan pasien anak.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    NICU (Neonatal Intensive Care Unit): NICU adalah unit perawatan intensif yang dirancang khusus untuk merawat bayi baru lahir yang mengalami masalah kesehatan serius atau prematur. 
                    NICU menyediakan perawatan untuk bayi dengan gangguan pernapasan, infeksi, atau kelainan medis lainnya yang memerlukan pemantauan ketat dan perawatan intensif. 
                    NICU dilengkapi dengan peralatan medis khusus untuk bayi prematur dan baru lahir.
                </p>
                <p data-aos="fade-up" className="text-md text-gray-500 tracking-wide leading-5 mb-4">
                    Perinatologi: Perinatologi adalah cabang ilmu kedokteran yang berfokus pada kesehatan ibu dan janin sebelum, selama, dan setelah proses persalinan. 
                    Bidang ini menangani kehamilan berisiko tinggi dan kondisi medis yang dapat mempengaruhi janin atau ibu, seperti komplikasi kehamilan, preeklamsia, atau kelainan janin. 
                    Perinatologi bekerja sama dengan dokter spesialis obstetri untuk memastikan kesehatan ibu dan bayi selama masa kehamilan dan persalinan.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SupportPage;
