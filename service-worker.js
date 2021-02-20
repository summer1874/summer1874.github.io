/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "26c76130ce2fafb9f19ac3918f7b1a24"
  },
  {
    "url": "about/index.html",
    "revision": "9b35c3a760dd226e9ce859636c108744"
  },
  {
    "url": "assets/css/0.styles.ea159d0d.css",
    "revision": "3a15e80fe074d574340e396ff9a2f860"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.8eef8638.svg",
    "revision": "8eef86381d36c7d02ce250e5243b0752"
  },
  {
    "url": "assets/js/1.370223b5.js",
    "revision": "b38a18372a6d11203457d676d64fd6a7"
  },
  {
    "url": "assets/js/10.5b22ea0d.js",
    "revision": "7b77df927a7e86173fa5de5ac60aba6f"
  },
  {
    "url": "assets/js/11.5b166f75.js",
    "revision": "c5f79911cd53c32b68f8fcbba2929338"
  },
  {
    "url": "assets/js/12.05e3f750.js",
    "revision": "3e7aa287ba87e39c40e660a1eb59ba52"
  },
  {
    "url": "assets/js/13.b6b304e5.js",
    "revision": "ed998dd076f227979f5bb4547296f73d"
  },
  {
    "url": "assets/js/14.abc278b0.js",
    "revision": "4b6329284c3de977bcf2104b7bc30d23"
  },
  {
    "url": "assets/js/15.8398b33b.js",
    "revision": "1d2711957b7e23372359e4bfa8a6f9f1"
  },
  {
    "url": "assets/js/16.6eff6287.js",
    "revision": "d9366dd2e99ab024c66973f59d445189"
  },
  {
    "url": "assets/js/17.81c353c4.js",
    "revision": "8c4816bf33c7e8187fc0cac409b4e638"
  },
  {
    "url": "assets/js/18.2cfaf46f.js",
    "revision": "41b4a56a6496a05d64d3d3c2e5f84890"
  },
  {
    "url": "assets/js/19.d6c63b4d.js",
    "revision": "6ba9c416f91e4b4a795ae4815ecc0fe4"
  },
  {
    "url": "assets/js/20.e4971dc3.js",
    "revision": "dd2f4ffa5c111d4cce29b66b05f8b0c8"
  },
  {
    "url": "assets/js/21.27a2830a.js",
    "revision": "98ff89fc2885dbe912356f0e45edd38e"
  },
  {
    "url": "assets/js/22.b7a77583.js",
    "revision": "26a8a74ab71c5ef4d79167246499c259"
  },
  {
    "url": "assets/js/23.b0db6763.js",
    "revision": "de7a8f194e51e5b60053c2d732754d11"
  },
  {
    "url": "assets/js/24.66f74eaf.js",
    "revision": "bf8e528cb16ea412c162f5f582330ef5"
  },
  {
    "url": "assets/js/25.ee6bea31.js",
    "revision": "e8a4051deaf928336a698f33ecfb3756"
  },
  {
    "url": "assets/js/26.de8e6693.js",
    "revision": "c293818b814e158d5d1b5bfc38210c62"
  },
  {
    "url": "assets/js/27.5802adf1.js",
    "revision": "2039e030e79b244693166e16bc605a58"
  },
  {
    "url": "assets/js/28.87a144c0.js",
    "revision": "c9ce0a8a9ef2b21cc83bc8f69cf71977"
  },
  {
    "url": "assets/js/29.505e8421.js",
    "revision": "b0c06da5d98ceedf187cba5bcb3dede8"
  },
  {
    "url": "assets/js/3.2d4480bf.js",
    "revision": "06af2a1f25ed947eef2fd21835770ce8"
  },
  {
    "url": "assets/js/30.4c266757.js",
    "revision": "d440754a6144519ea483b5fe5c819e58"
  },
  {
    "url": "assets/js/31.480c06e6.js",
    "revision": "672bcfe6fe6e7d09183f0ea7af0990ff"
  },
  {
    "url": "assets/js/32.4ba3892b.js",
    "revision": "437bfbce26c749a4749d4f6329efafbf"
  },
  {
    "url": "assets/js/33.65f9d61b.js",
    "revision": "95ad3d4be88e9de886f7ecae26fd58b5"
  },
  {
    "url": "assets/js/34.136be3dc.js",
    "revision": "4308517b09c19b1d0e7d040f84bfd9ee"
  },
  {
    "url": "assets/js/35.70858860.js",
    "revision": "e86a82b4a8a3433e6ff18136e55521b7"
  },
  {
    "url": "assets/js/36.d606c4b3.js",
    "revision": "db101587caa86f270d703926c679e007"
  },
  {
    "url": "assets/js/37.39270b71.js",
    "revision": "4db7c5d29d16ff538197f4ab73994c87"
  },
  {
    "url": "assets/js/38.4974169a.js",
    "revision": "1b10f7cc8c6bffd648211bd2db9932b1"
  },
  {
    "url": "assets/js/39.e9f0b04e.js",
    "revision": "5ecb2b59f2477e03d78746388910a095"
  },
  {
    "url": "assets/js/4.fd623907.js",
    "revision": "47d929f4ca317c81144e4227f82c0258"
  },
  {
    "url": "assets/js/40.1871f197.js",
    "revision": "cef80a13579faa98c445af17d3eaf0c9"
  },
  {
    "url": "assets/js/41.e0917d77.js",
    "revision": "578cfd7241fe2a7ca7d44f9cbf985209"
  },
  {
    "url": "assets/js/42.f8190cc2.js",
    "revision": "66e934c1c6ebe8ae19b058992200dd1f"
  },
  {
    "url": "assets/js/43.998eb266.js",
    "revision": "2e1db77e743cd2a90be833507e6647b7"
  },
  {
    "url": "assets/js/44.de12c015.js",
    "revision": "a839c2d59ddf0e6a0c9fb114405bad64"
  },
  {
    "url": "assets/js/45.05d554c8.js",
    "revision": "bac029ac43b9d4b1e6a372a8559acdf7"
  },
  {
    "url": "assets/js/46.803f13e3.js",
    "revision": "934cbd75fbe075c4d0d82948c5e4241b"
  },
  {
    "url": "assets/js/47.3a0ae4be.js",
    "revision": "dc799185e16e8b0e10750df5a20b672c"
  },
  {
    "url": "assets/js/48.8840035e.js",
    "revision": "5084b4c8ff691cc1a5c4ed0dd3bc66d6"
  },
  {
    "url": "assets/js/49.4d42a14e.js",
    "revision": "157851b36ab59945ddfd59e86cd897ff"
  },
  {
    "url": "assets/js/5.cc1cc5de.js",
    "revision": "8d1299dba5826bf1a2975428e61d43ec"
  },
  {
    "url": "assets/js/50.6c74a175.js",
    "revision": "48fe2ef9b1daa31491f8d33e17faf8bf"
  },
  {
    "url": "assets/js/51.a958027f.js",
    "revision": "b084c2ee8a18e8d109d6ffb063168bfc"
  },
  {
    "url": "assets/js/52.78eebc8e.js",
    "revision": "a96ed68970b9be5893e42e3a2d700d6b"
  },
  {
    "url": "assets/js/53.a3feb7e0.js",
    "revision": "ae82a095aeb82e6e1bcab0ba6c6ba861"
  },
  {
    "url": "assets/js/54.14c9153a.js",
    "revision": "f02d4c157b382f52f9ade667451aba46"
  },
  {
    "url": "assets/js/55.10c9c2cf.js",
    "revision": "66e9c93b09ca7a26108684b589696b92"
  },
  {
    "url": "assets/js/56.e1309ae2.js",
    "revision": "707751a093c4e3f72116718cfdb397d6"
  },
  {
    "url": "assets/js/57.daf5476c.js",
    "revision": "7a5f5f1bc0463c8f44264b2b734e6e1e"
  },
  {
    "url": "assets/js/58.6a472425.js",
    "revision": "d76cd632661367f107b2bc846f8d1b2b"
  },
  {
    "url": "assets/js/59.67f9a915.js",
    "revision": "447081150b7ff05149a987b5b29355f2"
  },
  {
    "url": "assets/js/6.dd18cc54.js",
    "revision": "77942dce0b765618536b4882cb8448e1"
  },
  {
    "url": "assets/js/60.4bedec97.js",
    "revision": "4f124e2c303a520a77f0b28a1faf5678"
  },
  {
    "url": "assets/js/61.8491a364.js",
    "revision": "37b3baf2538e833dedd86cf87afa3d88"
  },
  {
    "url": "assets/js/62.d83f8ac5.js",
    "revision": "3fa67570ef1b10bc142ff76cb1846d64"
  },
  {
    "url": "assets/js/63.f36cb3b2.js",
    "revision": "05c4b785383ec79e444842caf48db6f7"
  },
  {
    "url": "assets/js/64.0977fd0f.js",
    "revision": "7045c89b05dffd681a8fa93247daedb7"
  },
  {
    "url": "assets/js/65.7b5e2afe.js",
    "revision": "cc3185ce5e7c7e17816800a1db5fcae0"
  },
  {
    "url": "assets/js/66.ae5cbaf1.js",
    "revision": "edff38e0f68af4d86072b6d2462b94aa"
  },
  {
    "url": "assets/js/67.cefb74dd.js",
    "revision": "f2a5e06981637d173b823f35a517f0f7"
  },
  {
    "url": "assets/js/68.5c269575.js",
    "revision": "427f89141e2904bf11b77ec6d3db8816"
  },
  {
    "url": "assets/js/69.c1cc7cff.js",
    "revision": "fe46490536da768fdb9b554f28950605"
  },
  {
    "url": "assets/js/7.cc731eef.js",
    "revision": "5763612c6ba738745ce9521ce4bd4abb"
  },
  {
    "url": "assets/js/70.30a3b24b.js",
    "revision": "508a3830ba0de9c94265c6a23ee4aaf9"
  },
  {
    "url": "assets/js/71.f5d63086.js",
    "revision": "d76fcf95a4b19edbc52a26a234e59c38"
  },
  {
    "url": "assets/js/72.cec50576.js",
    "revision": "a71a440f3b93906e26478a4bb80322d3"
  },
  {
    "url": "assets/js/73.ad48ace3.js",
    "revision": "7ea340c9528640d11dfac78849fc425f"
  },
  {
    "url": "assets/js/74.1847f21d.js",
    "revision": "8dca1be0037a5af52f42e40db09daf5e"
  },
  {
    "url": "assets/js/75.6e6f0150.js",
    "revision": "1ac78d10c8f7b552ccbfccc36f14906e"
  },
  {
    "url": "assets/js/76.6bd62e8e.js",
    "revision": "0d9c3b87955f80dc79375d3509545d4c"
  },
  {
    "url": "assets/js/77.1e4c7c38.js",
    "revision": "3818a12bb8cdab7d7d96f6ce1925be49"
  },
  {
    "url": "assets/js/8.07ef1b16.js",
    "revision": "b346aa17de52c45226690437da1e7e98"
  },
  {
    "url": "assets/js/9.9083b77b.js",
    "revision": "15bc8bfc6c11eaefc77eca2c45aa3564"
  },
  {
    "url": "assets/js/app.0fa88caa.js",
    "revision": "c17706b9a102a11e95ed6123d5c1a8f5"
  },
  {
    "url": "avatar.jpg",
    "revision": "9f13e6018c947204615f8f23483aa3cf"
  },
  {
    "url": "categories/Coding/index.html",
    "revision": "d0b80978c89486da11a94da2d353bb41"
  },
  {
    "url": "categories/Coding/page/2/index.html",
    "revision": "11a03ad81683e2b70ebb13823ab3db02"
  },
  {
    "url": "categories/Coding/page/3/index.html",
    "revision": "0b9650a7a7276d2e27c4fa726db3cb43"
  },
  {
    "url": "categories/Coding/page/4/index.html",
    "revision": "ef1e521d5a084d1614a774649b78b342"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "d90b28b957a7227c964ffceef9d99a68"
  },
  {
    "url": "categories/index.html",
    "revision": "5701e396c8057836fb9c9f0cff0f76fe"
  },
  {
    "url": "categories/Note/index.html",
    "revision": "b69a18828635353eabeeb5962315710c"
  },
  {
    "url": "categories/Study/index.html",
    "revision": "4ccda6b712794ebb213c073aae6e2b6f"
  },
  {
    "url": "draft/30-code.html",
    "revision": "8b3de4b29f3eeca778397ee276674282"
  },
  {
    "url": "draft/intensive_reading-函数式编程.html",
    "revision": "d1e4ea94de48194811d307f66413d9c0"
  },
  {
    "url": "draft/LeetCode.html",
    "revision": "1e1f1c823f5a5e9215a478e4248a5c7d"
  },
  {
    "url": "draft/markdown.html",
    "revision": "1e1f1c823f5a5e9215a478e4248a5c7d"
  },
  {
    "url": "draft/mock.html",
    "revision": "258bcd6cedfefa63247ffed102a0f21c"
  },
  {
    "url": "draft/next.html",
    "revision": "27857322918a6ee1a768aa8036890d9e"
  },
  {
    "url": "draft/react-native.html",
    "revision": "9bff3634208d8b59568d8e9e5960502a"
  },
  {
    "url": "draft/uni-app.html",
    "revision": "6c63d6fc00391ed3442445be0fe25fb3"
  },
  {
    "url": "draft/vue-admin.html",
    "revision": "6c25251fd395ac58edbed8f70e37506e"
  },
  {
    "url": "draft/webpack-由浅入深.html",
    "revision": "077943a8b90c9dd4b6bad17cefac5859"
  },
  {
    "url": "icons/icon128.jpg",
    "revision": "767652ef8bd2064060284fa7530abc38"
  },
  {
    "url": "icons/icon128.svg",
    "revision": "2550ea7aee26b8d761274ad237e96f4b"
  },
  {
    "url": "icons/icon16.jpg",
    "revision": "0c9eafa01bfef8a0923c037776be5f25"
  },
  {
    "url": "icons/icon48.jpg",
    "revision": "0a072490ddb402adc50a4639509415af"
  },
  {
    "url": "index.html",
    "revision": "51ea173dc103577f8f25387f3af5bd01"
  },
  {
    "url": "tag/^ECMAScript 6/index.html",
    "revision": "89e654042644abe9ef2ac4cb645690d2"
  },
  {
    "url": "tag/编辑器/index.html",
    "revision": "600eecd88afc6db9b33e6c321d51ec8a"
  },
  {
    "url": "tag/混合开发/index.html",
    "revision": "4389b0556b1268ac3c8df508b576e8b2"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "68261114a7bd002ac7be002c746b271c"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "2879b8ad18551c1b46d82243161c5fbb"
  },
  {
    "url": "tag/cooke/index.html",
    "revision": "106dcced5fae33f0a7dd3cfc2570a7bf"
  },
  {
    "url": "tag/css/index.html",
    "revision": "bb6b016d31893aaf352e473f69423bc6"
  },
  {
    "url": "tag/echarts/index.html",
    "revision": "489bb49793d872428314f4d04edad9c1"
  },
  {
    "url": "tag/emoji/index.html",
    "revision": "c4861d14b5ea23e2925af00920cd6cab"
  },
  {
    "url": "tag/english/index.html",
    "revision": "51bd17463f4e75403ee9a1bb5eeb6094"
  },
  {
    "url": "tag/every day/index.html",
    "revision": "b9fdb118246ee5a88420b52700dcb139"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9f774ed44273026f6b5b58f2a2278edd"
  },
  {
    "url": "tag/Grid/index.html",
    "revision": "48b339cd0ce0b4170ad16cf644000b05"
  },
  {
    "url": "tag/http/index.html",
    "revision": "0ea45f402006d7a3a0127997fac108a1"
  },
  {
    "url": "tag/index.html",
    "revision": "1c618dda57462f6fdc60bbe69019ef86"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6709c9999e6c3569a85c70da9c16521d"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "f707f5581b52a4e0821f2861daaba469"
  },
  {
    "url": "tag/node.js/index.html",
    "revision": "e7657c8b09550cafb127ebe6805f0ab4"
  },
  {
    "url": "tag/nuxt/index.html",
    "revision": "2f28d61425141df9916c2ef9a36c95f9"
  },
  {
    "url": "tag/REACT/index.html",
    "revision": "9a964221f352731ad39c4d4b74f9e597"
  },
  {
    "url": "tag/ssh/index.html",
    "revision": "75067d82c466dade32451306adca7255"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "639bf76ddbc8a9342d88cbe02cb281c9"
  },
  {
    "url": "tag/upupup!/index.html",
    "revision": "3f0791b8a2bbf750acdcb1ca17d587e8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "fb0eb156ad3226f9bf3f698937ade2a7"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "203a72517d72312a641d3c9dbf600102"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "7c3879d1c7bc90a699c372f8d3d08096"
  },
  {
    "url": "timeline/index.html",
    "revision": "e5a2de300e48b987ca44916b1c32aa8d"
  },
  {
    "url": "views/coding/前端知识点清单.html",
    "revision": "39281db7865f2bc04d6a848dcdf2b2ab"
  },
  {
    "url": "views/coding/arithmetic.html",
    "revision": "1bcf7992ab2bddb551aaa69179769915"
  },
  {
    "url": "views/coding/bash.html",
    "revision": "3471e6c986e0e22c01a6e63cccd08138"
  },
  {
    "url": "views/coding/css-滚动视差.html",
    "revision": "2491b2cbf757dcfc525673cc242f3d7a"
  },
  {
    "url": "views/coding/css-mask.html",
    "revision": "baf235318e15d4a902b805d358ad2ccf"
  },
  {
    "url": "views/coding/css-sass.html",
    "revision": "b4504a8929756a054e6853f99cef3c07"
  },
  {
    "url": "views/coding/echarts.html",
    "revision": "4e933b0024580283a0cb6ffc59b25ec1"
  },
  {
    "url": "views/coding/edit-vscode.html",
    "revision": "0e50d1af5a856dd4fafc2a5f63acceaf"
  },
  {
    "url": "views/coding/emoji.html",
    "revision": "ef7b26713448b4520e63ad6d87471f67"
  },
  {
    "url": "views/coding/english.html",
    "revision": "ab48435af068d6ab0e5fd1e21ada2390"
  },
  {
    "url": "views/coding/es6-解构赋值.html",
    "revision": "d8bd12f13fbb14e56ac77a2fbff70d01"
  },
  {
    "url": "views/coding/es6-块级作用域绑定.html",
    "revision": "95f1756a36ec364bcbc38de912627c98"
  },
  {
    "url": "views/coding/es6-扩展对象的功能性.html",
    "revision": "6902c0ffc88fa4bd7776811e394c3e52"
  },
  {
    "url": "views/coding/es6-类与对象.html",
    "revision": "66fadbc08192322c5880b862bc29222c"
  },
  {
    "url": "views/coding/es6-function.html",
    "revision": "31a88952e7d77cadc5393866605081cc"
  },
  {
    "url": "views/coding/es6-promise.html",
    "revision": "bce645955e66b3d82ac0a178f85db9bc"
  },
  {
    "url": "views/coding/es6-Proxy和Reflect.html",
    "revision": "afb6126d30eeba67c0ea4dc9a1a6a129"
  },
  {
    "url": "views/coding/es6-Set集合与Map集合.html",
    "revision": "604b1642e24e853dd49c4400448c0804"
  },
  {
    "url": "views/coding/es6-Symbol.html",
    "revision": "dc42cca34e31c9c40818112ee2828515"
  },
  {
    "url": "views/coding/every-day.html",
    "revision": "a16f0364ac3bf3bcb97d162396c89e99"
  },
  {
    "url": "views/coding/git.html",
    "revision": "515d462a124026b6fe1fd0a1f151b8a2"
  },
  {
    "url": "views/coding/grid.html",
    "revision": "63cf710d296b85cf1b0fbb66452ef8ee"
  },
  {
    "url": "views/coding/http-cooke.html",
    "revision": "e71421d1ba2d2df5c68c37b15452cee6"
  },
  {
    "url": "views/coding/interview-web.html",
    "revision": "08a00a6176a5facaf3fba8520dd1ecdb"
  },
  {
    "url": "views/coding/js-array-operation.html",
    "revision": "aeefe6fd8758bf1e523284a10523a5ba"
  },
  {
    "url": "views/coding/js-dayjs.html",
    "revision": "474c3e6728346fca41ccc02ad861cd0f"
  },
  {
    "url": "views/coding/js-object-operation.html",
    "revision": "7a6cf72174f62c5318196c21cd7d1706"
  },
  {
    "url": "views/coding/js-object-oriented.html",
    "revision": "ad154fbc8a6ed96e0be3d5013968797e"
  },
  {
    "url": "views/coding/js-proto.html",
    "revision": "5ce5c96e93328fb7b18f7278210d8544"
  },
  {
    "url": "views/coding/js-Rxjs.html",
    "revision": "edf3cef371ede0cc916e260fbb8ce5aa"
  },
  {
    "url": "views/coding/keep-javascript基础-变量类型.html",
    "revision": "c9e84010374ebcc4e61097b0b6a20c90"
  },
  {
    "url": "views/coding/keep-javascript基础-原型和原型链.html",
    "revision": "151b05b89519200f17e008e78c82f7fc"
  },
  {
    "url": "views/coding/nodejs.html",
    "revision": "300f3b652a9da11005ed46db455b8385"
  },
  {
    "url": "views/coding/react-getting-started.html",
    "revision": "e7264eb7810c7f07ea7a16bdc5a7ae32"
  },
  {
    "url": "views/coding/typecsript.html",
    "revision": "ef69714d7ed819b7f975b00532f7a52d"
  },
  {
    "url": "views/coding/Typescript+React编写高可用的组件.html",
    "revision": "326abf2b7fc3bd53d44fb8a24d96f6b7"
  },
  {
    "url": "views/coding/vue-cli.html",
    "revision": "28c8fe32da968affe964f7ecb9bedc77"
  },
  {
    "url": "views/coding/vue-element.html",
    "revision": "bd88268b9e27a4eb3258f17cd8554054"
  },
  {
    "url": "views/coding/vue-note.html",
    "revision": "6992be00a6b77a8b3b19854ab09b89bf"
  },
  {
    "url": "views/coding/vue-nuxt.html",
    "revision": "648e3dcb994ab17cccfea7cc398cd6d7"
  },
  {
    "url": "views/coding/vue-router.html",
    "revision": "efd6ec7894b3c825d5057ec5a91aa538"
  },
  {
    "url": "views/coding/yarn.html",
    "revision": "eaf28d69cf091139dd6d87ebb251cb8f"
  },
  {
    "url": "views/essay/怼人的名人名言.html",
    "revision": "1e5a5d438acf1bbd1e3f91a25fe9a2ad"
  },
  {
    "url": "views/note/javaScript语法简明手册.html",
    "revision": "c177f72f4daa6d1ea7aa8cfdd3583d79"
  },
  {
    "url": "wallhaven.jpg",
    "revision": "fdd96e56a990432f1b128c166be304d0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
