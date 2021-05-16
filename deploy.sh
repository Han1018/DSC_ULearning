set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# gcloud app deploy
git push -f https://github.com/Han1018/DSC_ULearning.git master:gh-pages

cd -