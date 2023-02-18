import { useState } from "react";
import './App.css';
import { filter } from './data/filter'
import { card } from './data/card'
import { footerdata } from './data/footerdada'
import { FaFilter } from 'react-icons/fa';



function App() {
  const [list] = useState(filter)
  const [data] = useState(card)

  return (
    <div className="App">
      <div id="header">
        <div class="navbar">
          <div id="logo">EDYODA</div>
          <p id="logostoriestext">Stories</p>
        </div>
        <div id="dropdowntext" class="navbar">Explore Categories <span id="dropicon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" alt="" /></span></div>
      <div className="navbar right">
        <p>
        EdYoda is a learning and knowledge<br/>
        sharing platform for techies
        </p>
        <button>Go To Main Website</button>
      </div>
      </div>
      <div id="bodycontainer">
        <div id="categoriescontainer">
          <h1 id="heading">Trending Posts</h1>
          <div className="trendongPosts">
            <div className="leftpost" >
              <img src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg" alt=""/>
            </div>
            <div className="rightpost">
            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg" alt=""/>
            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg" alt=""/>

            </div>
          </div>
          <h2 id="heading1">Latest Posts</h2>
          <h5 id="filtertext"><FaFilter id="icon" />Filter by Category</h5>
          <div>
            {list.map((item, i) => (
              <p class="categories" id="activecategories" >{item.Name}</p>
            ))}
          </div>
        </div>
        <div id="item"><br />
          <div class="categorie">
            <div class="row">
              {data.map((item, i) => (
                <div class="col-3">
                  <img src={item.banner} class="image" alt="" />
                  <div class="authorcontainer">
                    <h3 class="title">{item.title}</h3>
                    <p class="date"><span class="author">{item.author}</span> &#124; {item.date}</p>
                    <p class="para">{item.description}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer><div>
          {footerdata.map((item, i) => (
           <div id="footerdata" > <span>{item.Name}
            <div id="footerContent">
              <p>{item.edyoda.names1}</p>
              <p>{item.edyoda.names2}</p>
              <p>{item.edyoda.names3}</p>
              <p>{item.edyoda.names4}</p>
              <p>{item.edyoda.names5}</p>
              <p>{item.edyoda.names6}</p>
              <p>{item.edyoda.names7}</p>
              <p>{item.edyoda.names8}</p>
              </div>
            </span>
            </div>
          ))}
        </div>Copyright &#169; Rahul Baviskar</footer>
      </div>
    </div>
  );
}

export default App;
