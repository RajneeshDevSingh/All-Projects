import React, { useState, useEffect } from 'react'
import { CiPizza } from 'react-icons/ci'
import { GiFruitBowl, GiNoodles, GiCheckMark } from 'react-icons/gi'
import { MdOutlineIcecream } from 'react-icons/md'
import { fetchTabata } from '../Service'
function Tabs(props) {
    const [active, setActive] = useState('');
    const [tabData, setTabData] = useState('')
    const [tabLoader, setTabLoader] = useState([
        {
            name: 'Pizza',
            icons: <CiPizza />,
            id: 'd7e9890f978149c6fd3feabbcc8e49d5'

        },

        {
            name: 'Noodles',
            icons: <GiNoodles />,
            id: 'a243e3cd56da95b31e5a86ef52578908'

        },
        {
            name: 'Desert',
            icons: <GiFruitBowl />,
            id: 'bc865476ffe2b8a03fbe9aee2f739740'

        },
        {
            name: 'Ice cream',
            icons: <MdOutlineIcecream />,
            id: '7c5a5ced83523b4dc49adbc78471cc38'

        },
    ])

    const handleActive = (name, id) => {
        setActive(name)
        fetchTabata(id).then((response) => {
            setTabData(response)
            props.setLoader(false)
        })
    }

    useEffect(() => {
        fetchTabata(tabLoader[0].id).then((response) => {
            setTabData(response)
            props.setLoader(false)
        })
    }, [])

    return (
        <div className="container">
            <h1 className='recipeHeading'>What would you like to have!</h1>
            <div className="tabs">
                {
                    tabLoader.map((item, index) =>
                    (
                        <div key={index} className={`tablist ${active === item.name ? 'active' : ''}`} onClick={() => (handleActive(item.name, item.id) , props.setLoader(true))}>
                            {item.icons}
                            <span>{item.name}</span>
                        </div>
                    ))
                }


            </div>
            <div className='recipe_banner'>
                {tabData !== '' && <>

                    <div className="left-col">
                        <span className='badge'>{tabData.recipe.cuisineType[0].toUpperCase()}</span>
                        <h1>{tabData.recipe.label}</h1>
                        <p><strong>Recipe by:</strong><small>{tabData.recipe.source}</small></p>
                        <h3>Ingredients</h3>
                        <div className='ingredients'>
                            <ul>
                                {tabData.recipe.ingredientLines.map((list, index) => (



                                    <li key={index}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{list}</span></li>


                                ))}
                               
                            </ul>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="image-wrapper">
                            <img src={tabData.recipe.image} alt={tabData.recipe.label} />
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Tabs