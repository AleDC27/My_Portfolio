import links from "@/utils/links/nav";
import Link from "next/link";
import s from "./nav.module.css";
import logo from "../../../public/vertical.jpg";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav className={s.nav}>
          <ul className={s.navList}>
            <div>
          <Image src={logo} width={65} height={65} alt='yo' />
            </div>
            <div>
            {links.map((cur, idx) => (
            <Link key={idx} href={`/${cur.link}`} className={s.navLink}>
             {cur.label}
            </Link>
          ))}
            <select name="" id="" className={s.select}> 
            <option value="">ES</option>
            <option value="">EN</option>
          </select>
            </div>
        </ul>
      </nav>
    </>
  );
}
