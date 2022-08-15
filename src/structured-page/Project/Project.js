import "./Project.css";
const Project = () => {
  return (
    <div>
      <h1
        className="text-center"
        style={{
          marginTop: "10px",
          color: "seagreen",
          fontWeight: "bold",
          fontFamily: "Inter",
        }}
      >
        Reminisce and Explore !
      </h1>

      <div className=" maintext">
        Over the years the club has ever expanded the reaches of our knowledge
        and experience in the machine learning domain by being part of some
        amazing projects. Relive our past work and know more about what we are
        doing right now!!
      </div>
      <br />
      <div className=" maintext">
        Here’s a look at some of our past work. Click on a project to know more
        about it!
      </div>
      <br />
      <br />

      <div
        className="  text-center"
        // style={{ paddingLeft: "200px", paddingRight: "200px" }}
      >
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Cat</h5>
                <p>Brief description </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>P2</h5>
                <p>Desc</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>P3</h5>
                <p>Something</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
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
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        <br />
        <br />
        <div className=" maintext">
          Curious about what we’re doing these days? Find the current projects
          ongoing in the club now. Toggle to and click a project for more info !
        </div>
        <br />
        <div className="d-flex align-items-start">
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              AI On Edge
            </button>
            <br />
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              AI4AR
            </button>
            <br />
            <button
              className="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Chitti
            </button>
            <br />
            <button
              className="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              CleanTheLidar
            </button>
            <br />
            <button
              className="nav-link"
              id="v-pills-tabs-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-tabs"
              type="button"
              role="tab"
              aria-controls="v-pills-tabs"
              aria-selected="false"
            >
              Pingala
            </button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              img_src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-tabs"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
