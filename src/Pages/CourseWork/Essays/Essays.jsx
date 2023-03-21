import styled from 'styled-components';

/* Component ---------------------------*/
import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h2>Essays</h2>
            <Essay question= 'Q1. Explain the difference between HTML, CSS and JavaScript.'>
           <h5>HTML – HyperText Markup Language</h5>

•	Initial development begun by Tim Berners-Lee in 1980, before the development of the Internet, with a simple hypertext system called ENQUIRE < br/>
•	Berners-Lee published the initial HTML system, consisting of 18 elements, in 1991. Eleven of these elements are still used today. (Berners-Lee is widely credited as the inventor of the World Wide Web and created the first web site!) < br/>
•	HTML creates the structure of a document; developers use HTML coding to designate how a browser displays various elements of a page, such as text, headlines and images. < br/>
•	HTML primarily creates static web pages. Internet navigation between related pages and websites is achieved with HTML hyperlinks. < br/>
•	HTML uses tags which enclose different parts of content to make it appear a certain way (e.g., bold, italic, font size) or act a certain way (such as hyperlinking to another document or website.) < br/>
< br/>
<h5>CSS – Cascading Style Sheets</h5>

•	Håkon Wium Lie and Bert Bos are considered the co-creators of CSS in 1995. < br/>
•	CSS style sheets are “cascading” because they allow a document’s style to be simultaneously affected by multiple style sheets, in priority order, e.g., sheets for overall site formatting, such as background color, and separate sheets for text formatting, subheads, headlines, etc. In addition, different style sheets can be created for on-screen appearance and printed appearance. < br/>
•	CSS allows the separation of the presentation of content from the structure (HTML), so a style sheet can be implemented across an entire website. Prior to CSS, if a developer wanted to assign a particular style to a h3 subhead, for example, HTML had to be used at each occurrence of that type of subhead. < br/>
•	CSS information can be embedded into an HTML document or can be a separate document. < br/>
•	CSS allows for greater control over the visual appearance of a site, with styles applied consistently sitewide. < br/>
< br/>
<h5>JavaScript</h5>

•	Originally designed by Brendan Eich of Netscape in late 1995. < br/>
•	JavaScript is a scripting or programming language that governs how web pages behave. It’s used on 98% of all web pages. < br/>
•	The initial JavaScript standard that emerged was Microsoft’s Jscript, which was part of Internet Explorer-the leading web browser in the late 90’s and early 2000’s. By 2004, other browsers with more sophisticated scripting began to emerge, and by 2009 the worldwide standard became ECMAScript 5. < br/>
•	Java Script allows for such behaviors as graphics animation, scrolling video and interactive maps that make websites dynamic, rather than static.
•	Server-side JavaScript generates new content on the server, such as data from a database. < br/>
•	Client-side JavaScript generates new content from inside the browser. For example, it can create a HTML table filled with data pulled from the server-side database, then display the table in a web page. This is common in e-commerce web sites. < br/>
•	APIs (Application Programming Interfaces) are sets of code that allow for the implementation of programs that would otherwise be difficult to implement. They are used to create such functionality as pop-up windows, animated graphics and interactive mapping functions. < br/>

            </Essay>
            <Essay question= 'Q2. What is the difference between Git and Github?'>
            <h5>Git</h5>
A distributed version control system that tracks changes in any set of computer files. It is usually used for groups of programmers who are collaboratively developing source code during software development.
Each user has a working copy of the code and the full change history. There is no single centralized version of the codebase.Git differs from other version control systems in the way it thinks about data.
Most other systems store information as a list of file-based changes. Git basically takes a snapshot of what your files look like every time you commit and stores a reference to that snapshot.<br />
<br/>
<h5>GitHub</h5>
An Internet hosting service for software development and version control using Git.

The GitHub site provides social networking such as feeds, followers and a collaboration graph to display to display collaborative relationships within a network.

            </Essay>
            <Essay question= 'Q3. What is the difference between JQuery and React?'>
            <h5>JQuery and React</h5>

JQuery and React are both JavaScript libraries that produce similar results, but use different techniques. JQuery simplifies the process of developing web apps using JavaScript, while React allows the embedding of HTML into Java Script.<br />
<br />

<h5>DOM:</h5> JQuery directly interacts with the DOM; React uses virtual DOM, which improves speed and performance.<br />
<br />
<h5>App Building:</h5> JQuery more suitable for small applications, React for building large apps. JQuery is easier for building simple websites with animated navigation menus and triggering events with buttons. React specializes in building more complicated functions and a variety of views. React is better if the site requires interaction with the interface and receiving and processing data.<br />
<br />
<h5>NPM:</h5> React is loaded with NPM packages; JQuery has a lot fewer of them, probably because by the time NPM came out, some developers had already started shifting away from JQuery.

            </Essay>
            <Essay question= 'Q4. Explain the difference between Front-End and Back-End web development.'>
            <h5>Front-End Developer</h5>
Someone who creates websites and web applications. Front-End refers to how a web page looks, often referred to as the client-side. The main responsibility of the front-end developer is the user interface. The basic languages for front-end development are HTML, CSS and JavaScript.

