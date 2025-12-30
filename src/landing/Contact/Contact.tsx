import React from "react";

const Contact: React.FC = () => {
  const handleReservation = () => {
    const message = "Halo admin, saya ingin bertanya mengenai layanan.";
    const waUrl = `https://wa.me/6281227086943?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="py-5 sm:py-10 justify-items-center bg-white dark:bg-black text-black dark:text-white">
      <div className="container px-4">
        <div
          className="w-full bg-gradient-to-r from-primary to-lightgreen
                     text-white py-10 sm:min-h-[300px] rounded-3xl
                     shadow-xl grid place-items-center"
        >
          <div className="space-y-6 max-w-xl text-center px-4">
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl font-semibold font-sans"
            >
              RESERVASI PELAYANAN KAMI SEKARANG
            </h1>
            <p data-aos="fade-up" className="text-sm text-white">
              Rumah sakit adalah bagian integral dari suatu organisasi sosial
              dan kesehatan dengan fungsi menyediakan pelayanan paripurna
              (komprehensif).
            </p>
            <button
              className="bg-gradient-to-r from-gdtwo to-gdone text-white px-6 sm:px-6 py-2 sm:py-3 text-sm sm:text-md rounded-full hover:scale-105 duration-200 cursor-pointer"
              onClick={handleReservation}
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
