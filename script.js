const generateRandNum = (num) => {
    return Math.floor(Math.random() * num);
}

const wisdomObj = {
    breakfastOpt: ['fried eggs', 'cereal', 'porridge', 'fresh vegetables'],
    lunchOpt: ['pasta with beef', 'chicken with fries', 'fried popatoes', 'lasagne', 'cream soupe', 'roastbeef'],
    dinnerOpt: ['Pizza', 'French baguette', 'Pasta with cheese', 'Caesar salad']
};

let wisdomArr = [];

for (let prop in wisdomObj) {
    let optionId = generateRandNum(wisdomObj[prop].length);

    switch (prop) {
        case 'breakfastOpt':
            wisdomArr.push(`We suggest you to eat ${wisdomObj[prop][optionId]} for breakfast!`);
            break;
        case 'lunchOpt':
            wisdomArr.push(`Our recomendation for lunch is: ${wisdomObj[prop][optionId]}.`);
            break;
        case 'dinnerOpt':
            wisdomArr.push(`${wisdomObj[prop][optionId]} is a great deal for dinner.`);
            break;
        default:
            wisdomArr.push('There is a problem with input.');
            break;
    }
}

let formatWisdom = wisdom => {
    const format = wisdomArr.join('\n');
    console.log(format);
}


formatWisdom(wisdomArr);