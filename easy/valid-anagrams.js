/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different 
word or phrase, typically using all the original letters exactly once.

*/

//time complexity: O(nlogn + mlogm)

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    sortedS = s.split('').sort().join('')
    sortedT = t.split('').sort().join('')

    if (sortedS === sortedT) {
        return true
    } else {
        return false
    }

};

//time complexity O(N)


var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    let sCount = {}
    let tCount = {}

    for (let i = 0; i < s.length; i++) {
        if (!sCount[s[i]]) sCount[s[i]] = 0
        if (!tCount[t[i]]) tCount[t[i]] = 0

        sCount[s[i]]++
        tCount[t[i]]++
    }

    console.log(s, ':', sCount)
    console.log(t, ':', tCount)

    for (let ch in sCount) {
        if (sCount[ch] !== tCount[ch]) {
            return false
        }
    }

    return true
};



