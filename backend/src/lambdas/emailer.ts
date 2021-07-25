import {SendEmailCommandInput, SES} from "@aws-sdk/client-ses";
import {APIGatewayEvent, APIGatewayProxyResult} from "aws-lambda";

const simpleEmailService:SES = new SES({region: process.env.AWS_REGION});

export const sendEmail = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    if (event.body) {
        const emailObj = JSON.parse(event.body);
        const command:SendEmailCommandInput = {
            Destination: {
                ToAddresses: emailObj.toAddresses.split(","),
            },
            Message: {
                Body: {
                    Text: {Data: `Message from ${emailObj.firstName} ${emailObj.lastName}\n with email ${emailObj.email}\n about ${emailObj.message}`},
                },

                Subject: {Data: "Portfolio Message"},
            },
            Source: emailObj.email
        };
        console.log(JSON.stringify(command));
        const sesResponse = await simpleEmailService.sendEmail(command);
        const response: APIGatewayProxyResult = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: JSON.stringify(sesResponse),
        };
        return response;
    } else {
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
}