import React from "react";

function MyValues() {
  return (
    <>
      <div className="my-values">
        <div className="container">
          <div className="row">
            <div className="line-name">My Values</div>
            <h2 className="line-heading">
              Passion <span>is everything.</span>
            </h2>
            <div className="side-para">
              <p>If you don't enjoy what you're doing - move. You are not a tree. Channel your energy into something you believe in. I'm fortunate to be inspired and surrounded by motivated people who enjoy what they do. We only have so much time on this earth to live - so why waste it?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="always-learning">
        <div className="container">
          <div className="row">
            <div className="inner-contain">
              <h2 className="line-heading">
                Always
                <br /> be learning.
              </h2>
              <div className="para">
                <p>Humans are constant works in progress that need to receive feedback in order to grow. I am always looking at ways to challenge and improve myself, which is why in my spare time I like to participate in design talks, read blogs, dabble in new projects and attend meetups.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyValues;
