
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2)
    
} 


const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2)
}
    
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 


//const createFareMultiplier = function(num) {
   // return function(fare) {return fare*num}
//}


const createFareMultiplier  = num =>{
    return function(fare) {
        return fare*num
    }

}

const fareDoubler = createFareMultiplier(2)
    
const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = (array,cb) =>{
        
        return cb(array)

}