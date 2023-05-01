import React, { useState,useEffect } from 'react'
import "./content.css"
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from "react-loader-spinner"
export default function Content() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [poemSelected, setPoemSelected] = useState(false);
  const [songSelected, setSongSelected] = useState(false);
  const [reportSelected, setReportSelected] = useState(false);
  const [abstractSelected, setAbstractSelected] = useState(false);
  const [storySelected, setStorySelected] = useState(false);
  const [letterSelected, setLetterSelected] = useState(false);
  const [button,buttonSelected]=useState("");
  const [prompt,setPrompt]=useState("");
  const[response,setResponse]=useState("");
  const HTTP ="http://localhost:8020/chat";
  const handlePoem = () => {
    setPoemSelected(!poemSelected);
    buttonSelected("poem");
    setStorySelected(false);
    setReportSelected(false);
    setSongSelected(false);
    setLetterSelected(false);
    setAbstractSelected(false);
  }
  const handleStory = () => {
    setStorySelected(!storySelected);
    buttonSelected("story");
    setSongSelected(false);
    setReportSelected(false);
    setPoemSelected(false);
    setLetterSelected(false);
    setAbstractSelected(false);
  }
  const handleReport = () => {
    setReportSelected(!reportSelected);
    buttonSelected("report");
    setSongSelected(false);
    setLetterSelected(false);
    setPoemSelected(false);
    setAbstractSelected(false);
    setStorySelected(false);
  }
  const handleAbstract = () => {
    setAbstractSelected(!abstractSelected);
    buttonSelected("Abstract");
    setReportSelected(false);
    setSongSelected(false);
    setPoemSelected(false);
    setLetterSelected(false);
    setStorySelected(false);
  }
  const handleLetter = () => {
    setLetterSelected(!letterSelected);
    buttonSelected("letter");
    setReportSelected(false);
    setSongSelected(false);
    setPoemSelected(false);
    setAbstractSelected(false);
    setStorySelected(false);
  }
  const handleSong = () => {
    setSongSelected(!songSelected);
    buttonSelected("song");
    setLetterSelected(false);
    setReportSelected(false);
    setPoemSelected(false);
    setStorySelected(false);
    setAbstractSelected(false);
  }
  const handleInputChange = (event) => {
    setText(event.target.value); 
    setPrompt(text+button);
  };
  const handleSearchClick =   (e) => { 
    setLoading(true);
    const newPrompt = button + " based on the topic " + text;
    setText(button+" on the topic "+prompt); 
    setPrompt(newPrompt); 
    document.getElementById("searchInput").value = "";
    axios.post(`${HTTP}`,{newPrompt}).then((res)=>setResponse(res.data)).catch(error=>{console.log(error);
    });
  };
  const handleLabel=()=>{
    setResponse(""); 
    setLoading(false);
  }
  useEffect(() => {
    if (response) { 
      setLoading(false);
    }
  }, [response]);

  return (
    <div className='contents'>
      <div className="search2">
        <div className="searchBar"></div>
        <SearchIcon className="search" onClick={handleSearchClick} />
        <input placeholder="search for poems,stories etc" id="searchInput" className="searchInput" onChange={handleInputChange} />
      </div>
      <div className="display">
        <div className='navbar'>
          <button className='button' onClick={handlePoem} style={{ backgroundColor: poemSelected ? "#434242" : "#22A39F" }}  >Poem</button>
          <button className='button' onClick={handleStory} style={{ backgroundColor: storySelected ? "#434242" : "#22A39F" }}>Story</button>
          <button className='button' onClick={handleReport} style={{ backgroundColor: reportSelected ? "#434242" : "#22A39F" }}>Report</button>
          <button className='button' onClick={handleLetter} style={{ backgroundColor: letterSelected ? "#434242" : "#22A39F" }}>Letter</button>
          <button className='button' onClick={handleSong} style={{ backgroundColor: songSelected ? "#434242" : "#22A39F" }}>Song</button>
          <button className='button' onClick={handleAbstract} style={{ backgroundColor: abstractSelected ? "#434242" : "#22A39F" }}>Abstract</button>
        </div>
        <label htmlFor="" className="displayContent" onChange={handleLabel}>
  {loading && (
    <div className="spinnerWrapper" style={{ backgroundColor: "#22A39F" }}>
      <Grid
        className="spinner"
        type="Grid"
        color="#22A39F"
        height={250}
        width={900}
      />
    </div>
  )}
  {!loading && response ? response : "ask me anything..."}
</label>

      </div>
    </div>
  )
} 