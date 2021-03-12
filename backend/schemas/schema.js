// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Singleton imports
import homepage from "./singletons/homepage";
import stories from "./singletons/stories";
import features from "./singletons/features";
import pricing from "./singletons/pricing";

// Repeatable document imports
import category from "./documents/category";
import post from "./documents/post";
import author from "./documents/author";

// Object imports
import blockContent from "./objects/blockContent";
import seo from "./objects/seo";
import social from "./objects/seo";
import image from "./objects/image";
import header from "./objects/header";
import footer from "./objects/footer";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    homepage,
    stories,
    features,
    pricing,

    post,
    author,
    category,

    blockContent,
    seo,
    social,
    image,
    header,
    footer,
  ]),
});
