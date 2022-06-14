var groupAnagrams = function (strs) {
    const sortedStrs = strs.map(word => word.split('').sort().join(''))
    let hashMap = {}

    for (let i = 0; i < strs.length; i++) {
        if (!hashMap[sortedStrs[i]]) {
            hashMap[sortedStrs[i]] = [strs[i]]
        } else {
            hashMap[sortedStrs[i]].push(strs[i])
        }
    }

    return Object.values(hashMap)

};