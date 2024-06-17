var rule = {
    模板:'mxone5',
  title: '墨韵',
  host: 'http://106.14.138.181',
  url: '/index.php/vod/show/id/fyclass/page/fypage.html',
  class_parse: '.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
  cate_exclude:'体育|记录片|直播',
  searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
}