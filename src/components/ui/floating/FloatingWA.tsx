const FloatingWA = () => {
  const message = "Halo admin, saya ingin bertanya mengenai layanan.";
  const waUrl = `https://wa.me/628112922444?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-5 z-50 bg-green-600 hover:bg-green-700
                 text-white px-3 py-3 rounded-full shadow-lg flex items-center 
                 gap-3 transition-transform transform hover:scale-110"
    >
      {/* WhatsApp Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-current"
      >
        <path d="M16 .6C7.5.6.6 7.5.6 16c0 3 .8 5.8 2.3 8.3L0 32l8-2.8c2.4 1.3 5.2 2 8 2 8.5 0 15.4-6.9 15.4-15.4C31.4 7.5 24.5.6 16 .6zm0 27.8c-2.5 0-4.9-.7-7-2l-.5-.3-4.7 1.6 1.6-4.6-.3-.5c-1.3-2.1-2-4.5-2-7C3.1 9 9 3.1 16 3.1S28.9 9 28.9 16 23 28.4 16 28.4zm7-10.4c-.4-.2-2.3-1.1-2.6-1.2-.4-.2-.7-.2-1 .2-.3.4-1.1 1.2-1.4 1.4-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.5-.7.2-.2.3-.4.5-.6.2-.2.3-.4.5-.6.2-.2.1-.5 0-.7-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.7-1-.7h-.9c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1 0 1.8 1.3 3.5 1.5 3.7.2.3 2.6 4 6.3 5.6 3.7 1.6 3.7 1.1 4.4 1 .7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.1-.3-.2-.7-.4z" />
      </svg>

      {/* Animated Text - Desktop Only */}
      <span
        className="hidden md:block text-sm font-semibold animate-slideFade"
      >
        Daftar Sekarang
      </span>

      {/* Animasi dengan Tailwind */}
      <style>
        {`
          .animate-slideFade {
            animation: slideFadeIn 0.9s ease forwards;
          }
          @keyframes slideFadeIn {
            0% { 
              opacity: 0; 
              transform: translateX(10px);
            }
            100% { 
              opacity: 1; 
              transform: translateX(0);
            }
          }
        `}
      </style>
    </a>
  );
};

export default FloatingWA;
