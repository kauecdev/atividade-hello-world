import http from 'http';

http.createServer((request, response) => {
  response.write('Hello World in Typescript!\nBy: Kaue Cavalcante');
  response.end();
}).listen(3000, () => {
  console.log("Server iniciado na porta 3000.");
});