import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import randomstring from 'randomstring';
import { prisma } from '../../databaseConnections/postgres';

export const helloExport = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  try {
    await prisma.user.findMany();
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: randomstring.generate(),
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
