import * as React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {/* <p>Welcome to my blog!</p> */}
      <ul>
        {
            data.allFile.nodes.map(node => (
                <li key={node.name}>
                    {node.name}
                </li>
            ))
        }
      </ul>
    </Layout>
  );
};

export const nameQuery = graphql`
  query {
      allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
        nodes {
            name
        }
      }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage;