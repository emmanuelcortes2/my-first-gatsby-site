import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  console.log("🚀 ~ file: index.js:7 ~ BlogPage ~ data:", data.allMdx.nodes[0].frontmatter)
  
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
