## mysite powered by node.js(express)

#### 설치패키지

```bash
[mysite] $ npm i express o
[mysite] $ npm i ejs     o
[mysite] $ npm i mysql2
[mysite] $ npm i express-session
[mysite] $ npm i sequelize
[mysite] $ npm i dotenv  o
[mysite] $ npm i multer
[mysite] $ npm i winston
[mysite] $ npm i winston-daily-rotate-file
[mysite] $ npm i moment

[mysite] $ npm -D nodemon o
[mysite] $ npm -D mocha
[mysite] $ npm -D chai

```

#### scripts in package.json

```json
  "scripts": {
    "start": "node index.js",
    "debug": "nodemon index.js",
    "test" : "npx mocha"
  }
```

#### project structure
<pre> 
                                    []: git에다 올리지 말 것

/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- [node-modules]             // 라이브러리 패키지들
    |--- test
    |--- logging
    |--- [logs]
    |       |--- [error]
    |--- [multer-temporary-store]
    |--- config                     // 프로세스에다가 환경변수 설정
    |--- public
    |       |--- assets
    |               |--- [upload-images]
    |               |--- css
    |               |--- images
    |               |--- js
    |--- routes
    |--- controllers
    |       |--- admin
    |--- models
    |--- views
    |       |--- main
    |       |--- user
    |       |--- board
    |       |--- guestbook
    |       |--- gallery
    |       |--- includes
    |       |--- admin
    |               |--- includes
    
</pre>
