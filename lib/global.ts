import { injectGlobal } from '@emotion/css'
import pretendard from '/font/woff2/PretendardVariable.woff2'
export default injectGlobal`

@font-face {
	font-family: 'Pretendard';
	font-weight: 45 920;
	font-style: normal;
	font-display: swap;
	src: url(${pretendard}) format('woff2-variations');
}
* {
    font-family: Pretendard;
}
`;