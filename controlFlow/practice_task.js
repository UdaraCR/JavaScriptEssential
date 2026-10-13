let person = "Employee";
let accessLevel;

if (person === "Employee"){
    accessLevel = "Have access to Dietary Services";
} else if (person === "Enrolled Member"){
    accessLevel = "Have access to Dietary Services and one-on-one interaction with a dietician";
} else if (person === "Subscriber"){
    accessLevel = "Have partial access to facilitate Dietary Services only";
} else {
    accessLevel = "Need to enroll or at least subscribe first to avail this facility";
}

console.log("Access Level:", accessLevel);