//资源模型获取中间件
module.exports=options=>{
    return async (req,res,next)=>{
        const modelName=require('inflection').classify(req.params.resource)
        req.Model=require(`../models/${modelName}`)
        next()
    }
}