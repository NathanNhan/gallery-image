import React, { useState } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function ImageResults({ images }) {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const handleOpen = (img) => {
    setOpen(true);
    setCurrentImg(img);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const actions = [
    <FlatButton label="Close" primary={true} onClick={() => handleClose()} />,
  ];
  return (
    <div style={{ marginLeft: 50, marginRight: 50, marginTop: 20 }}>
      <GridList cols={4}>
        {images.map((img) => (
        
          <GridTile
            title={img.tags}
            key={img.id}
            actionIcon={
              <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                <ZoomIn color="white" />
              </IconButton>
            }
          >
            <LazyLoadImage src={img.largeImageURL} alt=""  effect="opacity"/>
          </GridTile>
        ))}
      </GridList>
      <Dialog
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={() => handleClose()}
      >
        <img src={currentImg} alt="" style={{ width: "100%" }} />
      </Dialog>
    </div>
  );
}
