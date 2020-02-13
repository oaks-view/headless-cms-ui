import LayoutDefault from "@components/LayoutDefault";
import CmsTile from "@components/cmsTile";

function LayoutStrapi({ children }) {
    return (
        <LayoutDefault>
            <CmsTile {...{ img: '/images/strapi.svg', name: 'Strapi - Client', page: '/strapi' }} />
            {children}
        </LayoutDefault>
    );
}

export default LayoutStrapi;