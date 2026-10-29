import bcrypt from "bcryptjs";

// Start Password Dari Argumen
const password = process.argv[2];
if (!password) {
  console.error("Pemakaian: node src/utils/hash.js <password>");
  process.exit(1);
}
// End Password Dari Argumen
const saltRounds = 10;

bcrypt.hash(password, saltRounds).then(hash => {
  console.log("HASH BARU:\n", hash);
});
