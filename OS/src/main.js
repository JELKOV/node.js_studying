import os from 'os';


//CPU 아키텍처 정보를 반환 (예: x64, arm)
console.log('CPU Architecture:', os.arch());

// CPU 코어 개수를 반환
console.log('Number of CPU Cores:', os.cpus().length);

// 총 메모리 용량을 반환 (바이트 단위)
console.log('Total Memory:', os.totalmem());

// 사용 가능한 여유 메모리를 반환 (바이트 단위)
console.log('Free Memory:', os.freemem());

//네트워크 인터페이스 정보를 반환
console.log('Network Interfaces:', os.networkInterfaces());

//플랫폼 정보를 반환 (예: win32, linux, darwin)
console.log('Platform:', os.platform());

// 호스트 이름
console.log('Host Name:', os.hostname());
	
// 버전 정보를 반환한다.
console.log('Version:', os.release())

// 컴퓨터의 임시 폴더 경로를 반환
console.log('Temp Folder Root:', os.tmpdir())

// 운영체제 종류를 반환 (예: Windows_NT, Linux, Darwin)
console.log('OS Type:', os.type());

// OS가 동작하고 있는 시간을 반환 (초 단위)
console.log('System Uptime:', os.uptime(), 'seconds');

//현재 사용자 정보를 반환
console.log('User Info:', os.userInfo());
