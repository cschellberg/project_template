"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const client_ses_1 = require("@aws-sdk/client-ses");
const simpleEmailService = new client_ses_1.SESClient({ region: process.env.AWS_REGION });
exports.sendEmail = async (event) => {
    if (event.body) {
        const emailObj = JSON.parse(event.body);
        console.log(JSON.stringify(emailObj));
        const params = {
            Destination: {
                ToAddresses: ["mschellberg12@gmail.com", "dschellberg@gmail.com"],
            },
            Message: {
                Body: {
                    Text: { Data: `Message from ${emailObj.firstName} ${emailObj.lastName}\n with email ${emailObj.email}\n about ${emailObj.message}` },
                },
                Subject: { Data: "Portfolio Message" },
            },
            Source: emailObj.email,
            RuleSetName: "",
            OriginalRuleSetName: ""
        };
        const command = new client_ses_1.CloneReceiptRuleSetCommand(params);
        const sesResponse = await simpleEmailService.send(command);
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: JSON.stringify(sesResponse),
        };
        return response;
    }
    else {
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: "Event body not  found",
        };
    }
};
//# sourceMappingURL=emailer.js.map