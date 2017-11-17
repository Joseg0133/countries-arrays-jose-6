var fourLetterCountries = [
    "Chad", 
    "Cuba",
    "Greenland",
    "Iraq",
    "Mali",
    "Oman",
    "India"
]
fourLetterCountries.push('Fiji')
fourLetterCountries.splice(4, 0, "Iran")
fourLetterCountries.splice(7, 1)
console.log(fourLetterCountries)