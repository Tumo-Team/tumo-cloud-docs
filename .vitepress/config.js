// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
 module.exports = {
  base: '/',
  title: 'Tumo-Cloud Docs',
  lang: 'zh-CN',
  description: 'Tumo-Cloud Docs',
  head: createHead(),
  themeConfig: {
    repo: 'Tumo-Team/tumo-cloud',
    docsRepo: 'Tumo-Team/tumo-cloud-docs',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: createNav(),
    sidebar: createSidebar(),
    pageHeadHtml: '<div><p align="center"><img src="http://tycoding.cn/imgs/MIK-WxRzP9.png" /></p><p align="center"><a href="https://github.com/Tumo-Team" target="_blank"><strong>Tumo Team —— Tumo-Cloud</strong></a></p><ul><li>Tumo-Cloud演示地址：<a href="http://cloud.tycoding.cn" target="_blank"        rel="noopener noreferrer">http://cloud.tycoding.cn</a></li><li>Tumo-Cloud在线文档：<a href="http://docs.cloud.tycoding.cn" target="_blank"        rel="noopener noreferrer">http://docs.cloud.tycoding.cn</a></li><li>Tumo-Cloud后端地址：<a href="https://github.com/Tumo-Team/tumo-cloud" target="_blank"        rel="noopener noreferrer">https://github.com/Tumo-Team/tumo-cloud</a></li><li>Tumo-Cloud前端地址：<a href="https://github.com/Tumo-Team/tumo-cloud-ui" target="_blank"        rel="noopener noreferrer">https://github.com/Tumo-Team/tumo-cloud-ui</a></li><li>Tumo-Cloud文档地址：<a href="https://github.com/Tumo-Team/tumo-cloud-docs" target="_blank"        rel="noopener noreferrer">https://github.com/Tumo-Team/tumo-cloud-docs</a></li></ul>',
  },
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    ['meta', { name: 'author', content: 'Vbenjs Team' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'tumo-cloud, springcloud, springboot, vite, ant-design-vue, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'tumo cloud docs' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: '项目介绍',
      link: '/docs/intro/',
      items: [
        {
          text: '项目介绍',
          link: '/docs/intro/1-intro',
        },
        {
          text: '文档介绍',
          link: '/docs/intro/2-docs-introduce',
        },
        {
          text: '代码生成',
          link: '/docs/intro/3-generate',
        },
        {
          text: '运行项目',
          link: '/docs/intro/4-run',
        },
      ],
    },
    {
      text: '微服务基础',
      link: '/docs/base/',
      items: [
        {
          text: '项目搭建',
          link: '/docs/base/',
        },
        {
          text: '模块化管理',
          link: '/docs/base/',
        },
        {
          text: '基础配置',
          link: '/docs/base/',
        },
        {
          text: '数据交互',
          link: '/docs/base/',
        },
      ],
    },
    {
      text: '微服务进阶',
      link: '/docs/deep/',
      items: [
        {
          text: '微服务通信',
          link: '/docs/deep/',
        },
      ],
    },
  ];
}

function createSidebar() {
  return {
    '/docs/intro/': [
      {
        text: '项目介绍',
        children: [
          {
            text: '项目介绍',
            link: '/docs/intro/1-intro',
          },
          {
            text: '文档介绍',
            link: '/docs/intro/2-docs-introduce',
          },
          {
            text: '代码生成',
            link: '/docs/intro/3-generate',
          },
          {
            text: '运行项目',
            link: '/docs/intro/4-run',
          },
        ],
      },
    ],

    '/docs/base': [
      {
        text: '前端设计',
        children: [
          {
            text: '环境准备',
            link: '/docs/app/1-design/1-1-environment',
          },
          {
            text: '如何使用Vben项目',
            link: '/docs/app/1-design/1-2-use-vben',
          },
          {
            text: 'Tumo-Boot-UI项目搭建',
            link: '/docs/app/1-design/1-3-init-tumo-boot-ui',
          },
        ],
      },

    ],

    '/docs/deep': [
      {
        text: '项目设计',
        children: [
          {
            text: '环境准备',
            link: '/docs/api/1-design/1-1-environment',
          },
          {
            text: 'SpringBoot项目搭建',
            link: '/docs/api/1-design/1-2-create-springboot',
          },
          {
            text: 'Tumo-Boot项目搭建',
            link: '/docs/api/1-design/1-3-init-tumo-boot',
          },
        ],
      },

    ],
  };
}

// /**
//  * @type {(namespace:string,items:string[])=>string[]}
//  */
// function urlWrapper(namespace, items) {
//   return items.map((item) => namespace + item);
// }

// function getGuildNav() {
//   return urlWrapper('/guide', ['/']);
// }
