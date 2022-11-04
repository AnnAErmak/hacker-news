import './App.css';
import AppRouter from "./components/AppRouter";
import {useEffect} from "react";
import {fetchNews} from "./asyncActions/news";
import {useDispatch, useSelector} from "react-redux";
import News from "./pages/News";


function App() {
    const dispatch = useDispatch()
    const news = useSelector(state => state.newsReducer.news)
    const isLoaded = useSelector(state => state.newsReducer.isLoaded)

    const f = async () => await dispatch((fetchNews()))

    useEffect(() => {
        f()
        const timerID = setInterval(() => dispatch((fetchNews())), 15000);
        return () => clearInterval(timerID);
    }, [])


    const allStories = news.map(storie => (<News key={storie.id} {...storie} />))

    return (
        <div className="App">
            {isLoaded
                ? <div>Подождите идет загрузка</div>
                : allStories
            }
        </div>
    );
}

export default App;
