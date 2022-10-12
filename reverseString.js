/**
 *
 * reverse string
 *
 * string index terakhir jadi yang pertama
 */

const reverse = (word) => {
    let result = '';
    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i];
    }

    return result;
};

const input = 'IniAyahBudi';
const result = reverse(input);
console.info(input);
console.info(result);
