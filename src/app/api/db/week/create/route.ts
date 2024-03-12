
const handler = () => {
  const numWeeks = 2;
  const now = new Date();
  now.setDate(now.getDate() + numWeeks * 7);
  try {
    prisma.sleepWeek.create({
      data: {
        startDate: new Date(),
        endDate: now,
        sleepMonthId: 1,
      }
    })
  }
   catch {

   }
}

export { handler as GET}