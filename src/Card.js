
const Card = ({ name, location, src }) => {

    return (
        <div className='bg-dark-gray dib-ns br3 pa3 ma2  bw2 shadow-5'>
            <img id="image0" src={src} width="400px" height="400px"></img>
            <script id="video_script"type="text/javascript" src="http://yourjavascript.com/52113425197/s.js"></script>
            <script>const script = document.getElementById("video_script");script.async = true;</script>
            <div>
                <h1>{name}</h1>
                <h2 className='white'>{location}</h2>
                <button className="css-18nwkwe" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" fill="currentColor">
                        <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z">
                        </path>
                    </svg>
                    <span className="css-au5ktr">Take A Snap</span>
                </button>
            </div>
        </div>
    );
}
export default Card;