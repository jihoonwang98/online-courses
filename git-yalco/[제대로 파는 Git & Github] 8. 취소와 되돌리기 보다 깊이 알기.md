# [제대로 파는 Git & Github] 8. 취소와 되돌리기 보다 깊이 알기

> 사이트: https://inf.run/4Pro



- 목차
  - 관리되지 않는 파일들 삭제하기
  - 커밋하지 않은 변경사항 되돌리기
  - reset했어도 희망은 있다!



## 1. 관리되지 않는 파일들 삭제하기

### (1) `git clean`

- Git에서 추적하지 않는 파일들 삭제

| 옵션 | 설명                                  |
| ---- | ------------------------------------- |
| -n   | 삭제될 파일들 보여주기                |
| -i   | 인터렉티브 모드 시작                  |
| -d   | 폴더 포함                             |
| -f   | 강제로 바로 지워버리기                |
| -x   | ⚠️ `.gitignore`에 등록된 파일들도 삭제 |

- 위의 옵션들을 조합하여 사용





#### 아래 파일들 추가한 뒤 옵션 조합과 함께 `clean` 명령어 사용해보기

- toClean1.txt
- toClean2.txt
- dir/toClean3.txt



#### 흔히 쓰이는 조합: `git clean -df`





## 2. 커밋하지 않은 변경사항 되돌리기

### (1) `git restore`

- 특정 파일을 지정된 상태로 복구



#### 파일 여러 개를 수정하고 아래 명령어들 사용해보기

```shell
git restore (파일명)
```

- working directory의 특정 파일 복구
- 파일명 자리에 `.`: 모든 파일 복구



#### 변경상태를 Staging area에서 working directory로 돌려놓기

```shell
git restore --staged (파일명)
```



#### 파일을 특정 커밋의 상태로 되돌리기

```shell
git restore --source=(헤드 또는 커밋 해시) 파일명
```





## 3. reset했어도 희망은 있다!

- `git reflog`
  - git으로 수행한 모든 내역이 출력됨
  - 여기서 나오는 해시값을 이용해 `git reset --hard (해시)`로 해당 시점으로 되돌아갈 수 있다.