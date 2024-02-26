import type { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import prisma from "../../../../../lib/prisma"


// this handler gets the current database month information 

// if one does not exsist yet make it

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return NextResponse.json({message: 'HELLO SERVER'})
}

export {handler as GET}