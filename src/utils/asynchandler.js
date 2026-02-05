const asynchandler=(requesthandler)=>{(req,res,next)=>{
    Promise.resolve(requesthandler(req,res,next)).catch((error)=>next(error))
}}


export default asynchandler

// const asynchandler= (fn)=>{ return async(req,res,next)=>{

//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.statuscode||500).json({
//             success:false,
//             message:error.message || "internal server error"
//         })
//     }

// }}