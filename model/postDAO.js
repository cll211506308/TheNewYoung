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
        return DAO('insert into post set postid,userid=?,title=?,postabel=?,time=?,=?,postcontent=?,postClassificatio=?',[])
    }
    //删除帖子
    deletePost(id){
        return DAO('delete from posts where id = ${id}',[id])
    }

    //查看帖子所有评论
    findComment(id){
        return DAO('select * from comments where id = ${id}',[id])
    }
    //浏览量
    updatePostPv(id){
        return DAO('update posts set pageviews= pageviews + 1 where id = ${id}',[id])
    }

    //查看关注人的帖子
    getLikeuserPost(id){
        return('select * from post where userid = (select likeid from userlike where userid = ${id})')
    }
}

module.exports = new DB();