import React from "react";


export const Page2 = (props) => {
    const {params} = props;

    return <>
        <h2>
            Ceci est la deuxième page
        </h2>

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

        {/* {params} */}

        <p className="text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptatem similique officiis recusandae esse cum in totam quisquam perspiciatis quod! Magnam culpa vitae, tempore eos explicabo cupiditate. Deserunt, quisquam, quos!</p>
    
        <div className="callout primary border-none">
            Hi! I am a callout with no Borders
        </div>
    
        <div className="callout alert border-none">
            Hi! I am a callout with no Borders
        </div>
    
        <div className="callout warning border-none">
            Hi! I am a callout with no Borders
        </div>
    
    
    </>
}