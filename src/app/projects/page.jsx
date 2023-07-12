import Main from "@/components/main/Main";
import projects from "@/utils/projects/projects";
import s from './projects.module.scss'
import Image from "next/image";
import Link from "next/link";
//import { Image } from "semantic-ui-react";

export default function Projects() {
  return (
    <Main>
      <div> 
      <h1 className={s.title}>Projects 🚀</h1>
      <div className={s.cards} >
      {projects.map((cur,idx)=>{
        return <Link href= {`projects/${cur.name}`}>
                  <article key={idx}>
          <h3>{cur.name}</h3>
          <Image
          src={cur.image}
          alt="image"
          width={270}
          height={190}
          />
        </article>
           </Link>
      })}
      </div>
      </div>
    </Main>
  );
}
