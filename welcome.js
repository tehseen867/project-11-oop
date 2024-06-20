import chalkAnimation from "chalk-animation";
function displayWelcomeMessage() {
    return new Promise((resolve) => {
        let WelcomeMessage1 = chalkAnimation.karaoke("\n<<<===>>> WELCOME___TO___USER___INFO___SYSTEM <<<===>>>\n");
        setTimeout(() => {
            WelcomeMessage1.stop();
            resolve("");
        }, 2300);
    }).then(() => {
        return new Promise((resolve) => {
            let WelcomeMessage2 = chalkAnimation.radar('\n<<<--------->>> THIS____PROJECT____IS____STRUCTURED____BY_____TEHSEEN <<<--------->>>\n');
            setTimeout(() => {
                WelcomeMessage2.stop();
                resolve("");
            }, 3200);
        });
    }).then(() => {
        return new Promise((resolve) => {
            let message = chalkAnimation.radar("\n <<<------->>> LETS____GET____STARTED !! <<<------->>>\n");
            setTimeout(() => {
                message.stop();
                resolve("");
            }, 2000);
        });
    });
}
export { displayWelcomeMessage };
