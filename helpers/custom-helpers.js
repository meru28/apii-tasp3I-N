module.exports = {
  toArrayofObj: (hostname, path, gambar, label) => {
    const imageArr = [];
    if (gambar) {
      for (let i = 0; i < gambar.length; i++) {
        imageArr.push({
          imageUrl: gambar ? `https://${hostname}${path}/${gambar[i].filename}` : null,
          imagePath: gambar ? `${path}/${gambar[i].filename}` : null,
          label: label.length > 0 ? label[i] : '',
        });
      }
      return imageArr;
    }
    return [];
  },

  toArrayPdf: (hostname, path, laporan, judul, date) => {
    const pdfArr = [];
    const periode = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const now = new Date();
    if (laporan) {
      for (let i = 0; i < laporan.length; i++) {
        pdfArr.push({
          judul: judul.length > 0 ? judul[i] : '',
          periode: date ? periode[i].toLocaleDateString('id-ID', options) : null,
          pdfUrl: laporan ? `https://${hostname}${path}/${laporan[i].filename}` : null,
          pdfPath: laporan ? `${path}/${laporan[i].filename}` : null,
          dateCreated: now,
        });
      }
    }
  },

  getImgLabel: (imgArray) => imgArray.map((img) => ({
    imageUrl: img.imageUrl,
    imagePath: img.imagePath,
    label: img.label,
  })),

  toFormData: (formData, files, name) => {
  // eslint-disable-next-line no-plusplus
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      formData.append(name, file);
    }
    return formData;
  },

  checkImgSize: (imgSize) => {
    let qualityImg = 0;
    switch (true) {
      case imgSize < 500000:
        qualityImg = 40;
        break;
      case imgSize > 500000 && imgSize <= 1000000:
        qualityImg = 20;
        break;
      case imgSize > 1000000 && imgSize <= 2000000:
        qualityImg = 15;
        break;
      case imgSize > 2000000 && imgSize <= 3000000:
        qualityImg = 10;
        break;
      default:
        qualityImg = 3;
    }
    return qualityImg;
  },
};

// export const toArrayofObj = (hostname, path, gambar, label) => {
//   const imageArr = [];
//   if (gambar) {
//     for (let i = 0; i < gambar.length; i++) {
//       imageArr.push({
//         imageUrl: gambar ? `https://${hostname}${path}/${gambar[i].filename}` : null,
//         imagePath: gambar ? `${path}/${gambar[i].filename}` : null,
//         label: label.length > 0 ? label[i] : '',
//       });
//     }
//     return imageArr;
//   }
//   return [];
// };
//
// export const toArrayPdf = (hostname, path, laporan, judul, date) => {
//   const pdfArr = [];
//   const periode = new Date(date);
//   const options = { year: 'numeric', month: 'long', day: 'numeric' };
//   const now = new Date();
//   if (laporan) {
//     for (let i = 0; i < laporan.length; i++) {
//       pdfArr.push({
//         judul: judul.length > 0 ? judul[i] : '',
//         periode: date ? periode[i].toLocaleDateString('id-ID', options) : null,
//         pdfUrl: laporan ? `https://${hostname}${path}/${laporan[i].filename}` : null,
//         pdfPath: laporan ? `${path}/${laporan[i].filename}` : null,
//         dateCreated: now,
//       });
//     }
//   }
// };
//
// export const getImgLabel = (imgArray) => {
//   const imgandLabel = imgArray.map((img) => ({
//     imageUrl: img.imageUrl,
//     imagePath: img.imagePath,
//     label: img.label,
//   }));
//   return imgandLabel;
// };
//
// export const toFormData = (formData, files, name) => {
//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     formData.append(name, file);
//   }
//   return formData;
// };
//
// export const checkImgSize = (imgSize) => {
//   let qualityImg = 0;
//   switch (true) {
//     case imgSize < 500000:
//       qualityImg = 40;
//       break;
//     case imgSize > 500000 && imgSize <= 1000000:
//       qualityImg = 20;
//       break;
//     case imgSize > 1000000 && imgSize <= 2000000:
//       qualityImg = 15;
//       break;
//     case imgSize > 2000000 && imgSize <= 3000000:
//       qualityImg = 10;
//       break;
//     default:
//       qualityImg = 3;
//   }
//   return qualityImg;
// };
