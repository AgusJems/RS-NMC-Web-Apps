import bcrypt from "bcryptjs";

const passwordToHash = "***DIHAPUS***";
const saltRounds = 10;

async function generateHash() {
  const hash = await bcrypt.hash(passwordToHash, saltRounds);
  console.log("Password:", passwordToHash);
  console.log("Hash:", hash);
}

generateHash();
