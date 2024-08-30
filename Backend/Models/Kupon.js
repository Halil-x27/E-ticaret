const mongoose = require("mongoose");

const KuponSchema = mongoose.Schema(
  {
    code: { type: String, required: true }, // Kupon kodu
    discountPercent: { type: Number, required: true }, // İndirim oranı
  },
  { timestamps: true }
);

const Kupon = mongoose.model("Kupon", KuponSchema);
module.exports = Kupon;