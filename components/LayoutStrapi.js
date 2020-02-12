import LayoutDefault from "@components/LayoutDefault";

function LayoutStrapi({ children }) {
    return (
        <LayoutDefault>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: "1.3rem" }}>
                <div style={{backgroundColor: "#3f51b5", padding: "1rem", marginRight: "1.2rem" }}><img src="/images/strapi.svg" alt="contenful logo" height={70} width={80} /></div>
                <h2>Strapi's client</h2>
            </div>
            {children}
        </LayoutDefault>
    );
}

export default LayoutStrapi;