const Hello = () => {
  const now = new Date()
  console.log(now)
  return (
    <div>
      <h1>Hello World</h1>
      <p>Today is {now.toDateString()}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Hello />
    </div>
  )
}

export default App