// fibanacci
function sumFibs(num) {
    let numBefore = 0;
    let numCurrent = 1;
    let result = 0;
    while (numCurrent <= num) {
        if (numCurrent % 2 !== 0) {
            result += numCurrent;
        }
        numCurrent += numBefore;
        numBefore = numCurrent - numBefore;
    }
    console.log(result)
    return result;

}

sumFibs(4);

// prime
function sumPrimes(num) {
    function ifPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        } return true;
    }
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (ifPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

sumPrimes(10);



// видаляє з ерею число з функції
function dropElements(arr, func) {
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });


// розбиває підмасиви в один масив без flat
function steamrollArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr.push(...steamrollArray(arr[i]))
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);


/// розшифровує бінарний код
function binaryAgent(str) {
    let newStr = str.split(" ");
    let arr = [];

    for (let i = 0; i < newStr.length; i++) {
        arr.push(String.fromCharCode(parseInt(newStr[i], 2))) //
    }
    return arr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// шукає чи pre - ключ,   є у в всіх обєктках. якщо так то тру
function truthCheck(collection, pre) {
    let num = 0;

    for (let k in collection) {
        if (collection[k].hasOwnProperty(pre) && Boolean(collection[k][pre])) {
            num++;
        }
    }
    return num == collection.length;
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");

// додає якщо є два аргументи, і якщо вони є числами
function addTogether() {
    let [arg1, arg2] = arguments;

    if (typeof (arg1) !== "number") {
        return undefined;
    }
    if (arguments.length === 1) {
        return (arg2) => addTogether(arg1, arg2)
    }
    if (typeof (arg2) !== "number") {
        return undefined;
    }
    return arg1 + arg2;

}

addTogether(2, 3);


// конструктор людини з одним аргументом. Перше слово - ім'я, друге , прз. Аргемент сплітує і визначає перше і друге слово(якщо є )
const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let full = firstAndLast;
    this.getFirstName = function () {
        return full.split(" ")[0];
    }
    this.getLastName = function () {
        return full.split(" ")[1];
    }
    this.getFullName = function () {
        return full;
    };
    this.setFirstName = function (val) {
        full = val + " " + full.split(" ")[1];
    }
    this.setLastName = function (val) {
        full = full.split(" ")[0] + " " + val;
    };
    this.setFullName = function (val) {
        full = val;
    };
};

const bob = new Person('Bob Ross');
bob.getFullName();