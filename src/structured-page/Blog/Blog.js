const Blog = () => {
  return (
    <div>
      <h1>This is something</h1>
      <br />

      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <br />
      <br />
      <div class="container-fluid">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h3 class="card-title">Google</h3>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://www.google.com/" class="btn btn-danger">
              Click here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
