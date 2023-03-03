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

/**
 * {"Model":"SCG08","ImageDescription":"","Flash":16,"DateTime":"2022:03:26 16:54:51","ImageLength":3000,"BrightnessValue":7.1,"SubSecTimeOriginal":"13","Orientation":1,"PixelXDimension":4000,"YCbCrPositioning":2,"DigitalZoomRatio":1,"ThumbnailImageWidth":0,"Make":"samsung","ComponentsConfiguration":"???","ResolutionUnit":2,"JPEGInterchangeFormatLength":0,"Compression":6,"FocalLengthIn35mmFilm":0,"Software":"SCG08KDU1AUF4","XResolution":72,"DateTimeOriginal":"2022:03:26 16:54:51","ExposureTime":0.020001,"ApertureValue":1.8,"ColorSpace":1,"ImageWidth":4000,"JPEGInterchangeFormat":1396,"ExifVersion":"0220","YResolution":72,"ExposureMode":0,"FNumber":1.8,"FlashpixVersion":"0100","FocalLength":4.6,"ExposureBiasValue":0,"LightSource":255,"MaxApertureValue":0,"ISOSpeedRatings":308,"SubSecTimeDigitized":"13","PixelYDimension":3000,"ExposureProgram":0,"InteroperabilityIndex":"R98","SceneCaptureType":0,"WhiteBalance":0,"SubSecTime":"13","MeteringMode":2,"ThumbnailImageLength":0,"ShutterSpeedValue":5.614,"DateTimeDigitized":"2022:03:26 16:54:51","latitude":35.627879,"longitude":139.74085}
 */
