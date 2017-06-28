Meteor.startup(function () {
  smtp = {
    username: '',   // eg: server@gentlenode.com
    password: '',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 465
  }
  //process.env.MAIL_URL="smtp://russmbiz%40gmail.com:Banana42!!@smtp.gmail.com:465/";

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port + "/";
});

