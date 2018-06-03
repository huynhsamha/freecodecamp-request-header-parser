import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/api/whoami', (req, res, next) => {
  const { headers, connection } = req;

  const ipaddress = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);
  const software = headers['user-agent'];
  const language = headers['accept-language'];

  res.send({ ipaddress, language, software });
});

export default router;
