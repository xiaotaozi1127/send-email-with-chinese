var chineseMail = require('chinese-mail');
var fs = require('fs');
var items = JSON.parse(fs.readFileSync('./selected-items.json', 'utf8'));


chineseMail.config.config126Mail({
  'username':'twer_vip@126.com',
  'password':'wayde191'
});

console.log('Chinese mail send mail by 126 start...');

items.forEach(item => {
  let receiver = item.email;

  chineseMail.sendMailBy126(
    receiver,
    'Thanks taohui',
    '<p>Come on</p>',
    function (res) {
      console.log(res)
      console.log('Chinese mail send mail by 126 end...');
    });
})
