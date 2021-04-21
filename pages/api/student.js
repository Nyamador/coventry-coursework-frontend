import mongoose from "mongoose"

mongoose.connect(
    "mongodb://localhost:27017/StudentDB",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const studentSchema = {
    firstname: String,
    lastname: String,
    othernames: String,
    indexnumber : Number,
    password: String
}

let Student;

try{
    Student = mongoose.model("Student")
}catch{
    Student = mongoose.model("Student", studentSchema, "Student")
}

export default (req, res) => {
    Student.find({}, (err, foundStudent) => {
      if (err) {
        res.status(404);
        console.log(err)
      } else {
        console.log(foundStudent);
        res.status(200).json(foundStudent);
      }
    });
  };