import Link from 'next/link';
import MenuCSS from './Menu.module.scss'

const Menu = () => {
    return (
        <ul className={ MenuCSS.menu }>
            <li>
                <Link href="/products/">
                    <a>products</a>
                </Link>
            </li>
            <li>
                <Link href="/products/[category]" as={ `/products/some-product-category` }>
                    <a>Some Product Category</a>
                </Link>

            </li>
        </ul>
    )
}
export default Menu