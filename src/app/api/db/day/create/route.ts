import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
// create a new sleep day with user form 
const handler = async (req: Request, res: NextApiResponse) => {
  try {
    const data = await req.json();
    
    // prisma.sleepDay.create({

    // })
    console.log('daata,', data)
    return NextResponse.json({data: data})
  } catch (error) {
    console.error(error, 'Server Error')
    return NextResponse.json({error: 'Internal Server Erorr'}, {status: 500})
  }
}

export {handler as POST}