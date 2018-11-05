/**
 * Created by takodaregister on 8/10/17.
 */
import Dropzone from 'react-dropzone';
import React, {Component} from 'react';

import request from 'superagent';
const CLOUDINARY_UPLOAD_PRESET = 'ftvz2ysp';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dwz017v6p/upload';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
const hostName = process.env.REACT_APP_HOST;
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import '../../public/stylesheets/treeModal.css';

const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'dwz017v6p',
    api_key: '214827533752355',
    api_secret: 'gu0OL3jCfjTPq-hikDbcL1snRCQ'
});

class TreeDetails extends Component {
    state = {trees: [], files: [], images: []};

    componentDidMount() {
        fetch(  'https://takoda-register.herokuapp.com/s_garden_trees/' + this.props.id)
            .then(res => res.json())
            .then(trees => this.setState({trees}));
    }

    onDrop(files) {
        // this.setState({
        //     files
        // });
        this.setState({
            files: files
        });
        var imgNameInput = document.getElementById(this.props.id + "imgName");
        var imgPath = document.getElementById(this.props.id + "imgPath");
        imgNameInput.value = files[0]['name'];
        imgPath.value = "/" + this.props.id + "/" + files[0]['name'];
        var imgPreview = document.getElementById("imgUploadPreview" + this.props.id);
        imgPreview.style.display = "block";
    }

    render() {
        return (
            <div className="TreeDetails col-lg-12 col-sm-12 noPadding">
                <div className="col-lg-12 col-sm-12 noPadding">
                    <h3 id="treeHeader" style={{color: "green"}} className="text-center">{this.props.className}
                        Tree<span id="exitPopup"
                                  onClick={() => hidePopup(this.props.id)}>X</span>
                    </h3>
                </div>
                <div className="col-sm-6 col-lg-6 noPadding">
                    <div className="col-sm-12 col-lg-12 noPadding">
                        {/*<table id="displayTable" className="table table-bordered">*/}
                        <table id="displayTable" className="table-bordered">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Height</th>
                                <th>Diameter</th>
                                {/*<th>Image</th>*/}
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.trees.map(tree =>
                                <tr key={tree._id}>
                                    <td>{tree.date}</td>
                                    <td>{tree.treeHeight}</td>
                                    <td>{tree.diameter}</td>
                                    {/*<td><a href={tree.imgPath + ""} target="_BLANK">{tree.imgName}</a></td>*/}
                                    <td style={{"display": "none"}}>
                                        {this.state.images.push({
                                            original: 'http://res.cloudinary.com/dwz017v6p/image/upload/a_0' + tree.imgPath,
                                            thumbnail: 'http://res.cloudinary.com/dwz017v6p/image/upload/a_0/c_scale,g_center,h_90,w_50' + tree.imgPath,
                                            description: tree.date
                                        },)}
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-11 col-sm-11 noPadding" id="pnlFormUpload">
                        <Panel collapsible defaultExpanded header="Upload Data">
                            <ListGroup fill>
                                <form action={"https://takoda-register.herokuapp.com/s_garden"} method="POST"
                                      id={"uploadTreeForm" + this.props.id}>
                                    <ListGroupItem><input id="date" type="text" placeholder="Date"
                                                          name="date" className="col-sm-12 col-lg-12  col-xs-12"/></ListGroupItem>
                                    <ListGroupItem><input id="treeHeight" type="text" placeholder="Height"
                                                          name="treeHeight" className="col-sm-12 col-lg-12 col-xs-12" required/></ListGroupItem>
                                    <ListGroupItem><input id="diamater" type="text" placeholder="Diamater"
                                                          name="diameter" className="col-sm-12 col-lg-12  col-xs-12"/></ListGroupItem>
                                    <input type="hidden" name="id" id={this.props.id + "treeId"} value={this.props.id}/>
                                    <input type="hidden" name="imgName" id={this.props.id + "imgName"}/>
                                    <input type="hidden" name="imgPath" id={this.props.id + "imgPath"}/>
                                    <ListGroupItem> <Dropzone
                                        multiple={false}
                                        className="imgUpload"
                                        accept="image/*"
                                        onDrop={this.onDrop.bind(this)}
                                    >
                                        <div><h5 id="txtImageUpload">Drop an Image Here</h5></div>
                                    </Dropzone>

                                    </ListGroupItem>
                                        <ListGroupItem id={"imgUploadPreview" + this.props.id } style={{display: "none", height: "40px", color: "blue"}}>

                                            {
                                                this.state.files.map(f => <div key={f.lastModified} className="col-lg-12 col-sm-12">
                                                    {f.name}
                                                    {/*<div className="col-lg-6 col-sm-6"><img*/}
                                                    {/*className="thumbnail" src={f.preview}/></div>*/}
                                                    </div>
                                                )
                                            }

                                        </ListGroupItem>
                                    <ListGroupItem>
                                        <button className="btn btn-success" data-treeId="abc"
                                                type="button"
                                                onClick={() => submitTreeData(this.state.files[0], this.props.id)}>
                                            Submit
                                        </button>
                                    </ListGroupItem>


                                </form>
                            </ListGroup>
                        </Panel>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-6 noPadding">
                    <div>
                        <ImageGallery
                            items={this.state.images}
                            slideInterval={2000}
                            showThumbnails={false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
function submitTreeData(file, id) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        .field('folder', id)
        .field('file', file);

    upload.end((err, response) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log("SUCESSS");
            let form = document.getElementById("uploadTreeForm" + id);
            form.submit();
        }

        if (response.body.secure_url !== '') {
        }
    });

}

function hidePopup(id) {
    let displayData = document.getElementById('displayDataForTree' + id);
    let treePopUp = document.getElementById('treePopUp' + id);
    displayData.style.display = "none";
    treePopUp.style.display = "none";
}

export default TreeDetails;