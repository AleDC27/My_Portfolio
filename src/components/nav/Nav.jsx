import links from "@/utils/links/nav";
import Link from "next/link";
import s from "./nav.module.scss";
import logo from "../../../public/vertical.jpg";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav className={s.navbar}>
          <Image src={logo} width={50} height={50} alt='yo' />
          <ul>
            {links.map((cur, idx) => (
            <Link key={idx} href={`/${cur.link}`} className={s.navLink}>
             {cur.label}
            </Link>
          ))}
            <select name="" id="" className={s.select}> 
            <option value="">ES</option>
            <option value="">EN</option>
          </select>
        </ul>
      </nav>
    </>
  );
}
