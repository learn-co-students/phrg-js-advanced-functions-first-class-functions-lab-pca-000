const returnFirstTwoDrivers = (function (listOfDrivers) {
  return listOfDrivers.slice(0, 2);
});

const returnLastTwoDrivers = (function (listOfDrivers) {
  return listOfDrivers.slice(2, 4);
});

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = (function (integer) {
  return function (fare) {
    return fare * integer
  }
});

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (function (array, driverFunction) {
  return driverFunction(array)
});

