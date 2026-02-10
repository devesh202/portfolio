import React from 'react'
import githubData from '../../public/assets/github.json'
import MacWindow from '../components/MacWindow'
import "./Github.scss"

const GitCard =({data={id:1,image:"",title:"",description: "",tags:[],repoLink :"",demolink :""} }) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1> 
      <p className='description'>{data.description}</p>

      <div className="tags">
        {data.tags.map((tag) => {return <p className='tag'>{tag}</p>})}
      </div>

      <div className="urls">
        <a href={data.repoLink}>Repository</a>
        {data.demolink && <a href={data.demolink}>Demo Link</a>}
      </div>
    </div>
  )
}

const Github = () => {
  return (
    <MacWindow>
    <div className='cards'>
      {githubData.map((data) => {return <GitCard data={data} key={data.id} />})}
    </div>
    </MacWindow>
  )
}

export default Github