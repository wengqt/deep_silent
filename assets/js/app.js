(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });



    //注册打分工具
    $('.starrr').starrr({
      change: function(e, value){
        alert('new rating is ' + value)
      }
    })
    window.pageIndex=0;

    var bar = document.getElementById('nav-bar').children[0].children;
    for(var i =0;i<bar.length;i++){

      bar[i].addEventListener('click',(function(i){
        console.log(i);

        return ()=>switchPages(window.pageIndex,i)


      })(i));

    }


  });





  

  $.fn.extend({
    animateCss: function(animationName, callback) {
      var animationEnd = (function(el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };

        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));

      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);

        if (typeof callback === 'function') callback();
      });

      return this;
    },
  });

})(jQuery);




function switchPages(lastIndex,nextIndex) {
  console.log(lastIndex,nextIndex)

  var $dom = $('#zone0');

  var nav = document.getElementById('nav-bar').children[0];
  var lastbar =nav.children[lastIndex];
  var nextbar =nav.children[nextIndex];
  lastbar.className='';
  nextbar.className='active';
  window.pageIndex=nextIndex;

  $dom.animateCss('bounceInUp');
  $('#dowebok').fullpage.destroy('all');
  $dom.html(dowebok2);

  buildFullpage();
  // $dom.fullpage.reBuild();
  // $last.animateCss('bounceOutUp', function() {
  //   // Do somthing after animation
  //   $last.css('display','none')
  //
  //   $next.css('display','block')
  //   $next.animateCss('bounceInUp');
  //
  //
  // });


}


const dowebok=`<div class="section">
                <div class="am-g two-boxes" >
                    <div class="am-u-sm-6 video-box">视频</div>
                    <div class="am-u-sm-6 video-box">文字（唇语翻译结果）</div>
                </div>
                <div class="bottom-options ">
                    <div class="btn-box"> <div class="btn-inner">选择视频</div> </div>
                    <div class="btn-box"> <div class="btn-inner">开始测试</div> </div>
                    <div class="starrr"></div>
                    <div class="btn-box"> <div class="btn-inner">打分反馈</div> </div>
                </div>


            </div>
            <div class="section">
                <div class="am-g two-boxes" style="height: 30vh">
                    <div class="am-u-sm-6" id="pic1-left">图片</div>
                    <div class="am-u-sm-6 " id="pic2-right">高光图</div>
                </div>
                <div class="long-words-box" id="word1">
                    111111111
                </div>
                <!--<div class="slide"><h3>第二屏的第一屏</h3></div>-->
                <!--<div class="slide"><h3>第二屏的第二屏</h3></div>-->
                <!--<div class="slide"><h3>第二屏的第三屏</h3></div>-->
            </div>
            <div class="section">
                <div class="am-g two-boxes" style="height: 30vh">
                    <div class="am-u-sm-6" id="pic3-left">图片</div>
                    <div class="am-u-sm-6"><div id="word2">介绍介绍2222222222222</div> </div>

                </div>
            </div>`


const dowebok2=`<div id="dowebok">
               <div class="section">
                <div class="am-g two-boxes" >
                    <div class="am-u-sm-6 video-box">视频22222</div>
                    <div class="am-u-sm-6 video-box">文字（唇语翻译结果）</div>
                </div>
                <div class="bottom-options ">
                    <div class="btn-box"> <div class="btn-inner">开始摄像</div> </div>
                    <div class="btn-box"> <div class="btn-inner">开始测试</div> </div>
                    <div class="starrr"></div>
                    <div class="btn-box"> <div class="btn-inner">打分反馈</div> </div>
                </div>


            </div>
            <div class="section">
                <div class="am-g two-boxes" style="height: 30vh">
                    <div class="am-u-sm-6" id="pic1-left">图片</div>
                    <div class="am-u-sm-6 " id="pic2-right">高光图</div>
                </div>
                <div class="long-words-box" id="word1">
                    111111111
                </div>
                <!--<div class="slide"><h3>第二屏的第一屏</h3></div>-->
                <!--<div class="slide"><h3>第二屏的第二屏</h3></div>-->
                <!--<div class="slide"><h3>第二屏的第三屏</h3></div>-->
            </div>
            <div class="section">
                <div class="am-g two-boxes" style="height: 30vh">
                    <div class="am-u-sm-6" id="pic3-left">图片</div>
                    <div class="am-u-sm-6"><div id="word2">介绍介绍2222222222222</div> </div>

                </div>
            </div>
            <div class="section"></div>
            </div>`


$(function(){
  //注册全屏幕滑动

  buildFullpage();


});

function buildFullpage() {

  $('#dowebok').fullpage({
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
    onLeave:function (index,nextIndex,direction) {

      if(nextIndex==2){
        var $pic_left = $('#pic1-left');
        var $pic_right = $('#pic2-right');
        var $word = $('#word1');

        $pic_left.animateCss('bounceInLeft');
        $pic_right.animateCss('bounceInRight');
        $word.animateCss('bounceInUp');


      }else if(nextIndex==3){
        var $left = $('#pic3-left');
        var $right = $('#word2');
        $left.animateCss('bounceInLeft')
        $right.animateCss('bounceInRight')
      }
    }
  });
}