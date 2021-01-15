;(function($,window,document,undefined){


    var jason = {
        init:   function(){
            var that = this;

            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.section4Fn();
            that.loginSection2Fn();

        },
        headerFn:function(){
            var that     = null;
            var $window  = $(window);
            var $header  = $('#header');
            var $menuBar = $('.menu-bar');
            var $nav     = $('#nav');
            var $mainBtn = $('.main-btn');
            var $sub     = $('.sub');
            var $scroll  = false;
            var t        = false;
            var menuBar  = 0;  // menu를 click 안한 상태
            var sign     = -1;        // 부호 기본값 음수 -1
            var topPosi  = 124;

                $header.on({
                    mouseenter:function(){
                        that = $(this);
                        that.addClass('addHeader'); 
                    },
                    mouseleave:function(){
                        that = $(this);
                        if( $scroll === false && menuBar === 0 ){  /* scroll이 아닌 상태이면서 서브메뉴가 없을 때만 헤더배경 지워져라 */
                            that.removeClass('addHeader'); 
                        }
                    }
                });


                $window.scroll(function(){
                    that = $(this);
                    if( that.scrollTop() >= 30 ){
                        $scroll = true;  // 스크롤 10px 이상인경우 true 변경
                        $header.addClass('addHeader');
                        if( t===false ){
                            t=true;
                            var headerH = $('#header').height();
                            $('html,body').stop().animate({scrollTop:$('#main #section2').offset().top-headerH},600,'easeInOutExpo');
                        }
                        
                    }
                    else{
                        t=false;
                        $scroll = false;  // 스크롤 10px 이하인경우 false 변경
                        if(menuBar === 0){  // hamburger menu 클릭안된 상태에만 헤더배경이 없어짐
                            $header.removeClass('addHeader');
                        }
                    }
                });


                //1024px 이상이면 $(#nav) top:124px
                //1024px 이하이면 $(#nav) top:84px
                //780px  이하이면 $(#nav) top:64px

                $window.resize(function(){
                    resizeFn();
                });

                // 화면의 크기변화에 따른 반응형 mobile, tablet, desktop menu
                function resizeFn(){
                    if($(this).innerWidth()>1024){
                        topPosi = 124;
                        $nav.stop().show(0).animate({top:(sign*topPosi)},300);
                    }
                    else if($(this).innerWidth()>780){
                        topPosi = 84;
                        $nav.stop().show(0).animate({top:(sign*topPosi)},300);
                    }
                    else {
                        topPosi = 0;
                        $sub.stop().slideDown(0);
                        $nav.stop().animate({top:0},0);
                        if(m == 1){
                            $nav.show(0);
                            $('html').addClass('addScroll');
                        }
                        else {
                            $nav.hide(0);
                            $('html').removeClass('addScroll');
                        }
                    }
                }
                $nav.hide(0);
                setTimeout(resizeFn,10);  // 로딩시 최초에 한번 실행



                // hamburger menu click 하면 기억하는 변수설정 (desktop에서)
                // navigation event

                $menuBar.on({  // hamburger menu X 바뀜 | menu가 위아래로 toggle되는 Fn.
                    click: function(e){
                        e.preventDefault();
                        if(menuBar == 0){  // 처음 click(toggle)
                            menuBar = 1;
                            sign    = 1;   // sign(부호)는 +(양수)
                        }
                        else{
                            menuBar = 0;   // 두번째 click(toggle)
                            sign    = -1;  // sign(부호)는 -(음수)
                        }
                        resizeFn();
                        $(this).toggleClass('addBtn');
                        // $('#nav').stop().slideToggle(300);
                    }
                });


                // main button event
                $mainBtn.on({
                    mouseenter: function(){
                        if( $window.innerWidth() > 780 ){  // 780이상일때만 내려와라
                            $sub.stop().slideUp(300);  // sub 전체가 내려와라
                            $(this).next('.sub').stop().slideDown(300);  // this만 내려와라
                        }
                    }
                });

                // #nav를 벗어나면 sub menu 접히는(사라지는) 효과 event
                $nav.on({
                    mouseleave: function(){
                        $sub.stop().slideUp(300);
                    }
                });



        },
        section1Fn:function(){  // 익명함수 method
            var cnt = 0;
            var n          = $('#main #section1 .slide').length-2; // 4
            var $slide     = $('#main #section1 .slide');
            var $nextBtn   = $('#main #section1 .next-btn');
            var $prevBtn   = $('#main #section1 .prev-btn');
            var $slideWrap = $('#main #section1 .slide-wrap');
            var $pageBtn   = $('#main #section1 .page-btn');
            var $smoothBtn = $('#main #section1 .smooth-btn');
            var setId = null;
            var setId2 = null;
            var $second = 5; // 5초 간격
            var tCnt = 0; 

            
            
            /////////// slide /////////////

            // main slide Fn.
            function mainSlideFn(){
                $slideWrap.stop().animate({left:-(100*cnt)+'%'},600, function(){
                    if(cnt>n-1){cnt=0;} // n개인경우 = n-1
                    if(cnt<0){cnt=n-1;} 
                    $slideWrap.stop().animate({left:-(100*cnt)+'%'},0);
                });
                // page button Fn. 호출 (parameter)
                pageBtnFn(cnt);
            }

            // page button(indicator) event Fn.
            function pageBtnFn(z){
                z==n?z=0:z;     // n(4)
                z==-1?z=n-1:z;  // 3=n(4)-1
                $pageBtn.removeClass('addCurrent');
                $pageBtn.eq(z).addClass('addCurrent');
            }

            // next slide count Fn.
            function nextCountFn(){
                cnt++;
                mainSlideFn();
            }

            // previous slide count Fn.
            function prevCountFn(){
                cnt--;
                mainSlideFn();
            }

            // auto play
            function autoTimerFn(){
                setId = setInterval(nextCountFn,1000*$second);
            }

            // button event 발생시 timer control Fn.
            function timerFn(){
                tCnt=0;
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    tCnt++; // 1초에 1씩증가 1 2 3 4 5
                    if(tCnt>$second){ // 4초후에
                        clearInterval(setId2);
                        nextCountFn();
                        autoTimerFn();
                    }
                },1000);
            }

            // page button event
            $pageBtn.each(function(index){
                $(this).on({
                    click:function(event){
                        event.preventDefault();
                        clearInterval(setId);
                        timerFn();
                        cnt = index;
                        mainSlideFn();
                    }
                });
            });
                
            // next slide button click event
            $nextBtn.on({
                click:  function(event){
                    event.preventDefault();
                    clearInterval(setId);
                    timerFn();
                    if(!$slideWrap.is(':animated')){
                        nextCountFn();
                    } 
                }
            });

            // previous slide button click event
            $prevBtn.on({
                click:  function(event){
                    event.preventDefault();
                    clearInterval(setId);
                    timerFn();
                    if(!$slideWrap.is(':animated')){
                        prevCountFn();
                    }
                }
            });

            // touch swipe event
            $('#main #section1').swipe({
                swipeLeft:  function(event){ // next slide
                    event.preventDefault();
                    clearInterval(setId);
                    timerFn();
                    if(!$slideWrap.is(':animated')){
                        nextCountFn();
                    } 
                },
                swipeRight:  function(event){ // prev slide
                    event.preventDefault();
                    clearInterval(setId);
                    timerFn();
                    if(!$slideWrap.is(':animated')){
                        prevCountFn();
                    }
                }
            });



            setTimeout(autoTimerFn,10);


            /////////// smooth button ///////////
            $smoothBtn.on({
                click:  function(e){
                    e.preventDefault();
                    var headerH = $('#header').height();
                    var url = $(this).attr('href');
                        $('html,body').stop().animate({ scrollTop:$( url ).offset().top-headerH },600,'easeInOutExpo');
                }
            });


            /////////// resize /////////////
            var winW = $(window).width();
            var winH = $(window).height();
                
                function resizeFn(){
                    winW = $(window).width();
                    winH = $(window).height();
                    $('#main #section1, #login #section1').css({ height:winH });  // login.php의 창높이를 넣어줌  #login #section1
                    $('#main #section2').css({ marginTop:winH });
                    $slide.css({ width:winW })
                }
                setTimeout(resizeFn,10);

                $(window).resize(function(){
                    resizeFn();
                });




        },
        section2Fn:function(){

            var $win  = $(window);
            var $gal  = $('#main .gallery li');
            var $galW = $('#main .gallery li').width();
            var $galH =  $galW * 0.832468967;

                function resizeFn(){
                    $galW = $('#main .gallery li').width(); // 칸 너비
                    $galH =  $galW * 0.832468967; // 칸 높이 비율계산
                    $gal.css({height:$galH});
                }

                setTimeout(resizeFn,10);

                $win.resize(function(){
                    resizeFn();
                });


        },
        section3Fn:function(){
            // 박스높이 slide View Box 너비가 1360이하이면 높이 자동 설정
            var $window    = $(window);
            var $winW      = $(window).innerWidth();
            var $slideView = $('#main #section3 .slide-view');
            var $pageBtnW  = $('#main #section3 .pageBtn').innerWidth();
            var $pageWrap  = $('#main #section3 .page-wrap');
            var $slideBg   = $('#main #section3 .slide-bg-image');
            var $slideBgW  = $('#main #section3 .slide-bg-image').innerWidth();

                

                function resizeFn(){
                    $winW = $(window).innerWidth();
                    $pageBtnW  = $('#main #section3 .pageBtn').innerWidth();
                    $slideBgW  = $('#main #section3 .slide-bg-image').innerWidth();

                    if($winW<=1360){
                        $slideView.css({height:$winW*0.419117647}); // 570 = 1360 * 0.419117647
                        $pageWrap.css({height:$pageBtnW});
                        $slideBg.css({height:$slideBgW });
                    }
                    else{
                        $slideView.css({height:570}); // 570 = 1360 * 0.419117647
                    }
                }
                
                setTimeout(resizeFn,10);

                $window.resize(function(){
                    resizeFn();
                });


                // fade in-out slide responsive web
                var cnt = 0;
                var setId = null;  // timer
                var n        = $('#main #section3 .s3slide').length-1;  // 2 = 3-1 = index number (0 1 2)
                var $nextBtn = $('#main #section3 .nextBtn');
                var $prevBtn = $('#main #section3 .prevBtn');
                var $slide   = $('#main #section3 .s3slide');
                var $pageBtn = $('#main #section3 .pageBtn');
                var a = [1,2];



                // 1-1.main next slide Fn.
                function mainNextSlideFn(){
                    console.log(cnt);
                    $slide.css({zIndex:1});  // reset (모든 slide reset --> zIndex:1)
                    $slide.eq(cnt==0? n:cnt-1).css({zIndex:2});  // current의 previous slide | n은 0까지 밖에 없으니 .eq(cnt==0? n: cnt-1)를 써야함
                    $slide.eq(cnt).css({zIndex:3}).animate({opacity:0},0).animate({opacity:1},1000);  // current slide
                    pageBtnFn();
                }
                
                // 1-2.main previous slide Fn.
                function mainPrevSlideFn(){
                    console.log(cnt);
                    $slide.css({zIndex:1,opacity:1});  // reset (모든 slide reset --> zIndex:1)
                    $slide.eq(cnt).css({zIndex:2});  // current의 previous slide | n은 0까지 밖에 없으니 .eq(cnt==0? n: cnt-1)를 써야함
                    $slide.eq(cnt==n? 0:cnt+1).css({zIndex:3}).animate({opacity:1},0).animate({opacity:0},1000);  // current slide
                    pageBtnFn();
                }

                // 2-1.main next count slide Fn. | next slide를 호출하기 위한
                function nextCountFn(){
                    cnt++;
                    if(cnt>n){cnt=0}
                    mainPrevSlideFn();
                }
                
                // 2-2.main previous count slide Fn. | next slide를 호출하기 위한
                function prevCountFn(){
                    cnt--;
                    if(cnt<0){cnt=n}
                    mainPrevSlideFn();
                }

                // 3-1.next arrow button click event
                $nextBtn.on({
                    click: function(event){
                        event.preventDefault();
                        nextCountFn();
                    }
                });
                
                // 3-2.prev arrow button click event
                $prevBtn.on({
                    click: function(event){
                        event.preventDefault();
                        prevCountFn();
                    }
                });

                // 4.page button (indicator button) event Fn.                
                // 현재 slide가
                // 첫번째 slide면 page button 1 : [1] 두번째 slide 이미지가 보여야 함 s3Slide2.jpg
                // 첫번째 slide면 page button 2 : [2] 세번째 slide 이미지가 보여야 함 s3Slide3.jpg

                // 두번째 slide면 page button 1 : [0] 첫번째 slide 이미지가 보여야 함 s3Slide1.jpg
                // 두번째 slide면 page button 2 : [2] 세번째 slide 이미지가 보여야 함 s3Slide3.jpg

                // 세번째 slide면 page button 1 : [0] 첫번째 slide 이미지가 보여야 함 s3Slide1.jpg
                // 세번째 slide면 page button 2 : [1] 두번째 slide 이미지가 보여야 함 s3Slide2.jpg

                function pageBtnFn(){

                switch(cnt){
                    case 0:
                        // case 0 첫번째 slide인 경우
                        a = [1,2];  // file의 no.
                        break;
                    case 1:
                        // case 1 두번째 slide인 경우
                        a = [0,2];
                        break;
                    case 2:
                        // case 2 세번째 slide인 경우
                        a = [0,1];
                    }

                    // $pageBtn.eq(0).css({backgroundImage:'url(./img/s3slide'+ a[0] +'.jpg)'}); // 경로가 html이 기준이 되기 때문에 ../img가 아니라 ./img 가 됨
                    // $pageBtn.eq(1).css({backgroundImage:'url(./img/s3slide'+ a[1] +'.jpg)'}); 

                    for(i=0;i<a.length;i++){
                        $pageBtn.eq(i).css({backgroundImage:'url(./img/s3slide'+ a[i] +'.jpg)'});
                    }
                }
                
                // 5-1.page button (indicator button) click event
                $pageBtn.each(function(index){
                    $(this).on({
                        click: function(event){
                            event.preventDefault();

                            console.log('클릭한 슬라이드 번호',index);  // 클릭한 슬라이드 번호
                            console.log('현재 실행중인 슬라이드',cnt);  // 현재 실행중인 슬라이드

                            var imsi = cnt;         //현재 실행 중인 번호를 임시에 보관 그리고
                            var cnt  = a[index];    // a[1,2]배열 값(인수) 클릭한 인수에 해당된 배열값 a[1]=2

                            if(imsi < index){       // 클릭한 번호가 더 크면 다음 슬라이드
                                mainNextSlideFn();  // 함수 실행범위(scope)에 변수 cnt가 포함
                            }
                            else if(imsi > a[index]){  // 클릭한 번호가 더 작으면 다음 슬라이드
                                mainPrevSlideFn();
                            }


                            console.log('클릭한 슬라이드 번호',index);  // 클릭한 슬라이드 번호
                            console.log('현재 실행중인 슬라이드',cnt);  // 현재 실행중인 슬라이드
                        }
                    });
                });
                
                // function pageBtnFn(){

                // switch(cnt){
                //     case 0:
                //         // case 0 첫번째 slide인 경우                        
                //         $pageBtn.eq(0).css({backgroundImage:'url(./img/s3Slide2.jpg)'}); // 경로가 html이 기준이 되기 때문에 ../img가 아니라 ./img 가 됨
                //         $pageBtn.eq(1).css({backgroundImage:'url(./img/s3Slide3.jpg)'}); 
                //         break;
                //     case 1:
                //         // case 1 두번째 slide인 경우
                //         $pageBtn.eq(0).css({backgroundImage:'url(./img/s3Slide1.jpg)'});
                //         $pageBtn.eq(1).css({backgroundImage:'url(./img/s3Slide3.jpg)'});
                //         break;
                //     case 2:
                //         // case 2 세번째 slide인 경우
                //         $pageBtn.eq(0).css({backgroundImage:'url(./img/s3Slide1.jpg)'});
                //         $pageBtn.eq(1).css({backgroundImage:'url(./img/s3Slide2.jpg)'});
                //     }
                // }
                
                // // 5-1.page button (indicator button) click event
                // $pageBtn.on({
                //     click: function(event){
                //         event.preventDefault();

                //     }
                // });
        },

        section4Fn:function(){

            // slide container box width에 따른 slide 3개의 width 구하기
            // 1570-(20*2)=1530(gallary margin)
            // slide width는 1570/3=523.333 (view box width)
            // 반응형으로 slide container box width 변화에 따른 slide width 계산

            var totalN        = $('#main #section4 .slide').length;  // slide 개수 10개
            var slideN        = 3;  // desktop 3개(1024px이상), tablet 2개(1024px이하), mobile(760px이하) 1개 보이게 하겠다 !!
            var $slideCont    = $('#main #section4 .slide-container');
            var slideW        = $('#main #section4 .slide-container').innerWidth()/slideN;
            var $slideWrap    = $('#main #section4 .slide-wrap');
            var $slide        = $('#main #section4 .slide');
            var $pageBtn      = $('#main #section4 .pageBtn');
            var $window       = $(window);
            var cnt = 0;
            var setId = null;
            var setId2 = null;

                function resizeFn(){
                    if($slideCont.innerWidth() > 1024){
                        slideN = 3;
                    }
                    else if($slideCont.innerWidth() > 680){
                        slideN = 2;
                    }
                    else {
                        slideN = 1;
                    }
                    console.log(slideN);

                    slideW     = $slideCont.innerWidth()/slideN;  // slide 1개의 width
                    $slideWrap.css({width:(slideW*totalN),marginLeft:-(slideW*3) });  // $slideWrap와 $slide 이 2가지 반드시 들어가야 반응형이 됨 !!!
                    $slide.css({width:slideW, height:slideW-40});
                    $slideWrap.stop().animate({left:-(slideW*cnt)},0);  // 속도를 500이든 600이든 주면 변화되는 모습이 보임
                }

                setTimeout(resizeFn,10);  // 처음 로딩시(새로고침시) 1번만!

                $window.resize(function(){  // 크기가 변경될 때만 반응함
                    resizeFn();
                });


                //////////////////// main slide responsive ////////////////////

                // 1.main slide Fn.
                function mainSlideFn(){
                    $slideWrap.stop().animate({left:-(slideW*cnt)},1000,'easeOutExpo', function(){
                        if(cnt>3){cnt=0;}  // 0~3까지
                        if(cnt<0){cnt=3;}
                        $slideWrap.stop().animate({left:-(slideW*cnt)},0);
                    });
                    pageBtnEventFn();

                }
                
                // 2-1.next count slide Fn.
                function nextCountslidefn(){
                    cnt++;
                    mainSlideFn();
                }
                
                // 2-2.previous count slide Fn.
                function prevCountslidefn(){
                    cnt--;
                    mainSlideFn();
                }
                
                // 3-1.swipe next touch event
                $slideCont.swipe({
                    swipeLeft: function(){
                        timerControlFn();
                        if(!$slideWrap.is(':animated')){
                            nextCountslidefn();
                        }
                    },
                    // 3-2.swipe previous touch event
                    swipeRight: function(){
                        timerControlFn();
                        if(!$slideWrap.is(':animated')){
                            prevCountslidefn();
                        }
                    }
                });

                // 4.page button event Fn.
                function pageBtnEventFn(){
                    var z = cnt;
                    if(z>3){z=0}
                    if(z<0){z=3}
                    $pageBtn.removeClass('addPage');  // removeClass가 addClass보다 반드시 먼저 와야함(아래줄)
                    $pageBtn.eq(cnt).addClass('addPage');
                }


                // 5.page button click event
                $pageBtn.each(function(index){
                    $(this)
                    .on('click', function(e){
                        e.preventDefault();
                        timerControlFn()
                        cnt = index;  // 직접 선택한 슬라이드 번호를 이용하여 메인슬라이드 함수 호출
                        mainSlideFn();
                    })  // ; 세미콜론을 지워야 계속 연결가능
                    .on('mouseenter', function(e){  // 실제는 필요없지만, 연결을 위한 연습용
                        e.preventDefault();
                        cnt = index;
                        mainSlideFn();
                    });
                });

                // 6. auto play Fn.
                function autoPlayFn(){
                    setId = setInterval(nextCountslidefn,3000);
                }
                autoPlayFn();

                // 7.timer control Fn.
                function timerControlFn(){
                    var tcnt = 0;
                    clearInterval(setId);
                    clearInterval(setId2);  // reset을 위해 setId, setId2 모두 반드시 넣어줌
                    setId2 = setInterval(function(){
                        tcnt++;
                        if(tcnt>=6){
                            clearInterval(setId2);
                            nextCountslidefn();  // 3초후 바로 실행
                            autoPlayFn();        // 자동으로 3초후에 바로 실행
                        }
                    },1000);
                }
        },


        //////////// login page ////////////
        
        loginSection2Fn:function(){

        }
    };

    jason.init();


})(jQuery,window,document);