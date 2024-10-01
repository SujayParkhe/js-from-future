const day = "Holiday";

// switch(day) {
//     case "Monday":
//         console.log("Become a corporate slave");
//     case "Tuesday":
//         console.log("Thinking about to switch the job");
//         break;
//     case "Wednesday":
//     case "Thursday":
//         console.log("Finishing sprint tasks before Friday sprint meet");
//         break;
//     case "Friday":
//         console.log("Waiting for office hours to end");
//         break;
//     case "Saturday":
//         console.log("Go on a long ride");
//         break;
//     case "Sunday":
//         console.log("Sleep all day");
//         break;
//     default:
//         console.log("Not a valid day");
// };

if (day === "Monday") {
    console.log("Become a corporate slave");
} else if (day === "Tuesday") {
    console.log("Thinking about to switch the job");
} else if (day === "Wednesday" || day === "Thursday") {
    console.log("Finishing sprint tasks before Friday sprint meet");
} else if (day === "Friday") {
    console.log("Waiting for office hours to end");
} else if (day === "Saturday") {
    console.log("Go on a long ride");
} else if (day === "Sunday") {
    console.log("Sleep all day");
} else {
    console.log("Not a valid day");
}