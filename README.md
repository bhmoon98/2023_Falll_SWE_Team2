# SWE_Team2
SKKU Introduction to Software Engineering Team 2 Project "구해봐요 성대에 집"


## Authentication Backend

1. init.py
    
    : Flask app을 초기화
    
    - Flask 로그인 매니저 초기화
        - 역할: user 로그인, 로그아웃 상태 관리
    - DB와 연결
    - Flask mail 초기화
        - 역할: 서버에서 유저에게 메일을 보낼 수 있다
    - Flask 암호화 객체 초기화
        - 유저가 입력한 패스워드를 암호화, DB에 저장된 패스워드를 복호화
    - Flask CORS 초기화
    - Flask 스케줄러 초기화
        - 1시간마다 유저 이메일 인증에 사용한 토큰 초기화
2. mail.py
    
    : send_verification_email 함수를 통해 유저에게 이메일 인증 메일을 보낸다.
    
3. models.py
    
    : 유저 정보(아이디, 패스워드, 닉네임)를 관리하는 DB 테이블
    
4. routes.py
    
    : 로그인, 로그아웃, 회원 가입, 회원 탈퇴, 프로필 변경하는 api
    
    - API
        - ‘/’: 홈페이지
        - ‘/login’: 유저가 아이디(이메일), 패스워드를 입력하면 입력 조건에 맞는지 Form을 통해 검사하고 통과하면 Flask 로그인 매니저에 해당 유저가 로그인 했음을 알려준다.
        - ‘/logout’: Flask 로그인 매니저에 해당 유저가 로그아웃 했음을 알린다.
        - ‘/register’:
            - 유저가 아이디, 패스워드, 패스워드 확인, 닉네임을 입력
            - 입력 조건에 맞는지 Form을 통해 검사
            - 패스워드 암호화
            - 이메일 인증을 위한 Token을 생성하고 유저가 입력한 이메일로 인증 링크가 있는 메일을 보낸다.
        - ‘/verify/<token>’: 메일로 보낸 인증 링크. (verify/생성한 Token의 형태다)
            - 이 링크를 타고 들어오면 해당 유저가 DB에 추가된다.
        - ‘/delete_account’: 회원 탈퇴
            - DB에서 삭제하고 Flask 로그인 매니저에 해당 유저를 로그아웃 상태로 바꾼다.
        - ‘/profile’: 프로필 변경
            - 닉네임 또는 패스워드, 혹은 둘 다를 입력 받아 DB를 갱신한다. (패스워드는 암호화)
    - 기타
        - 로그인이 필요한 api에 @login_required 데코레이터를 붙여 로그인 하지 않은 유저는 홈페이지로 이동시킨다.
        - 1시간마다 만료된 토큰 파기
5. forms.py
    
    : 유저 입력 조건 설정 (조건은 임의로 설정했기 때문에 변경 필요)
    
    - RegisterForm: 회원 가입 시 유저 입력 조건 설정
        - 이메일: 빈칸 X, 이메일의 형태
        - 패스워드: 빈칸 X
        - 패스워드 확인: 빈인
6. token_manager.py
    
    : 유저 이메일 인증을 위한 토큰 생성
    
    - 유효 기간은 1시간
