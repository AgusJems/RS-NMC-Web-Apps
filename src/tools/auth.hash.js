import bcrypt from "bcryptjs";

// Start Password Dari Argumen
const passwordToHash = process.argv[2];
if (!passwordToHash) {
  console.error("Pemakaian: node src/tools/auth.hash.js <password>");
  process.exit(1);
}
// End Password Dari Argumen
const saltRounds = 10;

async function generateHash() {
  const hash = await bcrypt.hash(passwordToHash, saltRounds);
  console.log("Password:", passwordToHash);
  console.log("Hash:", hash);
}

generateHash();
