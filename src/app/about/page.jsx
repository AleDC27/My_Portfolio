'use client'

import React from "react";
import Main from "@/components/main/Main";
import Image from "next/image";
import { about } from "@/utils/about/about";
import { Icon } from "semantic-ui-react";
import s from './about.module.scss'

export default function About() {
  const {front,back,softSkill,ingles,linkedin,github,summary}=about
  return (
    <>
      <Main className={s.main} >
{/*         <section>
        <h4>Contacts</h4>
          <span>Email:walterAlejandroGordillo@gmail.com</span>
          <br/>
          <a href={linkedin}>
            <Icon name="linkedin" size="big"/>
          </a>
          <a href={github}>
            <Icon name="github" size="big"/>
          </a>
          <br/>
        <Image src="/home.png" width={250} height={300} alt="yo" />
        </section>
        <section className={s.section}>
          <h4>Hard skill</h4>
          <span>Front:{front+" "}</span>.<br/>
          <span>Back:{back+" "}</span>.
          <h4>Soft Skill</h4>
          <span>{softSkill+" "}.</span>
          <h4>Ingles</h4>
          <span>{ingles}.</span>
          <h4>About</h4>
          <span>{summary}</span>
        </section> */}
      </Main>
    </>
  );
}
