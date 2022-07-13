// code your solution here
// function superbowlWin(array) {
//     const year;
//     return year;
// }

// const superbowlWin = inventory.find(({record}) => record.result === 'W');

function superbowlWin(record) {
    const winner = record.find( record => record.result === "W");
    return !!winner ? winner.year : undefined;
}
