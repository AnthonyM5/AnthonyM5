function dailyTemperatures(temperatures: number[]): number[] {
    const answers = new Array<number>(temperatures.length).fill(0)
    const stack: number[] = []

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length -1]]) {
            const prevIndex = stack.pop()
            answers[prevIndex] = i - prevIndex;
        }
        stack.push(i)
    }
    return answers
};