const CloseIcon = (props = {}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
            <defs>
                <filter id="9e5opw6d4a">
                    <feColorMatrix in="SourceGraphic" values="0 0 0 0 0.643137 0 0 0 0 0.643137 0 0 0 0 0.643137 0 0 0 1.000000 0"/>
                </filter>
            </defs>
            <g fill="none" fill-rule="evenodd">
                <g>
                    <g filter="url(#9e5opw6d4a)" transform="translate(-792 -210) translate(792 210)">
                        <g transform="translate(2 2)">
                            <circle cx="10" cy="10" r="10" stroke="#008CC1" stroke-width="1.5"/>
                            <path fill="#008CC1" fill-rule="nonzero" d="M10.626 5L10.626 9.373 15 9.374 15 10.626 10.626 10.625 10.626 15 9.374 15 9.373 10.625 5 10.626 5 9.374 9.373 9.373 9.374 5z" transform="rotate(45 10 10)"/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}
 
export default CloseIcon
