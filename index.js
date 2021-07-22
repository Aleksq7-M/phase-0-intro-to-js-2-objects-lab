// Write your solution in this file!
const employee = {
    name: 'Chuch',
    streetAddress: 'The middle of the road'
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee, [key]: value
    };
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    Object.assign(employee, {[key]: value});
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee.[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.[key];
    return employee;
}
