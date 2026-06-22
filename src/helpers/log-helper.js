import 'dotenv/config';
import fs from 'fs';
import path from 'path';

class LogHelper {

    constructor() {

        this.filePath = path.resolve(process.env.LOG_FILE_PATH);
        this.fileName = process.env.LOG_FILE_NAME;

        this.logToFileEnabled =
            process.env.LOG_TO_FILE_ENABLED?.toLowerCase() === 'true';

        this.logToConsoleEnabled =
            process.env.LOG_TO_CONSOLE_ENABLED?.toLowerCase() === 'true';


        if (this.logToFileEnabled && !fs.existsSync(this.filePath)) {
            fs.mkdirSync(this.filePath, { recursive: true });
        }

        console.log("Ruta logs:", this.filePath);
    }


    logError(errorObject) {

        const logText =
            `${new Date().toISOString()}: error - ${errorObject.message}\n\n` +
            `Stack Trace:\n\n${errorObject.stack}\n\n`;


        if (this.logToConsoleEnabled) {
            console.error(logText);
        }


        if (this.logToFileEnabled) {

            const file = path.join(
                this.filePath,
                this.fileName
            );

            fs.appendFileSync(
                file,
                logText,
                'utf8'
            );
        }
    }
}

export default new LogHelper();