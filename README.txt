# Assignment 3 CSCI 1170 - CODE REUSED FROM A1 AND A2

## Overview :
This project is code for a personal website which is like a portfolio for me (Dhruvi Shah). It describes me, my education, experience, and skill set, and provides ways to connect with me. It was made using pure HTML with NO CSS.

## Purpose for each piece of code :

1. Head (common for all pages with minute changes in the title.): this part declares the title of the webpage and the icon for the page. It is common for all 5 webpages except that the title changes for each page.

2. Header (common for all web pages): the header consists of the code for the navigation bar. The navigation bar has been coded as a table with each button for a different webpage as a column for the table. The cells are carefully spaced to set them in the center. 
Along with the table, the navigation bar is also coded for a hamburger menu which is displayed only in the mobile version.

3. Footer (common for all pages except the 'connect with me' page): the footer consists of the links to connect to the author of the webpage i.e. Me. The footer has been coded as a table with a width of 100%. The first row has 3 merged cells displaying 'connect with me'. The next row has 3 different options to connect with me - LinkedIn, mailing address, and email - each as a link that takes the user directly to the website for a respective way to connect (except the mailing address).

4. 'Index' page code pieces :
    A. LINE 3 - 10 - head (explained above)
    B. LINE 15 - 45 - header (explained above)
    C. LINE 47 - 51 - div - set of buttons to change the theme of the page
    D. LINE 53 h1 - following the header the h1 displays the author's name.
    E. LINE 55 - img tag is used to display the favicon. The img tag is enclosed in opening and closing center tags to display the image in the center. The image is in the images directory and can be accessed with images/favicon.
    F. LINE 56 - <p> the paragraph consists of a brief description of the author.
    G. LINE 59 - 71 - footer (explained above)

5. 'About' page code pieces :
    A. LINE 3 - 9 - Head (explained above)
    B. LINE 13 - 39 - Header (explained above)
    C. LINE 43 - 47 - div - set of buttons to change the theme of the page.
    D. LINE 49 h1 - the h1 displays the subheading for the page i.e. 'about'
    E. LINE 50 - 53 div displays the image of a panda and the author's description side-by-side.
    F. LINE 59 - 74 h2 and photo gallery 
    G. LINE 77 - 83 h2 and <p> - subheading for favorite song ie the audio file and paragraph is for the text describing the audio 
    H. LINE 80 - 82 <audio> - displays a controllable audio element - the audio can be found by A1_dh319898/audio/love story.mp3
    I. LINE 85 - 93 section - the following section displays skills as an ordered list
    J. LINE 96 - 99 section - contains subheadings and paragraphs for 'career aspiration' text.
    K. LINE 102 - 103 h2 and <p> - the next part is subheading for video file
    L. LINE 104 - 105 <iframe> - the iframe is used to display a video from youtube about computer science. The video has a control attribute which makes it controllable by the viewer.
    M. LINE 108 - 119 - footer (explained above)

6. 'Resume' page code pieces :
    A. LINE 3 - 7 - Head (explained above)
    B. LINE 11 - 41 - Header (explained above)
    C. LINE 45 - 49 - div - set of buttons to change the color theme 
    D. LINE 51 - 72 section 1 - the first section following the header consists of a subheading for experience, an ordered list for each experience, and a nested unordered list describing each work experience.
    E. LINE 74 - 96 section 2 - the second section consists of the subheading for education, an unordered list for each education history element with nested unordered lists for each element consisting of the year for that particular education, grades, etc.
    F. LINE 98 - 111 section 3 - the third section consists of the subheading for volunteering history, an unordered list for volunteer service, and a nested unordered list describing each volunteer service.
    G. LINE 114 - 128 - Footer (explained above)

7. 'Courses' page code pieces :
    A. LINE 3 - 7 - Head (explained above)
    B. LINE 12 - 38 - Header (explained above)
    C. LINE 42 - 46 - div - set of buttons to change the theme
    D. LINE 50 - 68 - section 1 -  the first section displays the heading 'courses I have taken' followed by an ordered list of type 'I'. The courses taken are the list elements. These have nested unordered lists which display a brief description of each course.
    E. LINE 71 - 76 - div, h3, and video - everything is enclosed in the div to display in the center. The h3 displays 'check out this video for computer science courses at dal' and the video controls attribute is for the video to be displayed. It is a controllable video with specific width of "700".
    F. LINE 78 - 116 - section 2 - this consists of the subheading 'language proficiencies' followed by a table. The first row of the table has table headings for language and the different levels of language like beginner, elementary, intermediate, and advanced.
                                 The following rows each have a language in the first column followed by the image of a panda face for each level of proficiency in the corresponding language.
                                For example: if the author is well experienced in using java then each column including the advanced column will have one image. Whereas if the author is a beginner at Java then only the cell under the beginner column will have the image.
    G. LINE 119 - 132 - Footer (explained above)

