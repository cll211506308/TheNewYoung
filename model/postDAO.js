const DAO = require('../model/DAO');

class DB{
    //获取推荐的帖子
    getReconmendPost(){
        return DAO('select postId,postPic1,title,postLabel,postContent from post order by pageViews desc',[])
    }
    //获取养生堂的帖子
    getYangPost(){
        return DAO('select postId,postPic1,title,postLabel,postContent from post where postClassification = "养生堂" order by pageViews desc',[]);
    };
    //获取营养饮食的帖子
    getDietPost(){
        return DAO('select postId,postPic1,title,postLabel,postContent from post where postClassification = "营养饮食" order by pageViews desc',[]);
    };
    //获取健身课堂的帖子
    getFitPost(){
        return DAO('select postId,postPic1,title,postLabel,postContent from post where postClassification = "健身课堂" order by pageViews desc',[]);
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
        return DAO('SELECT users.headPic,post.userId,postId,postLabel,title,postContent,userName,pageViews,date_format(postTime,"%Y-%m-%d  %H:%i:%s") as postTime FROM post,users WHERE post.userId = users.userId order by postTime desc',[])
    }
    //查询单个帖子
    findPostId(postid){
        return DAO('SELECT post.userId,postId,postLabel,title,postContent,userName,pageViews,date_format(postTime,"%Y-%m-%d  %H:%i:%s") as postTime FROM post,users WHERE post.userId = users.userId and post.postId = ?',[postid])
    }
    // 发表帖子
    insertPost(posts){
        return DAO('insert into post set userId=?,title=?,postLabel=?,postTime=?,pageViews=?,postContent=?',[posts.userId,posts.title,posts.postLabel,posts.postTime,posts.pageViews,posts.postContent])
    }
    //删除帖子
    deletePost(id){
        return DAO('delete from post where postId = ?',[id])
    }


    //浏览量
    updatePostPv(postid){
        return DAO('update post set pageViews = pageViews + 1 where postid = ?',[postid])
    }

    //查看关注人的帖子
    getLikeuserPost(userId){
        return DAO('select  users.headPic,post.userId,postId,postLabel,title,postContent,userName,pageViews,date_format(postTime,"%Y-%m-%d  %H:%i:%s") as postTime from post,users WHERE post.userId = users.userId and post.userId =any(select attentionedUserId from attentions where userId =?)',[userId])
    }
}

module.exports = new DB();