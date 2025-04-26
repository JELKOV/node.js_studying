import path from 'path';

// 파일명(basename)만 가져온다 (폴더 제외).
// 파일 다운로드 시 이름만 뽑거나, 저장할 때 유용
console.log(path.basename('/users/gram/note.txt')); 
// 'note.txt'
console.log(path.basename('c:/users/gram/note.txt'));
// 'note.txt'

// 디렉토리 경로(dir name)만 가져온다 (파일 제외).
// 파일 경로 저장, 상위 디렉토리 추출할 때 사용
console.log(path.dirname('/users/gram/note.txt')); 
// '/users/gram'
console.log(path.dirname('c:/users/gram/note.txt'));
// 'c:/users/gram'
console.log(path.dirname('note.txt')); 
// '.' (현재 디렉토리)

// 여러 경로를 하나로 합친다 (join).
// 운영체제에 맞는 구분자로 경로 생성 (Windows: '\\', Linux/macOS: '/')
console.log(path.join('folder', 'subfolder', 'file.txt'));
// 'folder\subfolder\file.txt' (Windows 기준)

// 인자로 받은 경로들을 절대 경로로 변환한다 (resolve).
// 최종 파일의 "풀 경로"를 구하고 싶을 때 사용
console.log(path.resolve('folder', 'subfolder', 'file.txt'));
// 'C:\Users\gram\nodejs_studying\path\src\folder\subfolder\file.txt'

// 파일 확장자(extname)를 가져온다.
// 파일 종류 구분(.jpg, .txt 등)하거나 업로드 제한할 때 사용
console.log(path.extname('/users/gram/note.txt'));
// '.txt'
console.log(path.extname('note.txt'));
// '.txt'

// 경로가 절대 경로인지 확인한다 (isAbsolute).
// 파일 처리할 때, 상대/절대 경로 구분하고 싶을 때 필수
console.log(path.isAbsolute('/Users/gram/hello.txt')); 
// true (macOS/Linux)
console.log(path.isAbsolute('Users/gram/hello.txt'));  
// false (상대 경로)
console.log(path.isAbsolute('C:\\Users\\gram\\hello.txt')); 
// true (Windows)
console.log(path.isAbsolute('./hello.txt'));           
// false (현재 폴더 기준 상대 경로)

// 경로를 정리한다 (normalize)
//슬래시(구분자)가 이상하게 들어간 경우 - 결과: '/users/note.txt'
console.log(path.normalize('/users//gram/../note.txt'));
// 현재 디렉토리(.) 같은 것 정리 - 결과: 'folder/subfolder/file.txt'
console.log(path.normalize('./folder/./subfolder/file.txt'));
// 루트부터 시작하는 경우 - 결과: '/folder/subfolder/file.txt'
console.log(path.normalize('/folder//subfolder///file.txt'));
// 상위 폴더(..) 이동도 깔끔히 계산 - 결과: '/folder/parent/file.txt'
console.log(path.normalize('/folder/child/../parent/file.txt'));
// 윈도우 경로 예시 (Windows에서 실행하면) - // 결과: 'C:\\temp\\foo\\'
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));
// 상대 경로 조정도 가능 - // 결과: 'file.txt'
console.log(path.normalize('folder/subfolder/../../file.txt'));

// 경로를 파싱(parse)해서 객체 형태로 반환한다.
// 파일명, 확장자, 경로를 따로따로 관리할 때 사용
console.log(path.parse('/users/gram/note.txt'));
// {
//   root: '/',         (루트 경로)
//   dir: '/users/gram', (디렉토리)
//   base: 'note.txt',   (파일명 + 확장자)
//   ext: '.txt',        (확장자만)
//   name: 'note'        (확장자 제외 파일명)
// }

// OS별 경로 구분자(separator)를 반환한다.
// 구분자가 다를 때(Windows: '\\', POSIX계열: '/') 프로그램적으로 구분할 때 사용
console.log(path.sep); 
// Windows: '\\' / macOS, Linux: '/'
