# UA-Ace-Attorney-Community-Website
Git repository for working on a website for ukrainian Ace Attorney commynity which is ran by Zhurba

Ukrainian Ace Attorney Community in Honor of Saint Zhurba Kurkoslavivna
Project Description

This project is a single-page landing website for the Ukrainian-speaking community of the game Ace Attorney. "Ace Attorney" (also known as "Phoenix Wright: Ace Attorney") is a popular series of adventure video games developed by Capcom. It tells the stories of attorney Phoenix Wright, who investigates and defends his clients in court.

The website is dedicated to fans of the game and aims to unite all interested individuals who support the game and the community around it. It provides information about the game, community events, organizers, and facilitates communication among community members.

This project is open, and we welcome anyone who wishes to contribute to the development and improvement of the website. You can join the team and make your contributions or simply submit suggestions, ideas, and feedback through the Issues section on GitHub. Our community actively supports interaction and idea exchange, which strengthens our community.
Repository Contents

    index.html: This is the main HTML file that serves as the foundation of the page. It includes all the sections and elements of the page and defines their structure.
    style.css: The CSS file that styles the entire appearance of the page. It contains all the styles for colors, fonts, sizes, element positioning, and other styles used on the page.
    shit.js: This is the JavaScript file that adds certain functionality and animations to the page. It is used to implement interactive elements, such as dark mode, toggle switches, and other animations.

Detailed Code Description
index.html

    We begin the page structure with the .container container, which has a fixed width and centers the content on the page. This allows maintaining balance and readability of the page even on larger screens.
    The navigation block of the page is represented by the nav element, which contains the logo in the form of the .header heading and an unordered list of links (ul). Using a list allows for easy-to-understand and accessible navigation.
    The main content of the page is divided into different sections, each with a unique identifier. These identifiers are used to create anchor links, which allow users to navigate to specific sections using links in the navigation block.
    To achieve smooth transitions between sections and scrolling animations, the shit.js file is used.

style.css

    General styles for the page body include setting fonts, colors, and backgrounds. The use of the 'Montserrat' font from Google Fonts provides a stylish and modern appearance for the text.
    The navbar is styled using properties like background-color, color, and padding to give it a burgundy background and white text. Placing the links in the center and evenly spaced provides uniform distribution on the navigation panel.
    The header h1 tag has a large font, and the text-transform: uppercase style gives an attractive look and emphasizes the importance of the heading.
    Buttons are styled using background-color, color, and border-radius to make them stand out and attractive to users. Margins and the box-shadow property add a sense of depth and realism.
    Balanced margins and stylization for the #intro, #about, #galleries, #organizers, and section blocks provide convenience for viewing and reading. The box-shadow property adds contrast and highlights individual sections.
    The use of border-radius ensures that the images of the organizers have a rounded appearance.
    The footer is styled using background-color and color to highlight it and add contrast.

shit.js

    The shit.js file contains JavaScript code that adds some functionality and animations to the page.
    The dark mode toggle is implemented using an interactive input element of type checkbox. When the toggle is switched on, the dark-mode class is applied to the <body> tag. This allows changing the page styles depending on the selected mode.
    When the dark-mode class changes, the CSS styles for the page also change, allowing users to switch between light and dark modes. This adds more responsiveness and interactivity to the website.

Instructions for Use

    To start using the page, clone the repository to your local computer using the command git clone https://github.com/geolod/UA-Ace-Attorney-Community-Website.git.
    Open the index.html file in your browser to view and interact with the page.
    If you want to switch the theme of the website, find the dark mode toggle on the page. Click on it to activate the dark mode. Click again to turn off dark mode and return to the light theme.

Joining the Team

We always welcome new members to our team. If you wish to contribute to the development and improvement of the page, please contact us through the Issues section on GitHub. Here, you can submit proposals, ideas, make changes, or help solve problems.
Issue Reporting

If you find any errors or have ideas for improving the page, please create a new topic in the Issues section on GitHub. From there, we can track all issues and suggestions and work on resolving them together with the team.
