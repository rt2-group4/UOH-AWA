# Building an accessible web application as a team
This respository contains all necessary code and documentation for an accessible web application centred around accessibility that meets WCAG standards Level AA. The repository owners (members of Group 4) are as follows: 
- Alex Jacobs
- Alisa Shehaj
- Callum Lovatt
- Kyrylo Kostakov
- Oluwaseyi Daniel

# Accessibility conformance
The web pages conform to WCAG Level AA. This has been confirmed using both WAVE and Axe Dev Tools Chrome extensions. A full accessibility report from the final web page versions obtained from Axe Dev Tools can be found **here**.<br><br>
A template was used in pull requests that included a section on accessibility and testing. Testing was conducted throughout the development process. When accessibility issues were identified they were noted and Trello tickets were made to address them where appropriate.

# Summary
The web pages have been built using a combination of JavaScript, HTML and CSS. A descriptive summary of the main features can be found below:
### Accessibility toolbar
- The header of each page contains an accessibility toolbar kit which gives the option to switch on/off several accessibility features. The features stay on as you navigate across different pages. Features include:
  - Increase font
    - Increase the size of font on the page   
  - Decrease font
    - Decrease the size of font on the page  
  - Toggle Contrast
    - Enhance contrast between text and background
  - Screen mask
    - Dims parts of the screen to help users focus on specific content and reduce visual distractions
  - Cursor ruler
    - Adds horizontal guide lines that follow the cursor to help with focus on the screen.
  - Screen reader
    - Converts on-screen content into speech
  - Reset
    - Switches off all features  
### Home page / topic listing page
- Displays a list of topics that can be seen using the carousel buttons
  - There are 10 topics in total, each convering a different area of digital accessibility. Each topic card contains:
    - An estimated time to complete
    - A brief description of the topic
    - A 'More Details' button
    - A 'Start Studying' button and a 'Study Later' button which updates when clicked 
  - A count of the topics being studied is displayed in the header
### Topic details page
- When 'More Details' is clicked for a topic, a page is built that contains all of the topic details
- A 'Start Studying' button takes you to the learning activities page for that topic
  - If another topic is already being studied, an alert will ask you to confirm you wish to study another topic
- A 'Study Later' button which updates when clicked and adds/removes to/from study plan
### Learning activity page
- This can be accessed when a topic is selected to be studied
- Contains all of the learning material for the topic being studied
- Cotains a multiple choice test of 3-5 questions
  - Requires all questions to be answered before being submitted
  - Gives a score when completed
### Study plan page
- Shows a summary of the what topic is being studied (if any), duisplaying the associated image, name and completion time for each topic
  - An 'Open Content' button takes you to the learning topic for the assosiated topic
  - A 'Stop Studing' button removes the topic being studied
- Shows what topic(s) have been added to 'Study Later'
  - A 'Show Details' button takes you to the topic details page
  - A 'Remove From Study Plan' button removes the topic from the study plan

# Approach to the work
## Quality control 
- Pull Requests could not be automatically merged and had to be approved by at least one member of the team
- Accessibility conformance testing was conducted using the WAVE and Axe Dev Tools Chrome extensions
## Generative AI
- A template was used in pull requests which included a statement on the use of Generative AI
  - This was used to help monitor the use of Generative AI throughout the project
## Task management
- All members made regular contributions during development, including:
  - Code development itself
  - Pull request reviews
  - Communication with other team members
  - Attendance to Google Meet catch ups 
- Tasks were managed using Trello
  - Tickets were created individual pieces of work
  - Members would assign themselves to tickets and move to the correct stage in line with progress
## Communication
- The team conducted regular meetings using Google Meet. Meeting notes can be found in 'meeting notes'
- The team communicated regularly using a group WhatsApp

