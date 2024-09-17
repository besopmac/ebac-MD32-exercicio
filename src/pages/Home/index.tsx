import Sidebar from "../../containers/Sidebar"
import AddButton from "../../components/AddButton"
import ContactList from "../../containers/ContactList"

const Home = () => {
  return (
    <>
      <Sidebar showButton={false} />
      <ContactList />
      <AddButton />
    </>
  )
}

export default Home