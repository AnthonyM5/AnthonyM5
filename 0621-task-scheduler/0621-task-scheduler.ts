function leastInterval(tasks: string[], n: number): number {
    const taskCounts: { [task: string]: number } = {};

  for (const task of tasks) {
    taskCounts[task] = (taskCounts[task] || 0) + 1;
  }

  const taskFrequencies = Object.values(taskCounts);
  const maxFrequency = Math.max(...taskFrequencies);
  let numberOfMaxFrequencyTasks = 0;

  for (const frequency of taskFrequencies) {
    if (frequency === maxFrequency) {
      numberOfMaxFrequencyTasks++;
    }
  }
  const idleSlots = (maxFrequency - 1) * (n + 1);

  const availableTasks = tasks.length - numberOfMaxFrequencyTasks * maxFrequency;

  const idleTime = idleSlots + numberOfMaxFrequencyTasks;

  return Math.max(idleTime, tasks.length);
};