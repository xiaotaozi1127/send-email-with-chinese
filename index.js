var nodemailer = require('nodemailer');
var fs = require('fs');

var items = JSON.parse(fs.readFileSync('./selected-items.json', 'utf8'));

let smtpConfig = {
  host: 'smtp.126.com',
  port: 465,
  secure: true,
  auth: {
    user: 'twer_vip@126.com',
    pass: 'tj987123'
  }
}

var smtpTransport = nodemailer.createTransport(smtpConfig);
smtpTransport.verify(function(error, success) {
  if (error) {
    console.log("error", error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

let receiver = 'xiaotaozi1127@126.com';
let username = 'xiaotaozi1127';

let message = {
  from: 'ThoughtWorker <twer_vip@126.com>',
  to: receiver,
  subject: '来自ThoughtWorks的问候',
  html: '<p>Hello ' + username + ',</p>\n' +
  '        <p>我们是ThoughtWorks员工，在为公司做人才筛选调研的时候，我们在Github上发现你有非常活跃的记录。ThoughtWorks非常看重热爱学习，自我驱动力强的人。因此想对您做进一步的了解。</p>\n' +
  '        <p><b>ThoughtWorks公司简介：</b></p>\n' +
  '        <p style="margin-left: 20px">公司成立于 1993 年, 在 15 个国家拥有 42 间办公室和 5000 多名卓越人才。我们是富有激情的行业创新者, 致力于为企业提供转型咨询和软件交付服务。ThoughtWorks 2012 年进入中国，相继在西安、北京、成都、上海、深圳、武汉设有6个办公室。我们与拥有宏伟目标的人或组织合作, 把热衷挑战、喜欢突破常规思维的人聚集在一起, 结合我们丰富的方法论和实践经验, 帮助客户快速实现商业愿景。\n' +
  '            与此同时, 我们也相信知识的流动将推动行业发展, 并造福于社会大众。</p>\n' +
  '        <p style="margin-top: 50px">目前公司处于快速发展阶段，在武汉有Web前端开发，后端开发（语言不限），Android/iOS开发，测试工程师等职位空缺。在国内其他城市也开放有大量招聘职位。</p>\n' +
  '        <p>如果您对我们公司感兴趣，欢迎关注公众号 <b>ThoughtJobs</b> ，我们会为您定制属于你的ThoughtWorks之旅。</p>\n' +
  '        <img src="https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzI3OTE0NDk3MA==&mid=502535419&idx=1&sn=62b858517cb3b261bd049f9f052b896b&send_time=1523341237" alt="">\n' +
  '        <p>不想收到类似邮件，可<a>取消关注</a>。</p>'
};

smtpTransport.sendMail(message, (err, info) => {
  if (err) {
    console.log('Error occurred. ' + err.message);
    return process.exit(1);
  }
  console.log('Message sent: %s', info.messageId);
});


// items.forEach(item => {
//   let receiver = item.email;
//   let username = item.username;
//   console.log('receiver', receiver);
//   console.log('username', username);
//
//   let message = {
//     from: 'ThoughtWorker <twer_vip@126.com>',
//     to: receiver,
//     subject: '来自ThoughtWorks的问候',
//     html: '<p>Hello ' + username + ',</p>\n' +
//     '        <p>我们是ThoughtWorks员工，在为公司做人才筛选调研的时候，我们在Github上发现你有非常活跃的记录。ThoughtWorks非常看重热爱学习，自我驱动力强的人。因此想对您做进一步的了解。</p>\n' +
//     '        <p><b>ThoughtWorks公司简介：</b></p>\n' +
//     '        <p style="margin-left: 20px">公司成立于 1993 年, 在 15 个国家拥有 42 间办公室和 5000 多名卓越人才。我们是富有激情的行业创新者, 致力于为企业提供转型咨询和软件交付服务。ThoughtWorks 2012 年进入中国，相继在西安、北京、成都、上海、深圳、武汉设有6个办公室。我们与拥有宏伟目标的人或组织合作, 把热衷挑战、喜欢突破常规思维的人聚集在一起, 结合我们丰富的方法论和实践经验, 帮助客户快速实现商业愿景。\n' +
//     '            与此同时, 我们也相信知识的流动将推动行业发展, 并造福于社会大众。</p>\n' +
//     '        <p style="margin-top: 50px">目前公司处于快速发展阶段，在武汉有Web前端开发，后端开发（语言不限），Android/iOS开发，测试工程师等职位空缺。在国内其他城市也开放有大量招聘职位。</p>\n' +
//     '        <p>如果您对我们公司感兴趣，欢迎关注公众号 <b>ThoughtJobs</b> ，我们会为您定制属于你的ThoughtWorks之旅。</p>\n' +
//     '        <img src="https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzI3OTE0NDk3MA==&mid=502535419&idx=1&sn=62b858517cb3b261bd049f9f052b896b&send_time=1523341237" alt="">\n' +
//     '        <p>不想收到类似邮件，可<a>取消关注</a>。</p>'
//   };
//
//   smtpTransport.sendMail(message, (err, info) => {
//     if (err) {
//       console.log('Error occurred. ' + err.message);
//       return process.exit(1);
//     }
//     console.log('Message sent: %s', info.messageId);
//   });
// })
