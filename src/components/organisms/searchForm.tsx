import { useState } from "react"
import { Button } from "antd"
import { SearchOutlined } from '@ant-design/icons';
import NormalSlider from "../molecules/normalSlider"

const SearchForm = () => {
    const [danceability, setDanceability] = useState(80)
    const [bpm, setBpm] = useState(100)

    const search = () => {
        console.log('search')
    }

    return(
        <div>
            <NormalSlider value={danceability} setValue={setDanceability} valueName='danceability'/>
            <NormalSlider value={bpm} setValue={setBpm} valueName='BPM'/>
            <Button type="primary" icon={<SearchOutlined />} onClick={search}>
             Search
            </Button>
        </div>
    )
}

export default SearchForm