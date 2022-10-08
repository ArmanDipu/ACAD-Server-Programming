const fs = require("fs")

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" })
  educations = JSON.parse(String(educations))

  edus = [];

  for (let key in educations) {
    edus.push(educations[key])
  }

  res.render("cv",{
    name: "Arman Hossain Dipu",
    profession : "Software Engineer",
    address : "Dhaka, Bangladesh",
    email : "armanshuvo2000@gmail.com",
    phone: "01611595616",
    educations:edus
})

}

module.exports = { getCV: getCV }