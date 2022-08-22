import React from 'react'
import { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import "./index.css"

const URL =
  'https://res.cloudinary.com/t19887348/raw/upload/v1641369037/n3gevh2y53mmn9jc7kqo.json'

const Tabs = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(0)
  const fetchJobs = async() => {
    const response = await fetch(URL)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  },[])

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const { title, dates, duties, company } = jobs[active]

  return (
    <section>
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              className={`job-btn ${index === active && 'active-btn'}`}
              key={job.id}
              onClick={() => setActive(index)}
            >
              {job.company}
            </button>
          ))}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => (
            <div className="job-desc" key={index}>
              <FaAngleDoubleRight />
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  )
}
export default Tabs