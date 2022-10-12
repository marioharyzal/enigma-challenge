const sort = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let x = 0; x < numbers.length; x++) {
            if (numbers[x] > numbers[x + 1]) {
                let tempt;
                tempt = numbers[x];
                numbers[x] = numbers[x + 1];
                numbers[x + 1] = tempt;
            }
        }
    }

    return numbers;
};

const numbers = [5, 7, 1, 4, 3, 8];
const result = sort(numbers);
console.info(result);
