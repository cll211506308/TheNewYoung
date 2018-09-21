const DAO = require('../model/DAO');

class DB {
    //获取推荐文章数据
    getReconmendEssay() {
        return DAO('select coverPic,title,articallabel from artical order by pageViews desc', [])
    }

    //获取养生堂文章数据
    getYangEssay() {
        return DAO('select coverPic,title,articallabel from artical where articalClassification = "养生堂" order by pageViews desc', []);
    };

    //获取营养饮食文章数据
    getDietEssay() {
        return DAO('select coverPic,title,articallabel from artical where articalClassification = "营养饮食" order by pageViews desc', []);
    };

    //获取健身课堂文章数据
    getFitEssay() {
        return DAO('select coverPic,title,articallabel from artical where articalClassification = "健身课堂" order by pageViews desc', []);
    };

    //获取点击对应文章数据
    getRelativeEssay(id) {
        return DAO('select title,articallabel,articalClassification,content,contentPic1,contentPic2,contentPic3,contentPic4,contentPic5,artical.userId,autograph from artical,users where artical.userId = users.userId and articalId = ?', [id])
    };

    //获取搜索相关文章数据
    searchEssay(keys) {
        return DAO('select coverPic,title,articalClassification,articallabel,pageViews from artical where articallabel like "%' + keys + '%" or articalClassification like "%' + keys + '%" or content like "%' + keys + '%"', [])
    };

    //获取搜索相关帖子数据
    searchPost(keys) {
        return DAO('select postPic1,title,postClassification,postLabel,pageViews from post where postLabel like "%'+keys+'%" or postClassification like "%'+keys+'%" or postContent like "%'+keys+'%"', [])
    };
    //删除文章(CLL)
    deleteArtical(articalid){
        return DAO("delete from artical where articalId = ?",[articalid])
    }
}

module.exports = new DB();