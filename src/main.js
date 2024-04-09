// Menu configuration template

const menuConfig = [
  {
    title: "HTML",
    subMenu: [
      "Introduction",
      "<h1> to </h6>",
      "<div>",
      "<p>",
      "<span>",
      "<img> and <a>",
      "other tags",
      "HTML Attributes",
      "Reference",
    ],
  },
  {
    title: "CSS",
    subMenu: [
      "Introduction",
      "Syntax",
      "Selectors",
      "How To",
      "Comments",
      "Colors",
      "Backgrounds",
      "Borders",
      "Margins",
      "Padding",
    ],
  },
  {
    title: "Javascript",
    subMenu: [
      "Introduction",
      "Statements",
      "Syntax",
      "Comments",
      "Variables",
      "Let",
      "Function",
      "Objects",
      "Events",
      "Numbers",
    ],
  },
  {
    title: "JS HTML DOM",
    subMenu: [
      "Introduction",
      "Methods",
      "Document",
      "Elements",
      "HTML",
      "Forms",
      "CSS",
      "Animations",
      "Events",
      "Navigation",
    ],
  },
  {
    title: "JS Browser BOM",
    subMenu: [
      "Window",
      "Screen",
      "Location",
      "History",
      "Navigator",
      "Popup Alert",
      "Timing",
    ],
  },
  {
    title: "Git Configuration & Build tools",
    subMenu: [
      "Introduction",
      "Get Started",
      "New Files",
      "Staging Environment",
      "Commit",
      "Branch",
      "Branch Merge",
    ],
  },
  {
    title: "Data Structures",
    subMenu: [
      "Introduction",
      "Arrays",
      "Linked Lists",
      "Stacks & Queues",
      "Hash Tables",
      "Trees",
      "Graphs",
    ],
  },
];

// Function to display content related to the selected submenu items

function displayContent(currentObject) {
  console.log(currentObject);
}
let activeMenu = null;
let activeItem = null;

// Function to generate the menu dynamically
function generateMenu() {
  const menuContainer = document.getElementById("menuContainer");
  menuConfig.forEach((topic, topicIndex) => {
    const topicElement = document.createElement("div");
    topicElement.id = `menu_${topicIndex}`;
    topicElement.innerHTML = `<h1>${topic.title}</h1>`;
    topicElement.onclick = () => {
      const subMenuItem = document.getElementById(`subMenu_${topicIndex}`);

      if (activeMenu && activeMenu.id === subMenuItem.id) {
        console.log(activeMenu);
        console.log(subMenuItem);
        console.log(activeMenu.id === subMenuItem.id);
        activeMenu.classList.toggle("menuOpen");
        console.log("condition one");
      } else if (activeMenu && activeMenu.id != subMenuItem.id) {
        activeMenu.classList.remove("menuOpen");
        subMenuItem.classList.add("menuOpen");
        activeMenu = subMenuItem;
        console.log("condition two");
      } else {
        subMenuItem.classList.add("menuOpen");
        activeMenu = subMenuItem;
        console.log("condition three");
      }
    };

    if (topic.subMenu.length > 0) {
      const subMenuElement = document.createElement("ol");
      subMenuElement.id = `subMenu_${topicIndex}`;
      topic.subMenu.forEach((subTopic, subIndex) => {
        const listItem = document.createElement("li");
        listItem.textContent = subTopic;
        listItem.id = `menu_${topicIndex}_submenuList_${subIndex}`;
        listItem.onclick = (event) => {
          event.stopPropagation();
          const subMenuListItem = document.getElementById(
            `menu_${topicIndex}_submenuList_${subIndex}`
          );

          if (activeItem) activeItem.classList.remove("active");
          subMenuListItem.classList.add("active");
          activeItem = subMenuListItem;
        };
        subMenuElement.appendChild(listItem);
      });
      topicElement.appendChild(subMenuElement);
    }

    menuContainer.appendChild(topicElement);
  });
}

// Call the function to generate the menu
generateMenu();
