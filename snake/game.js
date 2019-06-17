/**
 * Created by wyh on 2019/4/11.
 */
    //自调用函数--游戏对象
(function () {
    var that = null;

    function Game(map) {
        this.food = new food();
        this.snake = new snake();
        this.map = map;
        that = this;
    }

    Game.prototype.init = function () {
        this.food.init(this.map);
        this.snake.init(this.map);
        //调用自动移动小蛇的方法
        this.runSnake(this.food, this.map);
        //调用按键的方法
        this.bindKey();
    };
    //添加原型方法--设置小蛇可以自动的跑起来
    Game.prototype.runSnake = function (food, map) {
        var timeId = setInterval(function () {//定时器里的this是window

            this.snake.move(food, map);
            //初始化小蛇
            this.snake.init(map);
            //横纵坐标的最大值
            var maxX = map.offsetWidth / this.snake.width;
            var maxY = map.offsetHeight / this.snake.height;
            //小蛇头部的坐标
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headX < 1 || headX >= maxX - 1) {//减1是为了不让小蛇的头撞出去（自己加的）,小于1同理
                //撞墙了，停止定时器
                clearInterval(timeId);
                alert("游戏结束");
            }
            //纵坐标
            if (headY < 1 || headY >= maxY - 1) {
                //撞墙了，停止定时器
                clearInterval(timeId);
                alert("游戏结束");
            }
        }.bind(that), 150);
    };
    Game.prototype.bindKey = function () {
        //获取用户的按键，改变小蛇的方向
        document.addEventListener("keydown", function (e) {
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = "left";
                    break;
                case 38:
                    this.snake.direction = "top";
                    break;
                case 39:
                    this.snake.direction = "right";
                    break;
                case 40:
                    this.snake.direction = "bottom";
                    break;
            }
        }.bind(that), false);
    };
    window.game = Game;
}());
function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return true;
    }
}
