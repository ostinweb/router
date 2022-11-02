import { Link } from 'react-router-dom'

export default function AlbumsComp({ albumsTitle, to }) {
    return (
        <div className="albums-container">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABGElEQVRoge3UMWrDQBAF0P9F6tQ2kU+kLpATBPZMEoQcIFW6XCdgQVIZk8KFC303KRJltV4UpJFgXikGMR92PuCcc5aYM3T/oUpCI+Bu6oW+tSDC65Zv1waLnL91Qj3j8gBQQmhyBrMCACj/scxYu5yh3ACLtfoANzlD5+Nh6j1GS7bQ5um9oooG8x7wT63E8Bl2g22UfEJUUcNueQAoSSXb6NoNWLRPX7KNVn/EHsBaska703GuPUaL1ujt40sl0bI++1oC4ev54U+dRp+QROv67CsBRut06AaWUJ+/CIrW6eqP2ANY8wDWPIA1D2DNA1jzANY8gDUPYM0DWBsK0M66RQaC+9j3aAACAQsKQXAPdsF6D+fcBC5h2zRF01vMcwAAAABJRU5ErkJggg==" width='20px'></img>
            <Link to={to}>{albumsTitle}</Link>
        </div>
    )
}
