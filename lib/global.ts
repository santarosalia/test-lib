import { injectGlobal } from '@emotion/css'
export default injectGlobal`

@font-face {
	font-family: 'Pretendard';
	font-weight: 45 920;
	font-style: normal;
	font-display: swap;
	src: url('/font/woff2/PretendardVariable.woff2') format('woff2-variations'), url('node_modules/dope-lib/dist/font/woff2/PretendardVariable.woff2') format('woff2-variations');
}
* {
    font-family: Pretendard;
}
`;