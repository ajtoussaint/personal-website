import scrn from '../../images/URL.PNG'

export default function URL(props){
    return(
        <a className="project" href="https://boilerplate-project-urlshortener.ajtoussaint.repl.co/">
            <h1>URL Shortener</h1>
            <img src={scrn} alt="URL Shortener Project"></img>
        </a>
    )
}