# Diary 1st project

일기장 앱 첫 번째 프로젝트에 진행에 대한 개발 로그입니다.
이 로그를 따라 한 스탭씩 프로젝트를 설정할 수 있습니다.

### 프로젝트 초기 설정

vite 번들러 기반으로 react 앱 프로젝트를 생성한다.
nodejs 가 사전 설치되어 있어야한다.

```
$ npm init vite@latest diary-1st --template react
```

npm 을 이용해 패키지를 설치한다.
```
$ cd diary-1st
$ npm install
```

개발 서버를 실행시킨다.

```
$ npm run dev
```

터미널에 표시된 Local 주소를 클릭하여 브라우저로 확인할 수 있다.
예를 들어 터미널에 다음과 같이 표시되었다면 
```
  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

브라우저 주소줄에 http://127.0.0.1:5173 를 입력하면 앱을 실행해 볼 수 있다.

### 일기장 기능

* 월간 달력 탐색
* 랜덤 격언 표시
* 일기 쓰기
* 일기 수정
* 일기 삭제
