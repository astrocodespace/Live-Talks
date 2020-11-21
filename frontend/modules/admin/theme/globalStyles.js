import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}d
    
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800&display=swap');
    
    body {
        padding: 0;
        margin: 0;
        font-family: Montserrat, sans-serif;
    }
    
    button {
        outline: none;
    }
`