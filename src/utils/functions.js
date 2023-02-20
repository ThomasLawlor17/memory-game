export const shuffle = (arr) => {
    let i = arr.length, randomIndex;
    while (i !== 0) {
        randomIndex = Math.floor(Math.random() * i);
        i--;
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr
}