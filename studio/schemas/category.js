import React from "react";
import Emoji from "react-emoji-render";

export default {
  name: "category",
  type: "document",
  icon: () => <Emoji style={{ fontSize: 30 }} text="🗄" />,
  title: "Category",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        // add a button to generate slug from the title field
        source: "title",
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};
