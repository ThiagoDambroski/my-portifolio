import React from 'react'

function SkillPopup({skill,isVisible}) {
    if(!isVisible) return null

    const skillInfos =  {
        react: ['Components','Props and Prop Drilling','Click Events',
        'Controlled Inputs','List and Keys','UseState Hook',
        'UseEffect','Fetch API Data','Fetch Errors',
        'Local Storage','React Routes','CRUD'],

        java: ['Java Fundamentals','OOP','Spring Boot',
        'Exception Handling','Threads','Java GUI'
        ,'JDBC','Unit Testing','Game Development'] ,

        spring: ['Spring Core','Spring Boot Configuration','Spring MVC',
        'RESTful APIs','Spring Data JPA','Spring Security',
        'Spring Testing','Error Handling'],
        
        html: ['HTML5 tags','HTML5 Structure','HTML5 Entity',
        'HTML5 Forms'],

        css: ['Bootstrap 5','CSS Selectors','CSS Box Model',
        'CSS Layouts','CSS Typography','CSS Positioning',
        'CSS Media Queries','CSS Flexbox','CSS Pseudo-classes'],

        javaScript:['Basic Syntax','DOM Manipulation','DOM Events',
        'Event Handling','Async Programming','JSON',
        'Arrays and Objects','Error Handling'],

        phyton: ['Phyton Fundamentals','OOP','Control Flow',
        'Pandas'],

        mysql: ['SQL Basics','Data Manipulation','Database Design'
        ,'DDL','DQL','DML','Data Joins'],

        git: ['Git Commands','Branching and Merging','Pull Requests',
        'Git Workflows']
    }


  return (
    <div className='popup'>
      
        <ul>
        <div className='skill-title'>{skill}</div>
        <br/>
          {skillInfos[skill].map((item) => 
            <li>{item}</li>
          )}
          
        </ul>
        
    </div>
  )
}

export default SkillPopup