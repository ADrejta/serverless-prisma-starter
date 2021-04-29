import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { v4 as uuid } from 'uuid';

export const helloExport = async (
  event: APIGatewayEvent,
  context
): Promise<APIGatewayProxyResult> => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: uuid(),
        user: context.user, // user was assigned to context through the verifyToken middleware
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'MAYDAYYY MAYDAYYY',
      }),
    };
  }
};
