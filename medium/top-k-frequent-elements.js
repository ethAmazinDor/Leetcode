/*
Given an integer array nums and an integer k, return the k most frequent elements.
 You may return the answer in any order.

*/

var topKFrequent = function (nums, k) {
    // [1,1,1,2,2,3] k = 2 answer = [1,2]

    //create a hashmap to map numbers and count

    //bucket sort
    /*
   indicies [] [] [] [] [] []
  occurences 0  1  2  3  4  5

    */

    // { 1: 3, 2: 2, 3:1 }

    const hashMap = {}

    for (let num of nums) {
        if (!hashMap[num]) {
            hashMap[num] = 1
        } else {
            hashMap[num]++
        }
    }

    //bucketsort 
    //[[], [3], [2], [1], [], []]
    //our indicies is the number of times the number appears in our hashmap
    const bucket = []
    //populate our bucket with empty arrays
    for (let i = 0; i <= nums.length; i++) {
        bucket.push([])
    }

    for (let key in hashMap) {
        let count = hashMap[key]
        bucket[count].push(key)
    }

    console.log(bucket)

    let result = []
    //iterate thorugh the bucket through the right side 
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length === 0) {
            continue
        } else {
            result = [...result, ...bucket[i]]
        }
    }
    return result.slice(0, k)
};

