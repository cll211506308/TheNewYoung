const DAO = require('../model/DAO');

class DB {
    //获取推荐文章数据
    getReconmendEssay() {
        return DAO('select coverpic,title,articallabel from artical order by pageviews desc', [])
    }

    //获取养生堂文章数据
    getYangEssay() {
        return DAO('select coverpic,title,articallabel from artical where articalClassification = "养生堂" order by pageviews desc', []);
    };

    //获取营养饮食文章数据
    getDietEssay() {
        return DAO('select coverpic,title,articallabel from artical where articalClassification = "营养饮食" order by pageviews desc', []);
    };

    //获取健身课堂文章数据
    getFitEssay() {
        return DAO('select coverpic,title,articallabel from artical where articalClassification = "健身课堂" order by pageviews desc', []);
    };

    //获取点击对应文章数据
    getRelativeEssay(id) {
        return DAO('select title,articallabel,articalClassification,content,contentpic1,contentpic2,contentpic3,contentpic4,contentpic5,artical.userid,autograph from artical,users where artical.userid = users.userid and articalid = ?', [id])
    };

    //获取搜索相关文章数据
    searchEssay(keys) {
        return DAO('select coverpic,title,articalClassification,articallabel,pageviews from artical where articallabel like "%' + keys + '%" or articalClassification like "%' + keys + '%" or content like "%' + keys + '%"', [])
    };

    //获取搜索相关帖子数据
    searchPost(keys) {
        return DAO('select postpic1,title,postClassification,postabel,pageviews from post where postabel like "%'+keys+'%" or postClassification like "%'+keys+'%" or postcontent like "%'+keys+'%"', [])
    };

}

module.exports = new DB();