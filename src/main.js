const menuContent = 

[
   {
   title : 'HTML',   
   subMenu : "Introduction",
   contentlink : 'https://www.w3schools.com/html/',
   text : "Introduction to HTML",
   para : "HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on. ",
   },
   {
      title : 'HTML',   
      subMenu : "<h1> to </h6>",
      contentlink : 'https://www.w3schools.com/tags/tag_hn.asp',
      text : "Introduction to tags",
      para : "In HTML, a tag is used for creating an element. The name of an HTML element is the name that appears at the beginning of the element's start tag and at the end of the element's end tag (if the element has an end tag). For example, the p in the <p> start tag and </p> end tag is the name of the HTML paragraph element. Note that an element name in an end tag is preceded by a slash character: </p>, and that for void elements, the end tag is neither required nor allowed.",
   },
   {
      title : 'CSS',   
      subMenu : "Introduction",
      contentlink : 'https://www.w3schools.com/css/css_intro.asp',
      text : "Introduction to CSS",
      para : "Like HTML, CSS is not a programming language. It's not a markup language either. CSS is a style sheet language. CSS is what you use to selectively style HTML elements. ",
   },
   {
      title : 'CSS',   
      subMenu : "Syntax",
      contentlink : 'https://www.w3schools.com/css/css_syntax.asp',
      text : "Syntax",
      para : "A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon. Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.",
   },
   {
      title : 'JAVASCRIPT',   
      subMenu : "Introduction",
      contentlink : 'https://www.w3schools.com/js/js_intro.asp',
      text : "Introduction to JAVASCRIPT",
      para : "JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JavaScript such as Node.js, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers).",
   },
   {
      title : 'JAVASCRIPT',   
      subMenu : "Where To",
      contentlink : 'https://www.w3schools.com/js/js_whereto.asp',
      text : "Where To",
      para : "In HTML, JavaScript code is inserted between <script> and </script> tags. A JavaScript function is a block of JavaScript code, that can be executed when called for. For example, a function can be called when an event occurs, like when the user clicks a button.",
   },
   {
      title : 'GIT',   
      subMenu : "Introduction",
      contentlink : 'https://www.w3schools.com/git/git_intro.asp?remote=github',
      text : "Introduction to GIT",
      para : "Git (/ɡɪt/)[8] is a distributed version control system[9] that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing source code during software development.",
   },
   {
      title : 'GIT',   
      subMenu : "Get Started",
      contentlink : 'https://www.w3schools.com/git/git_getstarted.asp?remote=github',
      text : "Getting started with GIT",
      para : "You can download Git for free from the following website: https://www.git-scm.com/",
   },
];

const menuConfig = 

[
   {
   title : 'HTML',
   subMenu : 
   [{ subMenuTitle : "Introduction", 
   text : "Introduction to HTML",
   para: `What is HTML?
         <li>HTML stands for Hyper Text Markup Language</li>
         <li>HTML is the standard markup language for creating Web pages</li>
         <li>HTML describes the structure of a Web page</li>
         <li>HTML consists of a series of elements</li>
         <li>HTML elements tell the browser how to display the content</li>
         <li>HTML elements label pieces of content such as 'this is a heading', 'this is a paragraph', 'this is a link', etc. </li>
         <a target = '_blank' href = 'https://www.w3schools.com/html/'>Link</a>`, 
   //contentlink : 'https://www.w3schools.com/html/', 
   }, 
   {
      subMenuTitle : "HTML Headings",
      //contentlink : 'https://www.w3schools.com/tags/tag_hn.asp',
      text : "Introduction to Headings",
      para : `In HTML, a tag is used for creating an element. The name of an HTML element is the name that appears at the beginning of the element's start tag and at the end of the element's end tag (if the element has an end tag). For example, the p in the paragraph start and end tag is the name of the HTML paragraph element. Note that an element name in an end tag is preceded by a slash character, and that for void elements, the end tag is neither required nor allowed. <a target = '_blank' href = 'https://www.w3schools.com/tags/tag_hn.asp'>Link</a>`,
   
   },
  
{
   subMenuTitle : " HTML Attributes",
   //contentlink : 'https://www.w3schools.com/tags/tag_hn.asp',
   text : " HTML Attributes",
   para : ` HTML Attributes
   All HTML elements can have attributes
   Attributes provide additional information about elements
   Attributes are always specified in the start tag
   Attributes usually come in name/value pairs like: name="value"
   <a target = '_blank' href = 'https://www.w3schools.com/html/html_attributes.asp'>Link</a>`,

},
{
   subMenuTitle : " HTML Links",
   //contentlink : 'https://www.w3schools.com/tags/tag_hn.asp',
   text : " HTML Attributes",
   para : ` HTML links are hyperlinks. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand. Note: A link does not have to be text. A link can be an image or any other HTML element! The HTML <a> tag defines a hyperlink. The most important attribute of the "a" element is the href attribute, which indicates the link's destination. The link text is the part that will be visible to the reader. Clicking on the link text, will send the reader to the specified URL address.
   <a target = '_blank' href = 'https://www.w3schools.com/html/html_links.asp'>Link</a>`,

},
   ],
   },
   {
   title : 'CSS',
   subMenu : 
   [{ 
         subMenuTitle : "Introduction",
         // contentlink : 'https://www.w3schools.com/css/css_intro.asp',
         text : "Introduction to CSS",
         para : `Like HTML, CSS is not a programming language. It's not a markup language either. CSS is a style sheet language. CSS is what you use to selectively style HTML elements.  <a target = '_blank' href = 'https://www.w3schools.com/css/css_intro.asp'>Link</a>`,
      },
      {
         subMenuTitle : "Syntax",
         //contentlink : 'https://www.w3schools.com/css/css_syntax.asp',
         text : "Syntax",
         para : `A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon. Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces. <a href='https://www.w3schools.com/css/css_syntax.asp'>Link</a>`,
      
      },
   ],
   },
   
   {
      title : 'JAVASCRIPT',
      subMenu : 
      [ {
         subMenuTitle : "Introduction",
         //contentlink : 'https://www.w3schools.com/js/js_intro.asp',
         text : "Introduction to JAVASCRIPT",
         para : `JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JavaScript such as Node.js, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers). <a href='https://www.w3schools.com/js/js_intro.asp'>Link</a>`,
      
      },
      {
      subMenuTitle : "Where To",
      //contentlink : 'https://www.w3schools.com/js/js_whereto.asp',
      text : "Where To",
      para : `In HTML, JavaScript code is inserted between script tags. A JavaScript function is a block of JavaScript code, that can be executed when called for. For example, a function can be called when an event occurs, like when the user clicks a button. <a href='https://www.w3schools.com/js/js_whereto.asp'>Link</a>`,
   
      },
      ],
   },
   {
      title : 'GIT',
      subMenu : 
      [ {
         subMenuTitle : "Introduction",
         //contentlink : 'https://www.w3schools.com/git/git_intro.asp?remote=github',
         text : "Introduction to GIT",
         para : `Git (/ɡɪt/)[8] is a distributed version control system[9] that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing source code during software development. <a href= 'https://www.w3schools.com/git/git_intro.asp?remote=github'>Link</a>`,
      
      },
      {
         subMenuTitle : "Get Started",
         //contentlink : 'https://www.w3schools.com/git/git_getstarted.asp?remote=github',
         text : "Getting started with GIT",
         para : `You can download Git for free from the following website: https://www.git-scm.com/ 
         <a href= 'https://www.w3schools.com/git/git_getstarted.asp?remote=github'>Link</a>`,
      
      }
   ],
   },
];

 let activeMenu = null;
 let activeItem = null;
 

function display()
{
   const menu = document.getElementById('sidebar-id');
   menuConfig.map((menuItem, index) =>
   {
      const node = document.createElement('div');
      node.id = `node_${index}`;
      node.innerHTML = `<h3>${menuItem.title}</h3>`;
   
      node.onclick = () => {
         const subMenuItem = document.getElementById(`subMenu_${index}`);
         if(activeMenu && activeMenu.id === subMenuItem.id)
         {
            activeMenu.classList.toggle("menuOpen");
         }
         else if (activeMenu && activeMenu.id != subMenuItem.id)
         {
            activeMenu.classList.remove("menuOpen");
            subMenuItem.classList.add("menuOpen");
            activeMenu = subMenuItem;
         }
         else
         {
            subMenuItem.classList.add("menuOpen");
            activeMenu = subMenuItem;
         }
      };

      if (menuItem.subMenu.length > 0) 
      {
         const subMenuElement = document.createElement("ol");
         subMenuElement.id = `subMenu_${index}`;
         menuItem.subMenu.map((subTopic, subIndex) => 
         {
           const listItem = document.createElement("li");
           listItem.textContent = subTopic.subMenuTitle;
           listItem.id = `menu_${index}_submenuList_${subIndex}`;
           listItem.onclick = (event) => {
             event.stopPropagation();
             const subMenuListItem = document.getElementById(
               `menu_${index}_submenuList_${subIndex}`
             );
             console.log("subTopic is ", subTopic);
   
             if (activeItem) { activeItem.classList.remove("active");
             subMenuListItem.classList.add("active");
             activeItem = subMenuListItem;}

               console.log("title", menuItem.title);
               

               const content = document.getElementById('content');
               // inside submenu create array of object , submenu title and content. 
               // menuContent.map((contentlink, linkIndex) =>
               // {
                  
                  // const contentdiv = document.createElement('li');
                  // const contentnode = document.createElement('a');
                  //  if (title.title === contentlink.title && subTopic === contentlink.subMenu) 
                  // {
                  content.innerHTML = `${subTopic.para}`;
                  // contentdiv.textContent = `${subTopic.para}`;
                  // // contentnode.id = `contentnode_${linkIndex}`;
                  // contentnode.href = `${subTopic.contentlink}`;
                  // contentnode.innerText = `\n \n ${subTopic.text}`;
                  // contentnode.target = "_blank";
                  // console.log("content is", subTopic.contentlink);
                  // console.log("content id is", contentnode.id);
                  // content.appendChild(contentdiv);
                  // contentdiv.appendChild(contentnode);
      
                  // };
                 
               // });
            };
            subMenuElement.appendChild(listItem);
         });
         node.appendChild(subMenuElement);
       }
     
      menu.appendChild(node);
   });
   
}
display();

