import './App.css';
import { connect } from "react-redux";
import {getNews as getNewsAction} from './redux/modules/news'

function App({news, getNews}) {

  return (
    <div className="App">
    </div>
  );
}

export default connect(
    ({news}) => ({news}),
    {
        getNews: getNewsAction
    }
)(App);
