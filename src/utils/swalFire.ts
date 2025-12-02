import Swal from "sweetalert2";

// 🔧 Common class blur dan fullscreen
const blurOptions = {
  customClass: {
    container: "swal2-blur-container",
    popup: "swal2-blur-popup",
  },
  backdrop: false, // agar blur dari container terlihat
};

// Success
export const showSuccess = (title: string, text?: string) => {
  Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonColor: "#16a34a", // hijau
    ...blurOptions,
  });
};

// Error
export const showError = (title: string, text?: string) => {
  Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonColor: "#dc2626", // merah
    ...blurOptions,
  });
};

// Confirm
export const showConfirmDelete = async (
  title: string,
  text?: string,
  confirmText = "Ya",
  cancelText = "Batal"
): Promise<boolean> => {
  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ef4444",
    cancelButtonColor: "#6b7280",
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    ...blurOptions,
  });

  return result.isConfirmed;
};

export const showConfirmUpdate = async (
  title: string,
  text?: string,
  confirmText = "Ya",
  cancelText = "Batal"
): Promise<boolean> => {
  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#16a34a",
    cancelButtonColor: "#ef4444",
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    ...blurOptions,
  });

  return result.isConfirmed;
};

// Loading
export const showLoading = (title = "Loading...") => {
  Swal.fire({
    title,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
    ...blurOptions,
  });
};

// Close Swal
export const closeSwal = () => {
  Swal.close();
};

// Login berhasil
export const showLoginSuccess = (username?: string) => {
  Swal.fire({
    icon: "success",
    title: "Login Successfully!",
    text: username ? `Welcome, ${username}!` : "Welcome!",
    timer: 2000,
    showConfirmButton: false,
    ...blurOptions,
  });
};

// Login gagal
export const showLoginError = (message = "Username atau password salah.") => {
  Swal.fire({
    icon: "error",
    title: "Login Failed!",
    text: message,
    confirmButtonColor: "#dc2626",
    ...blurOptions,
  });
};

// Logout berhasil
export const showLogoutSuccess = () => {
  Swal.fire({
    icon: "success",
    title: "Logout Successfully",
    text: "See you again!",
    timer: 1800,
    showConfirmButton: false,
    ...blurOptions,
  });
};


