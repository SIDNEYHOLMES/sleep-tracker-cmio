import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";
import { getServerSession } from "next-auth";


// route will return or create the current month table
const handler = async (req: NextApiRequest) => { 
  try { // server will first try to get google auth session (if this fails most likley the user is not logged in to some regard)
    const session = await getServerSession();
    
    if (!session) { // check if session is valid
      return NextResponse.json({ error: 'YOU MUST BE LOGGED IN' }, { status: 401 });
    }

    // find user in database by session email to be used to reference month
    const userData = await prisma.user.findUnique({ 
      where: {
        email: session.user.email
      }
    });

    if (!userData) { //check if userData is valid
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }


    //|||||||||||||||||| RETRIVE MONTH DATA ||||||||||||||||||||

    // get the overall date, current year, nextmonth, and start of the next month
    const currentDate = new Date(); 
    const currentYear = currentDate.getFullYear();
    const nextMonth = currentDate.getMonth() + 1;
    const firstDayOfNextMonth = new Date(currentYear, nextMonth, 1)


    //retrieve the most recent month data
    let mostRecentSleepMonth = await prisma.sleepMonth.findFirst({ 
      where: {
        authorId: userData.id
      },
      orderBy: { startDate: 'desc' }
    });


    // if there is no recent month or the current one is expired
    if (!mostRecentSleepMonth || mostRecentSleepMonth.endDate < currentDate) {
      // Create a new sleep month using the user data and year, month, date variables
      const newSleepMonth = await prisma.sleepMonth.create({
        data: {
          author: { connect: { id: userData.id } },
          startDate: new Date(currentYear, nextMonth - 1, 1),
          endDate: firstDayOfNextMonth,
        },
      });
      
      // RETURN THE NEWLY CREATED SLEEP MONTH
      return NextResponse.json({ newSleepMonth: newSleepMonth });

    } 
    else {// If the most recent sleep month exists and is not expired, return it
      return NextResponse.json({ sleepMonth: mostRecentSleepMonth });
      //console.log(mostRecentSleepMonth.endDate < currentDate, currentDate, mostRecentSleepMonth.endDate, firstDayOfNextMonth)
    }
  } catch (error) {
    console.error('Error retrieving or creating SleepMonth:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};

export { handler as GET };
