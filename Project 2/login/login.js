
const loginForm = document.getElementById("loginForm");

const loginPage = document.getElementById("loginPage");

const transitionScreen =
    document.getElementById("transitionScreen");

const terminalText =
    document.getElementById("terminalText");

const welcome =
    document.getElementById("welcome");

const errorMessage =
    document.getElementById("errorMessage");


// DEMONSTRATION LOGIN CREDENTIALS

const validUsername = "Administrator";
const validPassword = "scp-access-1968";


// LOGIN FORM

let isTransitioning = false;

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Ignore repeat submissions once the transition has started.
    if (isTransitioning) return;

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;


    // CHECK LOGIN DETAILS

    if (
        username.toLowerCase() === validUsername.toLowerCase() &&
        password === validPassword
    ) {

        errorMessage.textContent = "";

        isTransitioning = true;

        startFoundationTransition();

    } else {

        errorMessage.textContent =
            "ACCESS DENIED: INVALID PERSONNEL CREDENTIALS.";

    }

});


// FOUNDATION TRANSITION

async function startFoundationTransition() {

    // Hide login page

    loginPage.style.display = "none";


    // Activate black screen

    transitionScreen.classList.add("active");


    // Terminal messages

    const messages = [

        "> Establishing secure connection...",

        "> NISR personnel credentials accepted.",

        "> Verifying administrative clearance...",

        "> Clearance verification successful.",

        "> Connecting to Foundation network...",

        "> Secure connection established.",

        "> Redirecting to classified personnel network..."

    ];


    // Display messages one after another

    for (let message of messages) {

        const line = document.createElement("p");

        line.classList.add("terminal-line");

        line.textContent = message;

        terminalText.appendChild(line);

        await new Promise(resolve =>
            setTimeout(resolve, 850)
        );

    }


    // Pause before welcome message

    await new Promise(resolve =>
        setTimeout(resolve, 1000)
    );


    // Display welcome message

    welcome.classList.add("show");


    // Wait before redirecting

    await new Promise(resolve =>
        setTimeout(resolve, 3500)
    );


    // Redirect to the Foundation dashboard

    window.location.href =
        "../dashboard/dashboard.html";

}
