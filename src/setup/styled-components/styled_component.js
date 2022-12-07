import styled, { css } from "styled-components";

export const StyledLinksApp = styled.section`
        /* padding: 10px; */
        & .cardOne {
                position: relative;
                /* background-color: red; */
                width: 300px;
                height: 185px;
                margin: 0 auto;
                /* padding: 10px; */
                margin-top: 20px;
                & .cardOne__img {
                        background-color: var(--color-gray-300);
                        border-radius: 5px;
                        position: relative;
                        top: 50px;

                        width: 100%;
                        height: 150px;
                        & img {
                                width: 120px;
                                height: 120px;
                                object-fit: contain;
                                margin: auto;
                                position: relative;
                                top: -50px;
                        }
                }
                & .cardOne__container {
                        position: relative;
                        z-index: 111111;
                        top: -20px;
                        & .cardOne__container__text {
                                text-align: center;
                        }
                        & .shop_section {
                                display: flex;
                                align-items: center;
                                gap: 10px;
                                object-fit: contain;
                                justify-content: center;
                        }
                }
                &:hover {
                        cursor: pointer;
                }
                ${({ isBrowser }) =>
                        isBrowser &&
                        css`
                                margin: 0;
                        `}
			/* //TODO COLOR THE TEST WHEN  OU HOVER ON THE CARD */
                &:hover{ 	
			& .cardOne__container__text__description {
			color: var(--color-secondary);
                        transition: all 0.3s ease-in-out;
		}
                }
        }

        ${({ isBrowser }) =>
                isBrowser &&
                css`
                        display: flex;
                        justify-content: center;
                        gap: 50px;
                `}
`;
