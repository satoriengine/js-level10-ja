import chalk from 'chalk';
import figlet from 'figlet';

figlet('Chapter 04', function (err, data) {
    if (err) {
        console.log('figletの実行中にエラーが発生しました');
        console.dir(err);
        return;
    }
    console.log(chalk.cyan(data));
    console.log(chalk.green('既存プロジェクトへようこそ！'));
    console.log(chalk.gray('npm run dev、npm start、npm run start のいずれでも、このファイルが実行されます。'));
});
