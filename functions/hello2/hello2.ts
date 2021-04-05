import randomstring from "randomstring";
import { prisma } from "../../databaseConnections/postgres";

export const helloExport = async (event) => {
   try {
      await prisma.user.findMany()
      return {
         statusCode:200,
         body: JSON.stringify({
            message: randomstring.generate()
         })
      }
   } catch (error) {      
      return {
         statusCode:500
      }
   }
}