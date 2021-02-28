import S from "@sanity/desk-tool/structure-builder";
import React from "react";
import Emoji from "react-emoji-render";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Landing Page")
        .icon(() => <Emoji style={{ fontSize: 30 }} text="🏠" />)
        .child(S.editor().title("Landing Page Editor").schemaType("landingPage").documentId("landingPage")),
      S.listItem()
        .title("Stories Page")
        .icon(() => <Emoji style={{ fontSize: 30 }} text="📖" />)
        .child(S.editor().title("Story Page Editor").schemaType("storiesPage").documentId("storiesPage")),
      S.listItem()
        .title("Features Page")
        .icon(() => <Emoji style={{ fontSize: 30 }} text="✨" />)
        .child(S.editor().title("Features Page Editor").schemaType("featuresPage").documentId("featuresPage")),
      S.listItem()
        .title("Pricing Page")
        .icon(() => <Emoji style={{ fontSize: 30 }} text="💷" />)
        .child(S.editor().title("Pricing Page Editor").schemaType("pricingPage").documentId("pricingPage")),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) => !["landingPage", "storiesPage", "featuresPage", "pricingPage", "settings"].includes(item.getId())
      ),

      S.divider(),

      S.listItem()
        .title("Settings")
        .icon(() => <Emoji style={{ fontSize: 30 }} text="⚙️" />)
        .child(S.editor().title("Settings Editor").schemaType("settings").documentId("settings")),
    ]);
