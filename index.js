<!DOCTYPE html>
<html lang="en" >
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://kit.fontawesome.com/9006e11a27.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="images/fabicon.png">
    <title>Ryo Yamamoto Portfolio</title>
  </head>
  <body>
    <section class="topContainer">
      <div class="switchContainer">
        <input type="checkbox" id="darkLight" class="darkLightSwitch">
        <label for="darkLight" class="toggleDarkLight animation">
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
          <div class="ball"></div>
        </label>
      </div>
      <div class="main">
        <div class="mainItem centerName animation">
          <h2>My<br>Portfolio</h2>
          <div class="top-links-row">
            <div class="top-font">
              <div class="top-item">
                <a id="email" onmouseover="displayPop()" onmouseout="hidePop()" class="top-item-link" data-email="ryochaaaan0414@gmail.com" onclick="copyEmail()" target="_blank">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
              <div class="top-item">
                <a class="top-item-link" href="https://twitter.com/home" target="_blank"><i class="fab fa-twitter-square"></i></a>
              </div>
              <div class="top-item">
                <a class="top-item-link" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a>
              </div>
              <div class="top-item">
                <a class="top-item-link" href="https://www.linkedin.com/in/ryo-yamamoto-9190591a7/" target="_blank"><i class="fab fa-linkedin"></i></a>
              </div>
              <div class="top-item">
                <a class="top-item-link" href="https://github.com/Mountain-bk" target="_blank"><i class="fab fa-github-square"></i></a>
              </div>
            </div>
            <div class="top-copy-pop">
              <div class="top-copy-email-text">

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav animation">
        <ul class="nav-links">
          <li><button class="a nav-link">About Me</button></li>
          <li><button class="b nav-link">Skills</button></li>
          <li><button class="c nav-link">Works</button></li>
          <li><button class="d nav-link">Contact</button></li>
        </ul>
      </div>
      <div class="scroll-down">
        <div class="scroll-down-container">
          <h4>scroll</h4>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
      <section class="secondContainer">
        <div class="mainItem aboutMe">
          <div class="title-aboutme animation">
            <h2>About Me</h2>
          </div>
          <div class="text">
            <div class="article">
              <p>My name is Ryo Yamamoto. I'm currently working at a complex facility as a part-time worker. Since I took a python beginner class(Code in Place) provided by Stanford University in April, I got interest in computer science. Please check my CV if you got interest.</p>
              <button onclick="goCV()" class="cv">CV(pdf)</button>
            </div>
          </div>
        </div>
      </section>
      <section class="thirdContainer">
        <div class="mainItem skills animation">
          <div class="hardSkills">
            <div class="title-hardSkills">
              <h2>Hard Skills</h2>
            </div>
            <div class="list-hardSkills">
              <ul>
                <li>Bilingual (Japanese and English)</li>
                <li>Sales</li>
                <li>Photoshop</li>
                <li>python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
          <div class="softSkills">
            <div class="title-softSkills">
              <h2>Soft Skills</h2>
            </div>
            <div class="list-softSkills">
              <ul>
                <li>Willingness to learn</li>
                <li>Visual Communication</li>
                <li>Teamwork</li>
                <li>Time management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="fourthContainer">
        <div class="fourthContainer-container">
          <div class="works">
            <div class="works-title">
              <h2>Works</h2>
            </div>
            <div class="works-projects-container">
              <div class="works-project">
                <button class="information-link" type="button" value="Portfolio">
                  <div class="project-image">
                    <img class="portfolio" src="images/Portfolio Image.png" alt="">
                  </div>
                </button>
                <div class="information-container">
                  <button class="information-link" type="button" value="Portfolio" >
                    <h3>Personal Portfolio Website</h3>
                  </button>
                </div>
                <div class="github-box">
                  <a class="github" href="https://github.com/Mountain-bk/Portfolio-Project-1" target="_blank">
                    <div class="github-link">
                      <i class="fab fa-github"></i>
                      <h3>Github</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div class="works-project">
                <button class="information-link" type="button" value="Jappalo Wings">
                  <div class="project-image">
                    <img class="jappalo-wings" src="images/Jappalo Wings Top Page.png" alt="">
                  </div>
                </button>
                <div class="information-container">
                  <button class="information-link" type="button" value="Jappalo Wings">
                    <div>
                      <h3>Jappalo Wings(Delivery fast food restaurant imitation)</h3>
                    </div>
                  </button>
                </div>
                <div class="github-box">
                  <a class="github" href="https://github.com/Mountain-bk/Portfolio-Project-1" target="_blank">
                    <div class="github-link">
                      <i class="fab fa-github"></i>
                      <h3>Github</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div class="works-project mainItem">
                <button class="information-link" type="button" value="Netflix Original Comedy Movie Suggestion Program">
                  <div class="project-image">
                    <img class="netflix-comedy-movie-suggestor" src="images/Netflix Comedy Movie Suggestor.png" alt="">
                  </div>
                </button>
                <div class="information-container">
                  <button class="information-link" type="button" value="Netflix Original Comedy Movie Suggestion Program">
                    <div>
                      <h3>Netflix Original Comedy Movie Suggestion Program</h3>
                    </div>
                  </button>
                </div>
                <div class="github-box">
                  <a class="github" href="https://github.com/Mountain-bk/Portfolio-Project-2" target="_blank">
                    <div class="github-link">
                      <i class="fab fa-github"></i>
                      <h3>Github</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="fifthContainer">
        <div class="fifthContainer-container">
          <div class="fifthContainer-content">
            <div class="mainItem contactMe-title">
              <h2>Contact</h2>
            </div>
            <div class="contactMe-links-container">
              <div class="contactMe-links-row">
                <div class="contact-font">
                  <div class="item">
                    <a class="item-link" href="https://twitter.com/home" target="_blank">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                  </div>
                  <div class="item">
                    <a class="item-link" href="https://www.facebook.com/" target="_blank">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </div>
                  <div class="item">
                    <a class="item-link" href="https://www.linkedin.com/in/ryo-yamamoto-9190591a7/" target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                  <div class="item">
                    <a class="item-link" href="https://github.com/Mountain-bk" target="_blank">
                      <i class="fab fa-github-square"></i>
                    </a>
                  </div>
                  <div class="item">
                    <a id="emailContact" onmouseover="displayContactPop()" onmouseout="hideContactPop()" class="item-link" data-email="ryochaaaan0414@gmail.com" onclick="copyEmail()" target="_blank">
                      <i class="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="contact-copy-pop">
                <div class="contact-copy-email-text">

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="modal">
        <div class="modal-content-container">
          <div class="close-btn-container">
            <span class="close-btn">&times;</span>
          </div>
          <div class="modal-content">
            <div class="title">
              <div class="title-title">
                <h3>Title:</h3>
              </div>
              <div class="title-text">

              </div>
            </div>
            <div class="url">
              <div class="url-title">
                <h3>URL/Link:</h3>
              </div>
              <div class="url-text">

              </div>
            </div>
            <div class="languages">
              <div class="languages-title">
                <h3>Languages:</h3>
              </div>
              <div class="languages-text">

              </div>
            </div>
            <div class="production-period">
              <div class="production-period-title">
                <h3>Production Period:</h3>
              </div>
              <div class="production-period-text">

              </div>
            </div>
          </div>
        </div>
      </div>
    <script src="index.js"></script>
  </body>
</html>
