import styled, { css } from "styled-components";

export const StyledLinksApp = styled.section`
        background-color: green;
	margin-top: 20px;
	& .cardOne{
		background-color: red;
		width: 200px;
		height:200px;
		margin:auto;
	}
        & .shop_section {
                display: flex;
                align-items: center;
                gap: 10px;
                object-fit: contain;
        }
        & img {
                width: 150px;
                height: 150px;
		object-fit: contain;
        }
        ${({ isBrowser }) =>
                isBrowser &&
                css`
                        display: flex;
			justify-content: center;
			gap: 30px;
                `}
`;
