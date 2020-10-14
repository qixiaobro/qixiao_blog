#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
# echo 'techfly.com' > CNAME
# if [ -z "$GITHUB_TOKEN" ]; then
#   msg='deploy'
#   githubUrl=git@github.com:qixiaobro/qixiao_blog.git
# else
#   msg='来自github actions的自动部署'
#   githubUrl=https://qixiaobro:${GITHUB_TOKEN}@github.com:qixiaobro/qixiao_blog.git
#   git config --global user.name "qixiaobro"
#   git config --global user.email "982092690@qq.com"
# fi
# git init
# git add -A
# git commit -m "${msg}"
# git push -f $githubUrl main:gh-pages # 推送到github
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
 git push -f git@github.com:qixiaobro/qixiaobro.github.io.git master

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist