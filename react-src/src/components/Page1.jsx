import React from "react";

export const Page1 = (props) => {
    const {params} = props;

    return <>
        <h1>
            Ceci est la première page
        </h1>

        {
            params.forEach((element,index) => {
                console.log(index);
                console.log(element);
                console.log(typeof element);
                return <>
                    <p>
                        { params[index] }
                        { element }
                    </p>
                </>
            })
        }

        <div className="grid-x">
            <div className="large-3 medium-3 small-12">
                <div className="radius bordered shadow card">
                    <img src="https://via.placeholder.com/150x150" />
                    <div className="card-divider">
                        Styled Card
                    </div>
                    <div className="card-section">
                        <h4>This is a card.</h4>
                        <p>It has an easy to override visual style, and is appropriately subdued.</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="grid-x grid-margin-x">
            <div className="cell small-10">
                <div className="slider" data-slider data-initial-start="50">
                    <span className="slider-handle"  data-slider-handle role="slider" tabIndex="1" aria-controls="sliderOutput1"></span>
                    <span className="slider-fill" data-slider-fill></span>
                </div>
            </div>
            <div className="cell small-2">
                <input type="number" id="sliderOutput1" />
            </div>
        </div>
    </>
}