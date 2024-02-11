import { Layout } from "../../../components/ui/Header";
import { useDispatch, useSelector } from "react-redux";
import { PartialUser } from "../../types";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";
import { Link } from "react-router-dom";

const Home = () => {
  const user: PartialUser = useSelector(
    (state: { user: PartialUser }) => state.user
  );
  const dispatch = useDispatch();
  const [isDark] = useContext(DarkModeContext);
  return (
    <div
      className="w-full h-[100vh] bg-background-color"
      data-theme={isDark ? "dark" : "light"}
    >
      <Layout>
        <main className="bg-background-color text-primary-text-color">
          <div
            id="myCarousel"
            className="carousel slide mb-6"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-label="Slide 1"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className=""
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className=""
              ></button>
            </div>
            <div className="carousel-inner carousel-images">
              <div className="carousel-item active" data-pos="1">
                <svg
                  className="bd-placeholder-img"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  ></rect>
                </svg>
                <div className="container">
                  <div className="carousel-caption text-start">
                    <h1>Neo AI</h1>
                    <p className="opacity-75">
                      An open-source service for storing and using arbitrary ML
                      models.
                    </p>
                    <p>
                      <Link className="btn btn-lg btn-primary" to="/models">
                        Start using now
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-pos="2">
                <svg
                  className="bd-placeholder-img"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  ></rect>
                </svg>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Use specific models on medical images</h1>
                    <p>MRI images classification, segmentation and other.</p>
                    <p>
                      <a className="btn btn-lg btn-primary" href="#">
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-pos="3">
                <svg
                  className="bd-placeholder-img"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  ></rect>
                </svg>
                <div className="container">
                  <div className="carousel-caption text-end">
                    <h1>Custom models</h1>
                    <p>Add any other ML models to use.</p>
                    <p>
                      <a className="btn btn-lg btn-primary" href="#">
                        Add models
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="container marketing">
            <div className="row">
              <div className="col-lg-4">
                <svg
                  className="bd-placeholder-img rounded-circle circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--header-background-color)"
                  ></rect>
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="white"
                    fontSize="60"
                    fontFamily="Arial"
                  >
                    S
                  </text>
                </svg>
                <h2 className="fw-normal">Simplicity</h2>
                <p>
                  Simple and intuitive user interface provides the best usage
                  experience.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#">
                    View details »
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <svg
                  className="bd-placeholder-img rounded-circle circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--header-background-color)"
                  ></rect>
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="white"
                    fontSize="60"
                    fontFamily="Arial"
                  >
                    Q
                  </text>
                </svg>
                <h2 className="fw-normal">Quality</h2>
                <p>
                  We guarantee quality service for each user who has chosen our
                  application.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#">
                    View details »
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <svg
                  className="bd-placeholder-img rounded-circle circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--header-background-color)"
                  ></rect>
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="white"
                    fontSize="60"
                    fontFamily="Arial"
                  >
                    C
                  </text>
                </svg>
                <h2 className="fw-normal">Convenience</h2>
                <p>
                  Each model is easy to use and provides with convenient data
                  manipulation and result analysis.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#">
                    View details »
                  </a>
                </p>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">
                  First featurette heading. <span>It’ll blow your mind.</span>
                </h2>
                <p className="lead">
                  Some great placeholder content for the first featurette here.
                  Imagine some exciting prose here.
                </p>
              </div>
              <div className="col-md-5">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-bg)"
                  ></rect>
                  <text
                    x="50%"
                    y="50%"
                    fill="var(--bs-secondary-color)"
                    dy=".3em"
                  >
                    500x500
                  </text>
                </svg>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">
                  Oh yeah, it’s that good. <span>See for yourself.</span>
                </h2>
                <p className="lead">
                  Another featurette? Of course. More placeholder content here
                  to give you an idea of how this layout would work with some
                  actual real-world content in place.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-bg)"
                  ></rect>
                  <text
                    x="50%"
                    y="50%"
                    fill="var(--bs-secondary-color)"
                    dy=".3em"
                  >
                    500x500
                  </text>
                </svg>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">
                  And lastly, this one. <span>Checkmate.</span>
                </h2>
                <p className="lead">
                  And yes, this is the last block of representative placeholder
                  content. Again, not really intended to be actually read,
                  simply here to give you a better view of what this would look
                  like with some actual content. Your content.
                </p>
              </div>
              <div className="col-md-5">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-bg)"
                  ></rect>
                  <text
                    x="50%"
                    y="50%"
                    fill="var(--bs-secondary-color)"
                    dy=".3em"
                  >
                    500x500
                  </text>
                </svg>
              </div>
            </div>

            <hr className="featurette-divider" />
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
