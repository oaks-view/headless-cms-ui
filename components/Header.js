import Link from 'next/link';
import { useRouter } from 'next/router';


const linkStyle = {
  marginRight: 15,
  paddingRight: 1,
  paddingLeft: 1
};

const selectedLinkStyle = {
  borderColor: "red",
  backgroundColor: "#B095C9",
  borderRadius: 3,
  textDecoration: "none",
  color: "#ffff",
  fontSize: "1.1em",
  minWidth: "4em",
  display: "inline-block",
  textAlign: "center",
  fontWeight: "600"
};

const PAGES = {
  HOME: '/',
  ABOUT: "/about",
  STRAPI: "/strapi"
};

const Header = () => {
  const router = useRouter();
  return (
    <div>
      <Link href="/">
        <a style={{...linkStyle, ...(router.pathname === PAGES.HOME && selectedLinkStyle || {})}}>Home</a>
      </Link>
      <Link href={PAGES.ABOUT}>
        <a style={{...linkStyle, ...(router.pathname === PAGES.ABOUT && selectedLinkStyle || {})}}>About</a>
      </Link>
      <Link href={PAGES.STRAPI}>
        <a style={{...linkStyle, ...(router.pathname === PAGES.STRAPI && selectedLinkStyle || {})}}>Strapi</a>
      </Link>
    </div>
  )
};

export default Header;