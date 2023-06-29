module.exports.getStartDate = (val) => {
    var date = val.split("T")[0]
    var time = "T00:00:00.000Z"
    return val+time
} 

module.exports.getEndDate = (val) => {
    var date = val.split("T")[0]
    var time = "T23:59:00.000Z"
    return val+time
}