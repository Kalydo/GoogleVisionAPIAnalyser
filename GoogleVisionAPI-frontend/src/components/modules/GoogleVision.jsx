import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const __ = require('underscore');

class UploadButtons extends Component{

    constructor(options) {
        super(options);
        options = options || {};
        this._image = options.image;
        this._features = options.features || []
    }

    setImage(image) {
        this._image = image;
        return this
    }

    addFeature(feature) {
        this._features.push(feature);
        return this
    }

    build() {
        return new Promise((resolve, reject) => {
            this._image.load().then((content) => {
                resolve({
                    image: {content: content},
                    features: __.map(this._features, (f) => f.build())
                })
            }).catch((e) => {
                reject(e)
            })
        })
    }

    render () {

        function classes(){
            makeStyles((theme) => ({
                root: {
                    '& > *': {
                        margin: theme.spacing(1),
                    },
                },
                input: {
                    display: 'none',
                },
            }));

        }


        return (
            <div className={classes.root}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" onClick={this.setImage}>
                        Upload
                    </Button>
                </label>
            </div>
        )
    }
}

export default UploadButtons;