8. 'Connect with me' page code pieces :
    A. LINE 3 - 7 - Head (explained above)
    B. LINE 12 - 38 - Header (explained above)
    C. LINE 41 - 45 - div - set of buttons to change the theme
    D. LINE 47 - h1 - displays the text 'i would love to connect with you'
    E. LINE 49 - 97 - div encloses all the content. This div is used to display the content in flexbox.
    F. LINE 50 - img - displays image retrieved by - images/me.jpg
    G. LINE 53 - h3  - text 'Fill out this form to connect with me'
    H. LINE 56 - 89 - section - this section displays a form that can be filled out by the users. Input fields include name, email, and a widget. This is followed by a submit button.
    

REFERENCES 

A. Images - 
    a. LinkedIn Logo - File: LinkedIn logo initials.png - Wikimedia commons (no date). Available at: https://commons.wikimedia.org/wiki/File:LinkedIn_logo_initials.png (Accessed: February 8, 2023). 

    b. Email logo - Email icon (no date) Free Icons PNG. Available at: https://www.freeiconspng.com/images/email-icon (Accessed: February 7, 2023).

    c. panda face for a table in courses webpage - Free vectors: Panda-chan (no date) Free Vectors | Panda-chan. Available at: https://en.ac-illust.com/clip-art/1076553/panda-chan (Accessed: February 7, 2023). 

    d. Panda image in about webpage - staff_illustrator17 (no date) How to draw a cute panda dabbing, DrawingNow DrawingNow. Available at: https://www.drawingnow.com/tutorials/123662/how-to-draw-a-cute-panda-dabbing/ (Accessed: February 7, 2023). 

    e. code sample on the index page - screenshot by the author (dhruvi) - author's code

    f. 'picture of me' on connect with me' page - belongs to the author (dhruvi).

    g. favicon - Free design tool: Presentations, video, social media | CANVA (no date). Available at: https://www.canva.com/ (Accessed: February 8, 2023). 

B. audio - TaylorSwiftVEVO (2009) Taylor Swift - Love story, YouTube. YouTube. Available at: https://www.youtube.com/watch?v=8xg3vE8Ie_E (Accessed: February 7, 2023). 


C. Videos -
    a. dal computer science courses - Computer science course teasers - intro to computer programming (2022) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=irzEASZrPx8&amp;t=51s (Accessed: February 8, 2023). 

    b. what is computer science - What is computer science? (2019) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=XEWwOUvzWJ0 (Accessed: February 8, 2023). 

    c. 'love story' video link -  TaylorSwiftVEVO (2009) Taylor Swift - Love story, YouTube. YouTube. Available at: https://www.youtube.com/watch?v=8xg3vE8Ie_E (Accessed: February 7, 2023).

D. External Links - 
    a. Dalhousie University -  https://www.dal.ca/


JS FEATURES -
1. Notification - javaS.js --> LINE 17
2. CONDITIONAL - javaS.js --> LINES 18, 23, 40, 61, 83, 102, 123, 195
3. COLOR CHANGER - javaS.js --> LINE 23 - 100, 123 - 209
4. EVENT HANDLER - javaS.js --> LINE 102 - 118

ASSET LIST -
1. HTML FILES - index.html, courses.html, resume.html, about.html, connect with me.html
2. CSS FILE - styles.CSS
3. JAVA SCRIPT FILE - javaS.js
4. IMAGES - 
    .JPG IMAGES - greyaAnatomy.jpg, harryPotter.jpg, grey.jpg, back1.jpg, panda.jpg, me.jpg, bigBangTheory.jpg
    .PNG IMAGES - favicon.png, email2.png, linkedin.png
    .JPEG IMAGE - avengers.jpeg
5. AUDIO - love story.mp3
6. VIDEOS - cs video.mp4

FILE STRUCTURE -
A3_dh319898 --> HTML FILES, CSS FILE, JS FILE, IMAGES FOLDER, AUDIO FOLDER, VIDEO FOLDER, README.TXT, CODE REVIEW PDF, WIREFRAMES PDF

IMAGES FOLDER --> images (.jpg, .png, .jpeg)
VIDEOS FOLDER --> video (.mp4)
AUDIO FOLDER --> audio (.mp3)