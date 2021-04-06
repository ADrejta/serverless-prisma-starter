import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { v4 as uuid } from 'uuid';

export const helloExport = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: uuid(),
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Something went wrong!! Please report this',
      }),
    };
  }
};
