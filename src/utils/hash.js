import bcrypt from "bcryptjs";

const password = "rsnmc@webapps";
const saltRounds = 10;

bcrypt.hash(password, saltRounds).then(hash => {
  console.log("HASH BARU:\n", hash);
});
