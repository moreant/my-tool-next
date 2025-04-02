# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.1.1](https://github.com/soybeanjs/soybean-admin/compare/v0.0.2...v0.1.1) (2025-04-02)


### Features

* **about:** 添加版本号显示 ([df59b4e](https://github.com/soybeanjs/soybean-admin/commit/df59b4e18081e41685ea8eac4be5b45d8fcaea9b))
* **convert:** 添加去除空白 ([3ba9916](https://github.com/soybeanjs/soybean-admin/commit/3ba99168768a84eed42c97b861630097e815aa3a))
* **convert:** 文本转换指定路由顺序和icon ([1304ebd](https://github.com/soybeanjs/soybean-admin/commit/1304ebdddf8f3a47e59e5ae6dbbf69bacc68eeba))
* **convert:** 新增 Maple 字体转换功能，添加相关路由和样式支持 ([38cca1e](https://github.com/soybeanjs/soybean-admin/commit/38cca1e8f65b2260b0d515bd17c8374e880ed4e1))
* **convert:** 增强文本去除空白功能，支持更多去除模式 ([b2c3f54](https://github.com/soybeanjs/soybean-admin/commit/b2c3f547d250c49e0fc38b6a614e8019f54da9b1))
* **deploy:** 添加 GitHub Actions 部署工作流配置 ([262d789](https://github.com/soybeanjs/soybean-admin/commit/262d789a4c2c44adee0b643c516400f7a88a7cd6))
* **theme:** soybeans 改为 MyToolsNext ([e96f827](https://github.com/soybeanjs/soybean-admin/commit/e96f8275f87034a62e85b5307eea9d5195cc2b28))


### Bug Fixes

* **convert:** 修复不传参数时不显示输入框的问题 ([19e16c6](https://github.com/soybeanjs/soybean-admin/commit/19e16c6a65b8e0588851ed6f326768bbc6e8a5cb))
* **deploy:** 更新部署源路径为 dist/* 以确保正确部署所有文件 ([5f4e287](https://github.com/soybeanjs/soybean-admin/commit/5f4e287bd24f979cdf7c225ddebf445e22a21092))
* **route:** 修复关于菜单不在最下面的问题 ([d9a69a5](https://github.com/soybeanjs/soybean-admin/commit/d9a69a5200bd603752b4b408be963b761ab9eb2a))

## [0.1.0](https://github.com/soybeanjs/soybean-admin/compare/v0.0.2...v0.1.0) (2025-02-06)


### Features

* **convert:** 添加去除空白 ([3ba9916](https://github.com/soybeanjs/soybean-admin/commit/3ba99168768a84eed42c97b861630097e815aa3a))
* **theme:** soybeans 改为 MyToolsNext ([e96f827](https://github.com/soybeanjs/soybean-admin/commit/e96f8275f87034a62e85b5307eea9d5195cc2b28))


### Bug Fixes

* **route:** 修复关于菜单不在最下面的问题 ([d9a69a5](https://github.com/soybeanjs/soybean-admin/commit/d9a69a5200bd603752b4b408be963b761ab9eb2a))

## [0.0.2](https://github.com/soybeanjs/soybean-admin/compare/v0.0.1...v0.0.2) (2025-02-05)


### Features

* 干掉 i18n ([75cd01c](https://github.com/soybeanjs/soybean-admin/commit/75cd01c7c3e698a40a0aee6daf3859d65b6b3823))
* **about:** 底部显示构建日期 ([01d574e](https://github.com/soybeanjs/soybean-admin/commit/01d574e0f9debb55f002341b0e332b7374a78021))
* **about:** 删除首页无演示页面的提示 ([e7084fc](https://github.com/soybeanjs/soybean-admin/commit/e7084fca07a913c5e0182620b32a77fe44719faf))
* **about:** 新增关于界面用于显示开源组件许可 ([ca3ecd3](https://github.com/soybeanjs/soybean-admin/commit/ca3ecd3b441a0b7d301a899ddc84937437611675))
* **convert:** 添加web处理的菜单icon ([1ac8086](https://github.com/soybeanjs/soybean-admin/commit/1ac8086b85caa0dc6f2de08ac58df65add6e7697))
* **convert:** node-RED Buffer ([3534a31](https://github.com/soybeanjs/soybean-admin/commit/3534a3157e2fb795dc89f64151940bf39a20f9c0))
* **login:** 支持免账号登录 ([73b83c8](https://github.com/soybeanjs/soybean-admin/commit/73b83c8117547cb8aa29783e23561cdb369bdc6b))
* **theme:** 恢复圆角和主题色 ([874b5a4](https://github.com/soybeanjs/soybean-admin/commit/874b5a403f023b367993b7aa950259f3291a8137))


### Bug Fixes

* **theme:** 修复自带模板重置失败的问题 ([8e8cdd1](https://github.com/soybeanjs/soybean-admin/commit/8e8cdd1b1e70362467df58b4892af9a0c3607c11))

## 0.0.1 (2025-02-03)


### Features

* **login:** 使用 go 作为后端 ([661fde1](https://github.com/soybeanjs/soybean-admin/commit/661fde10548970616c98b01217c280e65fe364e9))
* **login:** 修剪登录界面 ([6f25eda](https://github.com/soybeanjs/soybean-admin/commit/6f25eda6aee5a5bb29c6c9bf97a02a00bf2b7cfe))
* **projects:** support loading page dark mode adaptation. ([#702](https://github.com/soybeanjs/soybean-admin/issues/702)) ([17400c4](https://github.com/soybeanjs/soybean-admin/commit/17400c416fe87f000c97715d2dbdefbd8f6ef12e))


### Bug Fixes

* **projects:** fix multiple calls to the login API when clicking quickly. fixed [#697](https://github.com/soybeanjs/soybean-admin/issues/697) ([#698](https://github.com/soybeanjs/soybean-admin/issues/698)) ([a311623](https://github.com/soybeanjs/soybean-admin/commit/a3116230b4b27af60d26cf0ce4e718e3c76b722a))
* **projects:** hidden multi-language button in login page. fix [#694](https://github.com/soybeanjs/soybean-admin/issues/694) ([1bbeeae](https://github.com/soybeanjs/soybean-admin/commit/1bbeeaee4cc28ba402b6495cab0a188a2dac35fa))
