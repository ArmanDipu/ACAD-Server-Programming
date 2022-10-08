const fs = require("fs")

const getCV = (req, res) => {

    info = fs.readFileSync("data/info",{ encoding: "utf-8" })
    info = JSON.parse(String(info))

    educations = fs.readFileSync("data/education", { encoding: "utf-8" })
    educations = JSON.parse(String(educations))

    edus = [];

    for (let key in educations) {
        edus.push(educations[key])
    }

    res.render("cv",{
        name: "Arman Hossain Dipu",
        info: info,
        educations:edus
})

}

module.exports = { getCV: getCV }