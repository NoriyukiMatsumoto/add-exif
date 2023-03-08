import * as et from "exiftool-vendored";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();

const base64Path = process.env.BASE64_PATH ?? "./assets/base64.txt";
const outPath = process.env.OUT_PATH ?? "./output/out.jpeg";

const convertToJpeg = (base64: string, outputPath: string) => {
  const decodedFile = Buffer.from(base64, "base64");
  fs.writeFileSync(outputPath, decodedFile);
};

const main = async () => {
  const base64 = fs.readFileSync(base64Path, "utf-8");
  convertToJpeg(base64, outPath);
  const tags = await et.exiftool.read(outPath);
  console.log({
    latitude: tags.GPSLatitude,
    longitude: tags.GPSLongitude,
    dateTime: tags.DateTime,
    dateTimeDigitized: tags.DateTimeDigitized,
    dateTimeOrginal: tags.DateTimeOriginal,
  });
};

main();
