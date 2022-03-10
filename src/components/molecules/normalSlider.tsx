import { type } from "@testing-library/user-event/dist/type"
import { Slider } from "antd"
import { useEffect, useState } from "react"

import styled from "styled-components"

type Props ={
    value: number ;
    setValue: Function;
    valueName: string;
}

const NormalSlider = ({value, setValue, valueName}: Props) => {
    const VALUE_NAME = valueName

    useEffect(() => {
        console.log(valueName + ': ' + value)
    }, [value])

    return( 
        <div>
            <SliderWrapper>
                <Slider
                 value={value}
                 onChange={(val) => setValue(val)}/>
            </SliderWrapper>
            <p>{VALUE_NAME}: {value}</p>
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