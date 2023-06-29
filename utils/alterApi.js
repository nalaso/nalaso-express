const { getStartDate, getEndDate } = require("./getISODate");
const { getRegex } = require("./getRegex");

class ApiFeatureHead {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
      this.newQueryStr = queryStr;
    }
    search() {
      
    }
    filter() {
      let newQueryStr = { ...this.queryStr };

      const removeItems = ["startDate","endDate"];
      removeItems.forEach((item) => delete newQueryStr[item]);

      newQueryStr = Object.fromEntries(Object.entries(newQueryStr).filter(([key, value]) => value!= ""));
      for(var key in newQueryStr){
        if(key!="entryDate")
        newQueryStr[key] = getRegex(newQueryStr[key])
      }

      this.query = this.query.find(newQueryStr);

      this.newQueryStr = newQueryStr
      return this;
    }
    
    pagination(currentPage, docPerPage) {
      let page = currentPage || 1;
      const skip = docPerPage * (page - 1);
      this.query = this.query.find().skip(skip).limit(docPerPage);
      return this;
    }
  
    match() {
      let newQueryStr = { ...this.queryStr };
      const removeItems = ["dept", "page", "limit"];
      removeItems.forEach((item) => delete newQueryStr[item]);
  
      this.query = this.query.aggregate([
        { $match: newQueryStr },
        { $project : { _id : 1, checkItem : 1, result : 1}}
        
      ]);
      return this;
    }
  }
  
  module.exports = ApiFeatureHead;
  