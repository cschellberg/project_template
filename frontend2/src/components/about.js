import React from 'react';
import AboutMe from '../img/aboutme.png';
import { Container, Row, Col } from 'react-bootstrap';
import Img from '../img/aboutme.png'
function About () {
    return (
        <div className='about-me-container'>
        <div className="backgroundimage"></div>
            <Row className="d-flex  justify-content-center">
            <img className="homePagePhoto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAIVBMVEXIyMivr6/Jycm1tbW8vLywsLDExMTBwcG+vr65ubm6urpJ9EEIAAAEjklEQVR4nO3d65KjIBAFYMVLMvv+D7zJJJuAcmlQ6T69fX5malJ+JQEVoYdRewbuA7g8D+Ey6c3yK5yc3kxv4bDJ66/bTwETFz5ot/s8z/d1gFfGhG79WT4/0mkesI17oVunTU/0A23cCd1PpLe9AxM3QjcsEeDjNOISQ6FLDv77zhYlm3OYviyAJQZCF2+i2A3VF0Y7mW9umERfuGaB4wIvdNtxcBvMMcMTFk4h6kn8Cgu/QthfoifMdaSvQHanXistAjGb6UfobmXhiC28E4TcR9uSr3AmCFfuw23I/ySktFL9Qu6jbcl3tChe0ozgfSllPIS8R/SuaUoX3uM4gwvLnSliRxPcH6pspMH9YenmAvLWInxOo/EUhs9p8kMi96E2JnzWlmunmG1090Q4PWJgPqQZ9k/1U0RY4G5mJtFQUZvoEJt7uu2f10zI02uR+UN3D40T8AkcEnPA7vaZBJ7mFXyeO/GmwvMlhXVdBwUvKyTfxVATE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4MSF+TIgfE+LHhPgxIX5MiB8T4seE+DEhfkyIHxPix4T4kS50h1/eFS50f8ajRNnCB3A8ShQtfC82O0aULPyspjtEFCz0lgseIcoVBushDxDFCjcLPtuJUoW7Fa3NRKHCyJLdVqJMYXRNciNRpDCx6LqNKFGYXFXeRBQozCybbyHKE2b3BWggihMWNj6oJ0oTFnd2qP9GWULC1hXVXylKeMUmOaKEJGAtUZKQCKwkChKSgXVEOcIKYBVRjLAKWEOUIqwEVhCFCKuBdKIMYQNwXKjfLUHYAiQTJQjbgFSiAGErkEjkF7YDaUR24REgicgtPAakEJmFR4EEIq/wOLBMZBWeASwSOYXnAEtERuFZwAKRT3geME9kE54JzBK5hOcCc0Qm4dnADJFHeD4wTWQRXgFMEjmE1wBTRAbhVcAEsb+QVCrkRGJ34ZXAKLG38FpgjNhZeDUwQuwrvB64J3YV9gDuiD2FfYBbYkdhL+CGeEBYuUV0P2BIbBcu41rzTz2BQf20ZuFzO+wKYl+gT2wVvvb7JhN7Az1io/DfhuZEYn/gl9gm/G5LTyJyAD/EJqG/7z6ByAP8R2wRhoUFikQu4JvYINxWhygQ+YAvYr1wX/4iS+QE/g791cJYPdYMkRf4LKRWK4wXnE0SuYH1wlRF3QSRHVgtTJcMjhL5gbXCXE3kCFEAsFKYL/q8I0oA1glLVa03RBHAKmG5bHdAlAGsEZaBAVEIsEJIAXpEKUC6kAb8EMUAyUIq8E10lNrCfUIU0oG/REFAmtDVAJ9EQUCSsBI4jpdNgLaEIKwGykpZCA4sC9GBRSE8sCTEBxaECoB5oQZgVqgCmBPqAGaESoBpoRZgUqgGmBI+P1SSuFARMC7UBIwKVQFjQl3AiFAZcC/UBtwJ1QG3Qn3AjVAhMBRqBAZClUBfSNhlCzEmxI8J8WNC/JgQPybEjwnxY0L8mBA/JsSPCfFjQvyYED8mxI8J8ePPPd1mjbn5K52dxnhrufXmJVwmvVl+hcqjX/gXCU9vZQTAyvoAAAAASUVORK5CYII="></img>
            <Col xs={7} md={7}>
                <h4>Hello, I'm</h4>
                <h2>Melanie Schellberg</h2>
                <p className="about-description">Im a Philadelphia based full stack developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
            </Row>
        </div>
    );
}
export default About;