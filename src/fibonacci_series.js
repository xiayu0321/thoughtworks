'use strict';

function fibonacci_series(n) {
    var arr = [0,1];
    var i;
    
    if(n > 1){
        for(i = 2;i < n + 1;i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
    return arr;       
}
module.exports = fibonacci_series;
