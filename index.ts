import { exec } from 'child_process'


const collections = {
  info: "collections/edge-info-server.postman_collection.json",
  rates: "collections/edge-rates-server.postman_collection.json",
  reports: "collections/edge-reports-server.postman_collection.json"
}

const serverToRun = process?.env?.EDGE_SERVER ?? 'info'

exec(`newman run ${collections[serverToRun]} -e ./environments/edge-server-tests.postman_environment.json --reporters html,cli,junit  --reporter-junit-export=coverage/newman-report.xml --reporter-html-export=coverage/newman-results.html --insecure`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
})