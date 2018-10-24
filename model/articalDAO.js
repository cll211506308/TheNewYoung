const DAO = require('../model/DAO');

class DB {
    //获取推荐文章数据
    getReconmendEssay() {
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical order by pageViews desc', [])
    }

    //获取养生堂文章数据
    getYangEssay() {
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "养生堂" order by pageViews desc', []);
    };

    //获取营养饮食文章数据
    getDietEssay() {
        return DAO('select articalId,coverPic,title,articallabel,userId,pageViews from artical where articalClassification = "营养饮食" order by pageViews desc', []);
    };

    //获取健身课堂文章数据
    getFitEssay() {
        return DAO('select articalId,coverPic,title,articallabel,userId,pageViews from artical where articalClassification = "健身课堂" order by pageViews desc', []);
    };

    //获取点击对应文章数据
    getRelativeEssay(id) {
        return DAO('select title,articallabel,articalClassification,content,contentPic1,contentPic2,contentPic3,contentPic4,contentPic5,pageViews,articalClassification,artical.userId,autograph,userName from artical,users where artical.userId = users.userId and articalId = ?', [id])
    };

    //获取搜索相关文章数据
    searchEssay(keys) {
        return DAO('select articalId,coverPic,title,articalClassification,articalLabel,pageViews from artical where articallabel like "%' + keys + '%" or articalClassification like "%' + keys + '%" or content like "%' + keys + '%" order by pageViews desc', [])
    };

    //获取搜索相关帖子数据
    searchPost(keys) {
        return DAO('select postId,postPic1,title,postClassification,postLabel,pageViews from post where postLabel like "%'+keys+'%" or postClassification like "%'+keys+'%" or postContent like "%'+keys+'%" order by pageViews desc', [])
    };
    //删除文章(CLL)
    deleteArtical(articalid){
        return DAO("delete from artical where articalId = ?",[articalid])
    }
    //获取用户发布过的文章
    getUserPublish(userid){
        return DAO("select title,articalLabel from artical where userId = ?",[userid])
    }

    //养生堂热门文章排行
    getYangRank() {
        return DAO('select title from artical where articalClassification = "养生堂" order by pageViews desc', []);
    };
    //营养饮食热门文章排行
    getDietRank() {
        return DAO('select title from artical where articalClassification = "营养饮食" order by pageViews desc', []);
    };
    //健身课堂热门文章排行
    getFitRank() {
        return DAO('select title from artical where articalClassification = "健身课堂" order by pageViews desc', []);
    };
    
}

module.exports = new DB();