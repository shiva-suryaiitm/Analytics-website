import "./Resource.css"
const Resource = () => {
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
        Resources
      </h1>
      <div className=" maintext">
        Want to get started on your own journey in AI/ML? Learn more and improve
        your skills? If so, you’re in the right place. Welcome to the resources
        page of the club. Here you can find all the resources collected over the
        years by the club members! So what are you waiting for? Jump right in !!
      </div>
      <div
        className="d-flex align-items-start"
        style={{ marginLeft: "20px", marginTop: "30px" }}
      >
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
            Starter in ML
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
            Reinforcement Learning
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
            CNNs
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
            Unsupervised Learning
          </button>
          <br />
          <button
            className="nav-link"
            id="v-pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-contact"
            type="button"
            role="tab"
            aria-controls="v-pills-contact"
            aria-selected="false"
          >
            Model Architecture
          </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            A
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            B
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
            id="v-pills-contact"
            role="tabpanel"
            aria-labelledby="v-pills-contact-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
