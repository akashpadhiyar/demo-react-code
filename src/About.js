import React from 'react';
import Menu from './Menu';
function About() {
    return ( <>
   
   <>
  
  <Menu/>
  <div id="header-wrapper">
    <div id="header">
      <div id="logo">
        <h1>
          <a href="#">StampALike</a>
        </h1>
        <p>
          Design by{" "}
          <a href="http://templated.co" rel="nofollow">
            TEMPLATED
          </a>
        </p>
      </div>
    </div>
  </div>
  <div id="wrapper">
    {/* end #header */}
    <div id="page-bgtop" />
    <div id="page">
      <div>
        <img src="images/pics01.jpg" width={920} height={300} alt="" />
      </div>
      <div id="content">
        <div className="post">
          <h2 className="title">
            <a href="#">Welcome to StampALike </a>
          </h2>
          <p className="meta">
            <span className="date">June 04, 2012</span>
            <span className="posted">
              Posted by <a href="#">Someone</a>
            </span>
          </p>
          <div style={{ clear: "both" }}>&nbsp;</div>
          <div className="entry">
            <p>
              This is <strong>StampALike </strong>, a free, fully
              standards-compliant CSS template designed by{" "}
              <a href="http://templated.co" rel="nofollow">
                TEMPLATED
              </a>
              . The photo used in this template is from{" "}
              <a href="http://fotogrph.com/">Fotogrph</a>. This free template is
              released under the{" "}
              <a href="http://creativecommons.org/licenses/by/3/">
                Creative Commons Attribution
              </a>{" "}
              license, so you’re pretty much free to do whatever you want with
              it (even use it commercially) provided you give us credit for it.
              Have fun :)
            </p>
            <p>
              Sed lacus. Donec lectus. Nullam pretium nibh ut turpis. Nam
              bibendum. In nulla tortor, elementum ipsum. Proin imperdiet est.
              Phasellus dapibus semper urna. Pellentesque ornare, orci in felis.
              Donec ut ante. In id eros. Suspendisse lacus turpis, cursus
              egestas at sem.
            </p>
            <p className="links">
              <a href="#">Read More</a>
              &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Comments</a>
            </p>
          </div>
        </div>
        <div className="post">
          <h2 className="title">
            <a href="#">Lorem ipsum sed aliquam</a>
          </h2>
          <p className="meta">
            <span className="date">June 01, 2012</span>
            <span className="posted">
              Posted by <a href="#">Someone</a>
            </span>
          </p>
          <div style={{ clear: "both" }}>&nbsp;</div>
          <div className="entry">
            <p>
              Sed lacus. Donec lectus. Nullam pretium nibh ut turpis. Nam
              bibendum. In nulla tortor, elementum vel, tempor at, varius non,
              purus. Mauris vitae nisl nec metus placerat consectetuer. Donec
              ipsum. Proin imperdiet est. Phasellus{" "}
              <a href="#">dapibus semper urna</a>. Pellentesque ornare, orci in
              consectetuer hendrerit, urna elit eleifend nunc, ut consectetuer
              nisl felis ac diam. Etiam non felis. Donec ut ante. In id eros.
              Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim,
              molestie in, rhoncus ut, lobortis a, est. Suspendisse lacus
              turpis, cursus egestas at sem. Sed lacus. Donec lectus.{" "}
            </p>
            <p className="links">
              <a href="#">Read More</a>
              &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Comments</a>
            </p>
          </div>
        </div>
        <div style={{ clear: "both" }}>&nbsp;</div>
      </div>
      {/* end #content */}
      <div id="sidebar">
        <ul>
          <li>
            <h2>SearCh Here:</h2>
            <div id="search">
              <form method="get" action="#">
                <div>
                  <input
                    type="text"
                    name="s"
                    id="search-text"
                    defaultValue=""
                  />
                  <input type="submit" id="search-submit" defaultValue="" />
                </div>
              </form>
            </div>
            <div style={{ clear: "both" }}>&nbsp;</div>
          </li>
          <li>
            <h2>Aliquam tempus</h2>
            <p>
              Mauris vitae nisl nec metus placerat perdiet est. Phasellus
              dapibus semper consectetuer hendrerit.
            </p>
          </li>
          <li>
            <h2>Categories</h2>
            <ul>
              <li>
                <a href="#">Aliquam libero</a>
              </li>
              <li>
                <a href="#">Consectetuer adipiscing elit</a>
              </li>
              <li>
                <a href="#">Metus aliquam pellentesque</a>
              </li>
              <li>
                <a href="#">Suspendisse iaculis mauris</a>
              </li>
              <li>
                <a href="#">Urnanet non molestie semper</a>
              </li>
              <li>
                <a href="#">Proin gravida orci porttitor</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Archives</h2>
            <ul>
              <li>
                <a href="#">Aliquam libero</a>
              </li>
              <li>
                <a href="#">Consectetuer adipiscing elit</a>
              </li>
              <li>
                <a href="#">Metus aliquam pellentesque</a>
              </li>
              <li>
                <a href="#">Suspendisse iaculis mauris</a>
              </li>
              <li>
                <a href="#">Urnanet non molestie semper</a>
              </li>
              <li>
                <a href="#">Proin gravida orci porttitor</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* end #sidebar */}
      <div style={{ clear: "both" }}>&nbsp;</div>
    </div>
    <div id="page-bgbtm" />
    {/* end #page */}
  </div>
  <div id="footer">
    <p>
      2012. Untitled. All rights reserved. Design by{" "}
      <a href="http://templated.co" rel="nofollow">
        TEMPLATED
      </a>
      . Photos by <a href="http://fotogrph.com/">fotogrph</a>.
    </p>
  </div>
</>

    </> );
}

export default About;