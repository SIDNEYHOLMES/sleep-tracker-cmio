import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import prisma from "../../../../../../lib/prisma"
// create a new sleep day with user form 
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // prisma.sleepDay.create({

    // })
    
  } catch (error) {
    console.error(error, 'Server Error')
    return NextResponse.json({error: 'Internal Server Erorr'}, {status: 500})
  }
}

export {handler as POST}