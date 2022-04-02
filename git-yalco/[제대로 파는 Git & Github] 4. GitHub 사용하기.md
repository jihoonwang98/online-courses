# [제대로 파는 Git & Github] 4. GitHub 사용하기

> 사이트: https://inf.run/4Pro



- 목차
  - GitHub은 뭐고 왜 쓰나요?
  - GitHub 시작하기
  - 원격 저장소 사용하기
  - push와 pull
  - 원격의 브랜치 다루기
  - SourceTree로 진행해보기



## 1. GitHub은 뭐고 왜 쓰나요?

- **GitHub**는 Git으로 관리하는 프로젝트들을 온라인 공간에 공유해서 프로젝트 구성원들이 함께 소프트웨어를 만들어 갈 수 있도록 도와주는 서비스
- GitHub의 필요성
  - 일반 클라우드 (Dropbox, 구글 클라우드)를 사용하면, 구성원들이 동시에 같은 파일을 업로드할 때 문제가 생긴다.
  - **GitHub 등의 온라인 Git 저장소는 모든 업로드와 다운로드를 <u>커밋 단위</u>로 주고받음**으로써 이 문제를 해결한다.



- A가 커밋을 해서 버전을 만들고 업로드를 하면 GitHub 상의 프로젝트는 해당 버전으로 최신화가 된다.
- 이때, B가 완료한 작업을 커밋해서 올리기 위해서 반드시 GitHub 상의 최신 커밋(A가 올린거)을 먼저 다운받아서 자신의 컴퓨터에 적용부터 하도록 강제된다.
- 또, 커밋상에 충돌사항이 있다면 그것도 전부 해결해야만 업로드할 수 있다.



## 2. GitHub 시작하기

### (1) github.com 살펴보기

- Git으로 관리되는 프로젝트의 원격 저장소
- 👑 오픈소스의 성지
  - Git, VS Code, Tensorflow, React 등 살펴보기



### (2) 가입하고 토큰 만들기

- **Personal access token** 만들기
  - 우측 상단의 프로필 - `Settings`
  - `Developer Settings`
  - `Personal access tokens` - `Generate new token`
  - `repo` 및 원하는 기능에 체크, 기간 설정 뒤 `Generate token`
  - 토큰 안전한 곳에 보관해 둘 것



