import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

/*
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e7ede4d0006b51",
    pass: "dca625460743d5"
  }
});
*/

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type, 
      comment,
      screenshot,
    }
  });

  return res.status(201).json({ data: feedback });
});

app.get('/feedbacks', (req, res) => {
  return res.send("HELLO!");
});

app.listen(3333, () => {
  console.log('HTTP Server Runing!');
});