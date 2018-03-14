// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = () => {
};

const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        get: function () { return result; },
        set: function (propertyName) { result = propertyName; },
        configurable: true,
        enumerable: false
    });
    return propertyName;
};

const createProtoMagicObject = (object) => {
    return Function;
};

var start = 0;
const incrementor = () => {
    var increment = start + 1;

    function insideFunction(x) {
        increment ++;
        return insideFunction;
    }

    insideFunction.toString = function () { return increment }
    start = insideFunction;
    return insideFunction

};

var asyncStart = 0;
const awaitIncrementor = () => {
    asyncStart ++;
    return asyncStart;
};

const asyncIncrementor = async () => {
    const value = await awaitIncrementor();
    return value;
};

function* createIncrementer() {
    var start = 1;
    while (true) {
        yield start++;
    }
}

// return same argument not earlier than in one second, and not later, than in two

const returnBackInSecond = async (x) => {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(x);
        }, 1300);
    });
    return promise;
};

var count = 0;
var result = null;

const getDeepPropertiesCount = (obj) => {
    var propertyObj = Object.getOwnPropertyNames(obj);
    count += propertyObj.length;
    if (propertyObj.length > 0) {
        if (obj.hasOwnProperty(-1)) {
            if (Object.getOwnPropertyNames(obj[-1]).length > 0) {
                return getDeepPropertiesCount(obj[propertyObj[-1]]);
            }
            else {
                for (var i = 0; i < propertyObj.length; i++) {
                    if (Object.getOwnPropertyNames(obj[propertyObj[i]]).length > 0) {
                        return getDeepPropertiesCount(obj[propertyObj[i]]);
                    }
                }
            }
        }
        else {
            for (var i = 0; i < propertyObj.length; i++) {
                if (Object.getOwnPropertyNames(obj[propertyObj[i]]).length > 0) {
                    return getDeepPropertiesCount(obj[propertyObj[i]]);
                }
            }
        }
    }
    
    result = count;
    count = 0;
    return result;
};

const createSerializedObject = () => {
    return null;
};

const toBuffer = () => { };
const sortByProto = (arr) => {
    arr.sort(function (a, b) {
        return a.__proto__ - b.__proto__;
    });
};



exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
