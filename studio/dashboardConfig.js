export default {
  widgets: [
    {
      name: "document-list",
      options: {
        title: "Last edited stories",
        order: "_updatedAt desc",
        types: ["story"],
      },
    },
    {
      name: "project-info",
    },
    {
      name: "project-users",
    },
  ],
};
