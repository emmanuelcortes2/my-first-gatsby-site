import * as React from "react"
import Layout from "./layout"
const IndexPage = ( ) => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm building a site with Gatsby</p>
    </Layout>
  )
}

export const Head = () => <title>Home</title>

export default IndexPage