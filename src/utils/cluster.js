import cluster from 'cluster';
import { cpus } from 'os';

const setupWorkerProcesses = () => {
  console.log(`Master cluster setting up ${cpus().length} workers`);
  cpus().forEach(() => cluster.fork());
  cluster.on('online', worker => console.log(`Worker ${worker.process.pid} is listening`));
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    console.log('Starting a new worker');
    cluster.fork();
  });
};

export default setupApplication => {
  if (cluster.isMaster) {
    setupWorkerProcesses();
  } else {
    setupApplication();
  }
};

