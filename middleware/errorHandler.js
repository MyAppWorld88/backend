const {constants}=require("../constants");
const errorHandler=(err,req,res,next)=>{
  // console.log(res.statusCode)

const statusCode =err.statusCode?err.statusCode:res.statusCode;
// console.log('statusCode',statusCode)
 switch (statusCode) {
   case constants.VALIDATION_ERROR:
     res.json({
       title: "Validation Failed",
       message: err.message,
       stackTrace: err.stack,
     });
     break;
   case constants.NOT_FOUND:
     res.json({
       title: "Not Found",
       message: err.message,
       stackTrace: err.stack,
     });
     break;
   case constants.UNAUTHORIZED:
     res.json({
       title: "UNAUTHORIZED",
       message: err.message,
       stackTrace: err.stack,
     });
     break;
   case constants.FORBIDDEN:
     res.json({
       title: "FORBIDDEN",
       message: err.message,
       stackTrace: err.stack,
     });
     break;
   case constants.SERVER_ERROR:
     res.json({
       title: "SERVER_ERROR",
       message: err.message,
       stackTrace: err.stack,
     });
     break;
   default:
      console.log("NO Error,All Good");
     break;
 }
 
};

module.exports = errorHandler;