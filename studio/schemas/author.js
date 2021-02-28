import React from "react";
import Emoji from "react-emoji-render";

export default {
  name: "author",
  title: "Author",
  type: "document",
  icon: () => <Emoji style={{ fontSize: 30 }} text="✏️" />,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
