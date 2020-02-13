import { useRouter } from 'next/router';

const styles = {
    tile: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "1.3rem",
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        width: 400,
        cursor: 'pointer'
    },
    imgContainer: {
        backgroundColor: "#3f51b5",
        padding: "1rem",
        marginRight: "1.2rem"
    }
};

export default function cmsTile({ img, name, page }) {
    const router = useRouter();
    const handleClick = () => {
        if (page) {
            router.push(page);
        }
    };
    return (
        <div style={styles.tile} onClick={handleClick}>
            <div style={styles.imgContainer}><img src={img} alt="contenful logo" height={70} width={80} /></div>
            <h2>{name}</h2>
        </div>
    );
}