var rule = {
  title: '星辰',
  host: 'https://citytv.cc',
  url: '/tvs/fyclass/page/fypage/',
  searchUrl: '/wd/**/page/fypage/',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'UC_UA',
  },
  class_parse: '.stui-header__menu li:gt(0):lt(7);a&&Text;a&&href;/.*/(.*?)/',
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: 'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
  double: true,
  一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  二级: {
    title: '.stui-content__detail .title&&Text;.stui-content__detail p:eq(-2)&&Text',
    img: '.stui-content__thumb .lazyload&&data-original',
    desc: '.stui-content__detail p:eq(0)&&Text;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text',
    content: '.detail&&Text',
    tabs: '.stui-vodlist__head h3',
    lists: '.stui-content__playlist:eq(#id) li',
  },
  搜索: 'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.pic-text.text-right&&Text;a&&href',
  搜索1: 'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
  搜索2: 'ul.stui-vodlist__media&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
}