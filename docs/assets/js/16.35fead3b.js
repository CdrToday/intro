(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{310:function(v,_,a){"use strict";a.r(_);var t=a(38),r=Object(t.a)({},function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"第-5-周"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-5-周","aria-hidden":"true"}},[v._v("#")]),v._v(" 第 5 周")]),v._v(" "),a("h3",{attrs:{id:"第-5-周-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-5-周-2","aria-hidden":"true"}},[v._v("#")]),v._v(" 第 5 周")]),v._v(" "),a("p",[v._v("这周没干多少活，整理了之前的代码，代码结构从模块状转变为层状。")]),v._v(" "),a("h3",{attrs:{id:"层状结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层状结构","aria-hidden":"true"}},[v._v("#")]),v._v(" 层状结构")]),v._v(" "),a("p",[v._v("这种结构的好处在于，同一层级的代码相互独立，且只为其之上一层的代码负责，些许那种中世纪欧洲封建等级制度的意味 —— “我的附庸的附庸，不是我的附庸”。")]),v._v(" "),a("p",[v._v("这种结构问题不仅仅局限于代码，是一种思维模式，块状思维适合构建平面式的东西，层状思维则适合构建立体式的东西，两者虽然难以完全剥离，但，从整体思想上来讲，是不同的。")]),v._v(" "),a("p",[v._v("我不知道该如何表述，但我更擅长层状思维，或立体式思维，意识到这点，源于写视图应用与修图的经历。")]),v._v(" "),a("p",[v._v("写视图应用通常像模块化构建，拼拼图，而且是高矮不一的拼图，古老的视图应用适合用拼图拼，现代化的倒不一定，复杂的特效以及各种乱七八糟的交互通常能把代码熬成一锅浆糊，不过，我目前还没有推翻现有的视图应用构建体系的本事，想到这里，也不好多作论述，在 Luna 的虚拟机，Atlas 中，我将验证这一想法，从根本上改良视图应用的构建模式。")]),v._v(" "),a("p",[v._v("// 我不看好现有的视图应用构建体系，所以也不看好 WebAssembly，除非现有的浏览器内核，还能继续不停地打补丁，优化，打补丁，优化，往复个十年，至于到底是昙花一现，还是更坚实的轮子，我赌县花一现。")]),v._v(" "),a("p",[v._v("// 浏览器的使用消耗程度，迭代速度，是远超操作系统的，若我认为现有的浏览器不行，当然也觉得现有的操作系统不行…确实如此，像之前提到的，Atlas 就是我最终想要造的那个操作系统，虚拟机是第一步。")]),v._v(" "),a("p",[v._v("// 层状的视图构建模式，是 Atlas 要解决的核心问题之一，Atlas 的目标在于，通过整合精简必要的系统构建成分的方式，改良现有操作系统，改良网络应用的开发使用体验。")]),v._v(" "),a("p",[v._v("我极其喜欢在修图时使用蒙版，蒙版可以在保护下层视图不受干扰的前提下，在一层层的遮罩上作业、修改局部，至于最终得到的视觉效果，是层层叠加后的效果，也就是，平面的东西，通过立体式的修改，最终盖印回平面的东西，油画好像也是一层层的画...总之，这很酷，很方便，有很大的自由发挥空间，对，棒得要命。")]),v._v(" "),a("h3",{attrs:{id:"整合精简的正义性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整合精简的正义性问题","aria-hidden":"true"}},[v._v("#")]),v._v(" 整合精简的正义性问题")]),v._v(" "),a("p",[v._v("降低创作成本与门槛，让人们更专注于创作，到底是好事还是坏事？")]),v._v(" "),a("p",[v._v("如若，用手绘板作图的人不再触碰颜料，玩合成音乐的人不再想方设法制造声音，人们，对图像与音乐的认知是否会变得浅显？或者说，是否会无法再次达到前人的高度？")]),v._v(" "),a("p",[v._v("这能拔高普通人的高度，毋庸置疑，不过，或许不会再有 Andy Warhol，不会再有 Pink Floyd，但，会有新的家伙出现 —— 不同的时代会孕育出不同的大师。")]),v._v(" "),a("p",[v._v("说到底，当真对这些东西着迷的，一定会掘地三尺地找出答案，而针对于某一问题，寻找答案的本事，又区分出不同程度的掌握者，这一点是恒定的。")]),v._v(" "),a("p",[v._v("想到这里，些许心安。")]),v._v(" "),a("p",[v._v("举个例子，如何生产苹果汁？")]),v._v(" "),a("p",[v._v("最原始的方法就是，种树，摘苹果，榨汁。")]),v._v(" "),a("p",[v._v("合作分工如何？")]),v._v(" "),a("p",[v._v("种树的有了苹果园、摘苹果的造就了苹果供应链、榨汁的或许成为了专门的加工厂商，再往后推，当然还有零售商及混合产业，甚者，一条龙服务。")]),v._v(" "),a("p",[v._v("Luna 会去了解如何种树、摘苹果、榨汁，但，不会死磕这些流程，因为 Luna 想造的是苹果汁喷泉，亦或，换一种比喻，俄罗斯方块，Luna 要把现有的，已经构建完整的东西，抵消掉，换成积分，灵活地运用那些积分，并再次积累方块。")]),v._v(" "),a("p",[v._v("创新是一件很困难的事情，在生活中，很多东西都已经有了既定成熟的方案，时机不成熟，或，没有到万不得已的时候，没有必要去重构它们，并不是效率最大化的事情，去精简那些方案，去把它们变得更好，同样值得追求。")]),v._v(" "),a("h3",{attrs:{id:"加密货币"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加密货币","aria-hidden":"true"}},[v._v("#")]),v._v(" 加密货币")]),v._v(" "),a("p",[v._v("上周提到，边缘加密货币概念的问题。")]),v._v(" "),a("p",[v._v("这周更激进了些。")]),v._v(" "),a("p",[v._v("数字等价物是必需品，加密货币，这一点上，明确无误，但，是否要自己造，答案是否定。")]),v._v(" "),a("p",[v._v("其一，难度奇大，构建加密货币不仅仅是技术上的事情，更是政治、经济、文化，甚至是人性上的事情，其中牵扯到矿业，交易所，媒体，使用对象等种种问题，目前来讲，是我无力考量周全的，不是效率最大化的东西。")]),v._v(" "),a("p",[v._v("其二，现有的加密货币体系趋于成熟，Luna 的目标是做点对点的小型智能合约平台，不是加密货币，去和那些专做加密货币的项目们竞争，实在是费力不讨好，不如直接接入现有的加密货币体系，内置精简的货币接口，用侧链或状态通道的形式接入现有的加密货币，接入交易所，这才是可取的。")]),v._v(" "),a("p",[v._v("// 目前来讲，仅针对 Bitcoin, Ripple, Ethereum 作考虑。 Bitcoin 稳重且资产厚实，Ripple 广泛运用，Ethereum 开发使用生态遥遥领先，至少，在 19 年，不会有任何加密货币能够超过它们 —— 这三种加密货币在 CoinmarketCap 上现在则是分别以约 641 亿美元、126 亿美元，124 亿美元市值，位居前三，相比较，第四名 Litecoin 只有可怜的 20 亿美元市值。")]),v._v(" "),a("h3",{attrs:{id:"反思"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反思","aria-hidden":"true"}},[v._v("#")]),v._v(" 反思")]),v._v(" "),a("p",[v._v("想得太多做得太少，这问题还是没有多大改善，我需要一个拥挤闭塞的环境，帮助我在必要时集中注意力，而不是无节制的发散思维或什么都不想。")]),v._v(" "),a("p",[v._v("环境的转换通常能够激发人思考，一些时候，进行环境转换是十分必要的，当然，也有一些时候需要稳定的环境与状态，还需要自我度量，目前来讲，我在大环境上需要转换，小环境上需要稳定。")]),v._v(" "),a("p",[v._v("从心所欲不逾矩，到底什么是欲？什么是矩？")]),v._v(" "),a("p",[v._v("在 “欲” 的方面，又确定了一些，")]),v._v(" "),a("p",[v._v("写代码的深层次原因是，代码很简单，一些问题，会就是会，不会就是不会，想要解决什么问题，实现什么样的想法，去解决，去实现就是，会时时刻刻有目标的那种，能够锻炼思维，督促着自己进步，而不是陷入那种长期的自欺欺人，自以为是 —— 这正好能够在某种程度上，化解我自大自满的性格。")]),v._v(" "),a("p",[v._v("做区块链的深层次原因则是，“区块链” 代表着未来，代表着发挥自我能力，对生活、对社会做出一些改变改良的机会，这样的机会当然还有多得多，但，包括 “学习编程” 在内，以及这一选择的推动，大概全因为我的视野还比较狭隘，长期以来只看到了这些，至于从这些地方入手，甚至耗费上我的青年时代 —— 事已至此，此事已定，继续前进。")]),v._v(" "),a("p",[v._v("// 没有尝试人工智能的原因，之前有提到过，学术机构、大公司垄断，实现不够亲民，不适合我，有兴趣，但，没有机会没有优势。")]),v._v(" "),a("p",[v._v("找些事情做，去对生活、社会作出一些改变的原因是，这很酷，做这些事情能给我成就感，让我开心。")]),v._v(" "),a("p",[v._v("具体来说，到底该如何做，还是，但行好事，莫问前程。")])])},[],!1,null,null,null);_.default=r.exports}}]);