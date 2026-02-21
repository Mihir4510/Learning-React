import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobs = [
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.RbDmmt0F982-5AzJmXvXtAHaHa?pid=Api&P=0&h=180",
      company: "Amazon",
      datePosted: "3 days ago",
      role: "Backend Developer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png",
      company: "Google",
      datePosted: "5 days ago",
      role: "Frontend Engineer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://i.pinimg.com/originals/ce/b3/ed/ceb3ed2c5164d73a601536f934711983.png",
      company: "Meta",
      datePosted: "1 week ago",
      role: "React Developer",
      tag1: "Part-Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://applescoop.org/image/story/76316045115487008-10311484136811093.jpeg",
      company: "Apple",
      datePosted: "10 weeks ago",
      role: "UI Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?pid=Api&P=0&h=180",
      company: "Netflix",
      datePosted: "2 days ago",
      role: "Full Stack Developer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/006/892/682/original/microsoft-logo-icon-editorial-free-vector.jpg",
      company: "Microsoft",
      datePosted: "4 days ago",
      role: "Cloud Engineer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://tse4.mm.bing.net/th/id/OIP.VXuyrZvkfJCwb6keHCQCbwHaF7?pid=Api&P=0&h=180",
      company: "Tesla",
      datePosted: "6 days ago",
      role: "Software Engineer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Bangalore, India"
    }
  ];

  return (
    <div className='parent'>
      {jobs.map((job, idx) => {
        return (
          <div key={idx}>
            <Card
              logo={job.brandLogo}
              company={job.company}
              date={job.datePosted}
              role={job.role}
              tag1={job.tag1}
              tag2={job.tag2}
              pay={job.pay}
              location={job.location}
            />
          </div>
        )
      })}
    </div>
  )
}

export default App
