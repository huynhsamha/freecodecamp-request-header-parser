import express from 'express';
import moment from 'moment';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Hello freeCodeCamp challenge! Please try <a href="/api/whoami"/>/api/whoami</a>');
});

router.get('/api/whoami', (req, res, next) => {
  const { headers, connection } = req;

  const ipaddress = headers['x-forwarded-for'] || connection.remoteAddress || req.socket.remoteAddress || connection.socket.remoteAddress;
  const software = headers['user-agent'].split(') ')[0].split(' (')[1];
  const language = headers['accept-language'].split(',')[0];

  res.send({ ipaddress, language, software });
});

export default router;
