function App() {
  return (
    <>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => {console.log('I am clicked')}} />
    </>
  )
}

export default App;
