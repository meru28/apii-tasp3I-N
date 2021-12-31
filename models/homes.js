const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  imageCarousel: [
    {
      imageUrl: { type: String },
      imagePath: { type: String },
      label: { type: String },
    },
  ],
  titleTaspen: {
    type: String,
    required: false,
  },
  periode: {
    type: String,
    required: false,
  },
  jangkaWaktu: {
    type: String,
    required: false,
  },
  sukuBunga: {
    type: Number,
    required: false,
  },
  imageEmployee: [
    {
      imageUrl: { type: String },
      imagePath: { type: String },
      label: { type: String },
    },
  ],
  dataNasabah: {
    nasabah: { type: Number },
    deposit: { type: Number },
    kredit: { type: Number },
  },
  bprDescription: {
    type: String,
  },
  imageCabang: [
    {
      imageUrl: { type: String },
      imagePath: { type: String },
      label: { type: String },
      namaCabang: { type: String },
      alamatCabang: { type: String },
      telp: { type: String },
    },
  ],
});

// HomeSchema.methods.editCarousel = function(carouselId, newObjImg) {
//   const CarouselIndex = this.imageCarousel.findIndex(ci => {
//     return ci._id.toString() === carouselId._id.toString()
//   })
//   const newCarousel = [...this.imageCarousel]
//   if(CarouselIndex >= 0) {
//     newCarousel[CarouselIndex] = newObjImg
//   } else {
//     console.log('object id carousel undefined')
//   }
//   return this.save()
// }

module.exports = mongoose.model('Home', HomeSchema);
