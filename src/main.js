// Define the menu configuration
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
    subMenu: [],
  },
  {
    title: "Advanced Javascript",
    subMenu: [],
  },
  {
    title: "Data Structures",
    subMenu: [],
  },
];

// Function to generate the menu dynamically
function generateMenu() {
  const menuContainer = document.getElementById("menuContainer");

  menuConfig.forEach((topic) => {
    const topicElement = document.createElement("div");
    topicElement.innerHTML = `<h1>${topic.title}</h1>`;

    if (topic.subMenu.length > 0) {
      const subMenuElement = document.createElement("ol");
      topic.subMenu.forEach((subTopic) => {
        const listItem = document.createElement("li");
        listItem.textContent = subTopic;
        subMenuElement.appendChild(listItem);
      });
      topicElement.appendChild(subMenuElement);
    }

    menuContainer.appendChild(topicElement);
  });
}

// Call the function to generate the menu
generateMenu();

console.log("works");
