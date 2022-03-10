import { type } from "@testing-library/user-event/dist/type"
import { Slider } from "antd"
import { useEffect, useState } from "react"
import styled from "styled-components"

type props ={
    value: number ;
    setValue: Function;
    valueName: string;
}

const NormalSlider = (props: props) => {
    const VALUE_NAME = props.valueName

    useEffect(() => {
        console.log(props.valueName + ': ' + props.value)
    }, [props.value])

    return( 
        <div>
            <SliderWrapper>
                <Slider
                 value={props.value}
                 onChange={(val) => props.setValue(val)}/>
            </SliderWrapper>
            <p>{VALUE_NAME}: {props.value}</p>
        </div>
    )
}

const SliderWrapper = styled.div`
width: 80%;
margin: 0 auto;
display: inline-block;
height: 30px;
`;

export default NormalSlider