const DAO = require('../model/DAO');

class DB{
    getReconmendPost(){
        return DAO('select postpic1,title,postabel from post order by pageviews',[])
    }
    getYangPost(){
        return DAO('select postpic1,title,postabel from post where postClassification = "养生堂" order by pageviews desc',[]);
    };
    getDietPost(){
        return DAO('select postpic1,title,postabel from post where postClassification = "营养饮食" order by pageviews desc',[]);
    };
    getFitPost(){
        return DAO('select postpic1,title,postabel from post where postClassification = "健身课堂" order by pageviews desc',[]);
    };
    getRelativePost(id){
        return DAO('select title,postabel,postClassification,postcontent,postpic1,postpic2,postpic3,post.userid,autograph from post,users where post.userid = users.userid and postid = ?',[id])
    }
}

module.exports = new DB();