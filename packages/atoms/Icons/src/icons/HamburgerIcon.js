const HamburgerIcon = (props = {}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
            <g fill="none" fill-rule="evenodd">
                <g fill="#50545D">
                    <g>
                        <path d="M21.5 20c.276 0 .5.224.5.5 0 .245-.177.45-.41.492L21.5 21h-19c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492L2.5 20h19zm0-8.5c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-19c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h19zm0-8.5c.276 0 .5.224.5.5 0 .245-.177.45-.41.492L21.5 4h-19c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492L2.5 3h19z" transform="translate(-16 -10) translate(16 10)"/>
                    </g>
                </g>
            </g>
        </svg>
    )
}
 
export default HamburgerIcon