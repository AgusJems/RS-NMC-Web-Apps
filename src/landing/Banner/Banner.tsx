import { MdHealthAndSafety } from "react-icons/md";
import { RiFirstAidKitFill } from "react-icons/ri";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FaHeartbeat } from "react-icons/fa";


const Banner = () => {
  return (
    <div className="min-h-[550px] bg-white dark:bg-black text-black dark:text-white flex justify-center items-center py-10 sm:py-15">
      <div className="container px-4">
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
          <div className="flex flex-col justify-center gap-6 order-0 sm:order-none">
            <h1 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-white sm:text-left">
              Pelayanan terbaik dari para Ahli Medis
            </h1>

            <p data-aos="fade-up" className="text-md text-gray-500 sm:text-left">
              Rumah sakit adalah bagian integral dari suatu organisasi sosial
              dan kesehatan dengan fungsi menyediakan pelayanan paripurna
              (komprehensif).
            </p>

            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <MdHealthAndSafety className="text-3xl h-10 w-10 shadow-sm p-2 rounded-full bg-green-100 dark:bg-green-400" />
                <p className="text-sm sm:text-base">Pelayanan Medis Aman & Terpercaya</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-3">
                <RiFirstAidKitFill className="text-3xl h-10 w-10 shadow-sm p-2 rounded-full bg-green-100 dark:bg-green-400" />
                <p className="text-sm sm:text-base">Tindakan Cepat & Tepat</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-3">
                <AiOutlineCreditCard className="text-3xl h-10 w-10 shadow-sm p-2 rounded-full bg-green-100 dark:bg-green-400" />
                <p className="text-sm sm:text-base">Proses Pendaftaran & Pembayaran Mudah</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-3">
                <FaHeartbeat className="text-3xl h-10 w-10 shadow-sm p-2 rounded-full bg-green-100 dark:bg-green-400" />
                <p className="text-sm sm:text-base">Program & Layanan Promotif Kesehatan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
