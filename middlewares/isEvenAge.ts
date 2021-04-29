import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import isEven from 'is-even';
export const isEvenAge = async (
  event: APIGatewayEvent,
  context
): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body);

    if (!isEven(body.age)) {
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
