/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'DS frontend',
  tagline: 'The best front-end starter kit',
  url: 'https://django-stars.github.io',
  baseUrl: '/frontend-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'django-stars', // Usually your GitHub org/user name.
  projectName: 'frontend-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    algolia: {
      apiKey: '5f7869145112d2d4555469aa8aa7655b',
      indexName: 'django-stars_frontend-skeleton',
    },
    navbar: {
      title: 'DS Frontend',
      logo: {
        alt: 'DS Frontend',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/skeleton/skeleton_about',
          activeBasePath: 'docs/skeleton',
          label: 'Skeleton',
          position: 'left',
        },
        {
          to: 'docs/resources/resource_problem',
          activeBasePath: 'docs/resources',
          label: 'Resources',
          position: 'left',
        },
        {
          to: 'docs/queryParams/queryParams_about',
          activeBasePath: 'docs/queryParams',
          label: 'queryParams',
          position: 'left',
        },
        {
          to: 'docs/api/api_about',
          activeBasePath: 'docs/api',
          label: 'API',
          position: 'left',
        },
        {
          to: 'docs/i18n/i18n_about',
          activeBasePath: 'docs/i18n',
          label: 'i18n',
          position: 'left',
        },
        {
          to: 'docs/cache/cache_about',
          activeBasePath: 'docs/cache',
          label: 'cache',
          position: 'left',
        },
      ],
    },
    footer: {
      links: [
        {
          label: 'Skeleton',
          to: 'https://github.com/django-stars/frontend-skeleton',
          icon: 'icon-github',
        },
        {
          label: 'Packages',
          to: 'https://github.com/django-stars/ds-frontend',
          icon: 'icon-github',
        },
        {
          label: 'linkedin',
          href: 'https://www.linkedin.com/company/django-stars/',
          icon: 'icon-linkedin',
          noTitle: true,
        },
        {
          label: 'facebook',
          href: 'https://www.facebook.com/djangostars/',
          icon: 'icon-facebook',
          noTitle: true,
        },
        {
          label: 'twitter',
          href: 'https://twitter.com/djangostars/',
          icon: 'icon-twitter',
          noTitle: true,
        },
        {
          label: 'instagram',
          href: 'https://www.instagram.com/djangostarscom/',
          icon: 'icon-instagram',
          noTitle: true,
        },
      ],
      logo: {
        alt: 'Djangostars',
        src: 'img/ds_logo.png',
        href: 'https://djangostars.com/',
      },
      copyright: `Copyright © ${new Date().getFullYear()}  Djangostars. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/django-stars/frontend-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
}
