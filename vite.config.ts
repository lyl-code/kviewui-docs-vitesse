import path from 'path'
import { defineConfig } from 'vite'
import Preview from 'vite-plugin-vue-component-preview'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-vue-markdown'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Inspect from 'vite-plugin-inspect'
import LinkAttributes from 'markdown-it-link-attributes'
import Unocss from 'unocss/vite'
import Shiki from 'markdown-it-shiki'
import Raw from 'vite-plugin-raw'
import presetIcons from '@unocss/preset-icons'
import Container from 'markdown-it-container'
import { presetUno, transformerDirectives } from 'unocss'
import presetDaisy from 'unocss-preset-daisy'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "~/styles/globalVar.scss";',
      },
    },
  },

  plugins: [
    Preview(),

    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/store',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      dirs: ['src/components'],
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      transformers: [transformerDirectives()],
      presets: [
        presetIcons({}),
        presetUno(),
        presetDaisy(),
      ],
    }),

    // https://github.com/antfu/vite-plugin-vue-markdown
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperClasses: 'prose prose-sm m-auto1 text-left kviewui-doc',
      headEnabled: true,
      markdownItOptions: {
        html: true,
        typographer: true,
      },
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Shiki, {
          theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        })
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        }),
        md.use(...createContainer('tip', '提示'))
          .use(...createContainer('warning', '警告'))
          .use(...createContainer('danger', '危险警告'))
          .use(...createContainer('info', '信息'))
          .use(...createContainer('details', '详情块', md))
      },
    }),

    // naiveUIMD({
    //   hljs,
    //   wrapCodeWithCard: false,
    // }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() { generateSitemap() },
  },

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/],
  },
})

/**
 * 创建不同类型的提示渲染代码块
 * @param klass
 *  tip 提示类型
 *  warning 警告类型
 *  danger 危险警告
 *  details 详情块
 * @param defaultTitle 默认标题
 * @param md markdown实例
 * @return string
 */
function createContainer(klass: string, defaultTitle: string, md = null) {
  return [Container, klass, {
    render(tokens, idx) {
      const token = tokens[idx]
      const info = token.info.trim().slice(klass.length).trim()

      if (klass !== 'details') {
        if (token.nesting === 1)
          return `<div class="${klass} custom-block"><div class="custom-block-title">${info || defaultTitle}</div>\n`

        else
          return '</div>\n'
      }
      else {
        if (token.nesting === 1)
          return `<details class="${klass} custom-block"><summary>${md.utils.escapeHtml(info || defaultTitle)}</summary>\n`
        else
          return '</details>\n'
      }
    },
  }]
}

