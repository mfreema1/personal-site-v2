import React from 'react';
class CaptionedImage extends React.Component {
    render() {
        return (
            <div>
                <div class="row justify-content-center">
                    <img class="small-bottom-space" src={this.props.src}/>
                </div>
                <div class="row justify-content-center">
                    <p class="small-text body-font italics no-margin-bottom faded">{this.props.caption}</p>
                </div>
                <div class="row justify-content-center">
                    <small class="body-font italics faded small-bottom-space">Photo by <a href={this.props.artistUrl}>{this.props.artistName}</a> on Unsplash</small>
                </div>
            </div>
        )
    }
}

export default CaptionedImage;