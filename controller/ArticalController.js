const DAO = require('../model/DAO')
const ArticalDAO = require('../model/ArticalDAO');

module.exports = {
    getEssay:async (ctx,next)=>{
        try{
            let all=await ArticalDAO.getEssay();
            console.log(all)
            ctx.body = {'code': 200, "message": "ok", data: all};
        }catch (e){
            ctx.body = {'code': 500, "message": "没有查到相应文章！！"+e.message, data:[]};
        }

    },
}