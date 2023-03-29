git pull &&
rm -rf node_modules &&
yarn &&
yarn run build &&
pm2 start ecosystem.config.js --only nuxt-prod
