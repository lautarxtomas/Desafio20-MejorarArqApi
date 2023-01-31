import os from "node:os";
import { fork } from "child_process";

export async function getInfo(req, res) {
    const processInfo = {
        platform: process.platform,
        version: process.version,
        title: process.title,
        execPath: process.execPath,
        processId: process.pid,
        rss: process.memoryUsage().rss,
        numberOfProcessors: os.cpus().length
    };
    res.status(200).json(processInfo);
}

export async function getRandomNumbers(req, res) {

    const randomNumbersGeneratorFork = fork("./utils/functions/randomNumbersGenerator.js"); // AL HACER FORK ESPECIFICAR RUTA DESDE EL SERVER.JS
	randomNumbersGeneratorFork.send(req.query.cantidad || 500000000);
	randomNumbersGeneratorFork.on("message", (msg) => res.json(msg));

}

