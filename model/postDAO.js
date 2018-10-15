const DAO = require('../model/DAO');

class DB{
    //获取推荐的帖子
    getReconmendPost(){
        return DAO('select postpic1,title,postabel from post order by pageviews',[])
    }
    //获取养生堂的帖子
    getYangPost(){
        return DAO('select postpic1,title,postabel from post where postClassification = "养生堂" order by pageviews desc',[]);
    };
    //获取营养饮食的帖子
    getDietPost(){
        return DAO('select postpic1,title,postabel from post where postClassification = "营养饮食" order by pageviews desc',[]);
    };
    //获取健身课堂的帖子
    getFitPost(){
        return DAO('select postpic1,title,postabel from post where postClassification = "健身课堂" order by pageviews desc',[]);
    };
    //获取点击后的帖子数据
    getRelativePost(id){
        return DAO('select title,postabel,postClassification,postcontent,postpic1,postpic2,postpic3,post.userid,autograph from post,users where post.userid = users.userid and postid = ?',[id])
    }


    //获取帖子总数
    findPostCount(){
        return DAO('select count(*) as count from post',[])
    }
    //查询所有帖子
    findPost(){
        return DAO('select * from post',[])
    }
    // 发表帖子
    insertPost(){
        return DAO('insert into post set postid,userid=?,title=?,postlabel=?,time=?,=?,postcontent=?,postClassificatio=?',[])
    }
    //删除帖子
    deletePost(id){
        return DAO('delete from posts where id = ?',[id])
    }


    //浏览量
    updatePostPv(id){
        return DAO('update posts set pageviews= pageviews + 1 where id = ?',[id])
    }

    //查看关注人的帖子
    getLikeuserPost(userid){
        return DAO('select * from post where userid = any(select attentionsid from attentions where userid =?)',[userid])
    }
}

module.exports = new DB();