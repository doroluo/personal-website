function load_aboutme(){
    document.getElementById("main_page").innerHTML = `
        <div id="nav_bar" class="nav_bar" style="text-align: center;">
            <button class="bear_button" onClick="load_home()"><img id="bear" src="images/bear_pfp.gif" class="center" style="height: 100px; width:auto;"></button>
            <br>
            <a class="nav_button" onClick="load_home()"> Home </a>
        </div>
        <br> 

        <div class="aboutme_content">
            <h1 style="text-align: center; margin-top: 0px">
            About Me
            </h1>

            <p style="margin-bottom: 40px">
            Hello! My name is Dorothy Luo, and I recently graduated from Purdue University with a Bachelor of Science in Computer Science. I am interested in topics such as
            Artificial Intelligence, Cloud Computing, Database Systems, Computer Vision, and Data Analysis. During university, I took classes such as Intro to Artificial Intelligence, 
            Data Mining & Machine Learning, Information Systems, Analysis of Algorithms, Data Structures & Algorithms, Computer Architecture, Systems Programming, Software Engineering,
            and Numerical Methods.
            </p>

            <h2 style="font-size: 30px;">
            Skills:
            </h2>
            <p style="margin-bottom: 40px">
                <b style="color: #795d4a;">Languages:</b> Python, Java, JavaScript, C, C++, Bash Script, SQL, MySQL, Neo4j, HTML, CSS
                <br>
                <b style="color: #795d4a;">Technologies:</b> Git, ReactJS, Flask, Linux
            </p>

            <h2 style="font-size: 30px;">
            Experience:
            </h2>
            <b style="font-size: 25px; color: #795d4a;">Software Engineer Intern | Cisco</b> 
            <br>
            <em style="font-size: 20px">May 2022 — August 2022</em>
            <p style="padding-left: 35px; margin-bottom: 40px">
                • Collaborated with Chassis Management Team to develop an internal test tool from scratch to help customers
                and engineers easily test their applications during and after development <br>
                • Built features using Bash and C to improve expandability and scalability so additional tests and features can
                be easily incorporated further down the line <br>
                • Organized scripts file hierarchy for easy accessibility and searchability <br>
                • Built in support for multiple Cisco machines to ensure maximum compatibility
            </p>

            <h2 style="font-size: 30px;">
            Projects:
            </h2>

            <b style="font-size: 25px; color: #795d4a;">Pacman Project | Python</b> 
            <br>
            <em style="font-size: 20px">Spring 2023</em>
            <p style="padding-left: 35px; margin-bottom: 20px">
            •	Implemented commonly used machine learning search algorithms to help Pacman succeed in completing predetermined situations.
            •	Utilized “snapshots” of the game arena after every Pacman move to determine the next step that Pacman should take.
            </p>

            <b style="font-size: 25px; color: #795d4a;">Purdue Circle | JavaScript, ReactJS, Flask, Python</b> 
            <br>
            <em style="font-size: 20px">Spring 2022</em>
            <p style="padding-left: 35px; margin-bottom: 20px">
            •	Created a react application for users to interact on a subject oriented forum.
            •	Utilized natural language processing to automatically extract topic matter from discussion post title.
            •	Implemented dynamic features that generate post material and website pages based on specific scenarios (e.g., if the user is logged in) and what is contained in the database.
            </p>
            
            <b style="font-size: 25px; color: #795d4a;">HTTP Server | C, C++, HTML</b> 
            <br>
            <em style="font-size: 20px">Spring 2022</em>
            <p style="padding-left: 35px; margin-bottom: 20px">
            •	Built a HTTP server that allows a client/browser to connect and access data.
            •	Parsed requests sent by the client and displayed website pages accordingly.
            •	Added concurrency features so multiple users can access the website at the same time.
            </p>

            <b style="font-size: 25px; color: #795d4a;">Data Analysis Project: Swearing and Pain Tolerance | R</b> 
            <br>
            <em style="font-size: 20px">Summer 2021</em>
            <p style="padding-left: 35px; margin-bottom: 20px">
            •	Used two-sample independent t-tests to determine whether person\’s exercise level (frequent or not frequent) impacted their change in heart rate if they swore.
            •	Generated histograms, boxplots, and normality plots and performed statistical inference on the data and determined whether the results are statistically significant through exploring the practicality of the result.
            </p>

            <b style="font-size: 25px; color: #795d4a;">Stonky Chad | Python</b> 
            <br>
            <em style="font-size: 20px">Fall 2020</em>
            <p style="padding-left: 35px; margin-bottom: 20px">
            •	Developed a chat room bot that allows users to access stock information.
            •	Implemented 10+ commands that allow users to view company information, daily stock prices, under/overvalue ratings, and other relevant information.
            </p>

            <b style="font-size: 25px; color: #795d4a;">Food Advisor | HTML/CSS, JavaScript</b> 
            <br>
            <em style="font-size: 20px">Summer 2019</em>
            <p style="padding-left: 35px;">
            •	Developed a website that helps people with food concerns find restaurants in their area.
            •	Utilized a map API to display restaurant locations.
            </p>
        </div>
    `;
}

function load_home() {
    document.getElementById("main_page").innerHTML = `
        <div id="profile_bar" class="profile_bar">
            <img id="bear" src="images/bear_pfp.gif" class="center" style="height: 150px; width:auto;">
            <b class="center" style="text-align:center; font-size: 30px; color: #513721;"> Dorothy Luo </b>
            <div class="socials">
                <a href="https://www.instagram.com/dorothyy_luo/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram" style="color: #9b7960; margin-right: 10px;"></i></a>
                <a href="https://www.linkedin.com/in/doroluo/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in" style="color: #9b7960; margin-right:10px;"></i></a>
                <a href="https://github.com/doroluo" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" style="color: #9b7960;"></i></a>
            </div>
        </div>

        <div class="link_buttons">
            <button type="button" onclick="load_aboutme()">
                About Me
            </button>
            <br>
            <button type="button" onclick="load_projects()">
                Personal Projects
            </button>
        </div>
    `;
}

function load_projects() {
    document.getElementById("main_page").innerHTML = `
        <div id="nav_bar" class="nav_bar" style="text-align: center;">
            <button class="bear_button" onClick="load_home()"><img id="bear" src="images/bear_pfp.gif" class="center" style="height: 100px; width:auto;"></button>
            <br>
            <a class="nav_button" onClick="load_home()"> Home </a>
        </div>
        <br>

        <div class="project_content">
            <p style="text-align: center;">
            Hi! There isn't much going on in here right now, but I'm hoping there will be soon!
            </p>
        </div>
    `;
}