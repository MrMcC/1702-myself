/**
 * Created by lzc on 2017/4/6.
 */
/*有一个对象表示整个游戏*/
var game = {
    //玩家、一张牌
    players: [new Player("貂蝉"), new Player("吕布"), new Player("董卓")],
    poker: new Poker(),
    sendCards: function (){
        for(var i = 0; i < this.poker.cardCount - 3; i++){
            this.players[i % 3].cards.push(this.poker.cards[i]);
        }
    },
    showCards: function (){
        for(var i = 0; i < this.players.length; i++){
            console.log(this.players[i].playerName + ":" + this.players[i].cards.toString());
        }
    },
    //游戏开始的方法
    startGame: function (){
        //先洗牌
        this.poker.shuffle();
        //发牌
        this.sendCards();
        //把牌现实中页面中 今天只是把每个人的牌显示在控制台
        this.showCards();
    }
};
game.startGame();

/*表示玩家的构造函数*/
function Player(playerName){
    this.playerName = playerName;
    //存储每个玩家手中的扑克
    this.cards = [];
}
/*表示扑克牌*/
function Poker(){
    this.cardCount = 54;
    this.cards = [];
    /*洗牌的功能*/
    this.shuffle = function (){
        var cards = this.cards;
        /*正统的打乱方式：随机抽取两个下标，然后交换这两个下标对应的元素*/
        /*for (var i = 0; i < 100; i++){
         var random1 = randomInt(0, 53);
         var random2 = randomInt(0, 53);
         var temp = cards[random1];
         cards[random1] = cards[random2];
         cards[random2] = temp;
         //不是number不要用异或进行交换数据
         // cards[random1] = cards[random1] ^ cards[random2];
         // cards[random2] = cards[random1] ^ cards[random2];
         // cards[random1] = cards[random1] ^ cards[random2];
         }*/

        cards.sort(function (a, b){
            return Math.random() > 0.5 ? 1 : -1
        })
    };

    //初始化poker中我们用到的所有的card
    var cards = this.cards;
    (function (){
        //把用到的54张牌放入this.cards数组中
        var huases = ["♣", "♠", "♥", "♦"];
        var points = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        for (var i = 0; i < huases.length; i++){
            for (var j = 0; j < points.length; j++){
                cards.push(new Card(huases[i], points[j]));
            }
        }
        cards.push(new Card("", "大王"))
        cards.push(new Card("", "小王"))
    }())
}

/*表示每张牌*/
function Card(huase, point){
    this.huase = huase;
    this.point = point;
    /*toString用来调试用，如果直接输出一个对象，则会自动调用这个对象的toString*/
    this.toString = function (){
        return this.huase + this.point;
    }
}
