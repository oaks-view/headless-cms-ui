import LayoutDefault from '@components/LayoutDefault';

const MyApp = ({ Component, pageProps, router }) => {
  const Layout = Component.Layout || LayoutDefault;

  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
};

export default MyApp;