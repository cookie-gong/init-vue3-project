module.exports = {
  // 环境配置：可以针对不同环境设置不同的Babel配置
  env: {
    // 开发环境配置
    development: {
      // 启用sourceMap，便于开发调试
      sourceMaps: true,
      // 不压缩代码，提高开发效率
      compact: false,
    },
    // 生产环境配置
    production: {
      // 生产环境禁用sourceMap，保护源码并减小体积
      sourceMaps: false,
      // 压缩代码，减小文件体积
      compact: true,
    },
    // 测试环境配置
    test: {
      // 测试环境需要sourceMap
      sourceMaps: true,
      // 使用 Istanbul 工具进行代码覆盖率检测
      plugins: ['istanbul'],
    },
  },

  // 预设配置：一组预先设定的插件集合，简化配置
  presets: [
    // @vitejs/plugin-vue 的Babel预设，针对Vue单文件组件优化
    '@vitejs/plugin-vue/babel',

    // @babel/preset-env 用于转译ES6+语法到目标环境支持的语法
    [
      '@babel/preset-env',
      {
        // 自动检测目标浏览器，根据浏览器兼容性自动决定需要转译的特性
        useBuiltIns: 'usage',
        // 指定core-js版本，用于提供ES6+的polyfill
        corejs: 3,
        // 不将ES模块转换为其他模块格式，保持ES模块特性
        modules: false,
        // 目标浏览器配置，可以根据项目需求调整
        targets: {
          browsers: [
            'last 2 versions', // 每个浏览器的最后两个版本
            '> 1%', // 全球市场份额大于1%的浏览器
            'not dead', // 排除已停止维护的浏览器
            'not ie <= 11', // 排除IE11及以下版本
          ],
          esmodules: true, // 支持原生ES模块的浏览器
        },
        // 调试模式，开发环境下可以启用，查看转译过程
        debug: false,
      },
    ],
  ],

  // 插件配置：用于转译特定语法或增强功能
  plugins: [
    // 支持可选链操作符 ?.
    '@babel/plugin-proposal-optional-chaining',
    // 支持空值合并操作符 ??
    '@babel/plugin-proposal-nullish-coalescing-operator',
    // 支持逻辑赋值运算符 ||= &&= ??=
    '@babel/plugin-proposal-logical-assignment-operators',
    // 支持管道操作符 |> (处于提案阶段)
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    // 支持函数绑定 :: (处于提案阶段)
    '@babel/plugin-proposal-function-bind',
    // 支持类的私有方法和私有属性
    '@babel/plugin-proposal-private-methods',
    // 支持静态类属性和实例属性的声明
    '@babel/plugin-proposal-class-properties',
    // 支持动态导入()语法
    '@babel/plugin-syntax-dynamic-import',
    // 支持顶层await语法
    '@babel/plugin-syntax-top-level-await',

    // Vue JSX支持（如果项目使用JSX开发Vue组件）
    [
      '@vue/babel-plugin-jsx',
      {
        // 启用Vue 3的JSX转换模式
        mergeProps: true,
        // 支持函数式组件
        functional: true,
        // 支持Vue 3的v-model语法
        vModel: true,
        // 支持Vue 3的v-on语法
        vOn: true,
      },
    ],

    // 用于移除生产环境下的console和debugger
    [
      'transform-remove-console',
      {
        // 保留console.error和console.warn，便于生产环境错误监控
        exclude: ['error', 'warn'],
      },
    ],
  ],

  // 忽略文件配置：这些文件不需要经过Babel处理
  ignore: [
    // 忽略node_modules目录下的文件
    /node_modules/,
    // 忽略dist目录下的文件（通常是构建产物）
    /dist/,
    // 忽略.git目录
    /.git/,
  ],

  // 扩展配置：可以继承其他Babel配置文件
  extends: [],

  // 解析器配置：指定Babel如何解析代码
  parserOpts: {
    // 支持最新的ECMAScript版本
    sourceType: 'module',
    // 启用动态导入语法支持
    allowImportExportEverywhere: false,
  },

  // 生成器配置：指定Babel如何生成代码
  generatorOpts: {
    // 保持代码缩进风格
    retainLines: false,
    // 行结束符使用LF
    lineTerminator: '\n',
  },
};
