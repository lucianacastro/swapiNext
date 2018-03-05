import Link from 'next/link'

const Header = () => (
    <header>
        <Link>
            <ul>
                <li>
                    <a>People</a>
                </li>
            </ul>
        </Link>
        <Link>
            <ul>
                <li>
                    <a>Starships</a>
                </li>
            </ul>
        </Link>
        <Link>
            <ul>
                <li>
                    <a>Species</a>
                </li>
            </ul>
        </Link>
        <Link>
            <ul>
                <li>
                    <a>Planets</a>
                </li>
            </ul>
        </Link>
        <style jsx> {`
            header {
                display: block;
                width: 100%;
                height: 100px;
                background-color: #000;
            }    
            ul {
                display: inline-block;
                list-style-type: none; 
            }

            li {
                
            }

            a {
                color: #fff;
                text-decoration: none;
            }
        `}

        </style>
    </header>
)
export default Header