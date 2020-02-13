import LayoutDefault from '@components/LayoutDefault';
import CmsTile from '@components/cmsTile';
import '../styles/main.scss';

const cmsList = [
  { img: '/images/strapi.svg', name: 'Strapi - Self hosted CMS', page: '/strapi' },
  { img: '/images/contentful.svg', name: 'Contentful', page: '/contentful' },
];

export default function Index() {
  return (
    <>
      <p>This app is simply a view for the following headless cms.</p>
      <p>The pages in the app are all static html pages that have been prebuilt and now served from a CDN.
        Just follwing the <b>JamStack principles</b></p>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
          {cmsList.map((cms, index) => <CmsTile key={index} {...cms} />)}
        </div>
    </>
  );
}

Index.Layout = LayoutDefault;