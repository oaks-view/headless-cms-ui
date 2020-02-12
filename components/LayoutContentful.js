import LayoutDefault from "@components/LayoutDefault";

function LayoutStrapi({ children }) {
    return (
        <LayoutDefault>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center",  marginTop: "1.3rem" }}>
                <div style={{ backgroundColor: "#3f51b5", padding: "1rem", marginRight: "1.2rem" }}>
                    <img src="/images/contentful.svg" alt="contenful logo" height={40} width={40} />
                </div>
                <h2>Contentful Client</h2>
            </div>
            {children}
        </LayoutDefault>
    );
}

export default LayoutStrapi;