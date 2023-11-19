class HangboardTimer {
    constructor() {
        this.remainingTime = 10; // 10 seconds countdown
        this.timer = null;
    }

    start() {
        console.log("Starting 10-second countdown...");
        this.timer = setInterval(() => this.tick(), 1000);
    }

    tick() {
        if (this.remainingTime > 0) {
            console.log(`Time Remaining: ${this.remainingTime} seconds`);
            this.remainingTime--;
        } else {
            this.stop();
            console.log("Countdown complete!");
        }
    }

    stop() {
        clearInterval(this.timer);
        console.log("Timer stopped.");
    }
}

module.exports = HangboardTimer;


// class HangboardTimer {
//     constructor(hangDuration, restDuration, numberOfHangs) {
//         this.hangDuration = hangDuration; // Duration of hang in seconds
//         this.restDuration = restDuration; // Duration of rest in seconds
//         this.numberOfHangs = numberOfHangs;
//         this.currentHang = 0;
//         this.remainingTime = hangDuration; // Time left in the current interval
//         this.isResting = false;
//         this.timer = null;
//     }
// 
//     start() {
//         console.log("Starting Max Hang Session...");
//         this.timer = setInterval(() => this.tick(), 1000);
//     }
// 
//     tick() {
//         if (this.currentHang < this.numberOfHangs) {
//             console.log(this.isResting ? "Resting..." : "Hanging...");
//             console.log(`Time Remaining: ${this.remainingTime} seconds`);
// 
//             this.remainingTime--;
// 
//             if (this.remainingTime <= 0) {
//                 this.switchState();
//             }
//         } else {
//             this.stop();
//             console.log("Workout complete!");
//         }
//     }
// 
//     switchState() {
//         this.isResting = !this.isResting;
//         this.remainingTime = this.isResting ? this.restDuration : this.hangDuration;
// 
//         if (!this.isResting) {
//             this.currentHang++;
//         }
//     }
// 
//     stop() {
//         clearInterval(this.timer);
//         console.log("Timer stopped.");
//     }
// }

module.exports = HangboardTimer;
