git clone https://github.com/krestaino/load-test-server.git test.kmr.io

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash && source .bashrc && nvm install $(cat test.kmr.io/.nvmrc)

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
apt update && sudo apt install --no-install-recommends yarn

yarn --cwd "test.kmr.io" install
yarn --cwd "test.kmr.io" build

yarn global add pm2
pm2 start "test.kmr.io/dist/index.js" --name $HOSTNAME
pm2 startup
pm2 save