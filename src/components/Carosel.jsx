import React, { Component } from 'react'
import { Carousel } from 'antd';


export default class Carosel extends Component {
    render() {
        return (
            <div>
                <Carousel afterChange={onChange}>
                    <div>
                    <h3>1</h3>
                    </div>
                    <div>
                    <h3>2</h3>
                    </div>
                    <div>
                    <h3>3</h3>
                    </div>
                    <div>
                    <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        )
    }
}
