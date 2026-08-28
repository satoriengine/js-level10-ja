import chalk from 'chalk';

const name = process.argv[2] || 'ゲスト';

console.log(chalk.yellow(`ようこそ、${name}さん！`));
console.log(chalk.gray('このファイルは、package.jsonのscriptsに自分で追加して実行します。'));
