function collect_same_elements(collection_a, object_b) {
 　　var i;　
   var newCa = [];
   var result = [];
   var j = 0;

   for(i = 0;i < collection_a.length;i++){
      newCa.push(collection_a[i].key);
   }

   for(i = 0;i < newCa.length;i++){
    for(j = 0;j < (object_b.value).length;j++){
      if(newCa[i] === (object_b.value)[j]){
        result.push(newCa[i]);
      }
    }
   }
  return result;
}

module.exports = collect_same_elements;
