
function ContentBox(props) {
  return (
    <div class="container shadow border mt-4">
      <div class="row">
        <div class="col-3">
          <img class="img-fluid" src={props.img} />
        </div>
        <div class="col-9">
          <div class="d-flex flex-column">
            <p>Sample title</p>
            <div class="d-flex flex-row">
              <p>Status: open</p>
              <p class="px-2">Duration: None</p>
              <p class="px-1">Level: None</p>
            </div>
            <a>This is sample text</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentBox;