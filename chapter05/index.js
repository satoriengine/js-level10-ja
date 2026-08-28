import chalk from 'chalk';
import figlet from 'figlet';

figlet('Chapter 05', function (err, data) {
    if (err) {
        console.log('figletの実行中にエラーが発生しました');
        console.dir(err);
        return;
    }
    console.log(chalk.magenta(data));
    console.log(chalk.green('pnpmプロジェクトへようこそ！'));
    console.log(chalk.gray('pnpm run dev、pnpm start、pnpm run start のいずれでも、このファイルが実行されます。'));
});
