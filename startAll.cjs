// simple launcher to run backend and frontend concurrently without relying on concurrently package
const { spawn } = require('child_process');

const run = (cmd, args, name) => {
  const proc = spawn(cmd, args, { shell: true, stdio: 'inherit' });
  proc.on('exit', (code) => {
    console.log(`${name} exited with code ${code}`);
  });
  return proc;
};

const backend = run('npm', ['run', 'backend'], 'backend');
const frontend = run('npm', ['run', 'dev'], 'frontend');

// when parent process exits, kill children
process.on('exit', () => {
  backend.kill();
  frontend.kill();
});