Front-end development is a people-centric job, requiring strong communication and listening skills. When dealing with clients, front-end developers typically interface with a variety of people, some of them not tech-savvy. Front-end developers are often called upon to be graphic designers and can be viewed as an extension of the marketing team, with emphasis on areas like brand image, search engine optimization and website analytics. Front-end developers typically are responsible for responsive web design, so apps and sites look and work well across all user devices, including phones, tablets and desktop computers.<br />
<br />
<h5>Back-End Developer</h5>
Back-End refers to how a website works, often referred to as server-side. The main responsibility of the back-end developer is the website or app functionality. The basic languages for back-end development include PHP, Python, Java and Ruby.

Back-end developers build and maintain the mechanisms that process data and perform actions on websites. In addition to good communication skills, back-end developers need strong problem-solving skills to perform tasks like debugging and testing systems and architecture. They focus on databases, application programming interfaces, site architecture and servers.

            </Essay>
            <Essay question= 'Q5. Ways to link files and resources to apps.'>
            <h5>Hyperlinks</h5> Hyperlinks point to an entire document or a specific element within a document.
An inline link displays remote content without the need for embedding the content.
An anchor link is bound to a portion of a document, such as a heading or an image.<br />
<br />
<h5>Import</h5>
An import declaration can be used to import data, images or files to an app.

            </Essay>
            <Essay question= 'Q6. The differences between JPG, GIF, PNG and SVG images.'>

            <h5>JPG</h5> JPG files allow photo-realistic images to be shown on device screens. They are compressed (using lossy compression), can contain 16.8 million colors (24-bit color) and are small enough to be stored on devices like digital cameras with limited storage capacity, and on the cloud.

JPG is a universally recognized format that is compatible with most browsers, software and apps. Their biggest disadvantage is that lossy compression can result in posterization and digital artifacts that degrade the appearance of the image.<br />
<br />
<h5>GIF</h5>GIF files are a raster file format mainly for Internet use, due to their small size. They support 8-bit color (up to 256 colors per image). They are often used for Web graphics and logos and can be combined to create basic animations and memes.

GIF files feature lossless compression, so when their data gets compressed, it doesn’t result in any loss of quality (unlike JPGs.) They are best used for images that aren’t extremely detailed.<br />
<br />
<h5>PNG</h5>PNG files offer the 24-bit color variety of JPEGs, but with lossless compression like GIFs, so image quality doesn’t degrade when it is compressed. This format also supports transparent backgrounds. PNG is an open file format, so they can be viewed and edited in a large variety of programs without a license.

PNG file sizes are generally much larger than JPGs or GIFs, so they take longer to open and transfer, and use more space on your computer’s hard drive. Also, they don’t support CMYK color, so transferring them to print can be problematic.<br />
<br />
<h5>SVG</h5>SVG is a web-friendly vector file format. They can be significantly resized without losing any quality, which makes them ideal for logos and complex online graphics. SVGs store any text information as text that be recognized by search engines, which can improve a website’s search rankings.

SVGs are used for graphs, charts, navigation buttons and logos, including animation. Because they aren’t pixel-based, they aren’t as good as JPGs for photographs. As the newest of these file formats, they aren’t always supported by older web browsers.

            </Essay>

            <Essay question= 'Q7. Agile Development Roles.'>

            <h5>Product Owner</h5> Responsible for managing the product backlog to accomplish the product development team’s desired goals. Key tasks include identifying, describing, and prioritizing backlog items, as well as determining if a product backlog item has been satisfactorily delivered.<br />
<br />
<h5>Product Manager</h5>The person who identifies the customer need and the business objectives that a product will fulfill, articulates what success looks like for a product and motivates the team to turn that vision into a reality.<br />
<br />
<h5>Business Analyst</h5>Determines the requirements of a product and communicates them to stakeholders. Identifies and defines opportunities for improvements in processes and knows how to translate this understanding into IT solution requirements.<br />
<br />
<h5>Scrum Master</h5>Scrum is a framework for project management, designed for teams of 10 or fewer members who break their work into goals that are completed within time frames called sprints. Acts as a coach to the rest of the team. Helps the Product Owner plan the work of the team and helps the team organize, focus on outcome and manage blockers.<br />
<br />
<h5>UX Designer</h5> User experience designers define the experience a user goes through when interacting with its products.   Concerned with usability, usefulness, desirability, brand perception and overall performance of the product.<br />
<br />
<h5>Developer/Engineer</h5>In an Agile environment, developers write code, but have additional responsibilities, including management of individual tasks, working in a team environment, participating in testing and quality control, and interacting with other team members to clarify requirements.<br />
<br />
<h5>QA/SDET</h5>QA is typically involved in manual testing of apps and websites. SDETs - Software Development Engineers in Test - focus on automated test planning, framework creation and automated test support. SDETs often work with developers to understand the code itself, while QA typically is involved after the code has been written.<br />
<br />
<h5>DevOps</h5>Integrates and automates the work of software development and IT operations to improve and shorten the systems development life cycle. Development and operations teams are often merged to work across the entire application lifecycle. DevOps Engineers are IT generalists with knowledge of coding, infrastructure management, systems administration and DevOps toolchains, as well as strong interpersonal skills to create a more collaborative environment.<br />
            </Essay>
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;

