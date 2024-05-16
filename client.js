const{ Kafka } = require("kafkajs");
exports.kafka = new Kafka({
    clientId:"my-app",
    brokers : ["172.16.14.103:9092"],
    });