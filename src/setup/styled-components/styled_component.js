import styled, { css } from "styled-components";

export const StyledLinksApp = styled.section`
        padding: 10px;
        & .cardOne {
		position:relative;
                /* background-color: red; */
                width: 300px;
                height: 200px;
                margin: 0 auto;
                /* padding: 10px; */
                margin-top: 20px;
                & .cardOne__img {
                        background-color: var(--color-gray-300);
			border-radius:10px;
			position:relative;
			top:50px;

                        width: 100%;
                        height: 150px;
                        & img {
                                width: 120px;
                                height: 120px;
                                object-fit: contain;
                                margin: auto;
				position:relative;
				top:-50px;
                        }
                }
                & .cardOne__container {
			position:relative;
			z-index: 111111;
			top:-20px;
                        & .cardOne__container__text {
				text-align:center;
				
                        }
                        & .shop_section {
                                display: flex;
                                align-items: center;
                                gap: 10px;
                                object-fit: contain;
				justify-content:center
                        }
                }
		&:hover{
			cursor:pointer;
		}
        }

        ${({ isBrowser }) =>
                isBrowser &&
                css`
                        display: flex;
                        justify-content: center;
                `}
`;
