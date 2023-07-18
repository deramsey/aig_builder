import './App.css';
import {useState} from 'react';

const Intro = () => {
  return(
    <header>
      <h1>AIG Builder</h1>
      <div className = "instructions">
      <p>The AIG builder helps you create academic integrity guidelines to for your students to clarify what is and is not allowed during assessments.</p>
      <p>Use the form below to create your guidelines. Then you can copy and paste them into your assignment instructions.</p>
    </div>
    </header>
  )
}

const GuideForm = () => {
  const [aig, setAig] = useState({
    notes: "",
    book: "",
    exter: "",
    group: "",
    cite: "",
    genAi: ""
  });

  const setOutput = (event) => {
    document.querySelector(".outputBox").innerHTML = `<p>The College is committed to providing an excellent educational experience for all students. Academic integrity is an essential component to this level of education. The College always expects students to practice academic integrity. In order to maintain good standing in academic integrity on this assignment, follow these guidelines: </p>
    <p>
    <ul>
    <li><strong>Notes allowed:</strong>  ${aig.notes} </li>
    <li><strong>Textbook allowed:</strong>  ${aig.book} </li>
    <li><strong>Other external resources allowed:</strong>  ${aig.exter} </li>
    <li><strong>Collaboration allowed:</strong>  ${aig.group} </li>
    <li><strong>Required Citation Format:</strong> ${aig.cite}</li>
    <li><strong>Generative AI allowed:</strong>  ${aig.genAi} </li>
    </ul>
    </p>
    <p>Failure to follow these guidelines could result in an academic integrity violation and subsequent disciplinary action as outlined in the CCC Student Handbook</p>
    `;
    event.preventDefault();
    event.stopPropagation();
  }

  return(
    <main>
      <form>
      <fieldset>
      <legend>📝 Open Notes Allowed?</legend>
      <label for="on">Yes <input type="radio" required name="aig1" value="on" id="on" onClick = {() => {setAig(prevState => ({...prevState, notes: "Yes"}))}} /></label>
      <label for="cn">No <input type="radio" name="aig1" value="cn" id="cn" onClick = {() => {setAig(prevState => ({...prevState, notes: "No"}))}} /></label>
    </fieldset>

    <fieldset>
      <legend>📘 Open Book Allowed?</legend>
      <label for="ob">Yes <input type="radio" required name="aig2" value="ob" id="ob" onClick = {() => {setAig(prevState => ({...prevState, book: "Yes"}))}} /></label>
      <label for="cb">No <input type="radio" name="aig2" value="cb" id="cb" onClick = {() => {setAig(prevState => ({...prevState, book: "No"}))}} /></label>
      </fieldset>

      <fieldset>
      <legend>💻 Other External Resource Use Allowed?</legend>
      <label for="ory">Yes <input type="radio" required name="aig3" value="ory" id="ory" onClick = {() => {setAig(prevState => ({...prevState, exter: "Yes"}))}} /></label>
      <label for="orn">No <input type="radio" name="aig3" value="orn" id="orn" onClick = {() => {setAig(prevState => ({...prevState, exter: "No"}))}} /></label>
      </fieldset>

      <fieldset>
      <legend>👪 Group Work Allowed?</legend>
      <label for="gwy">Yes <input type="radio" name="aig4" required value="gwy" id="gwy" onClick = {() => {setAig(prevState => ({...prevState, group: "Yes"}))}} /></label>
      <label for="gwn">No <input type="radio" name="aig4" value="gwn" id="gwn" onClick = {() => {setAig(prevState => ({...prevState, group: "No"}))}} /></label>
      </fieldset>

      <fieldset>
      <legend>✍ Citations Required?</legend>
      <label for="apa">APA <input type="radio" required name="aig5" value="apa" id="apa" onClick = {() => {setAig(prevState => ({...prevState, cite: "APA"}))}}/></label>
      <label for="mla">MLA <input type="radio" name="aig5" value="mla" id="mla" onClick = {() => {setAig(prevState => ({...prevState, cite: "MLA"}))}}/></label>
      <label for="chi">Chicago <input type="radio" name="aig5" value="chi" id="chi" onClick = {() => {setAig(prevState => ({...prevState, cite: "Chicago"}))}}/></label>
      <label for="osg">Other <input type="radio" name="aig5" value="osg" id="osg" onClick = {() => {setAig(prevState => ({...prevState, cite: "Other !instructor edit this with required manual!"}))}}/></label>
      <label for="ncn">No Citations Necessary <input type="radio" name="aig5" value="ncn" id="ncn" onClick = {() => {setAig(prevState => ({...prevState, cite: "No Citations Required"}))}}/></label>
      </fieldset>

      <fieldset>
      <legend>🤖 Generative AI Allowed?</legend>
      <label for="yai">Yes <input type="radio" required name="aig6" value="yai" id="yai" onClick = {() => {setAig(prevState => ({...prevState, genAi: "Yes. Generative AI (like ChatGPT) can be used with proper citation, including the prompt asked."}))}} /></label>
      <label for="nai">No <input type="radio" name="aig6" value="nai" id="nai" onClick = {() => {setAig(prevState => ({...prevState, genAi: "No"}))}} /></label>
      </fieldset>

      <button type="submit" onClick={(event)=>{setOutput(event)}}>Submit⤴</button>
      </form>
    <section className = "outputBox">

    </section>
    <button onClick={() => {navigator.clipboard.writeText(document.querySelector(".outputBox").innerHTML)}}>Copy to Clipboard 📋</button>
    </main>
  )
}

function App() {
  return (
    <div className="App">
      <Intro />
      <GuideForm />
    </div>
  );
}

export default App;
