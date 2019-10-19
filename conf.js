jsproxy_config({
  // 当前配置的版本（记录在日志中，用于排查问题）
  // 每次修改配置，该值需要增加，否则不会生效。
  // 默认每隔 5 分钟自动下载配置，若想立即验证，可通过隐私模式访问。
  ver: '110',

  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 62
  },

  // 节点配置
  node_map: {
    'demo-hk': {
      label: '演示服务-香港节点',
      lines: {
        // 主机:权重
        'node-aliyun-hk-1.etherdream.com:8443': 1,
        'node-aliyun-hk-2.etherdream.com:8443': 2,
      }
    },
    'demo-sg': {
      label: '演示服务-新加坡节点: 1,
      lines: {
        'node-aliyun-sg.etherdream.com:8443': 1,
      },
//         'demo-sg': {
//       label: '演示服务-新加坡节点: 1,
//       lines: {
// //         'node-aliyun-sg.etherdream.com:8443': 1,
          
//       },
//     },
  
    'mysite': {
      label: '当前站点',
      lines: {
//                 'muddy-darkness-0610.lituo.workers.dev': 1,
// 'fancy-block-fa42.lituo.workers.dev':  600,
// 'delicate-dream-6aca.lituo.workers.dev':  600,
// 'curly-sun-ab85.lituo.workers.dev':  600,
// 'wispy-cloud-b5d6.lituo.workers.dev':  600,
'pc1l.github.io/jsproxy':1,
//         [location.host]':1,
      }
    },
    // 该节点用于加载大体积的静态资源
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        // 收费版（高权重）
        'node-cfworker-2.etherdream.com': 4,

        // 免费版（低权重，分摊一些成本）
        // 每个账号每天 10 万次免费请求，但有频率限制
        'muddy-darkness-0610.lituo.workers.dev': 1,
'fancy-block-fa42.lituo.workers.dev':  1,
'delicate-dream-6aca.lituo.workers.dev':  1,
'curly-sun-ab85.lituo.workers.dev':  1,
'wispy-cloud-b5d6.lituo.workers.dev':  1,

        'b.007.workers.dev': 1,
        'b.hehe.workers.dev': 1,
        'b.lulu.workers.dev': 1,
        'b.jsproxy.workers.dev': 1,
      }
    }
  },

  /**
   * 默认节点
   */
  //node_default: 'mysite',
    node_default: 'cfworker',
  // node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'demo-hk' : 'mysite',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  // assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',

  // 本地测试时打开，否则访问的是线上的
  assets_cdn: 'assets/',

  // 首页路径
  index_path: 'index_v3.html',

  // 支持 CORS 的站点列表（实验中...）
  direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
//   inject_html: '<!-- custom html -->',
  
inject_html: '<!-- Optional JavaScript -->       <!-- jQuery first, then Popper.js, then Bootstrap JS -->       <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>       <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>       <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>      <!-- Bootstrap CSS -->      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">  <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">   <script src="https://unpkg.com/swiper/js/swiper.min.js"> </script>   		<script src="https://cdn.jsdelivr.net/npm/tooltip.js@1.3.2/dist/umd/tooltip.min.js" integrity="sha256-VvF1eJMngdIOoGjesEiM88JrflLgdbJWXH7WJr8juDI=" crossorigin="anonymous"></script>   <div class="bshare-custom text-success text-center font-weight-bold"><a title="分享到i贴吧" class="bshare-itieba"></a><a title="分享到复制网址" class="bshare-clipboard"></a><a title="分享到新浪微博" class="bshare-sinaminiblog"></a><a title="分享到" class="bshare-weixin"></a><a title="分享到QQ好友" class="bshare-qqim"></a><a title="分享到QQ空间" class="bshare-qzone"></a><a title="分享到雪球" class="bshare-xueqiu"></a><a title="分享到Reddit" class="bshare-reddit"></a><a title="分享到Twitter" class="bshare-twitter"></a><a title="分享到Facebook" class="bshare-facebook"></a><a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a><span class="BSHARE_COUNT bshare-share-count">0</span></div><script type="text/javascript" charset="utf-8" src="//static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=3&amp;lang=zh"></scri
',
  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'https://www.pornhub.com/': {
      redir: 'https://php.net/'
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})
