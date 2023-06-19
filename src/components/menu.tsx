import { NavLink } from 'react-router-dom'

function Menu() {

    return (
        <nav className="menu">
            <NavLink
             to='menu_router/' 
             className={({isActive}) => classForItems(isActive)}
             >
                 Главная
            </NavLink>

            <NavLink to='menu_router/drift' 
            className={({isActive}) => classForItems(isActive)}
            >
                Дрифт-такси
            </NavLink>

            <NavLink 
            to='menu_router/timeattack' 
            className={({isActive}) => classForItems(isActive)}
            >
                Time Attack
            </NavLink>

            <NavLink 
            to='menu_router/forza' 
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