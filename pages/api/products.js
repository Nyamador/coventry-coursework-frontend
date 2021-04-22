import mongoose from "mongoose"

mongoose.connect(
    "mongodb://localhost:27017/StudentDB",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const productSchema = {
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
}

let Product;

try{
    Product = mongoose.model("Product")
}catch{
    Product = mongoose.model("Product", productSchema, "Product")
}

export default (req, res) => {
    Product.find({}, (err, foundProduct) => {
      if (err) {
        res.status(404);
        console.log(err)
      } else {
        console.log(foundProduct);
        res.status(200).json(foundProduct);
      }
    });
  };