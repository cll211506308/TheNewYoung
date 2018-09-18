const DAO = require('../model/DAO');

class DB{
    getReconmendEssay(){
        return DAO('select coverpic,title,articallabel from artical order by pageviews',[])
    }
    getYangEssay(){
        return DAO('select coverpic,title,articallabel from artical where articalClassification = "养生堂" order by pageviews desc',[]);
    };
    getDietEssay(){
        return DAO('select coverpic,title,articallabel from artical where articalClassification = "营养饮食" order by pageviews desc',[]);
    };
    getFitEssay(){
        return DAO('select coverpic,title,articallabel from artical where articalClassification = "健身课堂" order by pageviews desc',[]);
    };
    getRelativeEssay(id){
        return DAO('select title,articallabel,articalClassification,content,contentpic1,contentpic2,contentpic3,contentpic4,contentpic5,artical.userid,autograph from artical,users where artical.userid = users.userid and articalid = ?',[id])
    }
}

module.exports = new DB();