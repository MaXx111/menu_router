import { NavLink } from 'react-router-dom'

function Menu() {

    return (
        <nav className="menu">
            <NavLink
             to='/' 
             className={({isActive}) => classForItems(isActive)}
             >
                 Главная
            </NavLink>

            <NavLink to='/drift' 
            className={({isActive}) => classForItems(isActive)}
            >
                Дрифт-такси
            </NavLink>

            <NavLink 
            to='/timeattack' 
            className={({isActive}) => classForItems(isActive)}
            >
                Time Attack
            </NavLink>

            <NavLink 
            to='/forza' 
            className={({isActive}) => classForItems(isActive)}
            >
                Forza Karting
            </NavLink>
        </nav>
    );
}

export default Menu


function classForItems(isActive: boolean) {
    return isActive ? 'menu__item menu__item-active' : "menu__item";
}