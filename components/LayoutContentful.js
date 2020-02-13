import LayoutDefault from "@components/LayoutDefault";
import CmsTile from "@components/cmsTile";

function LayoutStrapi({ children }) {
    return (
        <LayoutDefault>
            <CmsTile {...{ img: '/images/contentful.svg', name: 'Contentful Client', page: '/contentful' }} />
            {children}
        </LayoutDefault>
    );
}

export default LayoutStrapi;