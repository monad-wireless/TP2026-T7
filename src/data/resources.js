// Edit external destinations here. A null URL displays a pending state, never a fake link.
module.exports = [
  {
    id: "github",
    label: "Source code",
    description: "Project repository and development history.",
    url: null,
    pending: "Repository link coming soon",
    icon: "⌘",
  },
  {
    id: "board",
    label: "Project board",
    description: "Planned work, tasks, and milestones.",
    url: null,
    pending: "Project board coming soon",
    icon: "▦",
  },
  {
    id: "faculty",
    label: "FIIT STU",
    description:
      "Our faculty at Slovak University of Technology in Bratislava.",
    url: "https://www.fiit.stuba.sk/",
    icon: "↗",
  },
];
