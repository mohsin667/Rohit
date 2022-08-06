import React from "react";

function Skills() {
  return (
    <div className="skills">
      <div className="container">
        <div className="row">
          <div className="skills-wrapper">
            <div className="left-panel">
              <h2>Skills</h2>
              <ul>
                <li>Design Thinking</li>
                <li>User Experience Design</li>
                <li>UI Design</li>
                <li>Research techniques and methods</li>
                <li>Wireframing & Prototyping</li>
                <li>Ideation and Design Strategy</li>
                <li>Design System</li>
                <li>Human psychology</li>
                <li>Branding</li>
                <li>Graphic Design Fashion Photography</li>
                <li>Film Making</li>
              </ul>
            </div>
            <h2 className="mobileHeading">Tools I used.</h2>
            <div className="tools-card-wrpper">
              <div className="first card-wrapper">
                <div className="tools-card">
                  <div className="card-heading">
                    <p>UI/UX DESIGN</p>
                  </div>
                  <div className="card-row">
                    <div className="card-item">Sketch</div>
                    <div className="card-item-perc">90%</div>
                    <div className="border-line">
                      <div style={{ width: "90%" }} className="percentage-line"></div>
                    </div>
                  </div>
                  <div className="card-row">
                    <div className="card-item">Figma</div>
                    <div className="card-item-perc">95%</div>
                    <div className="border-line">
                      <div style={{ width: "95%" }} className="percentage-line"></div>
                    </div>
                  </div>
                  <div className="card-row">
                    <div className="card-item">whimsical</div>
                    <div className="card-item-perc">80%</div>
                    <div className="border-line">
                      <div style={{ width: "80%" }} className="percentage-line"></div>
                    </div>
                  </div>
                  <div className="card-row">
                    <div className="card-item">Invision</div>
                    <div className="card-item-perc">60%</div>
                    <div className="border-line">
                      <div style={{ width: "60%" }} className="percentage-line"></div>
                    </div>
                  </div>
                </div>
                <div className="tools-card">
                  <div className="card-heading">
                    <p>GRAPHICS</p>
                  </div>
                  <div className="card-row">
                    <div className="card-item">Photoshop</div>
                    <div className="card-item-perc">90%</div>
                    <div className="border-line">
                      <div style={{ width: "90%" }} className="percentage-line"></div>
                    </div>
                  </div>
                  <div className="card-row">
                    <div className="card-item">Illustrator</div>
                    <div className="card-item-perc">95%</div>
                    <div className="border-line">
                      <div style={{ width: "95%" }} className="percentage-line"></div>
                    </div>
                  </div>
                  <div className="card-row">
                    <div className="card-item">Indesign</div>
                    <div className="card-item-perc">80%</div>
                    <div className="border-line">
                      <div style={{ width: "80%" }} className="percentage-line"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second card-wrapper">
                <h2>Tools I used.</h2>
                <div className="big-data">
                  <div className="define-design-wrapper">
                    <div className="tools-card">
                      <div className="card-heading">
                        <p>VIDEO EDITING</p>
                      </div>
                      <div className="card-row">
                        <div className="card-item">Premiere Pro</div>
                        <div className="card-item-perc">80%</div>
                        <div className="border-line">
                          <div style={{ width: "90%" }} className="percentage-line"></div>
                        </div>
                      </div>
                      <div className="card-row">
                        <div className="card-item">After Effects</div>
                        <div className="card-item-perc">50%</div>
                        <div className="border-line">
                          <div style={{ width: "95%" }} className="percentage-line"></div>
                        </div>
                      </div>
                    </div>
                    <div className="tools-card column">
                      <div className="card-heading">
                        <p>PROJECTS DONE</p>
                      </div>
                      <div className="card-row">
                        <div className="card-item-bold">
                          24<span>+</span>
                        </div>
                      </div>
                      <div className="card-row">
                        <div className="card-item">TOTAL EXPERIENCE</div>
                        <div className="card-item-bold">
                          03<span>yr</span>
                        </div>
                      </div>
                    </div>
                    <div className="full-width-card">
                      <h3>Define. Design. Deliver.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
