var text = '亲爱的#customer#，您已成功购买了#brand#的商品，订单编号为#order#，请凭订单编号或⼿机号⾄商家处消费！#url# 请保留此短信，及时查看消费情况哦！';
    var regex=/\#(.+?)\ /g;
    var result;
    var bookmark = []
    result=regex.exec(text)
    while(result!=null) {
        bookmark.push(result[1]);
        break;
    }
    console.log(bookmark)