/**
 * Write a JSON prettifier
 * Function will always take in a VALID JSON string
 * Print to console as human-readable
 */

// Plan:
// 1 Start with the simple cases, such as just a number, just a string - DONE
// 2 Think about format for simple arrays
// 3 Go from there

const JSON_format = (validJSON) => {
  const parsedJsObject = JSON.parse(validJSON);

  if (typeof parsedJsObject !== 'object') {
    return JSON.stringify(parsedJsObject);
  }

  // Build my own string.
  // Iterate over the values of the Object and pick out any with type array
  // Probably Array.reduce, to do specific stringification of arrays
  const objectKeys = Object.keys(parsedJsObject);
  if (!objectKeys.length) {
    return JSON.stringify(parsedJsObject);
  }

  const stringifiedJSON = objectKeys
    .reduce((result, currentKey, currentIndex) => {
      const valueOfKey = parsedJsObject[currentKey];

      let stringChunk = '\n\t' + "\"" +currentKey + "\"" + ': ';

      if (Array.isArray(valueOfKey)) {
        // specifically format array
        // return stringChunk;
        stringChunk += "[ " + valueOfKey + " ]";
      } else {
        stringChunk += JSON.stringify(valueOfKey, null, 2);
      }

      const isLastEntry = currentIndex === objectKeys.length - 1;

      stringChunk += isLastEntry 
        ? ''
        : ',';

      return result + stringChunk;
    }, '{');

    return stringifiedJSON + "\n}";
  };


// Simple cases
// console.log();
console.log(JSON_format('8'));

// console.log();
console.log(JSON_format('"alice"'));

// console.log();
console.log(JSON_format('{}'));

// Simple 1-D arrays
// console.log();
console.log(JSON_format('["a"  ,"b", "c"]'));

// JSON object
// console.log();
console.log(JSON_format('{"alice" : 10}'));

// JSON object, key = string, value = array of numbers
// console.log();
console.log(JSON_format('{"aqua": [0,255,255,1],"black": [0,0,0,1],"blue": [0,0,255,1]}'));