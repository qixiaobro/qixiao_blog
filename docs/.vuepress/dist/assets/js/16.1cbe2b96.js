(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{479:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-js-node-js全栈项目服务器部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-node-js全栈项目服务器部署"}},[s._v("#")]),s._v(" Vue.js+node.js全栈项目服务器部署")]),s._v(" "),a("h1",{attrs:{id:"_1-搭建环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-搭建环境"}},[s._v("#")]),s._v(" 1. 搭建环境")]),s._v(" "),a("h3",{attrs:{id:"_1-1-安装node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-安装node-js"}},[s._v("#")]),s._v(" 1.1 安装Node.js")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在"),a("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("node官网"),a("OutboundLink")],1),s._v("下载LTS（即当前稳定版本），找到对应当前服务器环境的node。复制版本号。")])]),s._v(" "),a("li",[a("p",[s._v("我们一般将node安装到 "),a("code",[s._v("/usr/local/src")]),s._v(" 文件夹下。因此我们连接服务器，并进入此文件夹下。")])])]),s._v(" "),a("p",[a("code",[s._v("cd /usr/local/src")])]),s._v(" "),a("ul",[a("li",[s._v("下载安装包")])]),s._v(" "),a("p",[a("code",[s._v("wget https://npm.taobao.org/mirrors/node/latest-v12.x/node-v12.18.3-linux-x64.tar.gz")])]),s._v(" "),a("ul",[a("li",[s._v("解压")])]),s._v(" "),a("p",[a("code",[s._v("tar -zxvf node-v12.18.3-linux-x64.tar.gz")])]),s._v(" "),a("ul",[a("li",[s._v("将解压后的文件夹更换目录名，也可以不换。这是为了可以不用输这么长的一个名字")])]),s._v(" "),a("p",[a("code",[s._v("mv node-v12.18.3-linux-x64 nodejs")])]),s._v(" "),a("ul",[a("li",[s._v("建立软链接，用上了刚才更换的文件夹名，没更换的要用原文件夹名")])]),s._v(" "),a("p",[a("code",[s._v("ln -s /usr/local/src/nodejs/bin/node /usr/local/bin/node")]),s._v(" "),a("code",[s._v("ln -s /usr/local/src/nodejs/bin/npm /usr/local/bin/npm")]),s._v("\n如果此步报一下错误，则说明之前建立过软链，需进行清除。\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/377922/1598941512088-c1e95b71-bd06-4921-b576-ec649c32a044.png#align=left&display=inline&height=32&margin=%5Bobject%20Object%5D&name=%E6%88%AA%E5%B1%8F2020-09-01%20%E4%B8%8B%E5%8D%882.25.05.png&originHeight=36&originWidth=754&size=26324&status=done&style=stroke&width=668",alt:"截屏2020-09-01 下午2.25.05.png"}}),s._v("\n使用以下命令清除，也可以直接用ftp工具连上服务器后直接右键删除。\n"),a("code",[s._v("ln -sf /usr/local/src/nodejs/bin/node /usr/local/bin/nod")]),s._v(" "),a("code",[s._v("ln -sf /usr/local/src/nodejs/bin/npm /usr/local/bin/npm")])]),s._v(" "),a("p",[s._v("清除后需重新建立软链接")]),s._v(" "),a("ul",[a("li",[s._v("设置环境变量")])]),s._v(" "),a("p",[s._v("打开环境变量文件\n"),a("code",[s._v("vim /etc/profile")])]),s._v(" "),a("p",[s._v("按"),a("code",[s._v("i")]),s._v("进入编辑模式，在文件最后写上\n"),a("code",[s._v("PATH=$PATH:/usr/local/src/nodejs/bin")]),s._v("\n按"),a("code",[s._v("esc")]),s._v("键，退出编辑模式，按"),a("code",[s._v(":wq")]),s._v("保存退出")]),s._v(" "),a("ul",[a("li",[s._v("执行文件")])]),s._v(" "),a("p",[a("code",[s._v("source /etc/profile")])]),s._v(" "),a("ul",[a("li",[s._v("测试安装是否成功")])]),s._v(" "),a("p",[a("code",[s._v("node -v")]),s._v(" "),a("code",[s._v("npm -v")])]),s._v(" "),a("p",[s._v("成功安装则会显示node和npm版本号"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/377922/1598941827740-e8214c38-cfbb-48e9-9a18-b63670d4a5d7.png#align=left&display=inline&height=109&margin=%5Bobject%20Object%5D&name=%E6%88%AA%E5%B1%8F2020-09-01%20%E4%B8%8B%E5%8D%882.30.19.png&originHeight=116&originWidth=536&size=38567&status=done&style=stroke&width=504",alt:"截屏2020-09-01 下午2.30.19.png"}})]),s._v(" "),a("h3",{attrs:{id:"_1-2-安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-安装nginx"}},[s._v("#")]),s._v(" 1.2 安装Nginx")]),s._v(" "),a("ul",[a("li",[s._v("执行以下命令，在 "),a("code",[s._v("/etc/yum.repos.d/")]),s._v(" 下创建 "),a("code",[s._v("nginx.repo")]),s._v(" 文件")])]),s._v(" "),a("p",[a("code",[s._v("vi /etc/yum.repos.d/nginx.repo")])]),s._v(" "),a("ul",[a("li",[s._v("按 “i” 切换至编辑模式，写入以下内容。")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \nname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nginx repo \nbaseurl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("packages"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mainline"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("centos"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" \ngpgcheck "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \nenabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("按 "),a("code",[s._v("esc")]),s._v("，输入 "),a("code",[s._v(":wq")]),s._v("，保存文件并返回。")])]),s._v(" "),a("li",[a("p",[s._v("执行以下命令，安装 nginx。")])])]),s._v(" "),a("p",[a("code",[s._v("yum install -y nginx")])]),s._v(" "),a("ul",[a("li",[s._v("执行以下命令，打开 Nginx 的配置文件。")])]),s._v(" "),a("p",[a("code",[s._v("vim /etc/nginx/nginx.conf")])]),s._v(" "),a("ul",[a("li",[s._v("按i切换至编辑模式，在文件中的include /etc/nginx/conf.d/*conf;上方写入以下内容。")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v("  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#charset koi8-r;")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access_log  /var/log/nginx/log/host.access.log  main;")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try_files")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_page  404              /404.html;")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#redirect server error pages to the static page /50x.html")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_page")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("按下Esc键，输入“:wq”保存对文件的更改并退出。")]),s._v(" "),a("ul",[a("li",[s._v("启动Nginx")])]),s._v(" "),a("p",[a("code",[s._v("systemctl start nginx")])]),s._v(" "),a("ul",[a("li",[s._v("设置Nginx开机自启动")])]),s._v(" "),a("p",[a("code",[s._v("systemctl enable nginx")])]),s._v(" "),a("ul",[a("li",[s._v("在浏览器输入ip地址，测试是否成功安装，成功安装则会显示以下信息")])]),s._v(" "),a("p",[a("code",[s._v("http://云服务器实例的公网 IP")])]),s._v(" "),a("h3",{attrs:{id:"_1-3-安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-安装mysql"}},[s._v("#")]),s._v(" 1.3 安装mysql")]),s._v(" "),a("h3",{attrs:{id:"_1-4-安装pm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-安装pm2"}},[s._v("#")]),s._v(" 1.4 安装PM2")]),s._v(" "),a("p",[s._v("PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。我们在服务器使用node命令运行的node服务，会在我们退出连接后关闭，所以需要使用PM2守护，在我们node服务文件更新后，PM2也能够自动重启服务。附带PM2常用命令官网"),a("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/quick-start/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pm2.keymetrics.io/docs/usage/quick-start/"),a("OutboundLink")],1)]),s._v(" "),a("ul",[a("li",[s._v("在安装完成node后，自带npm，则安装PM2只需执行以下命令，全局安装。")])]),s._v(" "),a("p",[a("code",[s._v("npm install -g pm2")])]),s._v(" "),a("ul",[a("li",[s._v("输入以下命令，测试是否安装成功")])]),s._v(" "),a("p",[a("code",[s._v("pm2 -v")]),s._v("\n安装成功：\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/377922/1598943377723-2184e168-4f1d-4b22-8b05-7569818aac43.png#align=left&display=inline&height=574&margin=%5Bobject%20Object%5D&name=%E6%88%AA%E5%B1%8F2020-09-01%20%E4%B8%8B%E5%8D%882.52.29.png&originHeight=1148&originWidth=986&size=393886&status=done&style=stroke&width=493",alt:"截屏2020-09-01 下午2.52.29.png"}}),s._v("\n如果出现以下错误：\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/377922/1598943413014-fcdd0182-99f5-4ae1-b196-48e605c288e2.png#align=left&display=inline&height=281&margin=%5Bobject%20Object%5D&name=%E6%88%AA%E5%B1%8F2020-09-01%20%E4%B8%8B%E5%8D%882.51.51.png&originHeight=562&originWidth=1134&size=320184&status=done&style=stroke&width=567",alt:"截屏2020-09-01 下午2.51.51.png"}}),s._v("\n说明你安装的Node.js版本太低了，不支持解构等语法。使用第一步安装Node.js的步骤重新安装最新版Node")]),s._v(" "),a("h1",{attrs:{id:"_2-部署项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-部署项目"}},[s._v("#")]),s._v(" 2. 部署项目")]),s._v(" "),a("h3",{attrs:{id:"_2-1-配置nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-配置nginx"}},[s._v("#")]),s._v(" 2.1 配置Nginx")]),s._v(" "),a("h3",{attrs:{id:"_2-2-打包前端项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-打包前端项目"}},[s._v("#")]),s._v(" 2.2 打包前端项目")]),s._v(" "),a("h3",{attrs:{id:"_2-3-部署前端项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-部署前端项目"}},[s._v("#")]),s._v(" 2.3 部署前端项目")]),s._v(" "),a("h3",{attrs:{id:"_2-4-部署后端服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-部署后端服务"}},[s._v("#")]),s._v(" 2.4 部署后端服务")])])}),[],!1,null,null,null);t.default=e.exports}}]);