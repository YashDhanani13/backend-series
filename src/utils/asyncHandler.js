const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve().catch((err) => next(err));
  };
};

// const asyncHandler = () =>{}
// const asyncHandler  = (func) => () => {}
// const asyncHandler = (func)=> aysnc () => {}

// try catch   vala

// export {asyncHandler}
//  const asyncHandler = (fn) => async (req, res, next) =>{

//     try {
//             await fn(req,res, next)
//     } catch (error) {
//         res.status(error.code || 5000).json({
//             success : false,
//             message : err.message
//         })
//     }
//  }
