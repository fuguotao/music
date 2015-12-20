//  添加事件，兼容大部分浏览器
function addEvent(obj, type, fn){ // type是无 on 的事件
    if(window.addEventListener){
        // Chrome,FireFox,Opera,Safari,IE9.0及以上
        obj.addEventListener(type, fn, false);
    } else {
        // IE8.0及以下
        obj.attachEvent('on'+type, fn);
    }
}

// mousedown 时背景色改变
function mdbg() {
    var me = $(this);
    if( me.hasClass("blackKey")){
        me.css("background-color","#eee");
    } else {
        me.css("background-color","#60b044")
    }

    sdPlayer(me);
}

function mubgTime() {
    var me = $(this);
    if( me.hasClass("blackKey")){
        setTimeout(function(){me.css("background-color", "#000");}, 300);
    } else {
        setTimeout(function(){me.css("background-color", "#fff");}, 300);
    }
}

// mousedown发声
var sdPlayer = function(that){
    var ext = '.ogg';
    var audioObj = new Audio("sound/" + that.attr('id') + ext);
    audioObj.play()
};


// ready 执行完后会销毁，将mubg,mubgTime放在里面，只将 mubgTime 函数绑定到了 mouseup 事件，但 mubg 未绑定（在mubgTime 中只以自付存在，当用时才去调用 mubg 函数）
$(document).ready(function(){
    var white = $(".whiteKey");
    var black = $(".blackKey");
    // 给每个黑色键添加变色事件
    black.each( function(){
        addEvent(this, "mousedown", mdbg);
        addEvent(this, "mouseup", mubgTime);
        addEvent(this, "mouseout", mubgTime);
    });

    white.each( function(){
        addEvent(this, "mousedown", mdbg);
        addEvent(this, "mouseup", mubgTime);
        addEvent(this, "mouseout", mubgTime);
    });
})
