import PersonalName from './components/personalname';
import Hyperlinks from './components/links';

const App = () => {

    return (
        <div className="flex items-center justify-center h-screen bg-zinc-900">
            <div className="flex mb-6 p-6 flex-col">
                    <PersonalName></PersonalName>
                    <Hyperlinks></Hyperlinks>
            </div>
        </div>
    );
}

export default App;