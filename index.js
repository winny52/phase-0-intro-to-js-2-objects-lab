// Write your solution in this file!
const employee = new Object()
    name = "Winny Chelangat",

    streetAddress = "NairobiKenya",

    updateEmployeewithKeyandValue = function (){
        
    }

    function updateEmployeeWithKeyAndValue(employee, key, value) {
        const newObj = {...employee};
        newObj[key] = value;
        return newObj;
    }
    
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
    }
    
    function deleteFromEmployeeByKey(employee, key) {
        const cloneObj = {...employee};
        delete cloneObj[key];
        return cloneObj;
    }
    
    function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key];
        return employee;
    }
