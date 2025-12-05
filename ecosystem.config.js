module.exports = {
  apps : [{
    name   : "RS-NMC-Web-Apps", // Sesuaikan dengan nama aplikasi PM2 Anda
    script : "./server.js", // Ganti dengan nama file entry point Anda
    // ... konfigurasi lain ...

    // Bagian Kunci: Menetapkan path ke file .env
    env: {
      NODE_ENV: "production", // atau development
    },
    env_production: {
      // Ganti dengan path .env jika tidak di root project
      NODE_ENV: "production",
      // PM2 akan membaca variabel dari file ini
      env_file: '.env' 
    }
  }]
};