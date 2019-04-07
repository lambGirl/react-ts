import * as React from 'react';
import './App.css';
import Hello from  './components/Hello';
import logo from './logo.svg';
import ContentLoader, { Facebook } from 'react-content-loader'


class App extends React.Component<{},{}>{

    public  componentDidMount(){
        // 这里这只一个值
        this.setState({
            data: [1,2,3]
        })
    }


    public render() {
        return (
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div style={{"width":'80%',"margin":'0 auto'}}>
        { <ContentLoader>
            {/* Only SVG shapes */}
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70"/>
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13"/>
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10"/>
            </ContentLoader>
        }
        </div>
        {/* <Hello/>*/}
        </div>
    );
    }
}

export default App;
