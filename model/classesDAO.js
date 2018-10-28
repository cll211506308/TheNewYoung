const DAO = require('../model/DAO');

class DB {
    getSomeFit1(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "健身课堂" and articalLabel like "%减脂%" order by pageViews desc', []);
    }
    getSomeFit2(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "健身课堂" and articalLabel like "%增肌%" order by pageViews desc', []);
    }
    getSomeFit3(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "健身课堂" and articalLabel like "%力量%" order by pageViews desc', []);
    }
    getSomeFit4(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "健身课堂" and articalLabel like "%塑形%" order by pageViews desc', []);
    }
    getSomeFit5(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "健身课堂" and articalLabel like "%核心%" order by pageViews desc', []);
    }

    getSomeFoods1(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "营养饮食" and articalLabel like "%菜谱%" order by pageViews desc', []);
    }
    getSomeFoods2(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "营养饮食" and articalLabel like "%食材%" order by pageViews desc', []);
    }
    getSomeFoods3(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "营养饮食" and articalLabel like "%搭配%" order by pageViews desc', []);
    }
    getSomeFoods4(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "营养饮食" and articalLabel like "%三餐%" order by pageViews desc', []);
    }
    getSomeFoods5(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "营养饮食" and articalLabel like "%素食%" order by pageViews desc', []);
    }

    getSomeYoungLife1(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "养生堂" and articalLabel like "%婴幼儿%" order by pageViews desc', []);
    }
    getSomeYoungLife2(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "养生堂" and articalLabel like "%青少年%" order by pageViews desc', []);
    }
    getSomeYoungLife3(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "养生堂" and articalLabel like "%中老年%" order by pageViews desc', []);
    }
    getSomeYoungLife4(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "养生堂" and articalLabel like "%男性%" order by pageViews desc', []);
    }
    getSomeYoungLife5(){
        return DAO('select articalId,coverPic,title,articalLabel,userId,pageViews from artical where articalClassification = "养生堂" and articalLabel like "%女性%" order by pageViews desc', []);
    }
}

module.exports = new DB();