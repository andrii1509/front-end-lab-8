// let k = 0;
const debounce = (f, ms) => {
  let a;
  return function() {
    let cont = this;
    let ar = arguments;
    // if (k !== 1 ){
    	clearTimeout(a);
    // }
    a = setTimeout(function(){f.apply(cont, ar)}, ms);
    // k++;
  }

}




// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 100);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'