- 토큰 컴퓨터에 저장하기
  - 윈도우 가이드
    - `Windows 자격 증명 관리자`
    - `Windows 자격 증명` 선택
    - `git:https://github.com` 자격 정보 생성
    - 사용자명과 토큰 붙여넣기
  - [맥 가이드 (링크)](https://docs.github.com/en/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain)
    - `Keychain Access` 앱 실행
    - `github`의 `인터넷 암호` 항목 선택
    - 사용자명(`계정` 칸)과 토큰(`암호 보기` 누른 뒤 오른쪽 칸) 붙여넣기



## 3. 원격 저장소 사용하기

### (1) 로컬에 원격 저장소 추가 후 푸시

#### GitHub 레포지토리 생성 후 복붙 명령어

```shell
git remote add origin (원격 저장소 주소)
```

- 로컬의 Git 저장소에 원격 저장소로의 연결 추가
  - 원격 저장소 이름에 흔히 `origin` 사용. 다른 것으로 수정 가능



```shell
git branch -M main
```

- GitHub 권장 - 기본 브랜치명을 `main`으로



```shell
git push -u origin main
```

- 로컬 저장소의 커밋 내역들 원격으로 `push` (업로드)
  - `-u` 또는 `--set-upstream`: 현재 브랜치와 명시된 원격 브랜치 기본 연결



#### GitHub의 해당 레포지토리 페이지 새로고침하여 살펴보기

- 파일들 내용
- 커밋 내역들



```shell
git remote
```

- 원격 목록 보기
  - 자세히 보기: `git remote -v`



```shell
git remote remove (origin 등 원격 이름)
```

- 원격 지우기 (로컬 프로젝트와의 연결만 없애는 것. GitHub의 레포지토리는 지워지지 않음.)





### (2) GitHub에서 프로젝트 다운받기

- `Download ZIP`: 파일들만 다운받음, Git 관리내역 제외
- Git `clone`: Git 관리내역 포함 다운로드



#### 터미널이나 Git Bash에서 대상 폴더 이동 후

```shell
git clone (원격 저장소 주소)
```

- 이번 강에서는 HTTPS 프로토콜 사용



## 4. push와 pull

### (1) 원격으로 커밋 밀어올리기 `push`

- Leopards의 `members`에 `Evie` 추가

  - 커밋 메시지: `Add Evie to Leopards`

- 아래 명령어로 push

  ```shell
  git push
  ```

  - 이미 `git push -u origin main`으로 대상 원격 브랜치가 지정되었기 때문에 가능

- GitHub 페이지에서 확인

  - GitHub의 파일들과 커밋 내역 확인



### (2) 원격의 커밋 당겨오기 `pull`

- GitHub에서 Leopards의 `members`에 `Dongho` 추가

  - 커밋 메시지: `Add Dongho to Leopards`

- 아래 명령어로 pull

  ```shell
  git pull
  ```

- 로컬에서 파일과 로그 살펴보기



### (3) `pull` 할 것이 있을 때 `push`를 하면?

- **로컬에서** Leopards의 `manager`를 `Dooli`로 수정
  - 커밋 메시지: `Edit Leopards manager`
- GitHub에서 Leopards의 `coach`를 `Lupi`로 수정
  - 커밋 메시지: `Edit Leopards coach`
- push 해보기
  - 원격에 먼저 적용된 새 버전이 있으므로 적용 불가
  - pull 해서 원격의 버전을 받아온 다음 push 가능
- push 할 것이 있을 시 pull 하는 두 가지 방법
  - `git pull --no-rebase` - **merge** 방식
    - 소스트리에서 확인해보기
    - `reset`으로 되돌린 다음 아래 방식도 해보기
  - `git pull --rebase` - **rebase** 방식
    - pull 상의 rebase는 다름 (협업시 사용 OK)
    - 상대방걸 먼저 붙임
- push하기



### (4) 협업상 충돌 발생 해결하기

- 로컬에서 Panthers에 `Maruchi` 추가
  - 커밋 메시지: `Add Maruchi to Panthers`
- 원격에서 Panthers에 `Arachi` 추가
  - 커밋 메시지: `Add Arachi to Panthers`
- pull하여 충돌상황 마주하기
  - `--no-rebase`와 `--rebase` 모두 해 볼 것
- `git pull --rebase`는 충돌을 어떻게 해결하느냐에 따라 커밋 개수가 달라질 수 있다.



### (5) 로컬의 내역 강제 push해보기



### (5) 로컬의 내역 강제 push 해보기

- 로컬의 내역 충돌 전으로 `reset`
- 아래 명령어로 원격에 강제 적용

```shell
git push --force
```



## 5. 원격의 브랜치 다루기

### (1) 로컬에서 브랜치 만들어 원격에 push 해보기

- `from-local` 브랜치 만들기

- 아래 명령어로 원격에 push

  - 아래와 같이 하면 대상을 명시하라는 메시지 나타남

  ```shell
  git push
  ```

  - 아래 명령어로 원격의 브랜치 명시 및 기본설정

  ```shell
  git push -u origin from-local
  ```

- 브랜치 목록 살펴보기

  - GitHub에서 목록 보기
  - 아래 명령어로 로컬과 원격의 브랜치들 확인

  ```shell
  git branch --all
  ```



### (2) 원격의 브랜치 로컬에 받아오기

- GitHub에서 `from-remote` 브랜치 만들기

  - `git branch -a`에서 현재는 보이지 않음

- 아래 명령어로 원격의 변경사항 확인

  ```shell
  git fetch
  ```

  - `git branch -a`로 확인

- 아래 명령어로 로컬에 같은 이름의 브랜치를 생성하여 연결하고 switch

```shell
git switch -t origin/from-remote
```



### (3) 원격의 브랜치 삭제

```shell
git push (원격이름) --delete (원격의 브랜치명)
```





## 6. SourceTree로 진행해보기

https://www.yalco.kr/@git-github/4-6/