const express = require('express');
const app = express();
var options = { 
  etag: false, // 禁用协商缓存
  lastModified: false, // 禁用协商缓存
  setHeaders: (res, path, stat) => {
    res.set({
        'Cache-Control': 'max-age=00',// 浏览器不走强缓存
        'Pragma': 'no-cache', // 浏览器不走强缓存
    }); // 强缓存超时时间为10秒
  },
};
app.use(express.static((__dirname + '/public'), options));
app.listen(3000);
