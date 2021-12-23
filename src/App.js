import { useSelector, useDispatch } from 'react-redux';
import Board from './Board';
import Modal from './Modal';
import { restart } from './store/actions';
import './App.css';

const WinNote = () => {
  const dispatch = useDispatch();
  return (
    <>
      You are win!<button onClick={() => dispatch(restart())}>Restart</button>
    </>
  );
};
function App() {
  const finish = useSelector((state) => state.finish);
  return (
    <>
      <Board />
      {finish ? (
        <Modal>
          <WinNote />
        </Modal>
      ) : null}
    </>
  );
}

export default App;
