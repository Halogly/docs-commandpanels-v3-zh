// docusaurus.config.js

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '命令面板文档',
  tagline: '命令面板文档',
  favicon: 'favicon.png',

  future: {
    v4: true,
  },

  url: 'https://commandpanels-v3.halogly.com',
  baseUrl: '/',

  organizationName: 'halogly',
  projectName: 'docs-commandpanels-v3-zh',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          lastmod: 'date',
          changefreq: null,
          priority: null,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  scripts: [
    {
      src: "/force-dark.js",
      async: false,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: '命令面板,CommandPanels,我的世界,Minecraft,插件,文档,教程,配置指南'},
        {name: 'description', content: 'CommandPanels 命令面板文档 - 完整的配置指南和使用教程，学习如何创建自定义菜单界面和交互命令'},
        {property: 'og:type', content: 'website'},
        {property: 'og:title', content: 'CommandPanels 命令面板文档'},
        {property: 'og:description', content: 'CommandPanels 命令面板官方文档 - 完整的配置指南和使用教程'},
        {property: 'og:image', content: 'https://commandpanels-v3.halogly.com/logo.png'},
      ],
      navbar: {
        logo: {
          alt: 'CommandPanels Logo',
          src: 'logo.png',
        },
        items: [
          {
            type: 'html',
            position: 'right',
            value: `<a href="https://v3.commandpanels.net" target="_blank" class="navbar__item" style="font-weight: bold;">返回首页</a>`,
          }
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      footer: {
        copyright: `
          Copyright © 2019-${new Date().getFullYear()} CommandPanels - Halogly
          <div>
            如遇到问题，可前往<a href="https://github.com/Halogly/docs-commandpanels-v3-zh/issues" target="_blank"
            style="text-decoration: none;
            border-bottom: solid #53A9DC;
            font-weight: bold;">Github</a>反馈
            <p style="font-size: 0.9em; opacity: 0.8; margin: 10px 0;">本文档为社区翻译版，非官方文档</p>
          </div>
        `,
      },
      prism: {
        additionalLanguages: ["java"],
      },
    }),
};

export default config;
