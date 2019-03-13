import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Image, Overlay } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
function setWallpaper(imagepath, toastid) {
  const file = tempfile(path.extname(imagepath));
  got
    .stream(imagepath)
    .pipe(fs.createWriteStream(file))
    .on("finish", () => {
      wallpaper.set(file).then(result => {
        toast.dismiss(toastid);
      });
    });
}

export class ImageCol extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = () => {
      this.setState({ inProgress: true });
      let toastid = toast.info("Updating the wallpaper", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false
      });
      setWallpaper(this.props.data.largeImageURL);
    };
  }

  render() {
    let data = this.props.data;
    return (
      <Col
        onClick={this.onClick}
        className="imageholder"
        xs={6}
        md={4}
        display={data && data.largeImageURL ? "show" : "hide"}
      >
        {data && data.largeImageURL ? (
          <Image
            alt="click to change wallpaper"
            src={data.largeImageURL}
            fluid
          />
        ) : (
          <p>placeholder</p>
        )}
        <div class="middle">
          <div class="text">Apply</div>
        </div>
      </Col>
    );
  }
}
