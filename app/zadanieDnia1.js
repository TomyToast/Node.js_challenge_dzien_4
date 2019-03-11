const http = require('http');

const srv = http.createServer((req,res) => {
    const acceptLanguage = req.headers['accept-language'];
    const userAgent = req.headers['user-agent'];
    const acceptContent = req.headers['accept'];

    console.log('preferowane jezyki: ', acceptLanguage);
    // console.log('info: ', userAgent);
    // console.log('preferowane tresci: ', acceptContent);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>Hello, world from back-end!</h1>')
});

srv.listen(3000, () => {
    console.log('serwer uruchomiony na porcie 3000');
})