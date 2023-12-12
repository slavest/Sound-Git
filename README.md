# Sound Git

## 개요

[뒤를 부탁드립니다.]

### 프로젝트 구조

- 모노레포 구조
- apps/ 하위에 프론트, 서버 프로젝트
- packages/ 하위에 공통 라이브러리

#### 공통

- 프론트/백엔드에서 공통으로 참조하여야 하는 타입은 packages/types 하위에 작성
  - types 아래에 api,module 각각의 디렉터리는
  - api: 백엔드에서 처리하는 http 요청/응답 형태를 정의한 인터페이스
  - model: 백엔드/프론트에서 공통으로 사용하는 데이터 타입을 정의
- 프론트/백엔드 프로젝트에서 types의 타입을 사용하는 경우에는, 각 타입의 출처를 명확히 알 수 있도록 API.xxx, Model.xxx 형식으로 사용
  - 다음의 경우처럼 사용 금지
  ```typescript
  const user: UserInfo = {};
  ```
  - 올바른 사용법
  ```typescript
  const user: Model.User = {};
  ```

#### 프론트

[프론트 리드미 or 컨벤션 작성]

#### 백엔드

[백엔드 리드미 or 컨벤션 작성]
