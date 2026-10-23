import Rating from "./componets/Rating"

function App() {

  return (
    <>
      <Rating />
      <Rating heading="How do you feel about Vue JS" starColor="pink"/>
      <Rating heading="How do you feel about Angular JS" starColor="green"/>
    </>
  )
}

export default App