import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'
import Modal from 'react-modal';

Modal.setAppElement('#root')

export function App() {
  return (
    <>
      <Header />
      <TaskList />
    </>
  )
}