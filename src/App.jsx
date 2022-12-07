import { StyledLinksApp } from "./setup/styled-components/styled_component";
import GlobalStyle from "./setup/styled-components/GlobalStyle";
import { isBrowser } from "react-device-detect";

function App() {
        return (
                <>
                        <GlobalStyle />
                        <StyledLinksApp isBrowser={isBrowser}>
                                <section className='cardOne' tabIndex={0}>
                                        <div className='cardOne__img'>
                                                <img src="/images/image-headphones.png" alt="headphoneImage"  />
                                        </div>
                                        <div className='cardOne__container'>
                                                <div className='cardOne__container__text'>
                                                        <h1 className='cardOne__container__text__title'>
                                                                HEADPHONES
                                                        </h1>
                                                        <div className='shop_section'>
                                                                <p className='cardOne__container__text__description'>
                                                                        Shop now
                                                                </p>
                                                                <svg
                                                                        width='8'
                                                                        height='12'
                                                                        xmlns='http://www.w3.org/2000/svg'>
                                                                        <path
                                                                                d='M1.322 1l5 5-5 5'
                                                                                stroke='#D87D4A'
                                                                                strokeWidth='2'
                                                                                fill='none'
                                                                                fillRule='evenodd'
                                                                        />
                                                                </svg>
                                                        </div>
                                                </div>
                                        </div>
                                </section>
                                <section className='cardOne'tabIndex={0}>
                                        <div className='cardOne__img'>
                                                <img src="/images/image-speakers.png" alt="speakersmage"  />
                                        </div>
                                        <div className='cardOne__container'>
                                                <div className='cardOne__container__text'>
                                                        <h1 className='cardOne__container__text__title'>
                                                                SPEAKERS
                                                        </h1>
                                                        <div className='shop_section'>
                                                                <p className='cardOne__container__text__description'>
                                                                        Shop now
                                                                </p>
                                                                <svg
                                                                        width='8'
                                                                        height='12'
                                                                        xmlns='http://www.w3.org/2000/svg'>
                                                                        <path
                                                                                d='M1.322 1l5 5-5 5'
                                                                                stroke='#D87D4A'
                                                                                strokeWidth='2'
                                                                                fill='none'
                                                                                fillRule='evenodd'
                                                                        />
                                                                </svg>
                                                        </div>
                                                </div>
                                        </div>
                                </section>
                                <section className='cardOne'tabIndex={0}>
                                        <div className='cardOne__img'>
                                                <img src="/images/image-earphones.png" alt="earphonesImage"  />
                                        </div>
                                        <div className='cardOne__container'>
                                                <div className='cardOne__container__text'>
                                                        <h1 className='cardOne__container__text__title'>
                                                                EARPHONES
                                                        </h1>
                                                        <div className='shop_section'>
                                                                <p className='cardOne__container__text__description'>
                                                                        Shop now
                                                                </p>
                                                                <svg
                                                                        width='8'
                                                                        height='12'
                                                                        xmlns='http://www.w3.org/2000/svg'>
                                                                        <path
                                                                                d='M1.322 1l5 5-5 5'
                                                                                stroke='#D87D4A'
                                                                                strokeWidth='2'
                                                                                fill='none'
                                                                                fillRule='evenodd'
                                                                        />
                                                                </svg>
                                                        </div>
                                                </div>
                                        </div>
                                </section>
                        </StyledLinksApp>
                </>
        );
}

export default App;
