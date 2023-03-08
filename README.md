## 概要
画像にexif情報を付与して、base64に変換して、再度画像に変換するプログラム。  
各フローごとに画像の情報を出力する  
exifへの情報付与・base64への変換方法、base64を画像に変換する方法が分かる。  

## 実行方法
```
$ yarn install
$ cp .env.example .env
$ cp ./assets/sample_original.jpeg ./assets/sample.jpeg && yarn start
```

## 実行サンプル
```sh
% cp ./assets/sample_original.jpeg ./assets/sample.jpeg && yarn start
yarn run v1.22.19
$ ts-node src/index.ts
{
  before: {
    SourceFile: '/Users/hoge/add-exif/assets/sample.jpeg',
    errors: [],
    ExifToolVersion: 12.56,
    FileName: 'sample.jpeg',
    Directory: '/Users/hoge/add-exif/assets',
    FileSize: '147 kB',
    FileModifyDate: ExifDateTime {
      year: 2023,
      month: 3,
      day: 3,
      hour: 13,
      minute: 42,
      second: 2,
      millisecond: undefined,
      tzoffsetMinutes: 540,
      rawValue: '2023:03:03 13:42:02+09:00',
      zoneName: 'UTC+9'
    },
    FileAccessDate: ExifDateTime {
      year: 2023,
      month: 3,
      day: 3,
      hour: 13,
      minute: 42,
      second: 3,
      millisecond: undefined,
      tzoffsetMinutes: 540,
      rawValue: '2023:03:03 13:42:03+09:00',
      zoneName: 'UTC+9'
    },
    FileInodeChangeDate: ExifDateTime {
      year: 2023,
      month: 3,
      day: 3,
      hour: 13,
      minute: 42,
      second: 2,
      millisecond: undefined,
      tzoffsetMinutes: 540,
      rawValue: '2023:03:03 13:42:02+09:00',
      zoneName: 'UTC+9'
    },
    FilePermissions: '-rw-r--r--',
    FileType: 'JPEG',
    FileTypeExtension: 'jpg',
    MIMEType: 'image/jpeg',
    JFIFVersion: 1.01,
    ResolutionUnit: 'None',
    XResolution: 1,
    YResolution: 1,
    'JPEG-HDRVersion': 11,
    Ln0: 0.122262,
    Ln1: 2.634655,
    S2n: 2269.635,
    Alpha: 1,
    Beta: 1,
    CorrectionMethod: 0,
    RatioImage: BinaryField {
      bytes: 44776,
      rawValue: '(Binary data 44776 bytes, use -b option to extract)'
    },
    ImageWidth: 800,
    ImageHeight: 600,
    EncodingProcess: 'Baseline DCT, Huffman coding',
    BitsPerSample: 8,
    ColorComponents: 3,
    YCbCrSubSampling: 'YCbCr4:2:0 (2 2)',
    ImageSize: '800x600',
    Megapixels: 0.48
  }
}
{
  after: {
    SourceFile: '/Users/hoge/add-exif/assets/sample.jpeg',
    errors: [],
    tz: 'Europe/Paris',
    tzSource: 'from Lat/Lon',
    GPSLatitude: 48.857748,
    GPSLongitude: 2.2918888,
    GPSPosition: '48.857748 2.2918888',
    ExifToolVersion: 12.56,
    FileName: 'sample.jpeg',
    Directory: '/Users/hoge/add-exif/assets',
    FileSize: '150 kB',
    FileModifyDate: ExifDateTime {
      year: 2023,
      month: 3,
      day: 3,
      hour: 13,
      minute: 42,
      second: 5,
      millisecond: undefined,
      tzoffsetMinutes: 540,
      rawValue: '2023:03:03 13:42:05+09:00',
      zoneName: 'UTC+9'
    },
    FileAccessDate: ExifDateTime {
      year: 2023,
      month: 3,
      day: 3,
      hour: 13,
      minute: 42,
      second: 5,
      millisecond: undefined,
      tzoffsetMinutes: 540,
      rawValue: '2023:03:03 13:42:05+09:00',
      zoneName: 'UTC+9'
    },
    FileInodeChangeDate: ExifDateTime {
      year: 2023,
      month: 3,
      day: 3,
      hour: 13,
      minute: 42,
      second: 5,
      millisecond: undefined,
      tzoffsetMinutes: 540,
      rawValue: '2023:03:03 13:42:05+09:00',
      zoneName: 'UTC+9'
    },
    FilePermissions: '-rw-r--r--',
    FileType: 'JPEG',
    FileTypeExtension: 'jpg',
    MIMEType: 'image/jpeg',
    JFIFVersion: 1.01,
    ExifByteOrder: 'Big-endian (Motorola, MM)',
    XResolution: 1,
    YResolution: 1,
    ResolutionUnit: 'None',
    YCbCrPositioning: 'Centered',
    ExifVersion: '0232',
    DateTimeOriginal: ExifDateTime {
      year: 2023,
      month: 2,
      day: 16,
      hour: 11,
      minute: 45,
      second: 19,
      millisecond: undefined,
      tzoffsetMinutes: 60,
      rawValue: '2023:02:16 11:45:19',
      zoneName: 'Europe/Paris'
    },
    ComponentsConfiguration: 'Y, Cb, Cr, -',
    FlashpixVersion: '0100',
    ColorSpace: 'Uncalibrated',
    GPSVersionID: '2.3.0.0',
    XMPToolkit: 'Image::ExifTool 12.56',
    DateTimeDigitized: ExifDateTime {
      year: 2023,
      month: 2,
      day: 16,
      hour: 11,
      minute: 45,
      second: 19,
      millisecond: undefined,
      tzoffsetMinutes: 60,
      rawValue: '2023:02:16 11:45:19',
      zoneName: 'Europe/Paris'
    },
    DateTime: ExifDateTime {
      year: 2023,
      month: 2,
      day: 16,
      hour: 11,
      minute: 45,
      second: 19,
      millisecond: undefined,
      tzoffsetMinutes: 60,
      rawValue: '2023:02:16 11:45:19',
      zoneName: 'Europe/Paris'
    },
    'JPEG-HDRVersion': 11,
    Ln0: 0.122262,
    Ln1: 2.634655,
    S2n: 2269.635,
    Alpha: 1,
    Beta: 1,
    CorrectionMethod: 0,
    RatioImage: BinaryField {
      bytes: 44776,
      rawValue: '(Binary data 44776 bytes, use -b option to extract)'
    },
    ImageWidth: 800,
    ImageHeight: 600,
    EncodingProcess: 'Baseline DCT, Huffman coding',
    BitsPerSample: 8,
    ColorComponents: 3,
    YCbCrSubSampling: 'YCbCr4:2:0 (2 2)',
    ImageSize: '800x600',
    Megapixels: 0.48
  }
}
{ base64: '/9j/4AAQSkZJRgABAQAAAQABAAD/4Q~~~~' }
{
  output: {
    SourceFile: '/Users/hoge/add-exif/output/out.jpeg',
    errors: [],
    tz: 'Europe/Paris',
    tzSource: 'from Lat/Lon',
    GPSLatitude: 48.857748,
    GPSLongitude: 2.2918888,
    GPSPosition: '48.857748 2.2918888',
    ExifToolVersion: 12.56,
    FileName: 'out.jpeg',
    Directory: '/Users/hoge/add-exif/output',
    FileSize: '150 kB',
    FileModifyDate: ExifDateTime {
      year: 2023,
      month: 3,
      day: 3,
      hour: 13,
      minute: 42,
      second: 5,
      millisecond: undefined,
      tzoffsetMinutes: 540,
      rawValue: '2023:03:03 13:42:05+09:00',
      zoneName: 'UTC+9'
    },
    FileAccessDate: ExifDateTime {
      year: 2023,
      month: 3,
      day: 3,
      hour: 13,
      minute: 42,
      second: 5,
      millisecond: undefined,
      tzoffsetMinutes: 540,
      rawValue: '2023:03:03 13:42:05+09:00',
      zoneName: 'UTC+9'
    },
    FileInodeChangeDate: ExifDateTime {
      year: 2023,
      month: 3,
      day: 3,
      hour: 13,
      minute: 42,
      second: 5,
      millisecond: undefined,
      tzoffsetMinutes: 540,
      rawValue: '2023:03:03 13:42:05+09:00',
      zoneName: 'UTC+9'
    },
    FilePermissions: '-rw-r--r--',
    FileType: 'JPEG',
    FileTypeExtension: 'jpg',
    MIMEType: 'image/jpeg',
    JFIFVersion: 1.01,
    ExifByteOrder: 'Big-endian (Motorola, MM)',
    XResolution: 1,
    YResolution: 1,
    ResolutionUnit: 'None',
    YCbCrPositioning: 'Centered',
    ExifVersion: '0232',
    DateTimeOriginal: ExifDateTime {
      year: 2023,
      month: 2,
      day: 16,
      hour: 11,
      minute: 45,
      second: 19,
      millisecond: undefined,
      tzoffsetMinutes: 60,
      rawValue: '2023:02:16 11:45:19',
      zoneName: 'Europe/Paris'
    },
    ComponentsConfiguration: 'Y, Cb, Cr, -',
    FlashpixVersion: '0100',
    ColorSpace: 'Uncalibrated',
    GPSVersionID: '2.3.0.0',
    XMPToolkit: 'Image::ExifTool 12.56',
    DateTimeDigitized: ExifDateTime {
      year: 2023,
      month: 2,
      day: 16,
      hour: 11,
      minute: 45,
      second: 19,
      millisecond: undefined,
      tzoffsetMinutes: 60,
      rawValue: '2023:02:16 11:45:19',
      zoneName: 'Europe/Paris'
    },
    DateTime: ExifDateTime {
      year: 2023,
      month: 2,
      day: 16,
      hour: 11,
      minute: 45,
      second: 19,
      millisecond: undefined,
      tzoffsetMinutes: 60,
      rawValue: '2023:02:16 11:45:19',
      zoneName: 'Europe/Paris'
    },
    'JPEG-HDRVersion': 11,
    Ln0: 0.122262,
    Ln1: 2.634655,
    S2n: 2269.635,
    Alpha: 1,
    Beta: 1,
    CorrectionMethod: 0,
    RatioImage: BinaryField {
      bytes: 44776,
      rawValue: '(Binary data 44776 bytes, use -b option to extract)'
    },
    ImageWidth: 800,
    ImageHeight: 600,
    EncodingProcess: 'Baseline DCT, Huffman coding',
    BitsPerSample: 8,
    ColorComponents: 3,
    YCbCrSubSampling: 'YCbCr4:2:0 (2 2)',
    ImageSize: '800x600',
    Megapixels: 0.48
  }
}
```

## base64を画像に変換しexif情報を見る
```
$ yarn install
$ yarn start:base64-to-jpeg
```