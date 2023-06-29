module.exports.getRegex = (val) => (
    {
      $regex: val,
      $options: "i",
    }
  )