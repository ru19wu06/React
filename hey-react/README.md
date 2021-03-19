## 步驟一

- npx create-react-app 
- npm start

## 步驟二

- 上傳Github 開啟Gitpage

## 步驟三

- git add .
- git commit -m "AAA" (輸入註解)

## 步驟四

- git remote add origin git@github.com:PJCHENder/hey-react.git
- git push -u origin master
(更新推入原始檔案中) 

## 步驟五 - 重點

- 在專案的 package.json 中加入 homepage 欄位，裡面放入 Github Page 的網址

// package.json
{
  "name": "realtime-weather-app",
  "homepage": "https://myusername.github.io/my-app",
  // ...
}

## 步驟六 - 重點二

- npm install --save gh-pages
(添加Github page 管理套件 gh-pages)

## 步驟七 - 重點三

- package.json 檔案中的 scripts 欄位中添加以下指令

// package.json
{
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    // ...
  }
}

(確認上面資訊都打對，很重要)


## 最後步驟 推上Github

- npm run deploy

## 更改分支

- 到github上更改分支，結束開始運作


### 如果有問題爆錯資訊會寄到信箱
