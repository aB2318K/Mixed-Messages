const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Train = ["Weight Training", "Bodyweight Training", "Endurance Training", "Interval Training", "Swimming", "Rest"];
const weightEX = ["Strict Press", "Incline Bench", "Larsen Press"];
const bodyweightEX = ["Dips", "Press Ups", "Pull Ups"];
const enduranceEX = ["5k", "8k", "10k"]
const intervalEX = ["40m sprints", "100m sprints", "400m sprints"];
const swimEX = ["Freestyle", "Breaststroke", "Water Treading"];
const restEX = ["Drink Water", "Watch Netflix", "Sleep A Lot"];

function randomNum(num) {
    return random = Math.floor(Math.random() * num);
};

function messageGenerator() {
    let day = Days[randomNum(Days.length)];
    let train = Train[randomNum(Train.length)];
    let message;
    if (train === "Weight Training") {
        let exercise = weightEX[randomNum(weightEX.length)];
        message = `${day} is ${train} day. Start with ${exercise}.`;
    }
    else if (train === "Bodyweight Training") {
        let exercise = bodyweightEX[randomNum(bodyweightEX.length)];
        message = `${day} is ${train} day. Start with ${exercise}.`;
    }
    else if (train === "Endurance Training") {
        let exercise = enduranceEX[randomNum(enduranceEX.length)];
        message = `${day} is ${train} day. Run ${exercise}.`;
    }
    else if (train === "Swimming") {
        let exercise = swimEX[randomNum(swimEX.length)];
        message = `${day} is ${train} day. Start with ${exercise}.`;
    }
    else if (train === "Interval Training") {
        let exercise = intervalEX[randomNum(intervalEX.length)];
        message = `${day} is ${train} day. Do ${exercise}.`;
    } 
    else {
        let exercise = restEX[randomNum(restEX.length)];
        message = `${day} is REST day. ${exercise}.`;
    };
    console.log(message);
}

messageGenerator();

