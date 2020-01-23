import Layout from "../components/MyLayout";

export default function Index() {
  return (
    <Layout>
      <p>Hello Next.js</p>
    </Layout>
  );
}

// Layout as a higher Order Component----------
// pages/index.js

// import withLayout from "../components/MyLayout";

// const Page = () => <p>Hello Next.js</p>;

// export default withLayout(Page);

// Page content as a prop-------------

// import Layout from '../components/MyLayout.js';

// const indexPageContent = <p>Hello Next.js</p>;

// export default function Index() {
//   return <Layout content={indexPageContent} />;
// }
