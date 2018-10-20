const DAO = require('../model/DAO');

class DB{
    //获取推荐的帖子
    getReconmendPost(){
        return DAO('select postId,postPic1,title,postLabel from post order by pageViews desc',[])
    }
    //获取养生堂的帖子
    getYangPost(){
        return DAO('select postId,postPic1,title,postLabel from post where postClassification = "养生堂" order by pageViews desc',[]);
    };
    //获取营养饮食的帖子
    getDietPost(){
        return DAO('select postId,postPic1,title,postLabel from post where postClassification = "营养饮食" order by pageViews desc',[]);
    };
    //获取健身课堂的帖子
    getFitPost(){
        return DAO('select postId,postPic1,title,postLabel from post where postClassification = "健身课堂" order by pageViews desc',[]);
    };
    //获取点击后的帖子数据
    getRelativePost(id){
        return DAO('select title,postLabel,postClassification,postContent,postPic1,postPic2,postPic3,post.userId,autograph from post,users where post.userId = users.userId and postId = ?',[id])
    }


    //获取帖子总数
    findPostCount(){
        return DAO('select count(*) as count from post',[])
    }
    //查询所有帖子
    findPost(){
        return DAO('SELECT * FROM post,users WHERE post.userId = users.userId order by postTime desc',[])
    }
    // 发表帖子
    insertPost(posts){
        return DAO('insert into post set userId=?,title=?,postLabel=?,postTime=?,pageViews=?,postContent=?',[posts.userId,posts.title,posts.postLabel,posts.postTime,posts.pageViews,posts.postContent])
    }
    //删除帖子
    deletePost(id){
        return DAO('delete from posts where id = ?',[id])
    }


    //浏览量
    updatePostPv(postid){
        return DAO('update post set pageViews = pageViews + 1 where postid = ?',[postid])
    }

    //查看关注人的帖子
    getLikeuserPost(userId){
        return DAO('select * from post where userId = any(select attentionedUserId from attentions where userId =?)',[userId])
    }
}

module.exports = new DB();