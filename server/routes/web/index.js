const { model } = require("mongoose");

module.exports= app => {

    const router=require('express').Router()
    // const Article=require('../../models/Article')

    const mongoose=require('mongoose')
    const Category=mongoose.model('Category')
    const Article=mongoose.model('Article')

    //插入假数据接口，每次访问这个接口会情况全部新闻数据，然后插入下面的假数据
    router.get('/news/init',async (req,res)=>{
        const parent=await Category.findOne({
            name:'新闻分类'
        })
        const cats=await Category.find().where({
            parent:parent
        }).lean()
        const newsTitles=["王者零距离 | 满满都是“料”！你关注的问题，策划现场回复了！", "狄某有话说 | 嚣张“演员”在线强卖？正义狄某不请自来！", "王者风物志 | 共创三分风物，五大赛道等你挥洒才情！", "稷下学院聚餐，星辰小伙用成员付账？", "铠技能异常问题修复，小乔体型优化进展【老亚瑟的答疑时间】", "9月9日净化游戏环境声明及处罚公告", "9月9日外挂专项打击公告", "9月9日“演员”惩罚名单", "9月8日体验服停机更新公告", "9月8日廉颇-无尽征程皮肤秒杀活动说明公告", "时隔五年，廉颇再出皮肤，限时秒杀不容错过！", "99公益日参与活动送好礼，廉颇新皮肤限时秒杀", "【99公益日-集合，一块做好事！】活动公告", "英雄专属梦境限时开启，白露时节好礼来袭", "荣耀中国节·银河配对，参与必得乞巧牵缘回城特效（新）", "2020年KPL秋季赛热血来袭，线下售票9月7日12:00开启！", "2020年KGL秋季赛选手大名单公布，9月13日该我上场！", "2020年KPL秋季赛大名单公布", "王者荣耀电竞推出六大措施打造全民参与体验闭环", "2020年王者荣耀世界冠军杯总决赛门票8月10日正式开售"]
        const newsList=newsTitles.map(title => {
            const randomCats=cats.slice(0).sort((a,b)=>Math.random()-0.5)
            return {
                categories:randomCats.slice(0,2),
                title:title
            }
        })

        await Article.deleteMany({})
        await Article.insertMany(newsList)
        res.send(newsList)
    })

    // 新闻列表接口
    router.get('/news/list',async (req,res) =>{

        // const parent=await Category.findOne({
        //     name:'新闻分类'
        // }).populate({
        //     path:'children',
        //     populate:'newsList'
        // }).lean()
        const parent = await Category.findOne({
            name:'新闻分类'
        })
        const cats= await Category.aggregate([
            {$match:{parent:parent._id}},
            {$lookup:{
              from:'articles',
              localField:'_id',
              foreignField:'categories',
              as:'newsList'  
            }},
            {
                $addFields:{
                    newsList:{$slice:['$newsList',5]}
                }
            }
        ])

        const subCats= cats.map(v => v._id)
        cats.unshift({
            name:'热门',
            newsList:await Article.find().where({
                categories:{$in:subCats}
            }).populate('categories').limit(5).lean()
        })

        cats.map(cat =>{

            cat.newsList.map(news =>{
                news.categoryName=cat.name === '热门'?news.categories[0].name : cat.name
                return news
            })

            return cat
        })
        res.send(cats)
    })

// 导入英雄数据

    app.use('/web/api',router)
}