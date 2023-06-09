import styled from "styled-components";
import React, {useState, useEffect} from "react";

const StarWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
    .star_icon {
        display: inline-flex;
        margin-right: 5px;
    }
`;
function UserPopularity( {rate}) {
    const popularity = rate;
    const STAR_IDX_ARR = ['1', '2', '3', '4', '5'];
    const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]); 
    const calcStarRates = () => {
        let tempStarRatesArr = [0, 0, 0, 0, 0];
        let starVerScore = (popularity * 70)/5 ; 
        if( popularity === 0) starVerScore = 0;
        let idx = 0;
        while (starVerScore > 14) {
            tempStarRatesArr[idx] = 14;
            idx += 1;
            starVerScore -= 14;
        }
        tempStarRatesArr[idx] = starVerScore;
        return tempStarRatesArr;
    };
    useEffect(() => {
        setRatesResArr(calcStarRates);
    }, [rate])
    return (
        <StarWrapper>
            {STAR_IDX_ARR.map((item, idx) => {
                return <div className='star_icon' key={`${idx}`}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='22' height='20' viewBox='0 0 14 13' fill='#cacaca'>
                        <clipPath id={`${item}StarClip`}>
                            <rect width={`${ratesResArr[idx]}`} height='39' />
                        </clipPath>
                        <path
                            id={`${item}Star`}
                            d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                            transform='translate(-2 -2)'
                        />
                        <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill='#5d5fef'
                        />
                    </svg>
                </div>
            })
            }
            <span>{popularity}</span>
            </StarWrapper>
    )
}

export default UserPopularity;