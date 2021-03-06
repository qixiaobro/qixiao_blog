#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
# echo 'techfly.com' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:qixiaobro/qixiao_blog.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://qixiaobro:${GITHUB_TOKEN}@github.com/qixiaobro/qixiao_blog.git
  git config --global user.name "qixiaobro"
  git config --global user.email "982092690@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

# deploy to coding
# echo 'blog.techfly.top' > CNAME  # 自定义域名
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=git@e.coding.net:qixiaobro/blog/blog.git
else
  codingUrl=https://bfiqSVaSrN:${CODING_TOKEN}@e.coding.net/qixiaobro/blog/blog.git
fi
git add -A
git commit -m "${msg}"
git push -f $codingUrl master:gh-pages # 推送到coding

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist