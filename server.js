const app = require('express')();

app.get('/', (req, res) => res.send('Ayo sẵn sàng bảo vệ khỏi raid <3'));

module.exports = () => {
  app.listen(3000);
}