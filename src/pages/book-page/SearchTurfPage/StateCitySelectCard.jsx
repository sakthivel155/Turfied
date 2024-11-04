import React from "react";
function StateCitySelectCard({city,state,onClick}) {
    return (
        <li onClick={(e) => { onClick(city, state) } } className='px-5 py-3  list-none text-[1rem] font-semibold border-t-[1px] hover:text-primary-green hover:bg-lite-gray'>
            <span className='block'>{city}</span>
            <span className='block text-sm font-normal'>{state}</span>
        </li>
    )
}
export default StateCitySelectCard