// pages/about.js

import Layout from "../components/MyLayout";

export default function About() {
  return (
    <Layout>
      <p>This is the about page</p>
    </Layout>
  );
}

// // Layout as a higher Order Component----------
// // pages/about.js

// import withLayout from "../components/MyLayout";

// const Page = () => <p>This is the about page</p>;

// export default withLayout(Page);

// Page content as a prop ------------

// import Layout from '../components/MyLayout.js';

// const aboutPageContent = <p>This is the about page</p>;

// export default function About() {
//   return <Layout content={aboutPageContent} />;
// }
