const schedule = require('node-schedule');

class ScheduleManager {
  constructor() {
    this.schedules = [];
  }

  addSchedule(rule) {
    console.log('addSchedule');

    const jobs = schedule.scheduleJob(rule, fireDate => {
      console.log(fireDate);
    });

    jobs.on('scheduled', () => {
      console.log('scheduled');
    });

    jobs.on('run', () => {
      console.log('run');
    });

    jobs.on('canceled', () => {
      console.log('canceled');
    });

    this.schedules.push(jobs);
    return jobs;
  }
}

const sm = new ScheduleManager();

// Cron-style Scheduling
// *     *     *     *     *     *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
sm.addSchedule('*/10 * * * * *');

// Date-based Scheduling
sm.addSchedule(new Date());

// Recurrence Rule Scheduling
sm.addSchedule({ second: 15 });
