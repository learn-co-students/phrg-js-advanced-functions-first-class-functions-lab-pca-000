// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2)
  }

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
   return function (num) {
     return num * multiplier
   }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayOfDrivers, funct) {
  if (funct === returnFirstTwoDrivers) {
    return arrayOfDrivers.slice(0, 2)
    } else {
      return arrayOfDrivers.slice(-2)
    }
  }
