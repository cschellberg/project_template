function Resume () {
    return (
            <div className="resume ">
            <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Education & Experience</h1>
        </div>
        </div>
            <div className="row justify-content-center">
            <div class="col-4">
            <h3>Education</h3><br></br>
            <h5>
                Penn LPS Coding Bootcamp
            </h5>
            <p>
                Full Stack Developer
            </p>
            <p>
                Philadelphia, PA
            </p>
            <p>
                04/2021
            </p>
            <h5>
                Montgomery County Community College
            </h5>
            <p>
                Liberal Arts And General Studies Associates
            </p>
            <p>
                Blue Bell, PA
            </p>
            <p>
                05/2015
            </p>
            </div>
            <div class="col-4">
            <h3>Projects</h3><br></br>
            <h5>
            Workday Planner
            </h5>
            <p>A single page application to organize the standard business day. It is color coordinated to specify whether it is the past, present, or future. The events saved will be stored in local storage so when it is refreshed, it still persists. 
            Tools used: html, css/bootstrap, jquery
            </p>
            <h5>Travel Buddy</h5>
            <p>Interactive front end application used to compare different locations to generate a 5 day forecast along with local attractions through google maps.
            Tools used: html, css/bulma, javascript (jquery)</p>
            <h5>Tic Tac Whoa</h5>
            <p>Invite your friends to play against and be able to view your wins/loses on the dashboard after signing in. 
            Tools used: html, css/bootstrap, javascript (jquery and handlebars.js), socket.io,
            mysql
            </p>
            </div>
            </div>
        </div>
    );
}

export default Resume;