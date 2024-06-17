var rule = {
模板:'自动',
title:'星月',
host:'http://107.151.243.94:5566',
url:'/index.php/vod/show/id/fyclass/page/fypagr.html',
searchUrl:'index.php/vod/search/page/fypage/wd/**.html',
class_parse: '.navbar-items&&li:gt(0):lt(6);a&&Text;a&&href;.*/(.*?).html',
}