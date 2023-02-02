export const filter = (inputArray, keys)=>{
    return keys.reduce((filteredArray, key)=>{
        if(inputArray[key]) filteredArray = [...filteredArray, inputArray[key]]
        return filteredArray
    },[])
}