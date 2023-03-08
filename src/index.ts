import * as et from "exiftool-vendored";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();

const filePath = process.env.FILE_PATH ?? "./assets/sample.jpeg";
const outPath = process.env.OUT_PATH ?? "./output/out.jpeg";

const convertToBase64 = (filePath: string) => {
  const fileData = fs.readFileSync(filePath);
  return fileData.toString("base64");
};

const convertToJpeg = (base64: string, outputPath: string) => {
  const decodedFile = Buffer.from(base64, "base64");
  fs.writeFileSync(outputPath, decodedFile);
};

const main = async () => {
  console.log({ before: await et.exiftool.read(filePath) });

  await et.exiftool.write(filePath, {
    DateTime: "2023:02:16 11:45:19",
    DateTimeDigitized: "2023:02:16 11:45:19",
    DateTimeOriginal: "2023:02:16 11:45:19",
    GPSLatitude: "48.857748",
    GPSLongitude: "2.2918888",
  });

  console.log({ after: await et.exiftool.read(filePath) });

  const base64 = convertToBase64(filePath);
  console.log({ base64: `${base64.substring(0, 30)}~~~~` });
  convertToJpeg(base64, outPath);

  console.log({ output: await et.exiftool.read(outPath) });
};

main();
