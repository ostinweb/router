import './PhotoComp.css'
export default function PhotosComp({ img }) {
    return (
        <div>
            <img src={img} alt="json photo" width="100px" />
        </div>
    )
}
