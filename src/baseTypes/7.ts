/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfTheWeek {
  MONDAY,
  TUETHDAY,
  WEDNSDAY,
  THURTHDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

function isWeekend(dayOfWeek: DaysOfTheWeek): boolean{
  return dayOfWeek === DaysOfTheWeek.SATURDAY || dayOfWeek === DaysOfTheWeek.SUNDAY
}

const today: DaysOfTheWeek = DaysOfTheWeek.SATURDAY

if (isWeekend(today)) {
  console.log('It\'s weekend today')
} else {
  console.log('Today is a work day');
}
