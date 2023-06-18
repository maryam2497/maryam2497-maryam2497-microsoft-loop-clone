import React, { useEffect, useState } from "react";
import "./intro.css";
import email from "../../Images/email.png";
import sales from "../../Images/sales-marketing.png";
import slides from "../../Images/slides.png";
import tasks from "../../Images/tasks.png";
import teams from "../../Images/teams.png";
import sidebar from "../../Images/sidebar.png";
import toolbar from "../../Images/toolbar.png";
import canvas from "../../Images/canvas.png";
import syncfirstimg from "../../Images/syncfirstimg.png";
import heartsmall from "../../Images/heart-small.png";
import heartbig from "../../Images/heart-big.png";
import syncCard1 from "../../Images/sync-card1.png";
import syncCard2 from "../../Images/sync-card2.png";
import syncCard3 from "../../Images/sync-card3.png";
import create from "../../Images/create.png";
import summarize from "../../Images/summarize.png";
import answer from "../../Images/answer.png";
import brainstorm from "../../Images/brainstorm.png";
export const Intro = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [transformRight, setTransformRight] = useState("translate(0px, 0px)");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      const calculatedTransform =
        currentPosition <= window.innerHeight
          ? `translate(${100 - currentPosition}px, ${currentPosition * 2}px)`
          : "translate(0px, 0px)";
      setTransformRight(calculatedTransform);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = 1 - scrollPosition / window.innerHeight; // Calculate opacity based on scroll position
  const transform =
    window.pageYOffset <= window.innerHeight
      ? `translate(${scrollPosition}px, ${scrollPosition * 2}px)`
      : "translate(0px, 0px)"; // Apply translation based on scroll position

  return (
    <div>
      <div className="main-container">
        <div className="intro-container">
          <div className="row">
            {/* column 1 */}
            <div className="col-3 intro-left d-flex flex-column">
              <img
                src={sales}
                alt="Sales Marketing"
                style={{
                  opacity,
                  transform,
                }}
                className="sale-image"
              />
              <div
                className="chat mb-5 d-flex"
                style={{
                  opacity,
                  transform,
                }}
              >
                <img src={teams} alt="Teams Avatar" className="me-2 team" />
                <span className="intro-chat chat-box">
                  Are we tracking this somewhere?
                </span>
              </div>
            </div>
            {/* column 2 */}
            <div className="intro-mid col-6 align-items-center pt-md-5 pt-2">
              <p className="microsoft-loop-intro-heading mt-2 mb-2 mt-md-5 mb-md-5">
                Microsoft Loop
              </p>
              <div>
                <p className="think-plan">Think, plan and create together</p>
              </div>
              <p className="meet-heading mt-2 mb-2 mt-md-5 mb-md-5">
                Meet Loop. Designed for co-creation, it brings your team and
                ideas together in one place
              </p>
              <button className="intro-getstarted-button mb-5" href="">
                Get started — It's free
              </button>
            </div>
            {/* column 3 */}
            <div className="col-3 intro-right">
              <img
                src={email}
                alt="Email"
                className="email-image"
                style={{
                  opacity,
                  transform: transformRight,
                }}
              />
              <img
                src={tasks}
                alt="Tasks"
                className="tasks-image"
                style={{ transform: transformRight }}
              />
              <img
                src={slides}
                alt="Tasks"
                className="slides-image"
                style={{ transform: transformRight }}
              />
            </div>
          </div>
        </div>

        <div className="container screen-container hide pb-md-5 pb-2">
          <div className="d-flex pb-md-5 pb-2">
            <img src={sidebar} className="img-fluid" alt="" />

            <div className="">
              <img src={toolbar} className="toolbarimg img-fluid" alt="" />
              <img src={canvas} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="heart-container">
            <img src={heartbig} className="img-fluid mt-5" alt="" />
            <img src={heartsmall} className="img-fluid mb-5" alt="" />
          </div>
        </div>
      </div>

      {/* ----------- */}
      <div className="pt-md-3 put-1 ">
        <div className="container col-md-8 mt-md-5 mt-2 mx-auto sync-container-bg ">
          <h1>Stay in sync without switching apps</h1>
          <p className="mt-3 mt-md-4 mb-4">
            Get more done right where you are, with Loop components that sync
            across apps in real time
          </p>
          <img src={syncfirstimg} className="img-fluid mt-5" alt="" />
        </div>
        <div className="d-flex custom-mt ">
          <div className="col-lg-5 col-md-10 make-row">
            <h1 className="custom-mt heading-font ">Get started,it's a breeze</h1>
            <p className="subheading-font">
              Quickly kick off projects with intelligent suggestions, page
              templates, and an insert menu at your fingertips.
            </p>
          </div>
          <div className="col-lg-6 col-md-10 ">
            <img src={syncCard1} className="img-fluid " alt="" />
          </div>
        </div>
        <div className="d-flex custom-mt  ">
          <div className="col-lg-6 col-md-15 order-2 order-lg-1 order-md-2">
            <img src={syncCard2} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-5 col-md-10 custom-mt order-1 order-lg-2 order-md-1">
            <h1>Add a new AI teammate</h1>
            <p className=" mt-md-4 mb-3">
              Co-author with AI as a group, either in a conversational back and
              forth or by directly editing the generated content.
            </p>
            <div class="row ">
              <div class="col-2 mt-2 mt-md-5 white-box1 rt-m8 ms-3 ">
              <img src={create} className="img-fluid col-lg-3 col-md-3 mt-1 mt-md-4" alt="" />
              <h6 className="mt-2 white-box-txt">Create</h6>
              </div>
              <div class="col-2 mt-2 mt-md-5 white-box1 rt-8 ">
              <img src={brainstorm} className="img-fluid col-md-3 mt-1 mt-md-4" alt="" />
              <h6 className="mt-2 white-box-txt">Brainstorm</h6>
              </div>
              <div class="col-2 mt-2 mt-md-5 white-box1  rt-m8">
              <img src={summarize} className="img-fluid col-md-3 mt-1 mt-md-4" alt="" />
              <h6 className="mt-2 white-box-txt">Summarize</h6>
              </div>
              <div class="col-2 mt-2 mt-md-5 white-box1 rt-8">
              <img src={answer} className="img-fluid col-md-3 mt-1 mt-md-4" alt="" />
              <h6 className="mt-2 white-box-txt">Answer</h6>
              </div>
            </div>

            <div></div>
          </div>
        </div>
        <div className="container col-md-8  mx-auto custom-mt">
          <h1>Make progress, together or apart</h1>
          <p className=" mt-md-4 mb-3">
            Prioritize, communicate, and make decisions like you're all in the
            same room.
          </p>
          <img src={syncCard3} className="img-fluid col-md-8 mt-5 " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
