import { FC } from "react";
import { showError } from "../../../utils/swalFire";

interface FileInputProps {
  className?: string;
  onChange: (base64: string) => void;
}

const FileInput: FC<FileInputProps> = ({ className = "", onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const MAX_FILE_SIZE_MB = 3;
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      showError("Ukuran File Terlalu Besar", "Ukuran gambar maksimal 3MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (!reader.result) return;

      const img = new Image();
      img.src = reader.result as string;

      img.onload = () => {
        const MAX_WIDTH = 1200;

        // 1. Hindari penggunaan DPR untuk upload gambar ke server
        // Menggunakan DPR > 1 membuat canvas terlalu besar dan bikin blur saat scaling
        const targetWidth = Math.min(img.width, MAX_WIDTH);
        const scale = targetWidth / img.width;
        const targetHeight = img.height * scale;

        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // 2. Membersihkan canvas (penting untuk PNG transparan)
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

        // 3. FIX: Gunakan format dinamis atau WebP
        // WebP mendukung transparansi dan ukurannya jauh lebih kecil dari PNG
        const outputFormat =
          file.type === "image/png" ? "image/png" : "image/jpeg";

        // Jika browser mendukung WebP, itu pilihan terbaik (kecil & transparan)
        const resizedBase64 = canvas.toDataURL(outputFormat, 0.9);

        onChange(resizedBase64);
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleChange}
      className={`focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors
        file:mr-5 file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r
        file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3
        file:text-sm file:text-gray-700 hover:file:bg-gray-100
        focus:outline-hidden dark:border-gray-700 dark:bg-gray-900
        dark:text-gray-400 dark:file:border-gray-800 dark:file:bg-white/[0.03]
        ${className}`}
    />
  );
};

export default FileInput;
