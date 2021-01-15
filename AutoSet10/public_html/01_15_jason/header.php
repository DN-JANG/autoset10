<!DOCTYPE html>
<html lang="ko">
<head>
    <title>FrontEnd_jason travel</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=no">
    <!-- form element 선택(포커스)시 확대 현상을 제거 user-scalable=no -->
    <meta name="Title" content="jason travel">
    <meta name="Publisher" content="FrontEnd jang, jaeyong">
    <meta name="Author-date" content="2021-01-15">
    <meta name="Author" content="jason travel">
    <meta name="Copyright" content="jason travel">
    <meta name="Keywords" content="jason travel, 여행, 관광">
    <meta name="Description" content="jason travel은 여행사입니다">
    <meta name="Robots" content="jason travel">
    
    <!-- favicon -->
    <link rel="shortcut icon" href="./img/main_visual_timer.png">
    <link rel="apple-touch-icon" href="./img/favicon-32x32.png">

    <!-- open icon -->
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- css -->
    <link rel="stylesheet" type="text/css" href="./css/fonts.css">
    <link rel="stylesheet" type="text/css" href="./css/common.css">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <link rel="stylesheet" type="text/css" href="./css/response.css">
    
    <!-- open source -->
    <script src="./js/lib/jquery-1.12.4.min.js"></script>
    <script src="./js/lib/jquery.touchSwipe.js"></script>
    <script src="./js/lib/prefixfree.min.js"></script>
    <script src="./js/lib/jquery.easing.1.3.js"></script>

</head>
<body id="intro">
<ul id="skip">
    <li><a href="#header" title="메뉴바로가기">메뉴바로가기</a></li>
    <li><a href="#main" title="메인바로가기">메인바로가기</a></li>
    <li><a href="#footer" title="하단바로가기">하단바로가기</a></li>
</ul>
<div id="wrap">
    <header id="header">
        <div class="wrap">
            <div class="header-gap">
                <div class="container">

                    <ul class="clearfix">
                        <li>
                            <a href="./index.php" class="logo-btn">
                                <img src="./img/logo_color.png" class="color" alt="">
                                <img src="./img/logo_white.png" class="white"  alt="">
                            </a>
                        </li>

                        <li>
                            <a href="#" class="menu-bar" href="#">
                                <span class="line-box">
                                    <i class="line line1"></i>
                                    <i class="line line2"></i>
                                    <i class="line line3"></i>
                                </span>
                                <span class="text">
                                    Menu
                                </span>
                            </a>
                        </li>

                        <li>
                            <ul>
                                <li><span><a href="./login.php" class="login-btn">LOGIN</a></span></li>
                                <li><span><i></i></span></li>
                                <li><span><a href="./join.php" class="join-btn">JOIN</a></span></li>
                                <li><span><a href="./confirm.php" class="confirm-btn"><span>견적<br>문의</span></a></span></li>
                                <li><span><a href="#" class="search-btn"><img src="./img/search_i.png" class="black_" alt=""><img src="./img/search_i_01.png" class="white_" alt=""></a></span></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </header>
    

    <nav id="nav">
        <div class="wrap">
            <div class="gap">
                <div class="container">
                    <ul>
                        <li><a href="./main1-1.php" class="main-btn">여행테마</a>
                            <div class="sub sub1">
                                <div class="sub-wrap">
                                    <div class="sub-gap">
                                        <ul>
                                            <li><a href="./main1-1.php" class="subBtn">베트남 / 발리 / 태국</a></li>
                                            <li><a href="./main1-2.php" class="subBtn">몰디브 및 특수지역</a></li>
                                            <li><a href="./main1-3.php" class="subBtn">유럽</a></li>
                                            <li><a href="./main1-4.php" class="subBtn">그 외 지역</a></li>
                                            <li><a href="./main1-5.php" class="subBtn">아만 리조트</a></li>
                                            <li><a href="./main1-6.php" class="subBtn">럭셔리</a></li>
                                            <li><a href="./main1-7.php" class="subBtn">가족</a></li>
                                            <li><a href="./main1-8.php" class="subBtn">허니문</a></li>
                                            <li><a href="./main1-9.php" class="subBtn">태교여행</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="./main2.php" class="main-btn">프로모션</a></li>
                        <li><a href="./main3.php" class="main-btn">JTS소식</a></li>
                        <li><a href="./main4.php" class="main-btn">여행후기</a></li>
                        <li><a href="./main5-1.php" class="main-btn">여행문의</a>
                            <div class="sub sub2">
                                <div class="sub-wrap">
                                    <div class="sub-gap">
                                        <ul>
                                            <li><a href="./main5-1.php" class="subBtn">일반여행문의</a></li>
                                            <li><a href="./main5-2.php" class="subBtn">단체여행문의</a></li>
                                            <li><a href="./main5-3.php" class="subBtn">리조트견적요청</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="./main6-1.php" class="main-btn">회사소개</a>
                            <div class="sub sub3">
                                <div class="sub-wrap">
                                    <div class="sub-gap">
                                        <ul>
                                            <li><a href="./main6-1.php" class="subBtn">About Us</a></li>
                                            <li><a href="./main6-2.php" class="subBtn">회사연혁</a></li>
                                            <li><a href="./main6-3.php" class="subBtn">오시는길</a></li>
                                            <li><a href="./main6-4.php" class="subBtn">공지사항</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>