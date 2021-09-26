import FuzzySet from 'fuzzyset'

let searchObj;
const tags = [
    'starbucks',        //0
    'hot drink',        //1
    'coffee',           //2
    'tea',              //3

    'food',             //4
    'indian',           //5
    'pizza',            //6
    'burger',           //7

    'shop',             //8
    'clothes',          //9
    'shoes',            //10
    'jewelry',          //11
    'watch',            //12
    'electronics',      //13
    'beauty',           //14
    'health',           //15

    'toilet',           //16
    'water',            //17
    'taxi',             //18
    'money',            //19


];

const searchIndex = {    //////////////--beverage
    'starbucks' : [tags[0]],
    'hot'       : [tags[1]],
    'coffee': [tags[2], tags[1]],
    'tea' : [tags[3],tags[1]],
    'cafe': [tags[1]],
    ///////////////////--food
    'restaurant' : [tags[4]],
    'hotel' : [tags[4]],
    'food' : [tags[4]],
    'meals': [tags[5],tags[4]],
    'indian' : [tags[5]],
    'pizza': [tags[6],tags[4]],
    'burger': [tags[7],tags[4]],
    'chinese' : [tags[4]],
    'noodles': [tags[4]],    
    ///////////////////--shopping
    'gift' : [tags[8]],
    'shopping' : [tags[8]],
    'clothes' : [tags[9],tags[8]],
    'shoes': [tags[10],tags[8]],
    'bags' : [tags[8]],
    'jewelry' : [tags[11],tags[8]],
    'watch' : [tags[12],tags[8]],
    'saree' : [tags[8],tags[5]],
    'silk' : [ tags[8]],
    'ring' : [tags[11],tags[8]],
    ///////////////////--entertainment


    ///////////////////--transport
    'taxi': [tags[18]],
    'uber': [tags[18]],
    'bus': [tags[18]],
    'travel': [tags[18]],
    'transport': [tags[18]],


    ///////////////////--util
    'atm' : [tags[19]],
    'exchange':[tags[19]],
    'currency':[tags[19]],
    'convert': [tags[19]],

    'restroom': [tags[16]],
    'toilet': [tags[16]],
    'washroom': [tags[16]],

    'water': [tags[17],tags[16]],
    'drinking': [tags[17],tags[16]],
};

export const initSearch = () => {
    searchObj = new FuzzySet();
}

export const addToSearch = (searchArray) => {
    searchArray.forEach(item => {
        searchObj.add(item);
    })
}

export const search = (searchString) => {
    const results = searchObj.get(searchString)
    const output = []
    if(results){
        output.push(...searchIndex[results[0][1]])
    }
    return output;
}

export const addAllItems = () => {
    Object.keys(searchIndex).forEach(item => {
        searchObj.add(item);
    });
}