'use client'
import s from "./footer.module.scss";
import icons from "@/utils/footer/footer";
import { Icon } from "semantic-ui-react";

export default function Footer() {

  return (
    <>
      <footer className={s.footer}>
        <div>
          <h3>Contacts</h3>
            <a href="https://www.linkedin.com/in/alejandro-gordillo-487293258/">
            <Icon name="linkedin" size='big'/>
            </a>
            <a href="https://www.linkedin.com/in/alejandro-gordillo-487293258/">
            <Icon name="github" size='big'/>
            </a>
          <b>Email : WalterAlejandroGordillo@gmail.com</b>
        </div>
        <div>
          <span>
          This website was developed using SCSS, JavaScript, and primarily testing Next.js 13.
          </span>
        </div>
      </footer>
    </>
  );
}
