import { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import { showLogoutSuccess } from "../../utils/swalFire";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function closeDropdown() {
    setIsOpen(false);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    showLogoutSuccess();
    navigate("/signin");
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
      >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
          <img src="/images/user/owner.png" alt="User" />
        </span>

        <span className="block mr-1 font-medium text-theme-sm">Agus</span>

        <svg
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="20"
          viewBox="0 0 18 20"
        >
          <path
            d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] w-[260px] rounded-2xl border bg-white p-3 shadow-theme-lg"
      >
        <div>
          <span className="font-medium text-gray-700">Agus Safrudin</span>
          <span className="block text-theme-xs text-gray-500">
            safrudinagus@gmail.com
          </span>
        </div>

        <ul className="pt-4 pb-3 border-b"></ul>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 mt-3 rounded-lg hover:bg-gray-100"
        >
          Sign out
        </button>
      </Dropdown>
    </div>
  );
}
