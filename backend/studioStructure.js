import S from "@sanity/desk-tool/structure-builder";

export default () => S.list().title("content").items(
    S.documentTypeListItem();
);
