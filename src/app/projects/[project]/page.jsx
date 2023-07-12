'use client'
import Main from "@/components/main/Main";
import projects from "@/utils/projects/projects";
import s from './project.module.scss'
import { Icon } from "semantic-ui-react";
import ReactPlayer from "react-player";
import { useEffect,useState } from "react";

export default function page({params}) {
    const {project}=params;
    const myApp=projects.find(cur=>cur.name===project)
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
      }, [])
  return (
    <Main>
        <section className={s.section}>
        <h3>{myApp.name}</h3>
          <span>repositorio: </span>
          <a href={myApp.repository}>
            <Icon name="github" size="big"/>
          </a>
          <br/>
          <span>repositorio: </span>
          <a href={myApp.repository}>
            <Icon name="cloud" size="big"/>
          </a>
          <br/>
          <br/>
        <div>{isClient ? <ReactPlayer 
              url="`https://www.youtube.com/watch?v=0Iyth5gbZIU`"
              width="80%"
              height={200}
        />  : 'Prerendered'}</div>
        </section>

        <section className={s.section}>
          <h4>technologies</h4>
          <span>Front : {myApp.technologies.front+" "}</span><br/>
          <span>Back : {myApp.technologies.back+" "}</span><br/>
          <span> Database: {myApp.technologies.database+" "}</span>
          <h4>Summary</h4>
          <span>{myApp.summary}</span>
        </section>
    </Main>
  )
}
