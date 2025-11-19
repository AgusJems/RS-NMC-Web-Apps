import { MdHealthAndSafety } from "react-icons/md";
import { RiFirstAidKitFill } from "react-icons/ri";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FaHeartbeat } from "react-icons/fa";


const Banner = () => {
  return (
    <div className="min-h-[550px] bg-white dark:bg-black text-black dark:text-white flex justify-center items-center py-20 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src="/images/carousel/rs-depan.svg"
              alt="Banner"
              className="max-w-[500px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-3xl font-bold text-gray-500 dark:text-white">
              Pelayanan terbaik dari para Ahli Medis
            </h1>
            <p
              data-aos="fade-up"
              className="text-md text-gray-500"
            >
              Rumah sakit adalah bagian integral dari suatu organisasi sosial
              dan kesehatan dengan fungsi menyediakan pelayanan paripurna
              (komprehensif).
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdHealthAndSafety className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Pelayanan Medis Aman & Terpercaya</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <RiFirstAidKitFill className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Tindakan Cepat & Tepat</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <AiOutlineCreditCard className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Proses Pendaftaran & Pembayaran Mudah</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaHeartbeat className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Program & Layanan Promotif Kesehatan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
