import { APIGatewayEvent, Context } from 'aws-lambda';
import { v4 as uuid } from 'uuid';
import { prisma } from '../../databaseConnections/postgres';

export const helloExport = async (event: APIGatewayEvent, context: Context) => {
  try {
    console.log('Hi');

    await prisma.user.findMany();
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: uuid(),
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
    };
  }
};
