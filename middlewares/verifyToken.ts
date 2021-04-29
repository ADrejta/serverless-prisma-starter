import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import jsonToken from 'jsonwebtoken';
import { promisify } from 'util';

const verifyToken = promisify(jsonToken.verify);
const signToken = promisify(jsonToken.sign);
export const verify = async (
  event: APIGatewayEvent,
  context
): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body);

    if (body.canPass === false) {
      context.end();
      return {
        statusCode: 403,
        body: JSON.stringify('YOU SHALL NOT PASS!!!!'),
      };
    }
    context.user = '123';
  } catch (error) {
    console.log(error);
    context.end();
    return {
      statusCode: 500,
      body: JSON.stringify('MAYDAYYY MAYDAYYY'),
    };
  }
};
