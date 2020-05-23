# React project

#start project locally
```
bash / cmd
npm run dev
```
* scripts - dev in package.json for windows:
* "dev": "del -Rf dist && yarn run webpack --config ./webpack/webpack.js --mode development && ./src/index.html ./dist/" 

* scripts - dev in package.json for windows:
* "dev": "rm -Rf dist && webpack --config ./webpack/webpack.js --mode development"

* for mac:
* "dev": "rm -Rf dist && webpack --config ./webpack/webpack.js --mode development && cp ./src/index.html ./dist/"

<!-- User commits change settings:

git config user.email "email@example.com"

Confirm that you have set the email address correctly in Git:
git config user.email
email@example.com -->

<!-- updating react: 
    npm install --save react@16.0.0 -->