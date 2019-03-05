let errorHandler = (err,req,res,next)=>{
    console.log("application error handler called");
    console.log(err);
    res.send('Some error occurred at lobal level')
}

let notFoundHandler = (req,res,next)=>{
    console.log("global not found handler called")
    res.status(404).send('Route not found in application')
}

module.exports ={
   globalErrorHandler : errorHandler,
   globalNotFoundHandler : notFoundHandler 
}