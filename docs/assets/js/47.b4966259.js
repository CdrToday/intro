(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{283:function(a,v,t){"use strict";t.r(v);var r=t(38),_=Object(r.a)({},function(){var a=this,v=a.$createElement,t=a._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"第-36-周"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第-36-周","aria-hidden":"true"}},[a._v("#")]),a._v(" 第 36 周")]),a._v(" "),t("p",[a._v("“你能从一片空白里，看到，可能吗？”")]),a._v(" "),t("p",[a._v("这周忙里忙外的做了些事情，不过老实说，拍扁了也没什么，或许会像现在无法理解三个星期前的那个版本一样，过不了多久就会对这个版本嗤之以鼻。")]),a._v(" "),t("p",[a._v("第一版界面的制作是为了催促自己动手，第二版界面通过模仿微信订阅号进行优化，如今这版，主要的情况在于根据 cdr.today 的具体功能，从订阅号助手的设计风格中脱离了出来，同时参考了slack，livejournal 与 iOS 自带的 mail。")]),a._v(" "),t("p",[a._v("总算有了些 Garbage Version 该有的样子。")]),a._v(" "),t("ul",[t("li",[a._v("富文本编辑")]),a._v(" "),t("li",[a._v("自动生成博客网站")]),a._v(" "),t("li",[a._v("文章存为图片 / 分享")])]),a._v(" "),t("h3",{attrs:{id:"cdr-today-0-1-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdr-today-0-1-12","aria-hidden":"true"}},[a._v("#")]),a._v(" cdr.today@0.1.12")]),a._v(" "),t("p",[a._v("为了弥补总是忘记该说些什么的问题，这周每次迭代都有了一些流水账，每个迭代的小版本，背后都藏着一次思维断片 xd")]),a._v(" "),t("h3",{attrs:{id:"v0-1-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-7","aria-hidden":"true"}},[a._v("#")]),a._v(" @v0.1.7")]),a._v(" "),t("p",[a._v("通过 image_picker 自带的图片缩放工具进行图片压缩，清理了几个不必要的插件。")]),a._v(" "),t("p",[a._v("左右滑动的跳转效果看起来十分缓慢笨拙，如微信，这里替换成了 渐隐(fade)，所有左上角的 返回按钮全部换成了关闭，这是一个十分轻巧的 App，不需要 “返回“ 的逻辑来使我们的思维变得冗余，never fallback。")]),a._v(" "),t("p",[a._v("统一了所有请求的加载状态，确保在请求过程中有请求状态显示，否则在网络环境差的时候，我们无法分清到底是请求失败还是 App 卡死。")]),a._v(" "),t("h3",{attrs:{id:"v0-1-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-8","aria-hidden":"true"}},[a._v("#")]),a._v(" @v0.1.8")]),a._v(" "),t("p",[a._v("这个版本花了不少功夫，自作自受，之前的 api 设计以及一些变量名，现在感觉不顺眼，所以接口前后端都重写了一遍，顺道清理简化了一些垃圾代码，在这个版本中，cdr.today 的前后端没有一行代码是多余的。")]),a._v(" "),t("h3",{attrs:{id:"v0-1-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-9","aria-hidden":"true"}},[a._v("#")]),a._v(" @v0.1.9")]),a._v(" "),t("p",[a._v("做了文章列表的上拉刷新和下滑加载，这地方不少有趣的拓展空间，比如微信首页可以上拉到 2 楼(小程序页)，算是下个版本一些新功能的入口，的备用方案。")]),a._v(" "),t("h3",{attrs:{id:"v0-1-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-10","aria-hidden":"true"}},[a._v("#")]),a._v(" @v0.1.10")]),a._v(" "),t("p",[a._v("重新做了个 ICON，上一个版本的 ICON 有在一个小小的方形空间里显示 7 个字母的嫌疑，如今看来，不仅是那个 ICON，包括这个项目的名字，都蛮冗余的。")]),a._v(" "),t("p",[a._v("新 ICON 也很蠢，这个样子：(t ‘)")]),a._v(" "),t("p",[a._v("我倒是觉得非常有意思，就像这个项目的名字一样，但它们实在是不够友好，很多有趣的东西不够友好，不怎么讨喜，也是改来改去没个尽头的原因之一。")]),a._v(" "),t("p",[a._v("取消了文章列表中的内容预览，调整为日期显示，这个修改思索良久，它牵扯到编辑过程中要不要加推荐语的问题，目前的态度则是，cdr.today 的用户不需要一板一眼的编辑文章，麻烦，随心真实的写东西是最重要的，多那么多选项内容，多点那么多下，有这么些时间不如放下手机，干点什么别的事情。")]),a._v(" "),t("h3",{attrs:{id:"v0-1-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-11","aria-hidden":"true"}},[a._v("#")]),a._v(" @v0.1.11")]),a._v(" "),t("p",[a._v("添加了富文本编辑的功能，插件有不少 bug，比如上传的图片高度无法调整，通过改插件源码的办法解决掉了，这个编辑器还要非常多优化的空间，不过如今没有足够的时间来处理，开始发觉我一个人有些忙不过来，难以想象我要是有个正经工作，我怎么写这个东西？")]),a._v(" "),t("p",[a._v("富文本编辑这功能其实一直踌躇不定，开始写的时候是拒绝的，但更早以前却是认同的，这个过程中我对于我的上上个 Idea 反思良久，才思泉涌，很多思维卡壳的时候，想想以前在思考些什么，就能明白下一步该做什么，毕竟 cdr.today 是这两年的想法挖到底，剩下的根基式的东西，只要一步步再往上堆回去时间线就完整了，纸上谈兵的馈赠罢。")]),a._v(" "),t("p",[a._v("调整了底部消息颜色，黑色与灰色，与主题统一，之前的红绿，跳戏，独角兽也不行。")]),a._v(" "),t("h3",{attrs:{id:"v0-1-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-12","aria-hidden":"true"}},[a._v("#")]),a._v(" @v0.1.12")]),a._v(" "),t("p",[a._v("添加了文章保存为图片的功能，可以直接分享到微信，加了一些小功能，比如发邮件到我的邮箱 —— “联系作者”，比如查看自动生成的博客 —— “我的博客”，这地方倒有些趣，博客系统的网页版界面，是上个月还是上上个月，还没有做 cdr.today 时写好的，派上了用场。")]),a._v(" "),t("h3",{attrs:{id:"v0-2-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-2-x","aria-hidden":"true"}},[a._v("#")]),a._v(" @v0.2.x?")]),a._v(" "),t("p",[a._v("“出手即证明。”")]),a._v(" "),t("h3",{attrs:{id:"操纵困意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操纵困意","aria-hidden":"true"}},[a._v("#")]),a._v(" 操纵困意")]),a._v(" "),t("p",[a._v("如今的睡眠时间又回归到了，12:00 - 17:00，过阵子大概又会回归正常作息，生命中又要凭空多出来又一天了哈哈。")]),a._v(" "),t("p",[a._v("很多时候还是身体困的不行，躺到床上又无休止的思考项目，像小时候没日没夜的计划怎么玩游戏一样。这两年的这款现实游戏，也颇有趣味，就是一个人在新手村待了太久，倒期望能够再遇到一个康生那样的傻屌朋友，为什么我们的生活没有交集，或许还没有到对的时间，或许注定不会再有，不过我还是时常想象自己一个回马枪窜入新闻行业，成为一名顶天立地，挑战不公的记者。")]),a._v(" "),t("p",[a._v("操纵困意的办法就是不到困的不行，躺下就睡的时候，不要躺到床上，睡不着还浪费时间，在桌子上趴一会儿，神游到什么 idea 动手就做。")]),a._v(" "),t("h3",{attrs:{id:"我爸"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我爸","aria-hidden":"true"}},[a._v("#")]),a._v(" 我爸")]),a._v(" "),t("p",[a._v("我妈这周跑去了云南，总算有了老年人该有的样子，我爸跟我担心的要命，莫不是没得饭吃？")]),a._v(" "),t("p",[a._v("中秋晚上跟老爸两个人有了些许交流，十足的酒鬼，小时候这家伙就不着家，周末总是有陌生的面孔把醉醺醺的他抬回家…不过也记不起什么不好的事情，清醒的时候可以说是与人为善得不行，我时常庆幸自己没有醉成他那个样子的气魄，当然，二十多年来，终于进一步了解了老爸的经历，一直以为他什么都不在乎？几十年的时间来弥补少年意气时的不可一世，是我的浪漫骑士该有的担当。")])])},[],!1,null,null,null);v.default=_.exports}}]);