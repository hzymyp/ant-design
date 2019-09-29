(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1670:function(n,t){n.exports={content:["article",{},["h2","Install and Initialization"],["p","Before all start, you may need install ",["a",{title:null,href:"https://github.com/yarnpkg/yarn/"},"yarn"],"."],["pre",{lang:"bash",highlighted:"$ yarn create react-app antd-demo"},["code","$ yarn create react-app antd-demo"]],["p","The tool will create and initialize environment and dependencies automatically, please try config your proxy setting or use another npm registry if any network errors happen during it."],["p","Then we go inside ",["code","antd-demo"]," and start it."],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> antd-demo\n$ yarn start'},["code","$ cd antd-demo\n$ yarn start"]],["p","Open the browser at ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"],'. It renders a header saying "Welcome to React" on the page.'],["h2","Import antd"],["p","Below is the default directory structure."],["pre",{lang:null,highlighted:'├── README<span class="token punctuation">.</span>md\n├── package<span class="token punctuation">.</span>json\n├── public\n│   ├── favicon<span class="token punctuation">.</span>ico\n│   └── index<span class="token punctuation">.</span>html\n├── src\n│   ├── App<span class="token punctuation">.</span>css\n│   ├── App<span class="token punctuation">.</span>js\n│   ├── App<span class="token punctuation">.</span>test<span class="token punctuation">.</span>js\n│   ├── index<span class="token punctuation">.</span>css\n│   ├── index<span class="token punctuation">.</span>js\n│   └── logo<span class="token punctuation">.</span>svg\n└── yarn<span class="token punctuation">.</span>lock'},["code","├── README.md\n├── package.json\n├── public\n│   ├── favicon.ico\n│   └── index.html\n├── src\n│   ├── App.css\n│   ├── App.js\n│   ├── App.test.js\n│   ├── index.css\n│   ├── index.js\n│   └── logo.svg\n└── yarn.lock"]],["p","Now we install ",["code","antd"]," from yarn or npm."],["pre",{lang:"bash",highlighted:"$ yarn add antd"},["code","$ yarn add antd"]],["p","Modify ",["code","src/App.js"],", import Button component from ",["code","antd"],"."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd/es/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./App.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>'},["code","import React, { Component } from 'react';\nimport Button from 'antd/es/button';\nimport './App.css';\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"]],["p","Add ",["code","antd/dist/antd.css"]," at the top of ",["code","src/App.css"],"."],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">\'~antd/dist/antd.css\'</span><span class="token punctuation">;</span></span>\n\n<span class="token selector"><span class="token class">.App</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token number">...</span>'},["code","@import '~antd/dist/antd.css';\n\n.App {\n  text-align: center;\n}\n\n..."]],["p","Ok, you should now see a blue primary button displayed on the page. Next you can choose any components of ",["code","antd"]," to develop your application. Visit other workflows of ",["code","create-react-app"]," at its ",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"},"User Guide "],"."],["h2","Advanced Guides"],["p","We are successfully running antd components now but in the real world, there are still lots of problems about antd-demo. For instance, we actually import styles of all components in the project which may be a css bundle size issue (It is OK then if you don't case the gzipped 60kb css file size)."],["p","Now we need to customize the default webpack config. We can achieve that by using ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"]," which is one of create-react-app's custom config solutions."],["p","Import react-app-rewired and modify the ",["code","scripts"]," field in package.json. Due to new ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired#alternatives"},"react-app-rewired@2.x"]," issue, you shall need ",["a",{title:null,href:"https://github.com/arackaf/customize-cra"},"customize-cra"]," along with react-app-rewired."],["pre",{lang:null,highlighted:'$ yarn add react<span class="token operator">-</span>app<span class="token operator">-</span>rewired customize<span class="token operator">-</span>cra'},["code","$ yarn add react-app-rewired customize-cra"]],["pre",{lang:"diff",highlighted:'/* package.json */\n"scripts": {\n<span class="token deleted">-   "start": "react-scripts start",</span>\n<span class="token inserted">+   "start": "react-app-rewired start",</span>\n<span class="token deleted">-   "build": "react-scripts build",</span>\n<span class="token inserted">+   "build": "react-app-rewired build",</span>\n<span class="token deleted">-   "test": "react-scripts test",</span>\n<span class="token inserted">+   "test": "react-app-rewired test",</span>\n}'},["code",'/* package.json */\n"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test",\n+   "test": "react-app-rewired test",\n}']],["p","Then create a ",["code","config-overrides.js"]," at root directory of your project for further overriding."],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// do stuff with the webpack config...</span>\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  return config;\n};"]],["h3","Use babel-plugin-import"],["blockquote",["p","Note: antd support ES6 tree shaking by default even without this babel plugin for js part."]],["p",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," is a babel plugin for importing components on demand (",["a",{title:null,href:"/docs/react/getting-started#Import-on-Demand"},"How does it work?"],"). We are now trying to install it and modify ",["code","config-overrides.js"],"."],["pre",{lang:"bash",highlighted:"$ yarn add babel-plugin-import"},["code","$ yarn add babel-plugin-import"]],["pre",{lang:"diff",highlighted:'<span class="token inserted">+ const { override, fixBabelImports } = require(\'customize-cra\');</span>\n\n<span class="token deleted">- module.exports = function override(config, env) {</span>\n<span class="token deleted">-   // do stuff with the webpack config...</span>\n<span class="token deleted">-   return config;</span>\n<span class="token deleted">- };</span>\n<span class="token inserted">+ module.exports = override(</span>\n<span class="token inserted">+   fixBabelImports(\'import\', {</span>\n<span class="token inserted">+     libraryName: \'antd\',</span>\n<span class="token inserted">+     libraryDirectory: \'es\',</span>\n<span class="token inserted">+     style: \'css\',</span>\n<span class="token inserted">+   }),</span>\n<span class="token inserted">+ );</span>'},["code","+ const { override, fixBabelImports } = require('customize-cra');\n\n- module.exports = function override(config, env) {\n-   // do stuff with the webpack config...\n-   return config;\n- };\n+ module.exports = override(\n+   fixBabelImports('import', {\n+     libraryName: 'antd',\n+     libraryDirectory: 'es',\n+     style: 'css',\n+   }),\n+ );"]],["p","Remove the ",["code","@import '~antd/dist/antd.css';"]," statement added before because ",["code","babel-plugin-import"]," will import styles and import components like below:"],["pre",{lang:"diff",highlighted:"  // src/App.js\n  import React, { Component } from 'react';\n<span class=\"token deleted\">- import Button from 'antd/es/button';</span>\n<span class=\"token inserted\">+ import { Button } from 'antd';</span>\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        &lt;div className=\"App\">\n          &lt;Button type=\"primary\">Button&lt;/Button>\n        &lt;/div>\n      );\n    }\n  }\n\n  export default App;"},["code","  // src/App.js\n  import React, { Component } from 'react';\n- import Button from 'antd/es/button';\n+ import { Button } from 'antd';\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        <div className=\"App\">\n          <Button type=\"primary\">Button</Button>\n        </div>\n      );\n    }\n  }\n\n  export default App;"]],["p","Then reboot with ",["code","yarn start"]," and visit the demo page, you should not find any ",["a",{title:null,href:"https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"},"warning messages"]," in the console, which prove that the ",["code","import on demand"]," config is working now. You will find more info about it in ",["a",{title:null,href:"/docs/react/getting-started#Import-on-Demand"},"this guide"],"."],["h3","Customize Theme"],["p","According to the ",["a",{title:null,href:"/docs/react/customize-theme"},"Customize Theme documentation"],", to customize the theme, we need to modify ",["code","less"]," variables with tools such as ",["a",{title:null,href:"https://github.com/webpack/less-loader"},"less-loader"],". We can also use ",["a",{title:null,href:"https://github.com/arackaf/customize-cra#addlessloaderloaderoptions"},"addLessLoader"]," to achieve this. Import it and modify ",["code","config-overrides.js"]," like below."],["pre",{lang:"bash",highlighted:'$ yarn add <span class="token function">less</span> less-loader'},["code","$ yarn add less less-loader"]],["pre",{lang:"diff",highlighted:"<span class=\"token deleted\">- const { override, fixBabelImports } = require('customize-cra');</span>\n<span class=\"token inserted\">+ const { override, fixBabelImports, addLessLoader } = require('customize-cra');</span>\n\nmodule.exports = override(\n  fixBabelImports('import', {\n    libraryName: 'antd',\n    libraryDirectory: 'es',\n<span class=\"token deleted\">-   style: 'css',</span>\n<span class=\"token inserted\">+   style: true,</span>\n  }),\n<span class=\"token inserted\">+ addLessLoader({</span>\n<span class=\"token inserted\">+   javascriptEnabled: true,</span>\n<span class=\"token inserted\">+   modifyVars: { '@primary-color': '#1DA57A' },</span>\n<span class=\"token inserted\">+ }),</span>\n);"},["code","- const { override, fixBabelImports } = require('customize-cra');\n+ const { override, fixBabelImports, addLessLoader } = require('customize-cra');\n\nmodule.exports = override(\n  fixBabelImports('import', {\n    libraryName: 'antd',\n    libraryDirectory: 'es',\n-   style: 'css',\n+   style: true,\n  }),\n+ addLessLoader({\n+   javascriptEnabled: true,\n+   modifyVars: { '@primary-color': '#1DA57A' },\n+ }),\n);"]],["p","We use ",["code","modifyVars"]," option of ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," here, you can see a green button rendered on the page after rebooting the start server."],["blockquote",["p","You could also try ",["a",{title:null,href:"https://github.com/sharegate/craco"},"craco"]," and ",["a",{title:null,href:"https://github.com/FormAPI/craco-antd"},"craco-antd"]," to customize create-react-app webpack config same as customize-cra does."]],["h2","eject"],["p","You can also eject your application using ",["a",{title:null,href:"https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject"},"yarn run eject"]," for a custom setup of create-react-app, although you should dig into it by yourself."],["h2","Source code and other boilerplates"],["p","Finally, we used antd with create-react-app successfully, you can learn these practices for your own webpack workflow too, and find more webpack configs in the ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"},"atool-build"],". (For instance, add ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/e4bd2959689b6a95cb5c1c854a5db8c98676bdb3/src/getWebpackCommonConfig.js#L90"},"moment noParse"]," to avoid loading all language files.)"],["p","There are a lot of great boilerplates like create-react-app in the React community. There are some source code samples of importing antd in them if you encounter some problems."],["ul",["li",["p",["a",{title:null,href:"https://github.com/ant-design/create-react-app-antd"},"create-react-app-antd"]]],["li",["p",["a",{title:null,href:"https://github.com/comerc/cra-ts-antd"},"comerc/cra-ts-antd"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/react-boilerplate"},"react-boilerplate/react-boilerplate"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/react-starter-kit"},"kriasoft/react-starter-kit"]]],["li",["p",["a",{title:null,href:"https://github.com/zeit/next.js/tree/master/examples/with-ant-design"},"next.js"]]],["li",["p",["a",{title:null,href:"https://github.com/insin/nwb-examples/tree/master/react-app-antd"},"nwb"]]],["li",["p",["a",{title:null,href:"https://github.com/minesaner/create-react-app/tree/antd/packages/react-scripts"},"antd-react-scripts"]]]]],meta:{order:3,title:"Use in create-react-app",filename:"docs/react/use-with-create-react-app.en-US.md"},description:["section",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," is one of the best React application development tools. We are going to use ",["code","antd"]," within it and modify the webpack config for some customized needs."]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Install-and-Initialization",title:"Install and Initialization"},"Install and Initialization"]],["li",["a",{className:"bisheng-toc-h2",href:"#Import-antd",title:"Import antd"},"Import antd"]],["li",["a",{className:"bisheng-toc-h2",href:"#Advanced-Guides",title:"Advanced Guides"},"Advanced Guides"]],["li",["a",{className:"bisheng-toc-h2",href:"#eject",title:"eject"},"eject"]],["li",["a",{className:"bisheng-toc-h2",href:"#Source-code-and-other-boilerplates",title:"Source code and other boilerplates"},"Source code and other boilerplates"]]]}}}]);