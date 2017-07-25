# 概念
## 介绍
webpack是一个用于构建现代Javascript应用的模块打包工具。当webpack处理你的应用时，他会递归的处理包含应用所需的每个模块的依赖图，然后将这些模块打包到少量能被浏览器加载的bundle文件中（通常只有一个）。

webpack是高度可配置的，但是开始时，你只需要理解四个核心概念：entry（入口），output（输出），loader和plugins（插件）。

这里讲概括的描述着写概念，并提使用案例详细描述这些概念特性的链接。

### Entry（入口）
webpack会为你应用的依赖创建一个图表。该图表的起始点被称为entry point。entry point会告诉webpack冲那里开始然后根据依赖图表获知要打包那些文件。你可以将应用的entry point理解为contextual root（上下文的根）或者是应用第一个开始的文件。

在webpack中，我们将在(weppack配置对象)[https://webpack.js.org/configuration/]中使用`property`属性来定义entry point。

简单的例子如下：

webpack.config,.js
```
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

实际应用的需求下我们有很多定义`entry`属性的方式。

(学习更多)[https://webpack.js.org/concepts/entry-points/]

### Output（输出）
一旦你将所有的资源打包到一起，你仍然需要告诉webpack在应用的哪里输出打包数据。webpack的`output`属性告诉webpack怎样处理打包的代码。

webpack.config.js
```
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```
在上面的例子中，我们使用`output.filename`和`output.path`属性告诉打包数据输出的文件名和文件路径。

`output`属性有[更多可配置属性](https://webpack.js.org/configuration/output/)。我们可以先了解一些常用属性。

[学习更多](https://webpack.js.org/concepts/output/)

### Loaders
为了让webpack处理项目中的所有资源而不是浏览器（说的更清楚一些，这并不意味着把所有的东西打包到一起）这个目标。webpack将[每个文件](https://webpack.js.org/concepts/modules/)（.css,.html,.scss,jpt,etc）都作为一个模块。当然，webpack只理解Javascript。

如果这些文件被添加到了项目的依赖图，webpack的`Loaders`就会把它们转换成模块。（Loaders in webpack transform these files into modules as they are added to your dependency graph.）

站在更高的层次上来说，你的weppack配置的loaders有两个目标，他们是：
1. 确定哪一个或者哪几个文件会被指定的loader转换(`test`属性)
2. 转换这些文件让他们可以添加到项目的依赖图中（最终会在bundle中）(`use`属性)。

webpack.config.js
```
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
```

 上面这个配置中为一个模块定义了一个`rules`属性，同时`rules`也有链各个属性:`test`和`use`。这会告诉webpack编译器如下意思:

 > "嗨webpack编译器, 当你在一个文件内遇到`require()`或者`import()`语句，并且路径被解析为`.txt`类型文件，请在这些文件被添加到bundle之前使用`raw-loader`转换它。
 
还有一点很重要，请记住当你在webpack配置中定义rules时,是在`module.rules`下定义而不是在`rules`下。为了帮助到你，webpack会在你错误的时候提示你。

loader还有更多可配置属性。

[学习更多](https://webpack.js.org/concepts/loaders/)

### 插件
然而Loaders只在单文件基础上执行转换，`plugins`则更多的是在已经打包模块（或者更多）的合集(compilations)或chunks层次上执行操作和定制功能。webpack的Plugin系统极其有利并高度可定制的。要使用plugin，你只需要`require()`插件然后把他添加到`plugins`数组。大多数插件都可以通过options去定制。你可以根据不同的需求在配置中多次重复使用一个plugin，只需要使用`new`去创建一个实例。

webpack.config.js
```
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```
webpack提供了很多开箱即用的插件，查看[插件列表](https://webpack.js.org/plugins/)获取更多信息。

在webpack配置文件中使用config是最直接的，然而也是许多的用例是值得进一步探究的

[学习更多](https://webpack.js.org/concepts/plugins/)

## Entry Points
如[Getting Started](https://webpack.js.org/guides/getting-started/#using-a-configuration)中提到的，在webpack配置文件中有许多方式定义`entry`属性。这里我们将向你展示有哪些方式可以配置`entry`属性，并向你解释为什么它会对你有用。

### Single Entry[Shorthand] Syntax
用法:`entry: string|Array<string>`

webpack.config.js
```
const config = {
  entry: './path/to/my/entry/file.js'
};

module.exports = config;
```
对于单个entry语法entry属性是一个简写：
```
const config = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};
```
当你为`entry`添加一个数组的时候到底发生了什么？传递一个文件路径的数组作为`entry`的值将创建一个所谓的"多主入口(multi-main entry)"。这在你想注入多个文件到一起并添加他们的依赖到一个"chunk"时是非常有用的。

这在你希望为应用或者单entry点工具（例如一个库）创建webpack配置时是非常有用的。然而使用此语法扩展或缩放配置没有太大的灵活性。

### Object Syntax
用法：`entry: {[entryChunkName: string]: string|Array<string>}`

webpack.config.js
```
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
```
对象语法更冗长。但是定制化也更高。

“可拓展webpack配置（Scalable webpack configurations）”是指


###
