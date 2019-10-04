# 开源
---

感谢以下开源项目🙏

## [flutter](https://github.com/flutter/flutter)

花了一个多月的时间在 flutter 与 React-Native 之间做抉择，两者于小子的直观感受：一则是新技术，一则是还算熟练的技术。至于最终选择 flutter 的缘由在于，flutter 的写法跨越了二维平面，表达出了视觉与逻辑的统一美感。

React 的写法根植 html，这类块状逻辑在原始的简洁网页上表达很有一套，而互联网发展到如今地步，更多的表现是逻辑上的规范，感受上的滞塞，这也是很多前后端矛盾的缘由。

长期写底层的开发者很难体会到，界面迭代所带来的逻辑困扰，至于很多底层组件一延伸到视图界面，立马会出现层出不穷的 bug，而前端开发者若是长期以来仅仅堆积视图，很难有精力再去跨逻辑地去处理那些问题，就目前来讲，这已经成为了一种稍显迟钝的配合办法。

flutter 逻辑与视图统一，是更为现代化的作品。

### [bloc][bloc]

作为状态管理，一开始打算使用 Redux，发现的问题与上述一直，bloc 才算是 flutter 的原配吧。

状态机该有的样子，不枉 pub 上 99 的评分。

### [http][http]

dart 团队制作的 http 库，提供了非常便捷的封装。

### [uuid][uuid]

不输各语言的 uuid 库，拆封即用，在 Ct 中主要用来生成图片名，团队 id。

### [zefyr][zefyr]

Ct 中所使用的 RichText 编辑器，可以说是第三方库中的最佳，不过可自定义的范围过小，需要花精力改源码。

### [rxdart][rxdart]

对 stream 进行神奇操作，用于 debounce bloc 的状态切换。

### [lpinyin][lpinyin]

将汉字拼音化，在 Ct 中用于社区成员的排序。

### [qr_flutter][qr_flutter]

用于生成社区的分享二维码。

### [equatable][equatable]

blocs 好伙伴，用于类型判断。

### [quill_delta][quill_delta]

zefyr 中的数据结构。

### [screenshot][screenshot]

用于截屏分享文章。

### [flutter_bloc][flutter_bloc]

bloc flutter 接口。

### [url_launcher][url_launcher]

打开链接(服务条款)及发送邮件。

### [image_picker][image_picker]

官方制作，选取相册中的图片。

### [flutter_swiper][flutter_swiper]

左拉菜单中的滑动效果，flutter_swiper 做得非常完善，Ct 在使用过程中添加了页面标识背景。

### [qr_code_tools][qr_code_tools]

小巧的 qrcode 解码器，用于扫码加入社区。

### [auto_size_text][auto_size_text]

用于适配社区名长度。

### [image_cropper][image_cropper]

上传图片时进行图片裁剪。

### [qr_code_scanner][qr_code_scanner]

可以说是 pub 中最好用的扫码库。

### [esys_flutter_share][esys_flutter_share]

用于分享图片到手机系统及其他 App。

### [permission_handler][permission_handler]

处理权限问题，防止应用崩溃。

### [shared_preferences][shared_preferences]

本地存储。

### [image_gallery_saver][image_gallery_saver]

用于保存个人头像到相册。

## [vue](https://github.com/vuejs/vue)

老实说打一开始对 vue 并没有什么好感，可到头来真的是为 vue 的生态折服。

### [vuepress][vuepress]

就比如 vuepress，生成现在看到的这个网页，实在是方便。

## [Ct](#Ct)

Ct 也有开源计划，Reddit 那样，如今还缺少打磨的精力。

### [CtEditor](https://github.com/cdr-today/zefyr)

Ct 在后期会制作一款 RichText 编辑器，以 zefyr 为蓝本，提供更多自定义接口。

### [Luna](https://github.com/odditypark/luna)

Ct 的信息存储最终会走向分布式，Luna 的 dart 版将为此提供支持。

Luna 是小子规划中的一个 runtime，受区块链启发，Ct 稳步运作后即开始继续开发。

### [Sonata](https://github.com/sonata-lang/sonata)

Sonata 是小子规划的一款 DSL，与 Luna 搭配制作，如果一切顺利，未来一天，Sonata 会将 Ct 提升到一个前所未有的高度。



[bloc]: https://github.com/boeledi/blocs
[http]: https://github.com/dart-lang/http
[uuid]: https://github.com/Daegalus/dart-uuid
[zefyr]: https://github.com/memspace/zefyr
[rxdart]: https://github.com/ReactiveX/rxdart
[lpinyin]: https://github.com/flutterchina/lpinyin
[equatable]: https://github.com/felangel/equatable
[screenshot]: https://github.com/SachinGanesh/screenshot
[qr_flutter]: https://github.com/lukef/qr.flutter
[quill_delta]: https://github.com/pulyaevskiy/quill-delta-dart
[url_launcher]: https://github.com/flutter/plugins
[image_picker]: https://github.com/flutter/plugins
[flutter_bloc]: https://github.com/felangel/bloc
[qr_code_tools]: https://github.com/AifeiI/qr_code_tools
[image_cropper]: https://github.com/hnvn/flutter_image_cropper
[flutter_swiper]: https://github.com/jzoom/flutter_swiper
[auto_size_text]: https://github.com/leisim/auto_size_text
[qr_code_scanner]: https://github.com/juliuscanute/qr_code_scanner
[cupertino_icons]: https://github.com/flutter/plugins
[shared_preferences]: https://github.com/flutter/plugins
[esys_flutter_share]: https://github.com/esysberlin/esys-flutter-share
[image_gallery_saver]: https://github.com/hui-z/image_gallery_saver
[permission_handler]: https://github.com/baseflowit/flutter-permission-handler

[vuepress]: https://github.com/vuejs/vuepress
