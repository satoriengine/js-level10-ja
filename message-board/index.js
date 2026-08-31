import chalk from 'chalk';
import boxen from 'boxen';

const message = chalk.green('JavaScriptレベル10、お疲れ様でした！');

console.log(
    boxen(message, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'cyan',
    })
);

console.log(chalk.gray('npm run dev、npm start、npm run start のいずれでも、このファイルが実行されます。'));
