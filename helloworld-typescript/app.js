"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
http_1.default.createServer(function (request, response) {
    response.write('Hello World in Typescript!\nBy: Kaue Cavalcante');
    response.end();
}).listen(3000, function () {
    console.log("Server iniciado na porta 3000.");
});
