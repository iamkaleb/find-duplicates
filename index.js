function findDuplicates(arr1, arr2) {
    const result = []
    let i = 0
    let j = 0
    
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] == arr2[j]) {
        result.push(arr1[i])
        i++
        j++
      } else if (arr1[i] < arr2[j]) {
        i++
      } else if (arr2[j] < arr1[i]) {
        j++
      }
    }
    console.log(result)
  }
  
  // input: arr1, arr2
  // output: arr sorted in ascending order
  
          // [1,2,3,5, 20]
                                 
  
   //   [0,1,4,5,13,15,20] 