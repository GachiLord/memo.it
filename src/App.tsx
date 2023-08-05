import './assets/app.css'
import Editor from './components/Editor'
import Options from './components/Options'

function App() {

  return (
    <section class="section container">
      <div class='columns'>
        <div class='column is-one-quarter'>
          <div class="container">
            <h1 class="title">
              Memo it 
            </h1>
            <p class="subtitle">
              is a stateless note app. We do not collect any data you input, all the notes are stored in link!
            </p>
          </div>
          <br />
          <Options />
        </div>
        <div class='column'>
            <Editor />
        </div>
      </div>
    </section>
  )
}

export default App
