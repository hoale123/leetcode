var isAnagram = function(s, t) {
    sorted1 = s.split('').sort().join('').toLowerCase()
    sorted2 = t.split('').sort().join('').toLowerCase()
    return (sorted1 === sorted2)
};