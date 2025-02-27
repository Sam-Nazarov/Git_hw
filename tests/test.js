let x = 5;
let xArr = [5, 5, 5, 5];

const newFunc = (num, arg) => {
    x = num + arg;
    return x;
};

const arrFunct = () => {
    newFunc(1, 5); // x = 6
    for (let index = 0; index < 4; index++) {
        console.log(xArr[index] + ' do');

        // Проверка выхода за границы массива
        let safeIndex = x >= xArr.length ? xArr.length - 1 : x;
        xArr[index] = xArr[safeIndex];

        console.log(xArr[index] + ' posle');
    }

    console.log(xArr);
    return xArr;
};

arrFunct();
