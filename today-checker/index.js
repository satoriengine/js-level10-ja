import chalk from 'chalk';
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

console.log(chalk.blue(`今日の日付: ${today}`));
console.log(chalk.green('chalkとdayjs、2つのパッケージのインストールに成功しました！'));
