// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  let driver1 = drivers[0]
  let driver2 = drivers[1]
  return [driver1, driver2]
}

const returnLastTwoDrivers = function (drivers) {
  let driver1 = drivers[drivers.length - 1]
  let driver2 = drivers[drivers.length - 2]
  return [driver2, driver1]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fnc) {
  return fnc(drivers)
}
