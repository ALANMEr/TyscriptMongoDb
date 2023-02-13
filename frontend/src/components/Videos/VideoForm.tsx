import React, { useState } from "react";
import { Video } from "./Video";

const VideoForm = () => {
  const [video, setVideo] = useState<Video>({
    title: "",
    description: "",
    url: "",
  });

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>new</h3>
            <form>
              <div className="form-group">
                <input
                  type={"text"}
                  name="title"
                  placeholder="write a title"
                  className="form-control"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  type={"url"}
                  name="url"
                  placeholder="hhtp://"
                  className="form-control"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  placeholder="Write description"
                  className="form-control"
                  rows={3}
                />
                <button className="btn btn-primary">Create Video</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
