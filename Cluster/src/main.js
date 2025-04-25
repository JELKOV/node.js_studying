// cluster 모듈: Node.js에서 멀티 프로세스를 활용할 수 있게 해주는 내장 모듈
import cluster from 'cluster';
// os 모듈: 현재 시스템의 CPU 정보 등을 가져오기 위해 사용
import { cpus } from 'os';

// 스케줄링 정책을 Round Robin 방식으로 설정
// 순차적으로 각 워커에 요청을 분산
cluster.schedulingPolicy = cluster.SCHED_RR;

// 현재 프로세스가 '마스터 프로세스'인 경우 (워커들을 관리하는 상위 프로세스)
if (cluster.isMaster) {
  // 사용 가능한 CPU 코어 수 가져오기
  const numCPUs = cpus().length;
  console.log(`Master ${process.pid} is running`);

  // CPU 코어 수만큼 워커 생성 (병렬 처리 목적)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork(); // 새로운 워커 프로세스 생성
  }

  // 워커가 online 상태가 되면 발생하는 이벤트
  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });

} else {
  // 현재 프로세스가 워커인 경우 실행되는 영역
  // 이 안에서는 실제 작업 처리를 담당

  console.log(`Worker ${process.pid} started`);

  // 실제 서버 요청이 들어왔다고 가정하고 주기적인 작업 처리
  // (여기선 2초마다 로그 출력)
  setInterval(() => {
    console.log(`Worker ${process.pid} handling task`);
  }, 2000);
}
