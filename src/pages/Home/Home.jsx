import Grid from '../../components/Grid/Grid'
import Block from '../../components/Block/Block';
import './Home.css'
import {endPoint} from '../../services/apiEndPoints.js'

import { ApiProvider } from '../../contexts/ApiContext.js';
export default function Home(){ 
   
    return(
        <div className="home">
            <ApiProvider url={endPoint['everything']}>
            <Grid />
            </ApiProvider>

            <ApiProvider url={endPoint['tech']}>
            <Block/>
            </ApiProvider>

            <ApiProvider url={endPoint['entertainment']}>
            <Block/>
            </ApiProvider>

            
            <ApiProvider url={endPoint['business']}>
            <Block/>
            </ApiProvider>

            
            <ApiProvider url={endPoint['sports']}>
            <Block/>
            </ApiProvider>

            
            <ApiProvider url={endPoint['science']}>
            <Block/>
            </ApiProvider>

        </div>
    );
}