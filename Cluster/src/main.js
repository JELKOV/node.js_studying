import cluster from 'cluster';
import { cpus } from 'os';

cluster.schedulingPolicy = cluster.SCHED_RR;

if (cluster.isMaster) {
  const numCPUs = cpus().length;
  console.log(`Master ${process.pid} is running`);
  
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });

} else {
  // 워커에서 실제 작업
  console.log(`Worker ${process.pid} started`);

  // 워커가 요청을 처리했다고 가정
  setInterval(() => {
    console.log(`Worker ${process.pid} handling task`);
  }, 2000);
}
