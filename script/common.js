
//헤더 서식
$('.gnb').mouseenter(function(){
  $('.sub').stop().slideDown();
  $('.sub_box').stop().slideDown();
});

$('.h_wrap').mouseleave(function(){
  $('.sub').stop().slideUp();
  $('.sub_box').stop().slideUp();
});

//메인슬라이드 서식
const mslide = $('.slide_wrap');
const l_btn = $('.visual .left_btn');
const r_btn = $('.visual .right_btn');
const c_btn = $('.visual .ctrl_btn > li');

//1번 슬라이드 앞에 마지막 슬라이드를 배치
$('.slide_wrap ul li:last-child').insertBefore('.slide_wrap ul li:first-child');

//왼쪽으로 100%이동하여 1번슬라이드가 처음에 나오게 함
mslide.css('margin-left','-100%');

//moveleft 함수
function moveLeft(){
  mslide.animate({'margin-left':'-200%'},500,function(){
    $('.slide_wrap ul li:first-child').insertAfter('.slide_wrap ul li:last-child');
    mslide.css('margin-left','-100%');
  });
}

//시간객체를 사용하여 4초마다 움직이도록 한다
let Timer = setInterval(moveLeft,4000);

//moveRight 함수
function moveRight(){
  mslide.animate({'margin-left':'0'},500,function(){
    $('.slide_wrap ul li:last-child').insertBefore('.slide_wrap ul li:first-child');
    mslide.css('margin-left','-100%');
  });
}

//좌,우 버튼 클릭시 슬라이드 이동
l_btn.click(function(){
  moveRight();
  clearInterval(Timer);
});
r_btn.click(function(){
  moveLeft();
  clearInterval(Timer);
});
$('.visual .left_btn, .visual .right_btn').mouseleave(function(){
  Timer = setInterval(moveLeft,4000);
});

//컨트롤버튼(나중에함)
c_btn.click(function(){
  let idx = $(this).index();
  let on_b = $(this).parent().find('.on').index();
  console.log(idx, on_b);

  $('.visual .ctrl_btn > li').removeClass('on');
  $('.visual .ctrl_btn > li').eq(idx).addClass('on');

  
});

//기업 홍보 영상 클릭시 유튜브 영상이 나오게 함
$('.p_wrap').click(function(){
  $(this).find('a').hide().parent().find('iframe').show();
});


const p_l_btn = $('.product .left_btn');
const p_r_btn = $('.product .right_btn');
const p_list = $('.pr_wrap ul');

$('.pr_wrap ul li:last-child').insertBefore('.pr_wrap ul li:first-child');

p_list.css('margin-left','-100%');

p_l_btn.click(function(){
  p_list.animate({'margin-left':'0%'},500,function(){
    $('.pr_wrap ul li:last-child').insertBefore('.pr_wrap ul li:first-child');
    p_list.css('margin-left','-100%');
  });
});

p_r_btn.click(function(){
  p_list.animate({'margin-left':'-200%'},500,function(){
    $('.pr_wrap ul li:first-child').insertAfter('.pr_wrap ul li:last-child');
    p_list.css('margin-left','-100%');
  });
});

const m_list = $('.magazine ul li');

m_list.hover(function(){
  $(this).find('.m_box').stop().animate({'bottom':'0px'},400);
},function(){
  $(this).find('.m_box').stop().animate({'bottom':'-85px'},400);
});