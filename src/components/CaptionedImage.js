import React from 'react';
class CaptionedImage extends React.Component {
    render() {
        return (
            <div>
                <div class="row justify-content-center">
                    <img class="small-bottom-space" src={this.props.src}/>
                </div>
                <div class="row justify-content-center">
                    <p class="small-text body-font italics">{this.props.caption}</p>
                </div>
            </div>
        )
    }
}

export default CaptionedImage;