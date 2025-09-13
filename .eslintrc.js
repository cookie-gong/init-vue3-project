module.exports = {
  // 告诉ESLint这是根目录配置，不会向上查找其他配置
  root: true,

  // 环境配置，指定代码运行的环境
  env: {
    browser: true, // 浏览器环境
    es2021: true, // ES2021特性支持
    node: true, // Node.js环境
    'vue/setup-compiler-macros': true, // 支持Vue3的setup语法糖
  },

  // 扩展配置，继承已有的规则集
  extends: [
    'eslint:recommended', // 使用ESLint官方推荐规则
    'plugin:vue/vue3-essential', // Vue3核心规则
    'plugin:vue/vue3-strongly-recommended', // Vue3强推荐规则
    'plugin:vue/vue3-recommended', // Vue3推荐规则
    'plugin:@typescript-eslint/recommended', // TypeScript推荐规则
    'plugin:import/recommended', // 导入相关推荐规则
    'plugin:import/typescript', // TypeScript导入规则
    'plugin:unicorn/recommended', // 独角兽规则集（最佳实践）
    'plugin:security/recommended', // 安全相关推荐规则
    'plugin:sonarjs/recommended', // 代码质量分析规则
  ],

  // 解析器配置
  parser: 'vue-eslint-parser', // 解析Vue文件
  parserOptions: {
    ecmaVersion: 'latest', // 支持最新ECMAScript特性
    parser: '@typescript-eslint/parser', // TypeScript解析器
    sourceType: 'module', // 模块系统
    ecmaFeatures: {
      jsx: true, // 支持JSX
    },
  },

  // 插件配置
  plugins: [
    'vue', // Vue插件
    '@typescript-eslint', // TypeScript插件
    'import', // 导入相关插件
    'unused-imports', // 检测未使用的导入
    'unicorn', // 独角兽插件
    'security', // 安全插件
    'sonarjs', // 代码质量分析插件
    'simple-import-sort', // 导入排序插件
  ],

  // 导入解析配置
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json', // 指定TypeScript配置文件
      },
      alias: {
        // 路径别名配置，与tsconfig中的paths保持一致
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },

  // 自定义规则配置
  rules: {
    // ----------------------------
    // 基础错误预防规则
    // ----------------------------

    // 生产环境禁止console
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 生产环境禁止debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 禁止使用alert、confirm、prompt
    'no-alert': 'warn',

    // 禁止使用void操作符
    'no-void': 'error',

    // 禁止使用var声明变量，推荐使用let/const
    'no-var': 'error',

    // 优先使用const声明变量
    'prefer-const': ['error', { destructuring: 'all' }],

    // 优先使用箭头函数作为回调
    'prefer-arrow-callback': 'error',

    // 箭头函数体在可能的情况下省略大括号
    'arrow-body-style': ['error', 'as-needed'],

    // 要求使用严格等于（===）和严格不等于（!==）
    eqeqeq: ['error', 'always'],

    // 禁止在else块中使用return后再跟代码
    'no-else-return': 'error',

    // 禁止未使用的表达式，允许短路表达式和三元表达式
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],

    // 禁止下划线前缀或后缀的变量名，允许在this和super后使用
    'no-underscore-dangle': ['error', { allowAfterSuper: true, allowAfterThis: true }],

    // 禁止使用特定的全局变量
    'no-restricted-globals': ['error', 'event', 'fdescribe'],

    // 强制var声明的变量在块级作用域内
    'block-scoped-var': 'error',

    // 要求函数要么始终返回值，要么始终不返回值
    'consistent-return': 'error',

    // 强制使用大括号包裹块级代码
    curly: ['error', 'multi-line', 'consistent'],

    // switch语句必须有default分支
    'default-case': 'error',

    // 优先使用点符号访问对象属性
    'dot-notation': 'error',

    // for-in循环必须有if语句过滤
    'guard-for-in': 'error',

    // 限制代码块嵌套深度
    'max-depth': ['error', 4],

    // 限制回调函数嵌套深度
    'max-nested-callbacks': ['error', 3],

    // 限制函数参数数量
    'max-params': ['error', 5],

    // 禁止使用位运算符
    'no-bitwise': 'error',

    // 禁止使用arguments.caller和arguments.callee
    'no-caller': 'error',

    // 禁止使用eval
    'no-eval': 'error',

    // 禁止扩展原生对象
    'no-extend-native': 'error',

    // 禁止不必要的函数绑定
    'no-extra-bind': 'error',

    // 禁止浮点数省略整数部分或小数部分
    'no-floating-decimal': 'error',

    // 禁止隐式的eval（如setTimeout("code")）
    'no-implied-eval': 'error',

    // 禁止在非构造函数中使用this
    'no-invalid-this': 'error',

    // 禁止使用iterator
    'no-iterator': 'error',

    // 禁止使用标签语句
    'no-labels': 'error',

    // 禁止不必要的块级作用域
    'no-lone-blocks': 'error',

    // 禁止在循环中定义函数
    'no-loop-func': 'error',

    // 禁止多个空格
    'no-multi-spaces': 'error',

    // 禁止多行字符串
    'no-multi-str': 'error',

    // 禁止无赋值的new操作符
    'no-new': 'error',

    // 禁止使用new Function
    'no-new-func': 'error',

    // 禁止使用new包装基本类型
    'no-new-wrappers': 'error',

    // 禁止使用八进制转义序列
    'no-octal-escape': 'error',

    // 禁止重新分配函数参数，允许修改属性
    'no-param-reassign': ['error', { props: false }],

    // 禁止使用__proto__
    'no-proto': 'error',

    // 禁止在return语句中使用赋值表达式
    'no-return-assign': 'error',

    // 禁止使用javascript: url
    'no-script-url': 'error',

    // 禁止自身比较
    'no-self-compare': 'error',

    // 禁止使用逗号操作符
    'no-sequences': 'error',

    // 禁止抛出字面量错误
    'no-throw-literal': 'error',

    // 禁用no-unused-vars，使用@typescript-eslint/no-unused-vars替代
    'no-unused-vars': 'off',

    // 禁止不必要的字符串拼接
    'no-useless-concat': 'error',

    // 禁止不必要的return语句
    'no-useless-return': 'error',

    // 禁止使用with语句
    'no-with': 'error',

    // parseInt必须指定基数
    radix: 'error',

    // var声明必须在作用域顶部
    'vars-on-top': 'error',

    // IIFE必须用括号包裹
    'wrap-iife': ['error', 'inside'],

    // 禁止Yoda条件（如if (42 === answer)）
    yoda: ['error', 'never'],

    // 禁用strict模式（现代模块系统默认启用）
    strict: ['error', 'never'],

    // ----------------------------
    // Import相关规则
    // ----------------------------

    // 导入时省略文件扩展名
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never',
      },
    ],

    // 导入语句必须放在文件顶部
    'import/first': 'error',

    // 导入语句后必须有一个空行
    'import/newline-after-import': 'error',

    // 禁止导入循环依赖
    'import/no-cycle': 'error',

    // 警告使用已弃用的API
    'import/no-deprecated': 'warn',

    // 禁止重复导入
    'import/no-duplicates': 'error',

    // 禁止导入不必要的依赖
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.spec.js',
          '**/*.spec.jsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
          'vite.config.js',
          'vite.config.ts',
          'vitest.config.js',
          'vitest.config.ts',
          'jest.config.js',
          'jest.config.ts',
          '.eslintrc.js',
          '.eslintrc.ts',
          'postcss.config.js',
          'postcss.config.ts',
          'tailwind.config.js',
          'tailwind.config.ts',
        ],
        optionalDependencies: false,
      },
    ],

    // 禁止导出可变变量
    'import/no-mutable-exports': 'error',

    // 禁止将默认导出命名为导入
    'import/no-named-as-default': 'error',

    // 禁止导入未解析的模块
    'import/no-unresolved': 'error',

    // 警告未使用的模块
    'import/no-unused-modules': 'warn',

    // 不强制优先使用默认导出
    'import/prefer-default-export': 'off',

    // 自动排序导入语句
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // ----------------------------
    // TypeScript相关规则
    // ----------------------------

    // 一致的类型导入方式
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

    // 禁止使用any类型
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],

    // 禁止未使用的变量
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    // 允许使用require语句
    '@typescript-eslint/no-var-requires': 'off',

    // 禁止定义空接口
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],

    // 禁止不必要的类型断言
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // 优先使用接口而非类型别名
    '@typescript-eslint/prefer-interface': 'off',

    // 要求函数和类方法指定返回类型
    '@typescript-eslint/explicit-function-return-type': 'off',

    // 允许使用函数表达式
    '@typescript-eslint/no-function-expressions': 'off',

    // 允许使用命名空间
    '@typescript-eslint/no-namespace': 'off',

    // ----------------------------
    // Vue相关规则
    // ----------------------------

    // 禁止在模板中使用v-html（安全考虑）
    'vue/no-v-html': 'warn',

    // 组件名称必须是多单词
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'], // 允许index作为组件名
      },
    ],

    // 禁止未使用的组件
    'vue/no-unused-components': 'error',

    // 禁止在计算属性中修改数据
    'vue/no-side-effects-in-computed-properties': 'error',

    // 要求props有默认值
    'vue/require-default-prop': 'error',

    // 要求props定义类型
    'vue/prop-name-casing': ['error', 'camelCase'],

    // 模板中禁止未使用的变量
    'vue/no-unused-vars': 'error',

    // 强制v-for使用key
    'vue/require-v-for-key': 'error',

    // 限制v-if和v-for同时使用
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true,
      },
    ],

    // 组件属性顺序
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION', // 定义相关 (is, v-is)
          'LIST_RENDERING', // 列表渲染 (v-for)
          'CONDITIONALS', // 条件渲染 (v-if, v-else-if, v-else, v-show)
          'RENDER_MODIFIERS', // 渲染修饰符 (v-once, v-memo)
          'GLOBAL', // 全局属性 (id)
          'UNIQUE', // 唯一属性 (ref, key)
          'SLOT', // 插槽 (v-slot, slot)
          'TWO_WAY_BINDING', // 双向绑定 (v-model)
          'OTHER_DIRECTIVES', // 其他指令
          'OTHER_ATTR', // 其他属性
          'EVENTS', // 事件 (v-on)
          'CONTENT', // 内容 (v-text, v-html)
        ],
      },
    ],

    // 组件选项顺序
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          'props',
          'propsData',
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],

    // ----------------------------
    // 独角兽规则（最佳实践）
    // ----------------------------

    // 允许console.log（在开发环境有用）
    'unicorn/consistent-function-scoping': 'off',

    // 允许process.exit()
    'unicorn/no-process-exit': 'off',

    // 允许使用普通函数
    'unicorn/prefer-arrow-function': 'off',

    // 允许使用for循环
    'unicorn/no-for-loop': 'off',

    // 调整错误消息格式
    'unicorn/error-message': 'error',

    // 禁止未使用的变量
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
};
