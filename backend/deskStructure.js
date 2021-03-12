import S from "@sanity/desk-tool/structure-builder";
import {} from "react-icons";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .icon()
        .child(
          S.list("page")
            .title("Page")
            .items([
              S.listItem()
                .title("Home Page")
                .icon()
                .child(
                  S.document().schemaType("homepage").documentId("homepage")
                ),

              S.listItem()
                .title("Stories")
                .icon()
                .child(
                  S.document().schemaType("stories").documentId("stories")
                ),

              S.listItem()
                .title("Features")
                .icon()
                .child(
                  S.document().schemaType("features").documentId("features")
                ),

              S.listItem()
                .title("Pricing")
                .icon()
                .child(
                  S.document().schemaType("pricing").documentId("pricing")
                ),
            ])
        ),

      S.divider(),

      S.listItem()
        .title("Stories")
        .icon()
        .child(S.documentTypeListItem("story").title("Story").icon()),

      S.listItem()
        .title("Authors")
        .icon()
        .child(S.documentTypeListItem("author").title("author").icon()),

      S.divider(),

      S.listItem()
        .title("Settings")
        .icon()
        .child(S.document().schemaType("settings").documentId("settings")),
    ]);
