export default () => ({
  sqs: process.env.SQS || 'nats://sqs:4222',
  port: parseInt(process.env.PORT || '8878', 10),
  host: process.env.HOST || 'localhost',
});
