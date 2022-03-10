import { useState } from "react"
import { Button } from "antd"
import { SearchOutlined } from '@ant-design/icons';
import Slider from "../molecules/slider"

const SearchForm = () => {
    const [danceability, setDanceability] = useState<number>(80)
    const [bpm, setBpm] = useState<number>(100)

    const search = () => {
        console.log('search')
    }

    return(
        <div>
            <Slider value={danceability} setValue={setDanceability} valueName='danceability'/>
            <Slider value={bpm} setValue={setBpm} valueName='BPM'/>
            <Button type="primary" icon={<SearchOutlined />} onClick={search}>
             Search
            </Button>
        </div>
    )
}

export default SearchForm